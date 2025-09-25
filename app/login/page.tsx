import LoginForm from '@/components/auth/LoginForm'
import Link from 'next/link'

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <LoginForm />

        <div className="text-center mt-6">
          <p className="text-gray-600 dark:text-gray-400">
            アカウントをお持ちでない方は{' '}
            <Link
              href="/signup"
              className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
            >
              こちらから新規登録
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}