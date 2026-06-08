import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowUpRightIcon } from "lucide-react";

export const Navbar = () => (
  <div className="flex w-full items-center justify-between px-8 py-4">
    <Button className="text-4xl font-semibold" variant="link" asChild>
      <Link href="/">Mayank Pal</Link>
    </Button>

    <nav>
      <Button className="text-xl text-[#E2E2E2]" variant="link" asChild>
        <Link href="/">About</Link>
      </Button>
      <Button className="text-xl text-[#E2E2E2]" variant="link" asChild>
        <Link href="/">Skills</Link>
      </Button>
      <Button className="text-xl text-[#E2E2E2]" variant="link" asChild>
        <Link href="/">Projects</Link>
      </Button>
    </nav>

    <Button
      className="gap-2 rounded-sm bg-[#B8C3FF] px-6 py-4 text-base font-semibold text-[#002388]"
      asChild
    >
      <Link href="/">
        SAY HELLO <ArrowUpRightIcon className="size-4" />
      </Link>
    </Button>
  </div>
);
