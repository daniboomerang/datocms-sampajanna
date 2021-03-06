import 'isomorphic-unfetch';

const API_URL = 'https://graphql.datocms.com';
const API_TOKEN = process.env.NEXT_EXAMPLE_CMS_DATOCMS_API_TOKEN;

// See: https://www.datocms.com/blog/offer-responsive-progressive-lqip-images-in-2020
const responsiveImageFragment = `
  fragment responsiveImageFragment on ResponsiveImage {
    srcSet
    webpSrcSet
    sizes
    src
    width
    height
    aspectRatio
    alt
    title
    bgColor
    base64
  }
`;

const fetchAPI = async (query, { variables, preview } = {}) => {
  const res = await fetch(API_URL + (preview ? '/preview' : ''), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${API_TOKEN}`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();

  if (json.errors) {
    // eslint-disable-next-line
    console.error(json.errors);
    throw new Error('Failed to fetch API');
  }
  return json.data;
};

const getPreviewPostBySlug = async (slug) => {
  const data = await fetchAPI(
    `
    query PostBySlug($slug: String) {
      post(filter: {slug: {eq: $slug}}) {
        slug
      }
    }`,
    {
      preview: true,
      variables: {
        slug,
      },
    },
  );

  return data?.post;
};

const getAllPostsWithSlug = async () => {
  const data = fetchAPI(`
    {
      allPosts {
        slug
      }
    }
  `);

  return data?.allPosts;
};

const getAllPostsForHome = async (preview) => {
  const data = await fetchAPI(
    `
    {
      allPosts(orderBy: date_DESC, first: 20) {
        title
        slug
        excerpt
        date
        coverImage {
          responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 2000, h: 1000 }) {
            ...responsiveImageFragment
          }
        }
        author {
          name
          picture {
            url(imgixParams: {fm: jpg, fit: crop, w: 100, h: 100, sat: -100})
          }
        }
        tags {
          name
        }
      }
    }
    ${responsiveImageFragment}
  `,
    { preview },
  );

  return data?.allPosts;
};

const getPostAndMorePosts = async (slug, preview) => {
  const data = await fetchAPI(
    `
      query PostBySlug($slug: String) {
        post(filter: {slug: {eq: $slug}}) {
          title
          slug
          content
          date
          ogImage: coverImage{
            url(imgixParams: {fm: jpg, fit: crop, w: 2000, h: 1000 })
          }
          coverImage {
            responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 2000, h: 1000 }) {
              ...responsiveImageFragment
            }
          }
          author {
            name
            picture {
              url(imgixParams: {fm: jpg, fit: crop, w: 100, h: 100, sat: -100})
            }
          }
          tags {
            name
          }
        }
        morePosts: allPosts(orderBy: date_DESC, first: 2, filter: {slug: {neq: $slug}}) {
          title
          slug
          excerpt
          date
          coverImage {
            responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 2000, h: 1000 }) {
              ...responsiveImageFragment
            }
          }
          author {
            name
            picture {
              url(imgixParams: {fm: jpg, fit: crop, w: 100, h: 100, sat: -100})
            }
          }
          tags {
            name
          }
        }
      }
      ${responsiveImageFragment}
    `,
    {
      preview,
      variables: {
        slug,
      },
    },
  );

  return data;
};

export {
  getPreviewPostBySlug,
  getAllPostsWithSlug,
  getAllPostsForHome,
  getPostAndMorePosts,
};
