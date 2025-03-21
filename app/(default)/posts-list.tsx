import Newsletter from "@/components/newsletter";
import getAllTrips from "@/services/trips";
import PostItem from "./post-item";
import { Trip } from "@/lib/types";

export default async function PostsList() {
  const postsData: Promise<Trip[]> = getAllTrips();

  const posts = await postsData;

  return (
    <div className="py-4 md:py-8">
      <h2 id="upcoming-trips" className="text-3xl font-bold font-inter mb-10">
        Experiences
      </h2>
      {/* List container */}
      <div className="flex flex-col">
        {posts.map((post) => {
          return <PostItem key={post.id} {...post} />;
        })}

        {/* Newletter CTA */}
        <div className="mt-8 py-8 border-b border-gray-200 -order-1">
          <Newsletter />
        </div>
      </div>
    </div>
  );
}
