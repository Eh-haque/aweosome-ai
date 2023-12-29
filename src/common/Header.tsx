import { Link } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

function MyDropdown() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
        More
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
          <Menu.Item>
            <a
              className="p-2 text-gray-700 font-semibold hover:text-gray-900 hover:hover:bg-slate-200 rounded-lg w-full block"
              href="/favorites"
            >
              Favorites
            </a>
          </Menu.Item>
          <Menu.Item>
            <a
              className="p-2 text-gray-700 font-semibold hover:text-gray-900 hover:hover:bg-slate-200 rounded-lg  w-full block"
              href="/resources"
            >
              Resources
            </a>
          </Menu.Item>
          <Menu.Item>
            <a
              className="p-2 text-gray-700 font-semibold hover:text-gray-900 hover:hover:bg-slate-200 rounded-lg  w-full block"
              href="/latest-ai-news"
            >
              Latest AI News
            </a>
          </Menu.Item>
          <Menu.Item>
            <Link
              className="p-2 text-gray-700 font-semibold hover:text-gray-900 hover:hover:bg-slate-200 rounded-lg  w-full block"
              to="dashboard"
            >
              dashboard
            </Link>
          </Menu.Item>
          <Menu.Item>
            <button className="p-2 text-gray-700 font-semibold hover:text-gray-900 hover:hover:bg-slate-200 rounded-lg  w-full block">
              Join Discord
            </button>
          </Menu.Item>
          <Menu.Item>
            <button className="px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-700  w-full block">
              Subscribe
            </button>
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default function Header() {
  return (
    <header className="bg-white shadow-md flex items-center justify-between px-4 py-4 sticky top-0">
      <div>
        <h1 className="text-xl space-x-4 font-semibold text-black">
          Awesome AI Platform
        </h1>
      </div>
      <div className="lg:hidden">
        <MyDropdown />
      </div>

      <nav className="hidden lg:flex space-x-4">
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
        <Link
          className="p-2 text-gray-700 font-semibold hover:text-gray-900 hover:hover:bg-slate-200 rounded-lg"
          to="dashboard"
        >
          dashboard
        </Link>
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
