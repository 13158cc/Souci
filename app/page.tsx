import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
      <div className="text-center max-w-md mx-auto p-8">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-8">
          Welcome to Souci
        </h1>

        <div className="space-y-4">
          <Link
            href="/login"
            className="w-full block py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
          >
            ログイン
          </Link>

          <Link
            href="/signup"
            className="w-full block py-3 px-6 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors"
          >
            新規登録
          </Link>
        </div>

        <p className="mt-8 text-gray-600 dark:text-gray-400 text-sm">
          Supabaseを使用したメール認証システム
        </p>
      </div>
    </div>
  )
}
