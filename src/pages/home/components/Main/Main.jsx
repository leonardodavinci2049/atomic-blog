import { memo } from "react";
import FormAddPost from "./components/FormAddPost";
import Posts from "./components/Posts";

const Main = () => {
  return (
    <main>
      <FormAddPost />
      <Posts />
    </main>
  );
};

export default memo(Main);
