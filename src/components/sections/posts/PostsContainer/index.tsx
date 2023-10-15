"use client";

import { withFetch } from "@/lib/query";
import { PostsTable } from "../PostsTable";

function PostsContainerComponent({ data }: any) {
  console.log("data::", data);

  return <PostsTable data={data.posts} />;
}

export const PostsContainer = withFetch("/posts")(PostsContainerComponent);
