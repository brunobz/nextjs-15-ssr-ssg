"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import GithubIcon from "assets/images/github-mark-white.png";
import Image from "next/image";

export default function AuthNav() {
  const { data: session } = useSession();

  if (session?.user) {
    return (
      <div className="flex items-center">
        <span className="text-sm">Olá, {session.user.name}</span>
        <button
          className="rounded-lg border border-white/20 px-3 text-sm hover:bg-white/10"
          onClick={() => signOut()}
        >
          Sair
        </button>
      </div>
    );
  }

  return (
    <button
      className="flex rounded-lg border border-white/20 px-3 gap-2 text-sm hover:bg-white/10"
      onClick={() => signIn("github")}
    >
      <Image src={GithubIcon} alt="Github Icon" width={20} />
      Sign in
    </button>
  );
}
