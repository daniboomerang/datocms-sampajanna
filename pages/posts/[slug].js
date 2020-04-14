import React from 'react';
import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Head from 'next/head';
import Container from '../../components/container';
import PostBody from '../../components/post-body';
import MoreStories from '../../components/more-stories';
import PostHeader from '../../components/post-header';
import SectionSeparator from '../../components/section-separator';
import Layout from '../../components/layout';
import { getAllPostsWithSlug, getPostAndMorePosts } from '../../lib/api';
import PostTitle from '../../components/post-title';
import markdownToHtml from '../../lib/markdownToHtml';

const Post = ({ post, morePosts, preview }) => {
  const router = useRouter();

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  if (!post) {
    return null;
  }

  const {
    title,
    ogImage,
    coverImage,
    date,
    author,
    content,
    tags,
  } = post;

  return (
    <Layout preview={preview} postTitle={title}>
      {router.isFallback ? (
        <PostTitle>Loading…</PostTitle>
      ) : (
        <Container>
          <article>
            <Head>
              <title>
                {title}
              </title>
              <meta property="og:image" content={ogImage.url} />
            </Head>
            <PostHeader
              title={title}
              coverImage={coverImage}
              date={date}
              author={author}
              tags={tags}
            />
            <PostBody content={content} />
          </article>
          <SectionSeparator />
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      )}
    </Layout>
  );
};

export const getStaticProps = async ({ params, preview = null }) => {
  const data = await getPostAndMorePosts(params.slug, preview);
  const content = await markdownToHtml(data?.post?.content || '');

  return {
    props: {
      preview,
      post: {
        ...data?.post,
        content,
      },
      morePosts: data?.morePosts,
    },
  };
};

export const getStaticPaths = async () => {
  const allPosts = await getAllPostsWithSlug();

  return {
    paths: allPosts?.map((post) => `/posts/${post.slug}`) || [],
    fallback: true,
  };
};

export default Post;
