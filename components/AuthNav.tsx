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
      <div className="flex items-center gap-2" aria-live="polite">
        <span className="text-sm">
          Hello, <strong>{session.user.name}</strong>
        </span>
        <button
          type="button"
          onClick={() => signOut()}
          className="rounded-lg border border-white/20 px-3 text-sm hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-primary"
          aria-label="Sign out from your account"
        >
          Sign out
        </button>
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => signIn("github")}
      className="flex items-center gap-2 rounded-lg border border-white/20 px-3 text-sm hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-primary"
      aria-label="Sign in with GitHub"
    >
      <Image
        src={GithubIcon}
        alt="Sign in with GitHub Icon"
        width={20}
        height={20}
        aria-hidden="true"
      />
      <span>Sign in</span>
    </button>
  );
}
