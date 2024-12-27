import { Metadata } from "next";
import getAllTrips from "@/services/trips";
import { notFound } from "next/navigation";
import Trip from "@/components/Trip";
import { Trip as TripType } from "@/lib/types";

interface PageParams {
  id: string;
}

export async function generateStaticParams(): Promise<any[]> {
  try {
    const posts = await getAllTrips();
    return posts.map((post) => ({
      id: post.id.toString(),
    }));
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}

export async function generateMetadata({
  params,
}: {
  params: any;
}): Promise<Metadata> {
  const posts: TripType[] = await getAllTrips();
  const post = posts.find((post) => post.id === Number(params.id));

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: `Experience sailing aboard the ${post.title} in ${post.location}`,
  };
}

export default async function Post({ params }: { params: any }) {
  const posts = await getAllTrips();
  const post = posts.find((post) => post.id === Number(params.id));

  if (!post) {
    notFound();
  }

  return <Trip post={post} posts={posts} />;
}
