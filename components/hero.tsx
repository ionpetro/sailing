import Link from "next/link";
import Image from "next/image";
import Illustration from "@/public/images/hero-illustration.svg";
import Avatar01 from "@/public/images/avatar-01.jpg";
import Avatar02 from "@/public/images/avatar-02.jpg";
import Avatar03 from "@/public/images/avatar-03.jpg";
import Avatar04 from "@/public/images/avatar-04.jpg";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Bg */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-indigo-100 to-white pointer-events-none -z-10"
        aria-hidden="true"
      />

      {/* Illustration */}
      <div
        className="hidden md:block absolute left-1/2 -translate-x-1/2 pointer-events-none -z-10"
        aria-hidden="true"
      >
        <Image
          src={Illustration}
          className="max-w-none"
          priority
          alt="Hero Illustration"
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-28 pb-8 md:pt-36 md:pb-16">
          {/* Hero content */}
          <div className="max-w-3xl text-center md:text-left">
            {/* Copy */}
            <h1 className="h1 font-inter mb-6">
              Experience the beauty of the Greek Islands by{" "}
              <span className="font-nycd text-indigo-500 font-normal">
                sail
              </span>
            </h1>
            <p className="text-lg text-gray-500 mb-8">
              Discover hidden coves, crystal-clear waters, and charming island
              villages
              <br className="hidden md:block" /> aboard our carefully curated
              sailing experiences.
            </p>
            {/* Button + Avatars */}
            <div className="sm:flex sm:items-center sm:justify-center md:justify-start space-y-6 sm:space-y-0 sm:space-x-5">
              <div>
                <Link
                  className="btn-sm text-white bg-indigo-500 hover:bg-indigo-600 w-full shadow-sm group"
                  href="#upcoming-trips"
                  scroll
                >
                  Explore Trips{" "}
                  <span className="tracking-normal text-indigo-200 group-hover:translate-y-0.5 transition-transform duration-150 ease-in-out ml-1">
                    ↓
                  </span>
                </Link>
              </div>
              <div className="sm:flex sm:items-center sm:justify-center space-y-2 sm:space-y-0 sm:space-x-3">
                <div className="inline-flex -space-x-3 -ml-0.5">
                  <Image
                    className="rounded-full border-2 border-indigo-50 box-content"
                    src={Avatar01}
                    width={32}
                    height={32}
                    alt="Avatar 01"
                  />
                  <Image
                    className="rounded-full border-2 border-indigo-50 box-content"
                    src={Avatar02}
                    width={32}
                    height={32}
                    alt="Avatar 02"
                  />
                  <Image
                    className="rounded-full border-2 border-indigo-50 box-content"
                    src={Avatar03}
                    width={32}
                    height={32}
                    alt="Avatar 03"
                  />
                  <Image
                    className="rounded-full border-2 border-indigo-50 box-content"
                    src={Avatar04}
                    width={32}
                    height={32}
                    alt="Avatar 04"
                  />
                </div>
                <div className="text-sm text-gray-500 font-medium">
                  Join <span className="text-indigo-500">100+</span> travelers
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
