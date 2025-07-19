"use client";
import Image from "next/image";

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#e4e2dd] px-6 py-12 text-[#2b2b2b]">
      <div className="text-center">
        <div className="flex justify-center mb-6">
          <Image
            src="/version-logo.svg"
            alt="Version Logo"
            width={64}
            height={64}
            className="object-contain"
          />
        </div>

        <h1 className="text-4xl font-serif mb-4">Welcome to Version</h1>
        <p className="font-times text-lg mb-8">version control for writer</p>

        <button className="bg-white text-[#2b2b2b] border border-[#2b2b2b] px-6 py-3 rounded-md font-medium flex items-center justify-center gap-3 hover:bg-[#f9f9f9] transition">
          <Image src="/google-icon.svg" alt="Google" width={20} height={20} />
          Sign in with Google
        </button>
      </div>
    </main>
  );
}
