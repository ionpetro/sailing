import Link from "next/link";
import Image from "next/image";
import Illustration from "@/public/images/background.png";
import Avatar01 from "@/public/images/avatar-01.jpg";
import Avatar02 from "@/public/images/avatar-02.jpg";
import Avatar03 from "@/public/images/avatar-03.jpg";
import Avatar04 from "@/public/images/avatar-04.jpg";

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen">
      {/* Bg */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-indigo-100 to-white pointer-events-none -z-10"
        aria-hidden="true"
      />

      {/* Illustration */}
      <div
        className="absolute left-1/2 -translate-x-1/2 pointer-events-none -z-10"
        aria-hidden="true"
      >
        <Image
          src={Illustration}
          className="max-w-none min-h-screen"
          priority
          alt="Hero Illustration"
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-28 pb-8 md:pt-36 md:pb-16">
          {/* Hero content */}
          <div className="max-w-3xl mx-auto text-center">
            {/* Copy */}
            <div className="relative">
              <div
                className="absolute -top-6 -right-6"
                style={{ transform: "rotate(15deg)" }}
              ></div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-inter my-6">
                Experience the beauty of the Greek Islands by{" "}
                <span className="font-nycd text-indigo-500 font-normal">
                  sailing
                </span>
              </h1>
            </div>
            <p className="text-md md:text-lg text-gray-500 mb-8">
              Discover hidden coves, crystal-clear waters, and charming island
              villages
              <br className="hidden md:block" /> aboard our carefully curated
              sailing experiences.
            </p>
            {/* Video */}
            <div className="relative mb-8 max-w-xl mx-auto">
              <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
                <video
                  src="/videos/intro.mp4"
                  poster="/images/dufour/diconsta1.png"
                  controls
                  playsInline
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                  }}
                  className="rounded-lg object-cover"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            {/* Button + Avatars */}
            <div className="flex flex-col items-center justify-center space-y-6">
              <div className="flex items-center justify-center space-y-2 sm:space-y-0 sm:space-x-3 order-1 sm:order-none">
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
              <div className="order-2 sm:order-none">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
