import { ModeToggle } from "@/components/theme-toggle";
import Link from "next/link";
import Image from "next/image";
import Anchor from "./anchor";
import { SheetLeftbar } from "./leftbar";
import { page_routes } from "@/lib/routes-config";

export const NAVLINKS = [
  {
    title: "Documentation",
    href: `/docs${page_routes[0].href}`,
  },
  // {
  //   title: "GitHub",
  //   href: "https://github.com/your-org/4form-cms",
  // },
];

export function Navbar() {
  return (
    <nav className="w-full h-14 sticky top-0 z-50 lg:px-4 backdrop-filter backdrop-blur-xl bg-opacity-5">
      <div className="sm:container h-full max-sm:px-3 flex items-center justify-between ">
        <SheetLeftbar />
        <div className="flex items-center gap-9">
          <Logo />
          <div className="lg:flex hidden items-center gap-5 text-sm font-medium text-muted-foreground">
            {NAVLINKS.map((item) => {
              return (
                <Anchor
                  key={item.title + item.href}
                  activeClassName="text-primary font-semibold"
                  absolute
                  className="flex items-center gap-1"
                  href={item.href}
                >
                  {item.title}
                </Anchor>
              );
            })}
          </div>
        </div>

        <ModeToggle />
      </div>
    </nav>
  );
}

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <Image
        src="/4form.webp"
        alt="4Form CMS Logo"
        width={24}
        height={24}
        className="w-6 h-8"
      />
      <h2 className="text-md font-bold font-code">4Form CMS</h2>
    </Link>
  );
}
