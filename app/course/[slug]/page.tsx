import { notFound } from 'next/navigation'
import ReactMarkdown from 'react-markdown'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

async function fetchCourseContent(courseName: string) {
  const response = await fetch(`https://api.github.com/repos/yourusername/Course-Catalogue/contents/${courseName}/README.md`, {
    headers: {
      'Authorization': `token ${process.env.GITHUB_TOKEN}`,
      'Accept': 'application/vnd.github.v3.raw'
    },
    next: { revalidate: 3600 } // Revalidate every hour
  })
  
  if (!response.ok) {
    return null
  }

  return response.text()
}

export default async function CoursePage({ params }: { params: { slug: string } }) {
  const courseContent = await fetchCourseContent(params.slug)

  if (!courseContent) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 py-8">
      <div className="container mx-auto px-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold">{params.slug.replace(/-/g, ' ')}</CardTitle>
          </CardHeader>
          <CardContent>
            <ReactMarkdown className="prose max-w-none">
              {courseContent}
            </ReactMarkdown>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

