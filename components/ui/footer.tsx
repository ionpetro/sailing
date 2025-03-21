import Link from "next/link";
import HeaderLogo from "./header-logo";

export default function Footer() {
  return (
    <>
      {/* WhatsApp floating button */}
      <a
        href="https://wa.me/306971561249"
        className="fixed right-4 bottom-4 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-green-500 hover:bg-green-600 transition-colors duration-300 shadow-lg"
        aria-label="Chat on WhatsApp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          className="w-6 h-6 fill-white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </a>
      <footer>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-8 md:py-12">
            {/* Top area */}
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-between mb-4 md:mb-6">
              <div className="shrink-0 mr-4">
                {/* Logo */}
                <HeaderLogo />
              </div>
              {/* Social links */}
              <div className="flex items-center space-x-4 mb-4 md:order-2 md:ml-4 md:mb-0">
                <div className="text-xl font-nycd text-indigo-500">
                  Follow us
                </div>
                <ul className="inline-flex space-x-3">
                  <li>
                    <a
                      className="flex justify-center items-center text-indigo-500 bg-indigo-100 hover:text-white hover:bg-indigo-500 rounded-full transition duration-150 ease-in-out"
                      href="https://x.com/sailwiththeboys"
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
                      href="https://www.instagram.com/sailwiththeboys/"
                      aria-label="Instagram"
                    >
                      <svg
                        className="w-8 h-8 fill-current"
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M20.8 16a4.8 4.8 0 1 1-9.6 0 4.8 4.8 0 0 1 9.6 0ZM16 12.4a3.6 3.6 0 1 0 0 7.2 3.6 3.6 0 0 0 0-7.2Zm4.8-4.8H11.2a4.8 4.8 0 0 0-4.8 4.8v9.6a4.8 4.8 0 0 0 4.8 4.8h9.6a4.8 4.8 0 0 0 4.8-4.8v-9.6a4.8 4.8 0 0 0-4.8-4.8Zm3.6 14.4a3.6 3.6 0 0 1-3.6 3.6H11.2a3.6 3.6 0 0 1-3.6-3.6v-9.6a3.6 3.6 0 0 1 3.6-3.6h9.6a3.6 3.6 0 0 1 3.6 3.6v9.6ZM21.2 11a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0Z" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom area */}
            <div className="text-center md:flex md:items-center md:justify-between">
              {/* Left links */}
              <div className="text-sm font-medium md:order-1 mb-2 md:mb-0">
                <ul className="inline-flex flex-wrap text-sm font-medium">
                  <li className="after:content-['·'] last:after:hidden after:text-gray-400 after:px-2">
                    <a
                      className="text-gray-500 hover:text-gray-500 hover:underline"
                      href="#0"
                    >
                      Terms
                    </a>
                  </li>
                  <li className="after:content-['·'] last:after:hidden after:text-gray-400 after:px-2">
                    <a
                      className="text-gray-500 hover:text-gray-500 hover:underline"
                      href="#0"
                    >
                      Privacy
                    </a>
                  </li>
                  <li className="after:content-['·'] last:after:hidden after:text-gray-400 after:px-2">
                    <a
                      className="text-gray-500 hover:text-gray-500 hover:underline"
                      href="#0"
                    >
                      Guidelines
                    </a>
                  </li>
                  <li className="after:content-['·'] last:after:hidden after:text-gray-400 after:px-2">
                    <a
                      className="text-gray-500 hover:text-gray-500 hover:underline"
                      href="#0"
                    >
                      Why Choose Us?
                    </a>
                  </li>
                </ul>
              </div>

              {/* Contact and Copyright */}
              <div className="text-sm text-gray-500 space-y-1">
                <div>
                  @SailWithTheBoys.com | Call us here: ‭+30 697 1561249‬
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
