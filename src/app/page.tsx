import { api } from "@/lib/api";

async function getData() {
  try {
    const { data } = await api.get("/posts");

    return data;
  } catch (error) {
    console.log("error::", error);

    // throw error;
  }
}

export default async function Home() {
  const data = await getData();

  console.log("data::", data.length);

  return <h1>Home Page</h1>;
}
