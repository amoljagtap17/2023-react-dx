"use client";

import { withFetch } from "@/lib/query";

function PostsContainerComponent({ data }: any) {
  console.log("data::", data);

  return <h1>Post Container</h1>;
}

export const PostsContainer = withFetch("/posts")(PostsContainerComponent);
