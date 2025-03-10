export const metadata = {
  title: "Home - SailwiththeBoys",
  description: "Book your dream sailing adventure in the Greek Islands",
};
import Hero from "@/components/hero";
// import PressLogos from "@/components/press-logos";
// import Sidebar from "@/components/sidebar";
import PostsList from "./posts-list";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      {/* <PressLogos /> */}

      {/*  Page content */}
      <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-8 md:pt-16">
            <div data-sticky-container>
              {/* <Sidebar /> */}
              {/* todo: add filters when we aggregate data */}
              {/* Main content */}
              <div className="w-full">
                <PostsList />
                {/* <Testimonials /> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
