import Image from "next/image";
import Link from "next/link";
import MadKuduLogo from "@/assets/madkudu_logo.svg";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <main className="flex min-h-[calc(100vh-var(--footer-height))] flex-col items-center justify-between gap-8 bg-zinc-50 p-24">
        <Image src={MadKuduLogo} width={400} alt="MadKudu logo" />
        <div>
          <h1 className="text-center text-4xl font-bold">
            MadKudu Work Sample - Fullstack Intern
          </h1>
          <p className="pt-6 text-center text-xl">
            Made by <span className="font-bold text-blue-800">Eliot Bas</span>
          </p>
        </div>
        <Link
          href="/antelopes"
          className="mb-8 rounded-lg bg-sky-900 px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-sky-600"
        >
          Enter App
        </Link>
      </main>
      <Footer />
    </>
  );
}
