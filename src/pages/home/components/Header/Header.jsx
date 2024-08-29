
import usePosts from "../../../../context/usePosts";
import Results from "./components/Results";
import SearchPosts from "./components/SearchPosts";


const Header = () => {
// 3) USE THE CONTEXT
  const {onClearPosts} = usePosts();
  
  return (
    <header>
      <h1>
        <span>⚛️</span>The Atomic Blog
      </h1>
      <div>
        <Results />
        <SearchPosts />
        <button onClick={onClearPosts}>Clear posts</button>
      </div>
    </header>
  );
};

export default Header;
