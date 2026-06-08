import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { LockIcon } from "lucide-react";

export const SelectedWorks = () => (
  <div className="flex flex-col gap-16 px-16 py-8">
    <div className="flex items-center gap-4">
      <h2 className="text-4xl font-semibold">Selected Works</h2>
      <div className="h-[1.60px] w-80 outline-1 outline-offset-[-0.50px] outline-[##2A2A2A]"></div>
    </div>

    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
      <Card className="relative flex w-full flex-col gap-8 p-8">
        <CardHeader className="p-0">
          <Button
            variant="secondary"
            size="icon-lg"
            className="text-[#E2E2E2]/90] absolute top-4 right-4 z-10 border-[#2A2A2A] bg-[#050505]"
          >
            <LockIcon className="size-6" />
          </Button>
          <Image
            src="/eventasaurus.png"
            alt="Eventasaurus Home Page"
            width={600}
            height={300}
            className="object-cover"
          />
          <CardTitle>
            <h3 className="text-primary text-2xl font-bold">Eventasaurus</h3>
            <p className="text-primary font-[JetBrains_Mono] text-base">
              Co-founder, Lead Frontend Developer, & UI/UX Designer
            </p>
          </CardTitle>
        </CardHeader>
        <CardDescription className="text-xl">
          An end-to-end management platform automating the event lifecycle for
          creators and attendees.
        </CardDescription>
        <CardFooter className="flex flex-col items-start justify-start gap-2 p-0 text-start">
          <div className="flex items-center gap-4">
            <p className="text-base text-[#E2E2E2]/90">Technologies used</p>
            <div className="h-px w-80 outline-1 outline-offset-[-0.50px] outline-[##2A2A2A]"></div>
          </div>
          <div className="flex flex-wrap gap-4 gap-y-2">
            <Button variant="badge" asChild>
              <Link href="" className="text-[#E2E2E2]/90">
                React
              </Link>
            </Button>
            <Button variant="badge" asChild>
              <Link href="" className="text-[#E2E2E2]/90">
                Next.js
              </Link>
            </Button>
            <Button variant="badge" asChild>
              <Link href="" className="text-[#E2E2E2]/90">
                Tailwind CSS
              </Link>
            </Button>
            <Button variant="badge" asChild>
              <Link href="" className="text-[#E2E2E2]/90">
                Zustand
              </Link>
            </Button>
            <Button variant="badge" asChild>
              <Link href="" className="text-[#E2E2E2]/90">
                Shadcn UI
              </Link>
            </Button>
            <Button variant="badge" asChild>
              <Link href="" className="text-[#E2E2E2]/90">
                Motion
              </Link>
            </Button>
            <Button variant="badge" asChild>
              <Link href="" className="text-[#E2E2E2]/90">
                Figma
              </Link>
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  </div>
);
