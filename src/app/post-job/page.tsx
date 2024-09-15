import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Header } from '@/components/Header'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function PostJobPage() {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }

  return (
    <div>
      <Header />
      <main className="container mx-auto mt-8">
        <h1 className="text-3xl font-bold mb-4">Post a New Job</h1>
        <form className="space-y-4">
          <Input placeholder="Job Title" />
          <Input placeholder="Company" />
          <Input placeholder="Location" />
          <Textarea placeholder="Job Description" />
          <Button type="submit">Post Job</Button>
        </form>
      </main>
    </div>
  )
}