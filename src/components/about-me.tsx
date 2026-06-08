import { CodeIcon, LayersIcon, PaletteIcon } from "lucide-react";

export const AboutMe = () => (
  <div className="flex flex-col gap-16 px-16 py-8">
    <div className="flex items-center gap-4">
      <h2 className="text-4xl font-semibold">About Me</h2>
      <div className="h-[1.60px] w-80 outline-1 outline-offset-[-0.50px] outline-[##2A2A2A]"></div>
    </div>

    <div className="inline-flex items-center justify-start gap-8 self-stretch">
      <div className="flex flex-1 items-start justify-start overflow-hidden rounded-xl bg-[#0D0D0D] outline outline-1 outline-offset-[-1px] outline-zinc-800">
        <div className="bg-primary relative w-1.5 self-stretch" />
        <div className="inline-flex flex-1 flex-col items-start justify-start gap-4 p-8">
          <div className="justify-start self-stretch font-['Inter'] text-xl text-[#E2E2E2]">
            I am a Full Stack Developer currently completing my B.Tech in
            Computer Science. I enjoy working across the entire web development
            process—from planning initial layouts in Figma to building
            responsive frontends and structuring the backends that power them.
          </div>
          <div className="justify-start self-stretch font-['Inter'] text-xl text-[#E2E2E2]">
            Throughout my projects and internships, I&apos;ve focused on being a
            reliable developer who learns quickly and respects deadlines.
            Instead of locking myself into one specific design trend or system
            architecture, I prefer to understand the problem first and adapt to
            whatever approach makes the most sense.
          </div>
          <div className="inline-flex items-start justify-start self-stretch overflow-hidden rounded-tr-sm rounded-br-sm bg-white/5 outline outline-1 outline-offset-[-1px]">
            <div className="bg-primary relative w-0.5 self-stretch" />
            <div className="inline-flex flex-1 flex-col items-center justify-center gap-4 p-4">
              <div className="justify-start self-stretch font-['Inter'] text-xl text-[#E2E2E2]">
                &quot;Ultimately, my goal is to design thoughtful interfaces,
                architect reliable systems, and write clean code that delivers a
                seamless user experience.&quot;
              </div>
            </div>
          </div>
          <div className="h-16 self-stretch border-b border-white/10 p-2.5" />
          <div className="inline-flex items-start justify-start gap-8 self-stretch overflow-hidden">
            <div className="size- flex items-center justify-center gap-2 overflow-hidden rounded-full bg-white/5 px-5 py-3 outline outline-1 outline-offset-[-1px] outline-neutral-200/30">
              <LayersIcon className="size-5" />
              <div className="justify-start font-['JetBrains_Mono'] text-base font-bold text-[#E2E2E2]/90">
                Full Stack Developer
              </div>
            </div>
            <div className="size- flex items-center justify-center gap-2 overflow-hidden rounded-full bg-white/5 px-5 py-3 outline outline-1 outline-offset-[-1px] outline-neutral-200/30">
              <CodeIcon className="size-5" />
              <div className="justify-start font-['JetBrains_Mono'] text-base font-bold text-neutral-200/90">
                Frontend Engineer
              </div>
            </div>
            <div className="size- flex items-center justify-center gap-2 overflow-hidden rounded-full bg-white/5 px-5 py-3 outline outline-1 outline-offset-[-1px] outline-neutral-200/30">
              <PaletteIcon className="size-5" />
              <div className="justify-start font-['JetBrains_Mono'] text-base font-bold text-neutral-200/90">
                UI/UX Designer
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-start justify-start self-stretch overflow-hidden rounded-xl bg-[#0D0D0D] outline outline-1 outline-offset-[-1px] outline-zinc-800">
        <div className="inline-flex flex-col items-start justify-start gap-8 self-stretch p-8">
          <div className="text-primary justify-start font-['JetBrains_Mono'] text-xl font-normal">
            ACADEMIC &amp; PROFILE
          </div>
          <div className="flex flex-col items-start justify-start gap-2 self-stretch overflow-hidden">
            <div className="justify-start font-['JetBrains_Mono'] text-base font-normal text-neutral-200/70">
              B.Tech Specialization
            </div>
            <div className="font- justify-start font-['Inter'] text-xl text-neutral-200">
              Computer Science - Data Science
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-2 self-stretch overflow-hidden">
            <div className="justify-start font-['JetBrains_Mono'] text-base font-normal text-neutral-200/70">
              Industry Internships
            </div>
            <div className="font- justify-start font-['Inter'] text-xl text-neutral-200">
              2 Completed
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-2 self-stretch overflow-hidden">
            <div className="justify-start font-['JetBrains_Mono'] text-base font-normal text-neutral-200/70">
              Core Focus
            </div>
            <div className="font- justify-start font-['Inter'] text-xl text-neutral-200">
              Full Stack &amp; UI/UX
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-2 self-stretch overflow-hidden">
            <div className="justify-start font-['JetBrains_Mono'] text-base font-normal text-neutral-200/70">
              Design Tooling
            </div>
            <div className="font- justify-start font-['Inter'] text-xl text-neutral-200">
              Figma
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
