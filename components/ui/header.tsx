import Link from "next/link";
import Logo from "@/public/images/logo.svg";
import Image from "next/image";
export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-center h-16 md:h-32">
          {/* Site branding */}
          <div className="shrink-0 mt-14 sm:mt-8">
            <Image
              src={Logo}
              width={80}
              height={80}
              className="w-[80px] h-auto sm:w-[100px]"
              alt="Logo"
            />
          </div>

          {/* Desktop navigation */}
        </div>
      </div>
    </header>
  );
}
