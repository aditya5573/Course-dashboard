import { Suspense } from 'react'
import CourseList from '@/components/CourseList'
import { Skeleton } from '@/components/ui/skeleton'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-800">Course Catalogue</h1>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <Suspense fallback={<CoursesLoadingSkeleton />}>
          <CourseList />
        </Suspense>
      </main>
    </div>
  )
}

function CoursesLoadingSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(6)].map((_, i) => (
        <Skeleton key={i} className="h-[200px] w-full" />
      ))}
    </div>
  )
}

