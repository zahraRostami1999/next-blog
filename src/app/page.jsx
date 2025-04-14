import Image from "next/image";
import Bannar from "@/assets/home/home.avif";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <div className="p-20">
        <header className="flex flex-row items-center justify-center">
          <div className="w-1/3">
            <Image src={Bannar} alt="Blog banner" width={400} height={300} />
          </div>
          <div className="w-1/2 ">
            <h1 className="text-4xl font-bold text-neutral-800">
              Hey there, lovely people! 👋 Welcome to <span className="text-amber-300">NabatBlog</span>
            </h1>
            <p className="text-xl text-neutral-600 mt-4">
              your daily dose of sweet and relatable stories. Think of this as your cozy corner of the internet where we chat about everything and nothing, the little things that make up our days. From funny mishaps to heartwarming moments, we're diving into the everyday adventures together. So grab a virtual cup of tea ☕, get comfy, and let's explore the sweetness of life, one blog post at a time. Stick around, and let's make some memories! ✨
            </p>
            <div className="w-1/2 my-5 flex gap-5 items-center">
              <Link href='/posts/create' className="bg-amber-700 rounded px-4 py-2 text-amber-100">Create One!</Link>
              <Link href='/posts' className="text-lg text-amber-600">What's new?</Link>
            </div>
          </div>
        </header>
        <main>

        </main>
      </div>

    </>
  );
}
