import { Badge } from "@/components/ui/badge";
import { ArrowRightIcon, FileUserIcon, MapPinIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const Hero = () => (
  <div className="flex flex-col gap-4 px-16 py-48">
    <Badge className="text-primary border-secondary h-auto gap-2 rounded-full border bg-transparent px-4 py-2 font-['JetBrains_Mono'] text-xl">
      <div>
        <MapPinIcon className="size-6" />
      </div>
      KALYANI, WEST BENGAL, INDIA
    </Badge>
    <h1 className="text-[64px] font-semibold text-[#E2E2E2]">
      Hi, I&rsquo;m{" "}
      <span
        className={
          "bg-linear-to-r from-[#E2E2E2] to-[#B8C3FF] bg-clip-text text-transparent"
        }
      >
        Mayank Pal
      </span>
      .
    </h1>
    <p className="text-xl text-[#E2E2E2]">
      A Full Stack Developer & UI/UX Designer translating complex problems into
      scalable backends and intuitive digital experiences.
    </p>
    <div className="flex items-center gap-8">
      <Button asChild>
        <Link href="/">
          VIEW PROJECTS <ArrowRightIcon className="size-4" />
        </Link>
      </Button>

      <Button variant="outline" asChild>
        <Link href="/">
          DOWNLOAD RESUME <FileUserIcon className="size-4" />
        </Link>
      </Button>
    </div>
  </div>
);
