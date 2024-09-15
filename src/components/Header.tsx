import Link from 'next/link'
import { UserButton, SignedIn, SignedOut } from "@clerk/nextjs";

export function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-sm">
      <Link href="/" className="text-2xl font-bold">s</Link>
      <nav>
        <Link href="/jobs" className="mr-4">Jobs</Link>
        <SignedIn>
          <Link href="/post-job" className="mr-4">Post a Job</Link>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
        <SignedOut>
          <Link href="/sign-in" className="mr-4">Sign In</Link>
          <Link href="/sign-up">Sign Up</Link>
        </SignedOut>
      </nav>
    </header>
  )
}