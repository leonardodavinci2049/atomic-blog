import Results from "./components/Results"
import SearchPosts from "./components/SearchPosts"
import PropTypes from 'prop-types';

const Header = ({ posts, onClearPosts, searchQuery, setSearchQuery }) => {
  return (
    <header>
    <h1>
      <span>⚛️</span>The Atomic Blog
    </h1>
    <div>
      <Results posts={posts} />
      <SearchPosts
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <button onClick={onClearPosts}>Clear posts</button>
    </div>
  </header>
  )
}

Header.propTypes = {
  posts: PropTypes.func.isRequired,
  onClearPosts: PropTypes.func.isRequired,
  searchQuery: PropTypes.func.isRequired,
  setSearchQuery: PropTypes.func.isRequired
};
export default Header
