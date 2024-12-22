import getAllPosts from "@/lib/getAllPosts";
import PostItem from "./post-item";
import Newsletter from "@/components/newsletter";

interface Trip {
  id: number;
  featured: boolean;
  title: string;
  route: string;
  image: string;
  duration: string;
  price: string;
  departureDate: string;
  capacity: number;
}

export default async function PostsList() {
  const postsData: Promise<Trip[]> = getAllPosts();
  const posts = await postsData;

  return (
    <div className="pb-8 md:pb-16">
      <h2 id="upcoming-trips" className="text-3xl font-bold font-inter mb-10">
        Upcoming Trips
      </h2>
      {/* List container */}
      <div className="flex flex-col">
        {posts.map((post) => {
          return <PostItem key={post.id} {...post} />;
        })}

        {/* Newletter CTA */}
        <div className="py-8 border-b border-gray-200 -order-1">
          <Newsletter />
        </div>
      </div>
    </div>
  );
}
