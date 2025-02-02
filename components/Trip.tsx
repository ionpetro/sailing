"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, CircleDot, Calendar } from "lucide-react";
import ReactMarkdown from "react-markdown";

import Newsletter from "@/components/newsletter";
import PostItem from "@/app/(default)/post-item";
import ImageGallery from "@/components/ui/image-gallery";
import BookingShort from "./booking/BookingShort";
import { Trip as TripType } from "@/lib/types";

export default function Trip({
  post,
  posts,
}: {
  post: TripType;
  posts: TripType[];
}) {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-16 pb-8 md:pt-20 md:pb-16">
          <ImageGallery images={post.boat?.images || []} />
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
                      src={post.boat?.images[0].url || ""}
                      width={80}
                      height={80}
                      alt={post.boat?.name || "Boat image"}
                    />
                    <p className="text-lg text-indigo-500 font-nycd mt-1">
                      {post.boat?.name}
                    </p>
                    <h2 className="text-2xl font-bold text-gray-800 font-inter leading-tight">
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
                        <CircleDot className="shrink-0 text-gray-400 mr-3 w-4 h-4" />
                        <span className="text-sm text-gray-600">
                          Rent {post.tag1}
                        </span>
                      </li>

                      <li className="flex items-center">
                        <MapPin className="shrink-0 text-gray-400 mr-3 w-4 h-4" />
                        <span className="text-sm text-gray-600">
                          {post.tag3}
                        </span>
                      </li>
                    </ul>
                  </div>

                  <BookingShort
                    price={post.tag2}
                    title={post.title}
                    maxGuests={12}
                    id={post.id.toString()}
                  />
                </div>
              </div>
            </aside>

            {/* Main content */}
            <div className="md:grow">
              {/* Job description */}
              <div className="pb-8">
                <div className="mb-8">
                  <Link className="text-indigo-500 font-medium" href="/">
                    <span className="tracking-normal">&lt;-</span> All Trips
                  </Link>
                </div>
                <span className="text-indigo-500 text-lg font-nycd">
                  {post.boat?.name}
                </span>
                <h1 className="text-3xl font-extrabold font-inter mb-10">
                  {post.title} in {post.location}
                </h1>
                {/* Trip description */}
                <div className="space-y-8 mb-8">
                  {post.description && (
                    <ReactMarkdown
                      components={{
                        h2: ({ children }) => (
                          <h3 className="text-xl font-bold text-gray-800 mb-3">
                            {children}
                          </h3>
                        ),
                        p: ({ children }) => (
                          <p className="text-gray-500">{children}</p>
                        ),
                        ul: ({ children }) => (
                          <ul className="space-y-3">{children}</ul>
                        ),
                        li: ({ children }) => (
                          <li className="text-gray-500 list-none">
                            {children}
                          </li>
                        ),
                      }}
                      className="space-y-8"
                    >
                      {post.description}
                    </ReactMarkdown>
                  )}

                  {/* Video */}
                  <div className="flex flex-col space-y-4">
                    <h3 className="text-xl font-bold text-gray-800">Video</h3>
                    <div
                      className="w-full max-w-2xl relative"
                      style={{ paddingBottom: "56.25%" }}
                    >
                      <iframe
                        src="https://player.vimeo.com/video/1052832118?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;quality=2K"
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                        }}
                        title="A fun sailing trip"
                      />
                    </div>
                  </div>

                  {/* Keep the existing specifications section */}
                  {/* <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      Specifications
                    </h3>
                    <div className="text-gray-500 space-y-3">
                      <ul className="list-disc list-inside space-y-3">
                        {post.boat && (
                          <>
                            <li>
                              Length Overall: {post.boat.length_meters} meters (
                              {(post.boat.length_meters * 3.28084).toFixed(1)}{" "}
                              feet)
                            </li>
                            <li>
                              Beam (Width): {post.boat.beam_meters} meters (
                              {(post.boat.beam_meters * 3.28084).toFixed(1)}{" "}
                              feet)
                            </li>
                            <li>
                              Draft: {post.boat.draft_meters} meters (
                              {(post.boat.draft_meters * 3.28084).toFixed(1)}{" "}
                              feet)
                            </li>
                            <li>
                              Maximum Speed: {post.boat.max_speed_knots} knots
                            </li>
                            {post.boat.year_built && (
                              <li>Year Built: {post.boat.year_built}</li>
                            )}
                            {post.boat.last_refit && (
                              <li>Last Refit: {post.boat.last_refit}</li>
                            )}
                            {post.boat.specifications?.engine && (
                              <li>Engine: {post.boat.specifications.engine}</li>
                            )}
                            {post.boat.specifications?.fuel_capacity && (
                              <li>
                                Fuel Capacity:{" "}
                                {post.boat.specifications.fuel_capacity}L
                              </li>
                            )}
                            {post.boat.specifications?.water_capacity && (
                              <li>
                                Water Capacity:{" "}
                                {post.boat.specifications.water_capacity}L
                              </li>
                            )}
                            {post.boat.specifications?.navigation &&
                              post.boat.specifications.navigation.length >
                                0 && (
                                <li>
                                  Navigation Equipment:{" "}
                                  {post.boat.specifications.navigation.join(
                                    ", "
                                  )}
                                </li>
                              )}
                            {post.boat.specifications?.equipment &&
                              post.boat.specifications.equipment.length > 0 && (
                                <li>
                                  Additional Equipment:{" "}
                                  {post.boat.specifications.equipment.join(
                                    ", "
                                  )}
                                </li>
                              )}
                          </>
                        )}
                      </ul>
                    </div>
                  </div> */}
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
                          <path d="M22.968 10.276a.338.338 0 0 0-.232-.253 1.192 1.192 0 0 0-.63.045s-14.019 5.038-14.82 5.596c-.172.121-.23.19-.259.272-.138.4.293.573.293.573l3.613 1.177a.388.388 0 0 0 .183-.011c.822-.519 8.27-5.222 8.7-5.38.068-.02.118 0 .1.049-.172.6-6.606 6.319-6.64 6.654a.138.138 0 0 0-.05.118l-.337 3.528s-.142 1.1.956 0a30.66 30.66 0 0 1 1.9-1.738c1.242.858 2.58 1.806 3.156 2.3a1 1 0 0 0 .732.283.825.825 0 0 0 .7-.622s2.561-10.275 2.646-11.658c.008-.135.021-.217.021-.317a1.177 1.177 0 0 0-.032-.316Z" />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Other trips */}
              <div className="mb-8">
                <h4 className="text-2xl font-bold font-inter mb-8">
                  Other Trips
                </h4>
                {/* List container */}
                {/* Return 3 other trips that are not the current trip */}
                <div className="flex flex-col border-t border-gray-200">
                  {posts
                    .filter((p) => p.id !== post.id)
                    .slice(0, 3)
                    .map((post) => {
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
