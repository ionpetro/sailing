import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="py-8 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image Bubble */}
          <div className="w-full md:w-1/2">
            <div className="relative w-[80%] mx-auto aspect-square">
              <div className="absolute inset-0">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  <path
                    fill="#7DD3FC"
                    d="M160.5,68.1c2.8,21.3-1.1,45.1-16.4,61.3c-15.3,16.2-42,24.7-66.6,23.2C52.8,151,30.2,139.5,17.5,119.9 C4.8,100.3,2,72.5,11.9,50.8c9.9-21.7,32.6-37.3,57-38.6c24.4-1.3,50.6,11.7,67.3,31.7C152.9,63.9,157.7,46.8,160.5,68.1z"
                  />
                  <defs>
                    <clipPath id="bubble-clip">
                      <path d="M160.5,68.1c2.8,21.3-1.1,45.1-16.4,61.3c-15.3,16.2-42,24.7-66.6,23.2C52.8,151,30.2,139.5,17.5,119.9 C4.8,100.3,2,72.5,11.9,50.8c9.9-21.7,32.6-37.3,57-38.6c24.4-1.3,50.6,11.7,67.3,31.7C152.9,63.9,157.7,46.8,160.5,68.1z" />
                    </clipPath>
                  </defs>
                  <foreignObject
                    width="100%"
                    height="100%"
                    clipPath="url(#bubble-clip)"
                  >
                    <div className="w-full h-full relative">
                      <Image
                        src="/images/us.jpg"
                        alt="The SailwiththeBoys team"
                        fill
                        className="object-cover object-[center_65%]"
                        priority
                      />
                    </div>
                  </foreignObject>
                </svg>
              </div>
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
