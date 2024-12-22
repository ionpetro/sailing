import Link from "next/link";
import Image from "next/image";

export default function HeaderLogo() {
  return (
    <Link className="block group" href="/" aria-label="SailWithTheBoys">
      <Image
        src="/images/logo.png"
        alt="Logo"
        width={32}
        height={32}
        className="w-8 h-8"
      />
    </Link>
  );
}
