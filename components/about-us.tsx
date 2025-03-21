import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="py-8 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image */}
          <div className="w-full md:w-1/2">
            <div
              className="relative w-[80%] mx-auto rounded-2xl overflow-hidden"
              style={{ aspectRatio: "16/10" }}
            >
              <Image
                src="/images/us.jpg"
                alt="The SailwiththeBoys team"
                fill
                className="object-cover object-[center_65%]"
                priority
              />
            </div>
          </div>

          {/* Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl font-bold mb-6">Meet the boys!</h2>
            <p className="text-lg text-gray-600 mb-6">
              Hey there traveller 👋 We are the boys of SailwiththeBoys.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              They also call us boukles (greek translation for curly hair). We
              are passionate with the sea and we have made it our mission to
              share the beauty of the Greek Islands with you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
