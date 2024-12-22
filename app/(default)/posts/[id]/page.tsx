import getAllPosts from "@/lib/getAllPosts";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import PostItem from "../../post-item";
import Newsletter from "@/components/newsletter";
import ImageGallery from "@/components/ui/image-gallery";
import { MapPin, CircleDot, CreditCard, Calendar } from "lucide-react";

export async function generateStaticParams() {
  // TODO: fetch from supabase API
  const tripData = [
    {
      id: 0,
      sticky: true,
      title: "DI CONSTA",
      name: "Dufour 37",
      images: [
        {
          url: "/images/dufour/dufour2.jpg",
          alt: "Dufour 37 - Main",
        },
        {
          url: "/images/dufour/dufour3.webp",
          alt: "Dufour 37 - Exterior",
        },
        {
          url: "/images/dufour/dufour5.jpg",
          alt: "Dufour 37 - Exterior 2",
        },
        {
          url: "/images/dufour/dufour4.jpg",
          alt: "Dufour 37 - Interior",
        },
      ],
      tag1: "daily",
      tag2: "from €140",
      tag3: "🇬🇷 Athens, Greece",
      date: "today",
      location: "Athens",
    },
    {
      id: 1,
      sticky: false,
      title: "QUEEN OF HEARTS",
      name: "Lagoon 52",
      images: [
        {
          url: "/images/lagoon52/lagoon52.jpg",
          alt: "Lagoon 52 - Main",
        },
      ],
      tag1: "weekly",
      tag2: "from €16,000",
      tag3: "🇬🇷 Athens, Greece",
      date: "today",
      location: "Athens",
    },
  ] as const;

  return tripData.map((post) => ({
    id: post.id.toString(),
  }));
}

export async function generateMetadata(params: any): Promise<Metadata> {
  const postsData: Promise<any[]> = getAllPosts();
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
  const postsData: Promise<any[]> = getAllPosts();
  const posts = await postsData;
  const post = posts.find((post) => post.id === Number(params.id));

  if (!post) {
    notFound();
  }

  // Example images array - adjust based on your data structure
  const images = post.images;

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 pb-8 md:pt-20 md:pb-16">
          <ImageGallery images={images} />
          <div
            className="mt-8 md:flex md:justify-between"
            data-sticky-container
          >
            {/* Sidebar */}
            <aside className="mb-8 md:mb-0 md:w-64 lg:w-72 md:ml-12 lg:ml-20 md:shrink-0 md:order-1">
              <div
                data-sticky
                data-margin-top="32"
                data-sticky-for="768"
                data-sticky-wrap
              >
                <div className="relative bg-gray-50 rounded-xl border border-gray-200 p-5">
                  <div className="text-center mb-6">
                    <Image
                      className="inline-flex mb-2 rounded-xl"
                      src={post.images[0].url}
                      width={100}
                      height={100}
                      alt={post.name}
                    />
                    <p className="text-lg text-indigo-500 font-nycd mt-1">
                      {post.name}
                    </p>
                    <h2 className="text-2xl font-bold text-gray-800 font-inter">
                      {post.title}
                    </h2>
                  </div>
                  <div className="flex justify-center md:justify-start mb-5">
                    <ul className="inline-flex flex-col space-y-2">
                      <li className="flex items-center">
                        <Calendar className="shrink-0 text-gray-400 mr-3 w-4 h-4" />
                        <span className="text-sm text-gray-600">
                          Available {post.date}
                        </span>
                      </li>
                      <li className="flex items-center">
                        <MapPin className="shrink-0 text-gray-400 mr-3 w-4 h-4" />
                        <span className="text-sm text-gray-600">
                          {post.tag3}
                        </span>
                      </li>
                      <li className="flex items-center">
                        <CircleDot className="shrink-0 text-gray-400 mr-3 w-4 h-4" />
                        <span className="text-sm text-gray-600">
                          Rental Type {post.tag1}
                        </span>
                      </li>
                      <li className="flex items-center">
                        <CreditCard className="shrink-0 text-gray-400 mr-3 w-4 h-4" />
                        <span className="text-sm text-gray-600">
                          Price {post.tag2}
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="max-w-xs mx-auto mb-5">
                    <a
                      className="btn w-full text-white bg-indigo-500 hover:bg-indigo-600 group shadow-sm"
                      href="#0"
                    >
                      Book Now{" "}
                      <span className="tracking-normal text-indigo-200 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                        -&gt;
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </aside>

            {/* Main content */}
            <div className="md:grow">
              {/* Job description */}
              <div className="pb-8">
                <div className="mb-4">
                  <Link className="text-indigo-500 font-medium" href="/">
                    <span className="tracking-normal">&lt;-</span> All Trips
                  </Link>
                </div>
                <span className="text-indigo-500 text-lg font-nycd">
                  {post.name} aka {post.title}
                </span>
                <h1 className="text-3xl font-extrabold font-inter mb-10">
                  A daily sailing experience in {post.location}
                </h1>
                {/* Job description */}
                <div className="space-y-8 mb-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      The Experience
                    </h3>
                    <div className="text-gray-500 space-y-3">
                      <p>
                        The Dufour 37 is a modern sailing yacht designed for
                        comfort, style, and exceptional performance. With its
                        sleek lines and innovative features, it offers a unique
                        sailing experience.
                      </p>
                    </div>
                  </div>
                  {/* Highlights */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      Highlights
                    </h3>
                    <div className="text-gray-500 space-y-3">
                      <p>
                        The Dufour 37 combines functionality and elegance,
                        making it perfect for sailing enthusiasts.
                      </p>
                      <div className="space-y-3">
                        <p>
                          🍳 Fully equipped galley with stove, oven,
                          refrigerator, and ample storage
                        </p>
                        <p>
                          ⚓ Ergonomic cockpit with dual helm stations and
                          folding table
                        </p>
                        <p>
                          🛋️ Interior finishes and comfortable accommodations
                        </p>
                        <p>🎵 Music, WiFi and Watersports on board</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      Amenities
                    </h3>
                    <div className="text-gray-500 space-y-3">
                      <p>
                        Onboard, you'll find everything you need for an
                        enjoyable journey:
                      </p>
                      <div className="space-y-3">
                        <p>
                          🛋️ Premium upholstery, LED lighting, and plenty of
                          ventilation
                        </p>
                        <p>
                          🧭 State-of-the-art navigation instruments, including
                          GPS, autopilot, and chartplotter
                        </p>
                        <p>🎵 Bluetooth-enabled sound system</p>
                        <p>
                          🏊‍♂️ Snorkeling gear, paddleboards, and inflatable toys
                          available upon request
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Video */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      Video
                    </h3>
                    <div className="text-gray-500 space-y-3">
                      <p>
                        Watch the Dufour 37 in action and see the stunning views
                        from the water.
                      </p>
                      <div className="aspect-w-16 aspect-h-7">
                        <iframe
                          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                          title="Dufour 37 Video Tour"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="w-full h-96 rounded-lg"
                        ></iframe>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      Charter Information
                    </h3>
                    <div className="text-gray-500 space-y-3">
                      <ul className="list-disc list-inside space-y-3">
                        <li>Accommodates up to 6 guests comfortably</li>
                        <li>Available only for daily skippered charter</li>
                        <li>
                          Perfect for group adventures with friends and family
                        </li>
                        <li>Flexible booking options and competitive rates</li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      Specifications
                    </h3>
                    <div className="text-gray-500 space-y-3">
                      <ul className="list-disc list-inside space-y-3">
                        <li>Length Overall: 10.77 meters (35 feet 4 inches)</li>
                        <li>Beam (Width): 3.80 meters (12 feet 5 inches)</li>
                        <li>Draft: 1.90 meters (6 feet 2 inches)</li>
                        <li>Maximum Speed: Approximately 8 knots</li>
                      </ul>
                    </div>
                  </div>
                  <p className="mt-4">
                    Whether you're seeking a romantic getaway, a family
                    adventure, or a fun outing with friends, this yacht promises
                    unforgettable memories on the water.
                  </p>
                </div>
                {/* Social share */}
                <div className="flex items-center justify-end space-x-4">
                  <div className="text-xl font-nycd text-gray-400">
                    Share trip
                  </div>
                  <ul className="inline-flex space-x-3">
                    <li>
                      <a
                        className="flex justify-center items-center text-indigo-500 bg-indigo-100 hover:text-white hover:bg-indigo-500 rounded-full transition duration-150 ease-in-out"
                        href="#0"
                        aria-label="Twitter"
                      >
                        <svg
                          className="w-8 h-8 fill-current"
                          viewBox="0 0 32 32"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z" />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        className="flex justify-center items-center text-indigo-500 bg-indigo-100 hover:text-white hover:bg-indigo-500 rounded-full transition duration-150 ease-in-out"
                        href="#0"
                        aria-label="Facebook"
                      >
                        <svg
                          className="w-8 h-8 fill-current"
                          viewBox="0 0 32 32"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M14.023 24 14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257Z" />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        className="flex justify-center items-center text-indigo-500 bg-indigo-100 hover:text-white hover:bg-indigo-500 rounded-full transition duration-150 ease-in-out"
                        href="#0"
                        aria-label="Telegram"
                      >
                        <svg
                          className="w-8 h-8 fill-current"
                          viewBox="0 0 32 32"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M22.968 10.276a.338.338 0 0 0-.232-.253 1.192 1.192 0 0 0-.63.045s-14.019 5.038-14.82 5.596c-.172.121-.23.19-.259.272-.138.4.293.573.293.573l3.613 1.177a.388.388 0 0 0 .183-.011c.822-.519 8.27-5.222 8.7-5.38.068-.02.118 0 .1.049-.172.6-6.606 6.319-6.64 6.354a.138.138 0 0 0-.05.118l-.337 3.528s-.142 1.1.956 0a30.66 30.66 0 0 1 1.9-1.738c1.242.858 2.58 1.806 3.156 2.3a1 1 0 0 0 .732.283.825.825 0 0 0 .7-.622s2.561-10.275 2.646-11.658c.008-.135.021-.217.021-.317a1.177 1.177 0 0 0-.032-.316Z" />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Related trips */}
              <div className="mb-8">
                <h4 className="text-2xl font-bold font-inter mb-8">
                  Related Trips
                </h4>
                {/* List container */}
                <div className="flex flex-col border-t border-gray-200">
                  {posts.slice(1, 4).map((post) => {
                    return <PostItem key={post.id} {...post} />;
                  })}
                </div>
              </div>

              <div>
                <Newsletter />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
