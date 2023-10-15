"use client";

import { withFetch } from "@/lib/query";
import { PostsTable } from "../PostsTable";

function PostsContainerComponent({ data }: any) {
  return <PostsTable data={data.posts} />;
}

export const PostsContainer = withFetch("/posts")(PostsContainerComponent);
