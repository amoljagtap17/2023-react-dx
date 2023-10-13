import { api } from "@/lib/api";

async function getData() {
  const { data } = await api.get("/posts");

  return data;
}

export default async function Home() {
  const data = await getData();

  console.log("data::", data.length);

  return <h1>Home Page</h1>;
}
