import React from 'react';
import Head from 'next/head';
import Container from '../components/container';
import MoreStories from '../components/more-stories';
import HeroPost from '../components/hero-post';
import Layout from '../components/layout';
import { getAllPostsForHome } from '../lib/api';

const Index = ({ allPosts }) => {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  const {
    title, coverImage, date, author, slug, excerpt, tags,
  } = heroPost;

  return (
    <Layout>
      <Head>
        <title>
          Sampajanna
        </title>
      </Head>
      <Container>
        {heroPost && (
          <HeroPost
            title={title}
            coverImage={coverImage}
            date={date}
            author={author}
            slug={slug}
            excerpt={excerpt}
            tags={tags}
          />
        )}
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </Layout>
  );
};

export const getStaticProps = async ({ preview }) => {
  const allPosts = await getAllPostsForHome(preview);

  return {
    props: { allPosts },
  };
};

export default Index;
