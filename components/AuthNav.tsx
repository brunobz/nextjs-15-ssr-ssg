"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import GithubIconWhite from "assets/images/github-mark-white.png";
import GithubIconDark from "assets/images/github-mark.png";
import Image from "next/image";
import { useTheme } from "next-themes";

export default function AuthNav() {
  const { data: session } = useSession();
  const { theme } = useTheme();
  const GithubIcon = theme === "dark" ? GithubIconWhite : GithubIconDark;

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
