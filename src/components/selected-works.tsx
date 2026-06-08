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
import {
  AtomIcon,
  BlocksIcon,
  BookmarkCheckIcon,
  CircleIcon,
  LayersIcon,
  LayoutIcon,
  LockIcon,
  PenToolIcon,
  SparklesIcon
} from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

export const SelectedWorks = () => (
  <div className="flex flex-col gap-16 px-16 py-8">
    <div className="flex items-center gap-4">
      <h2 className="text-4xl font-semibold">Selected Works</h2>
      <div className="h-[1.60px] w-80 outline-1 outline-offset-[-0.50px] outline-[##2A2A2A]"></div>
    </div>

    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
      <Card className="relative flex w-full flex-col gap-8 p-8">
        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="secondary"
              size="icon-lg"
              className="text-[#E2E2E2]/90] absolute top-4 right-4 z-10 border-[#2A2A2A] bg-[#050505]"
            >
              <LockIcon className="size-6" />
            </Button>
          </DialogTrigger>
          <DialogContent className="flex h-[calc(100vh-10rem)] w-[70vw] min-w-[70vw] flex-col border border-[#2A2A2A] bg-[#0D0D0D]">
            <ScrollArea className="flex h-full w-full flex-col">
              <div className="flex flex-col gap-8 p-8">
                <h1 className="text-4xl font-semibold">Eventasaurus</h1>
                <div className="inline-flex items-center justify-start gap-2.5 self-stretch overflow-hidden">
                  <div className="size- flex items-center justify-center gap-2.5">
                    <div className="justify-start font-['JetBrains_Mono'] text-xl font-normal text-violet-300">
                      Co-founder, Lead Frontend Developer &amp; UI/UX Designer
                    </div>
                  </div>
                  <div className="inline-flex w-6 flex-col items-center justify-center gap-2.5 overflow-hidden p-0.5">
                    <div className="size-2.5 rounded-full bg-neutral-200/50" />
                  </div>
                  <div className="flex items-center justify-center gap-2.5">
                    <div className="justify-start font-['Inter'] text-xl font-normal text-neutral-200">
                      Private Startup
                    </div>
                  </div>
                </div>
                <Image
                  src={"/eventasaurus.png"}
                  alt={"Eventasaurus Home Page"}
                  width={600}
                  height={300}
                  className="w-full object-cover"
                />
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <p className="text-primary font-[JetBrains_Mono] text-xl font-semibold">
                      Overview{" "}
                    </p>
                    <div className="h-px w-80 outline-1 outline-offset-[-0.50px] outline-[##2A2A2A]"></div>
                  </div>
                  <p className="text-xl">
                    Eventasaurus is an end-to-end event automation platform
                    designed to simplify the entire event lifecycle for
                    colleges, NGOs, and corporate teams. It eliminates manual
                    planning by unifying custom event builders, AI-driven
                    content generation, and multi-channel promotion into a
                    single, highly interactive platform.
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <p className="text-primary flex gap-4 font-[JetBrains_Mono] text-xl font-semibold">
                      <BookmarkCheckIcon className="size-6" /> Key
                      Contributions{" "}
                    </p>
                    <div className="h-px w-80 outline-1 outline-offset-[-0.50px] outline-[##2A2A2A]"></div>
                  </div>
                  <div className="inline-flex items-start justify-start gap-2.5 self-stretch overflow-hidden rounded-sm bg-white/5 px-4 py-6 outline outline-1 outline-offset-[-1px] outline-neutral-200/30">
                    <div className="flex-1 justify-start">
                      <span className="text-base font-bold text-[#E2E2E2]">
                        Design System Architecture
                      </span>
                      <span className="text-base font-normal text-[#E2E2E2]">
                        : Collaborated on the UI/UX visual identity in Figma,
                        taking full ownership of engineering those designs into
                        a fully custom, reusable frontend component library from
                        scratch.
                      </span>
                    </div>
                  </div>

                  <div className="inline-flex items-start justify-start gap-2.5 self-stretch overflow-hidden rounded-sm bg-white/5 px-4 py-6 outline outline-1 outline-offset-[-1px] outline-neutral-200/30">
                    <div className="flex-1 justify-start">
                      <span className="text-base font-bold text-[#E2E2E2]">
                        Core Platform & Animations
                      </span>
                      <span className="text-base font-normal text-[#E2E2E2]">
                        : Built the primary event management application using
                        React and React Router, integrating fluid, highly
                        polished UI transitions and micro-interactions using
                        Motion (formerly Framer Motion).
                      </span>
                    </div>
                  </div>

                  <div className="inline-flex items-start justify-start gap-2.5 self-stretch overflow-hidden rounded-sm bg-white/5 px-4 py-6 outline outline-1 outline-offset-[-1px] outline-neutral-200/30">
                    <div className="flex-1 justify-start">
                      <span className="text-base font-bold text-[#E2E2E2]">
                        Drag-and-Drop Site Builder
                      </span>
                      <span className="text-base font-normal text-[#E2E2E2]">
                        : Engineered a standalone Next.js site-builder
                        extension, leveraging React dnd-kit to allow organizers
                        to intuitively construct and launch custom-branded event
                        websites without writing code.
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <p className="text-primary flex gap-4 font-[JetBrains_Mono] text-xl font-semibold">
                      <LayersIcon className="size-6" /> Stack Specification{" "}
                    </p>
                    <div className="h-px w-80 outline-1 outline-offset-[-0.50px] outline-[##2A2A2A]"></div>
                  </div>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="flex w-full gap-4 rounded-sm border border-[#E2E2E2]/30 bg-white/5 p-4">
                      <AtomIcon className="text-primary size-6" />
                      <p className="font-[JetBrains_Mono] text-base font-semibold text-[#E2E2E2]/90">
                        React &amp; React Router
                      </p>
                    </div>
                    <div className="flex w-full gap-4 rounded-sm border border-[#E2E2E2]/30 bg-white/5 p-4">
                      <BlocksIcon className="text-primary size-6" />
                      <p className="font-[JetBrains_Mono] text-base font-semibold text-[#E2E2E2]/90">
                        Next.js &amp; React dnd-kit
                      </p>
                    </div>
                    <div className="flex w-full gap-4 rounded-sm border border-[#E2E2E2]/30 bg-white/5 p-4">
                      <SparklesIcon className="text-primary size-6" />
                      <p className="font-[JetBrains_Mono] text-base font-semibold text-[#E2E2E2]/90">
                        Motion (Framer Motion)
                      </p>
                    </div>
                    <div className="flex w-full gap-4 rounded-sm border border-[#E2E2E2]/30 bg-white/5 p-4">
                      <PenToolIcon className="text-primary size-6" />
                      <p className="font-[JetBrains_Mono] text-base font-semibold text-[#E2E2E2]/90">
                        Figma (Co-designed UI/UX)
                      </p>
                    </div>
                  </div>
                </div>
                <Separator className="bg-[#E2E2E2]/50" />
                <div className="flex items-center justify-end p-2">
                  <div className="flex gap-4 rounded-sm border border-[#E2E2E2]/30 bg-white/5 p-4">
                    <CircleIcon className="size-6 rounded-full bg-[#FFBF00] text-[#FFBF00]" />
                    <p className="font-[JetBrains_Mono] text-base font-semibold text-[#E2E2E2]/90">
                      STATUS: MVP IN DEVELOPMENT
                    </p>
                  </div>
                </div>
              </div>
            </ScrollArea>
          </DialogContent>
        </Dialog>
        <CardHeader className="p-0">
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
              Co-founder, Lead Frontend Developer & UI/UX Designer
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
