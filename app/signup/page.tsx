import SignUpForm from '@/components/auth/SignUpForm'
import Link from 'next/link'

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <SignUpForm />

        <div className="text-center mt-6">
          <p className="text-gray-600 dark:text-gray-400">
            既にアカウントをお持ちの方は{' '}
            <Link
              href="/login"
              className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
            >
              こちらからログイン
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}