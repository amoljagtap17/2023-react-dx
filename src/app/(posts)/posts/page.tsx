import { PostCreateButton, PostsContainer } from "@/components/sections";
import { Stack } from "@mui/material";

export default function PostPage() {
  return (
    <Stack spacing={4}>
      <PostCreateButton />
      <PostsContainer />
    </Stack>
  );
}
