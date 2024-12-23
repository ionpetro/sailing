import getAllPosts from "@/lib/getAllPosts";
import { notFound } from "next/navigation";
import Booking from "@/components/booking/Booking";

export async function generateStaticParams() {
  try {
    const postsData: Promise<Trip[]> = getAllPosts();
    const posts = await postsData;

    return posts.map((post: Trip) => ({
      id: post.id.toString(),
    }));
  } catch (error) {
    console.error("Error generating static params:", error);
    return []; // Return empty array as fallback
  }
}

export async function generateMetadata({
  params,
}: {
  params: any;
}): Promise<any> {
  const postsData: Promise<Trip[]> = getAllPosts();
  const posts = await postsData;
  const post = posts.find((post) => post.id === Number(params.id));

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.name} - ${post.title}`,
    description: `Experience sailing aboard the ${post.name} in ${post.location}`,
  };
}

export default async function Post({ params }: { params: any }) {
  const postsData: Promise<Trip[]> = getAllPosts();
  const posts = await postsData;
  const post = posts.find((post) => post.id === Number(params.id));

  if (!post) {
    notFound();
  }

  return <Booking post={post} posts={posts} />;
}
