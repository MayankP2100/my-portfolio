import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { AppWindowIcon, DatabaseIcon, ServerIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const TechnicalArsenal = () => (
  <div className="flex flex-col gap-8 px-16 py-48">
    <div className="flex items-center gap-4">
      <h2 className="text-4xl font-semibold">Technical Arsenal</h2>
      <div className="h-[1.60px] w-80 outline-1 outline-offset-[-0.50px] outline-[##2A2A2A]"></div>
    </div>

    <div className="flex h-max items-center justify-between gap-8">
      <Card className="flex w-full flex-col gap-8 p-8">
        <CardHeader className="p-0">
          <CardTitle className="text-[#FFFFFF]] flex items-center gap-4 text-xl">
            <div className="text-primary border-secondary flex size-10 items-center justify-center border bg-[#050505]">
              <AppWindowIcon className="size-6" />
            </div>
            Frontend & UI
          </CardTitle>
        </CardHeader>
        <CardDescription className="flex flex-wrap gap-4 gap-y-2">
          <Button variant="secondary" asChild>
            <Link href="" className="text-[#E2E2E2]/90">
              React
            </Link>
          </Button>
          <Button variant="secondary" asChild>
            <Link href="" className="text-[#E2E2E2]/90">
              Next.js
            </Link>
          </Button>
          <Button variant="secondary" asChild>
            <Link href="" className="text-[#E2E2E2]/90">
              Typescript
            </Link>
          </Button>
          <Button variant="secondary" asChild>
            <Link href="" className="text-[#E2E2E2]/90">
              Tailwind CSS
            </Link>
          </Button>
          <Button variant="secondary" asChild>
            <Link href="" className="text-[#E2E2E2]/90">
              Shadcn UI
            </Link>
          </Button>
          <Button variant="secondary" asChild>
            <Link href="" className="text-[#E2E2E2]/90">
              Motion
            </Link>
          </Button>
          <Button variant="secondary" asChild>
            <Link href="" className="text-[#E2E2E2]/90">
              Figma
            </Link>
          </Button>
        </CardDescription>
      </Card>

      <Card className="flex w-full flex-col gap-8 p-8">
        <CardHeader className="p-0">
          <CardTitle className="text-[#FFFFFF]] flex items-center gap-4 text-xl">
            <div className="text-primary border-secondary flex size-10 items-center justify-center border bg-[#050505]">
              <ServerIcon className="size-6" />
            </div>
            Backend & APIs
          </CardTitle>
        </CardHeader>
        <CardDescription className="flex flex-wrap gap-4 gap-y-2">
          <Button variant="secondary" asChild>
            <Link href="" className="text-[#E2E2E2]/90">
              Laravel
            </Link>
          </Button>
          <Button variant="secondary" asChild>
            <Link href="" className="text-[#E2E2E2]/90">
              ASP.NET
            </Link>
          </Button>
          <Button variant="secondary" asChild>
            <Link href="" className="text-[#E2E2E2]/90">
              Nest.js
            </Link>
          </Button>
          <Button variant="secondary" asChild>
            <Link href="" className="text-[#E2E2E2]/90">
              Inertia.js
            </Link>
          </Button>
        </CardDescription>
      </Card>

      <Card className="flex w-full flex-col gap-8 p-8">
        <CardHeader className="p-0">
          <CardTitle className="text-[#FFFFFF]] flex items-center gap-4 text-xl">
            <div className="text-primary border-secondary flex size-10 items-center justify-center border bg-[#050505]">
              <DatabaseIcon className="size-6" />
            </div>
            Database & State
          </CardTitle>
        </CardHeader>
        <CardDescription className="flex flex-wrap gap-4 gap-y-2">
          <Button variant="secondary" asChild>
            <Link href="" className="text-[#E2E2E2]/90">
              PostgreSQL
            </Link>
          </Button>
          <Button variant="secondary" asChild>
            <Link href="" className="text-[#E2E2E2]/90">
              MongoDB
            </Link>
          </Button>
          <Button variant="secondary" asChild>
            <Link href="" className="text-[#E2E2E2]/90">
              Redis
            </Link>
          </Button>
          <Button variant="secondary" asChild>
            <Link href="" className="text-[#E2E2E2]/90">
              Zustand
            </Link>
          </Button>
          <Button variant="secondary" asChild>
            <Link href="" className="text-[#E2E2E2]/90">
              Tanstack React Query
            </Link>
          </Button>
        </CardDescription>
      </Card>
    </div>
  </div>
);
