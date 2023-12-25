export default function Header() {
  return (
    <header className="bg-white shadow-md flex items-center justify-between px-4 py-4 sticky top-0">
      <div>
        <h1 className="text-xl space-x-4 font-semibold text-black">Awesome AI Platform</h1>
      </div>
      <nav className="flex space-x-4">
        <a
          className="p-2 text-gray-700 font-semibold hover:text-gray-900 hover:hover:bg-slate-200 rounded-lg"
          href="/favorites"
        >
          Favorites
        </a>
        <a
          className="p-2 text-gray-700 font-semibold hover:text-gray-900 hover:hover:bg-slate-200 rounded-lg"
          href="/resources"
        >
          Resources
        </a>
        <a
          className="p-2 text-gray-700 font-semibold hover:text-gray-900 hover:hover:bg-slate-200 rounded-lg"
          href="/latest-ai-news"
        >
          Latest AI News
        </a>
        <button className="p-2 text-gray-700 font-semibold hover:text-gray-900 hover:hover:bg-slate-200 rounded-lg">
          Join Discord
        </button>
        <button className="inline-block px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-700">
          Subscribe
        </button>
      </nav>
    </header>
  );
}
