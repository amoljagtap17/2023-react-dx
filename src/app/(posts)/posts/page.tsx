"use client";

import { withFetch } from "@/lib/query";

function PostPage({ data }: any) {
  console.log("data::", data);

  return <h1>Post Page</h1>;
}

export default withFetch("/posts")(PostPage);
