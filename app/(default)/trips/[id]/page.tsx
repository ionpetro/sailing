import getAllTrips from "@/services/trips";
import { notFound } from "next/navigation";
import Trip from "@/components/Trip";
import { Trip as TripType } from "@/lib/types";
export async function generateStaticParams() {
  try {
    const postsData: Promise<TripType[]> = getAllTrips();
    const posts = await postsData;

    return posts.map((post: TripType) => ({
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
  const postsData: Promise<TripType[]> = getAllTrips();
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
  const postsData: Promise<TripType[]> = getAllTrips();
  const posts = await postsData;
  const post = posts.find((post) => post.id === Number(params.id));

  if (!post) {
    notFound();
  }

  return <Trip post={post} posts={posts} />;
}
