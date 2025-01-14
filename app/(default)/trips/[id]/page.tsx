import { Metadata } from "next";
import getAllTrips from "@/services/trips";
import { notFound } from "next/navigation";
import Trip from "@/components/Trip";
import { Trip as TripType } from "@/lib/types";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
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
}: PageProps): Promise<Metadata> {
  const posts: TripType[] = await getAllTrips();
  const pageParams = await params;
  const post = posts.find((post) => post.id === Number(pageParams.id));

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

export default async function Post({ params }: PageProps) {
  const posts = await getAllTrips();
  const pageParams = await params;
  const post = posts.find((post) => post.id === Number(pageParams.id));

  if (!post) {
    notFound();
  }

  return <Trip post={post} posts={posts} />;
}
