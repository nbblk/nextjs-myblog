import Posts from "../components/posts/Posts";
import Layout from "../components/Layout";

import { getSortedPostsData } from "../lib/posts";
import { useEffect, useState } from "react";
import styles from "../styles/Posts.module.css";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function posts({ allPostsData }) {
  const POST_COUNT = 25;
  const [posts, setPosts] = useState(allPostsData.slice(0, POST_COUNT));

  const getMorePosts = () => {
    const startIndex = posts.length;
    const lastIndex =
      posts.length + POST_COUNT > allPostsData.length
        ? allPostsData.length
        : posts.length + POST_COUNT;
    const toBeAdded = allPostsData.slice(startIndex, lastIndex);
    setPosts([...posts, ...toBeAdded]);
    setLoading(false);
  };

  const handleScroll = () => {
    const lastLoaded = document.querySelector("ul > li:last-child");
    if (lastLoaded) {
      const lastLoadedOffset = lastLoaded.offsetTop + lastLoaded.clientHeight;
      const pageOffset = window.scrollY + window.innerHeight;

      if (pageOffset > lastLoadedOffset) {
        getMorePosts();
      }
    }
  };

  // listen to scroll positions for loading more posts on scroll
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <Layout home>
      <div className={styles.posts}>
        <Posts posts={posts} />
      </div>
    </Layout>
  );
}
