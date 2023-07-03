import Link from "next/link";
export default function Home() {
  return (
    <main
      className="bg-[#1E1E1E] bg-blend-overlay w-full
     h-screen"
    >
      <div className="w-11/12 md:w-1/2 grid grid-cols-3 md:grid-flow-row gap-3 md:gap-4 h-8 mx-auto  text-white">
        <Link
          className="bg-gray-700 mt-4 opacity-50 rounded-lg px-4 flex self-center text-white py-2"
          href="/lbst"
        >
          LBST
        </Link>
        <Link
          className="bg-gray-700 opacity-50 rounded-lg px-4 flex self-center mt-4 text-white py-2"
          href="/p2p"
        >
          p2p
        </Link>
        <Link
          className="bg-gray-700 opacity-50 rounded-lg px-4 flex self-center mt-4 text-white py-2"
          href="/doc"
        >
          doc
        </Link>
        <Link
          className="bg-gray-700 opacity-50 rounded-lg px-4 flex self-center mt-4 text-white py-2"
          href="/signUp"
        >
          Sign up
        </Link>
        <Link
          className="bg-gray-700 opacity-50 rounded-lg px-4 flex self-center mt-4 text-white py-2"
          href="/signIn"
        >
          Sign in
        </Link>
      </div>
      <div className="w-11/12 mx-auto mt-[15%] flex self-center justify-center">
        <h1 className=" text-white text-5xl">home page</h1>
      </div>
    </main>
  );
}
