import { buttonVariants } from "@/components/ui/button";
import { page_routes } from "@/lib/routes-config";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex sm:min-h-[91vh] min-h-[88vh] flex-col items-center justify-center text-center px-2 py-8">
      <h1 className="text-5xl font-bold mb-4 sm:text-7xl">
        4Form <span className="text-primary">CMS</span>{" "}
      </h1>
      <h1 className="text-3xl font-bold mb-4 sm:text-5xl">
        Documentation
      </h1>
      <p className="mb-8 sm:text-md max-w-[800px] text-muted-foreground">
        Complete documentation for 4Form CMS - a powerful form builder and content management system. 
        Learn how to create, manage, and integrate forms with ease.
      </p>
      <div>
        <Link
          href={`/docs${page_routes[0].href}`}
          className={buttonVariants({
            className: "px-6 !font-medium",
            size: "lg",
          })}
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}
