import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface JobCardProps {
  title: string
  company: string
  location: string
  description: string
}

export function JobCard({ title, company, location, description }: JobCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <div className="text-sm text-gray-500">{company} - {location}</div>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
      </CardContent>
    </Card>
  )
}