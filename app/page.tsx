import Link from "next/link";
export default function Home() {
  return (
    <main
      className="bg-[#1E1E1E] w-full
     h-screen"
    >
      <div className="w-1/4 flex gap-4 h-8 mx-auto pt-2  text-white">
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
      </div>
      <h1 className="w-full mt-56 text-white text-5xl flex self-center justify-center">
        home page
      </h1>
    </main>
  );
}
