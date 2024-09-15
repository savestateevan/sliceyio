import { Header } from '@/components/Header'

export default function Home() {
  return (
    <div>
      <Header />
      <main className="container mx-auto mt-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to the Job Board</h1>
        <p>Find your next opportunity or post a job listing.</p>
      </main>
    </div>
  )
}