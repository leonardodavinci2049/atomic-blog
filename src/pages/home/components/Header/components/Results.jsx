import usePosts from "../../../../../context/usePosts";

const Results = () => {
  const { posts } = usePosts();
  return <p>🚀 {posts.length} atomic posts found</p>;
};

export default Results;
