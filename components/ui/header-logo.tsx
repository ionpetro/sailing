import Link from "next/link";
import Image from "next/image";

export default function HeaderLogo() {
  return (
    <Link className="block group" href="/" aria-label="SailWithTheBoys">
      <Image
        src="/images/logo.svg"
        alt="Logo"
        width={40}
        height={40}
        className="w-10 h-10"
      />
    </Link>
  );
}
