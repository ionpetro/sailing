import Link from "next/link";
import Logo from "@/public/images/logo.svg";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const isHome = usePathname() === "/";
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-center h-16">
          {/* Site branding */}
          <div
            className={`shrink-0 ${isHome ? "mt-14 sm:mt-14" : "mt-4 sm:mt-4"}`}
          >
            <Link href="/">
              <Image
                src={Logo}
                width={80}
                height={80}
                className={`${isHome ? "w-[80px]" : "w-[50px]"} h-auto`}
                alt="Logo"
              />
            </Link>
          </div>

          {/* Desktop navigation */}
        </div>
      </div>
    </header>
  );
}
