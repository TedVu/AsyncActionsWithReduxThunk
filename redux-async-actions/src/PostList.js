import React from "react";
import { connect } from "react-redux";
import { fetchPosts } from "./actions";
import { useEffect } from "react";

const PostList = () => {
  useEffect(() => {
    console.log("PostList gets rendered");
    fetchPosts();
  }, []);
  return <div></div>;
};

export default connect(null, { fetchPosts })(PostList);
