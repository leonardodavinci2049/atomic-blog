import { memo, useEffect, useState } from "react";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Archive from "./components/Archive";

import Footer from "./components/Footer";
import { PostProvider } from "../../context/PostContext";
import createRandomPost from "../../core/utils/functions/createRandomPost";

const HomePage = () => {
  const [posts, setPosts] = useState(() =>
    Array.from({ length: 30 }, () => createRandomPost())
  );
  const [isFakeDark, setIsFakeDark] = useState(false);

  useEffect(
    function () {
      document.documentElement.classList.toggle("fake-dark-mode");
    },
    [isFakeDark]
  );

  


  

  return (
    <section>
      <button
        onClick={() => setIsFakeDark((isFakeDark) => !isFakeDark)}
        className="btn-fake-dark-mode"
      >
        {isFakeDark ? "☀️" : "🌙"}
      </button>
      <PostProvider>
        <Header />
        <Main />
        <Archive show={false} />
        <Footer />
      </PostProvider>
    </section>
  );
};

export default HomePage;
