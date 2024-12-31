"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const { data: session } = useSession();
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path
      ? "bg-gray-900 text-white"
      : "text-gray-300 hover:bg-gray-700 hover:text-white";
  };

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-white font-bold text-xl">
              Social Login
            </Link>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  href="/"
                  className={`px-3 py-2 rounded-md text-sm font-medium ${isActive(
                    "/"
                  )}`}
                >
                  Home
                </Link>
                {session && (
                  <>
                    <Link
                      href="/dashboard"
                      className={`px-3 py-2 rounded-md text-sm font-medium ${isActive(
                        "/dashboard"
                      )}`}
                    >
                      Dashboard
                    </Link>
                    <Link
                      href="/profile"
                      className={`px-3 py-2 rounded-md text-sm font-medium ${isActive(
                        "/profile"
                      )}`}
                    >
                      Profile
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
          {session && (
            <div className="flex items-center">
              <img
                src={session.user?.image || "/default-avatar.png"}
                alt="Profile"
                className="h-8 w-8 rounded-full"
              />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
