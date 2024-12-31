"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import LoginButton from "./LoginButton";

const LoginCard = () => {
  const { data: session } = useSession();

  const handleLogin = async (provider: "google" | "twitter") => {
    await signIn(provider, { callbackUrl: "/" });
  };

  return (
    <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-md">
      <div className="text-center mb-8">
        {session ? (
          <>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Welcome, {session.user?.name}!
            </h1>
            <button
              onClick={() => signOut()}
              className="text-red-600 hover:text-red-700 font-medium"
            >
              Sign Out
            </button>
          </>
        ) : (
          <>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Welcome Back
            </h1>
            <p className="text-gray-600">Sign in to continue to your account</p>
          </>
        )}
      </div>

      {!session && (
        <div className="space-y-4">
          <LoginButton
            provider="google"
            onClick={() => handleLogin("google")}
          />
          <LoginButton
            provider="twitter"
            onClick={() => handleLogin("twitter")}
          />
        </div>
      )}
    </div>
  );
};

export default LoginCard;
