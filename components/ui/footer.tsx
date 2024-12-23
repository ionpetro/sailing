import Link from "next/link";
import HeaderLogo from "./header-logo";

export default function Footer() {
  return (
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
              <div className="text-xl font-nycd text-indigo-500">Follow us</div>
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

            {/* Copyright */}
            <div className="text-sm text-gray-500">
              @SailWithTheBoys.com | All rights reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
