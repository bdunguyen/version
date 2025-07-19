import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#e4e2dd] text-[#2b2b2b] flex flex-col items-center justify-center px-6 py-12">
      <div className="max-w-3xl text-center">
        <div className="flex justify-center mb-6 gap-2">
          <Image
            src="/version-logo.svg"
            alt="Version Logo"
            width={64}
            height={64}
            className="object-contain"
            priority
          />
          <h1 className="text- mt-2 md:text-6xl justify-center min-h-[72px] font-serif leading-tight mb-6">
            version
          </h1>
        </div>
        <p className="text-lg md:text-xl font-times leading-relaxed tracking-tight mb-10">
          A minimalist version control tool built for writers. Because{" "}
          <span className="text-blue-600">
            “final_final2_revised_REAL_draft.docx”
          </span>{" "}
          deserves better.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/editor">
            <button className="px-6 py-3 bg-[#2b2b2b] text-[#e4e2dd] rounded-md text-sm tracking-wide hover:bg-black transition">
              Start Writing
            </button>
          </Link>
          <Link href="/about">
            <button className="px-6 py-3 border border-[#2b2b2b] text-[#2b2b2b] rounded-md text-sm tracking-wide hover:bg-[#2b2b2b] hover:text-[#e4e2dd] transition">
              Learn More
            </button>
          </Link>
        </div>
      </div>
      <footer className="mt-20 text-sm text-[#2b2b2b]/60">
        © {new Date().getFullYear()} Version
      </footer>
    </main>
  );
}
