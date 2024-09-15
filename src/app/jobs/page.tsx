import { Header } from '@/components/Header'
import { JobCard } from '@/components/JobCard'

// This would typically come from an API or database
const jobs = [
  { title: 'Frontend Developer', company: 'TechCorp', location: 'Remote', description: 'We are looking for a skilled frontend developer...' },
  { title: 'UX Designer', company: 'DesignStudio', location: 'New York, NY', description: 'Join our creative team as a UX designer...' },
]

export default function JobsPage() {
  return (
    <div>
      <Header />
      <main className="container mx-auto mt-8">
        <h1 className="text-3xl font-bold mb-4">Available Jobs</h1>
        <div className="grid gap-4">
          {jobs.map((job, index) => (
            <JobCard key={index} {...job} />
          ))}
        </div>
      </main>
    </div>
  )
}