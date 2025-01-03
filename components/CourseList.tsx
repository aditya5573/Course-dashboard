import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import Link from 'next/link'

async function fetchCourses() {
  const response = await fetch('https://api.github.com/repos/yourusername/Course-Catalogue/contents', {
    headers: {
      'Authorization': `token ${process.env.GITHUB_TOKEN}`,
      'Accept': 'application/vnd.github.v3+json'
    },
    next: { revalidate: 3600 } // Revalidate every hour
  })
  
  if (!response.ok) {
    throw new Error('Failed to fetch courses')
  }

  const data = await response.json()
  return data.filter((item: any) => item.type === 'dir')
}

export default async function CourseList() {
  const courses = await fetchCourses()

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.map((course: any) => (
        <Link href={`/course/${encodeURIComponent(course.name)}`} key={course.name}>
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle>{course.name.replace(/-/g, ' ')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500">Click to view course content</p>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}
