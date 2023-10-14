"use client";

import { useFetch } from "@/lib/query";

export default function PostPage() {
  const postsQuery = useFetch({ url: "/posts" });

  return <h1>Post Page</h1>;
}
