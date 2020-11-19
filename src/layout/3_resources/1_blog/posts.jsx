import React, { useState, useEffect } from "react";
import Axios from "axios";

import stripAttr from "strip-attributes";
import striptags from "striptags";

const Post = () => {
  const [posts, setPosts] = useState([]);
  const [stripPost, setStripPost] = useState([]);

  const URL = "https://theshortcut.org/wp-json/wp/v2/posts";

  useEffect(() => {
    getPosts();
  }, []);

  useEffect(() => {
    if (posts[3]) {
      removeTags(posts[3].content.rendered);
    }
  }, [posts]);

  const getPosts = async () => {
    await Axios.get(URL).then((response) => {
      setPosts(response.data);
    });
  };
  const removeTags = (data) => {
    const Str1 = striptags(data, "<p>,<a>");
    const removedAttr = stripAttr(Str1, { omit: ["class", "id", "href"] });
    setStripPost(removedAttr);
  };

  return (
    <div>
      <h3>Blog</h3>
      {stripPost}
    </div>
  );
};
export default Post;
