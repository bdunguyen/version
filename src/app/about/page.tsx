import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#e4e2dd] text-[#2b2b2b] px-6 py-12 flex items-center justify-center">
      <div className="max-w-3xl text-left">
        <h1 className="text-5xl font-serif mb-10 text-center">About Version</h1>

        {/* Section 1: Git for Writers */}
        <section className="mb-10">
          <h2 className="text-2xl font-serif mb-4">1. Git for Writers</h2>
          <p className="font-times text-lg leading-relaxed tracking-tight">
            Writing evolves — one revision, one forked idea, one midnight
            epiphany at a time. But tracking that creative journey? That’s
            always been a mess. <br />
            Developers have Git. Writers have a folder of sadness titled{" "}
            <span className="text-blue-600">
              “final_FINAL_revised_MAYBE.docx”
            </span>
            .
            <br />
            Version brings the superpower of version control to the writing
            world — minus the terminal commands and mental breakdowns.
          </p>
        </section>

        {/* Section 2: WTF is Git? */}
        <section className="mb-10">
          <h2 className="text-2xl font-serif mb-4">2. WTF is Git?</h2>
          <p className="font-times text-lg leading-relaxed tracking-tight">
            Git is a tool developers use to track changes in code. It’s like a
            time machine — if the time machine was powered by cryptic commands
            and deeply repressed frustration.
            <br />
            It’s great for coders. Not so great for people who prefer prose over
            pipelines.
          </p>
        </section>

        {/* Section 3: We Make It Simple */}
        <section className="mb-12">
          <h2 className="text-2xl font-serif mb-4">3. We Make It Simple</h2>
          <p className="font-times text-lg leading-relaxed tracking-tight">
            Version keeps the power of Git but replaces the stress with calm.
            <br />
            You get clean timelines, automatic version saving, and space to
            explore your thoughts. No branches, no push/pull — just your words,
            beautifully tracked.
            <br />
            Because writers deserve more time writing, not managing file names.
          </p>
        </section>

        <div className="flex justify-center gap-4">
          <Link href="/">
            <button className="px-6 py-3 border border-[#2b2b2b] text-[#2b2b2b] rounded-md text-sm tracking-wide hover:bg-[#2b2b2b] hover:text-[#e4e2dd] transition">
              Back Home
            </button>
          </Link>
          <Link href="/login">
            <button className="px-6 py-3 bg-[#2b2b2b] text-[#e4e2dd] rounded-md text-sm tracking-wide hover:bg-opacity-90 transition">
              Start Writing
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
