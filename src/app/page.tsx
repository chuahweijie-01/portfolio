
import Link from "next/link";
import { getAllPosts } from "../lib/posts";

export default async function Home() {

  const posts = await getAllPosts()

  return (
    <div>
      <h2 className="font-bold mb-8 text-sm text-rose-500">ARTICLES AND CONTENTS</h2>
      <div className="flex gap-12">
        <main className="flex-2/3">
          {posts.map((post) => (
            <article key={post.slug}>
              <Link href={`/blog/${post.slug}`}>
                <div>
                  <span className="text-xl font-bold text-gray-800 border-b border-transparent hover:border-indigo-700">
                    {post.title}</span>
                </div>
              </Link>
              {post.description && (
                <p className="text-gray-500 mt-1 mb-4">{post.description}</p>
              )}
              {post.summary && (
                <p className="text-gray-600 mt-2">{post.summary}</p>
              )}
              <Link href={`/blog/${post.slug}`}>
                <div className='flex mt-5 group cursor-pointer'>
                  Read more
                  <div className='flex items-center ml-2'>
                    <svg width="36" height="12" viewBox="0 0 36 12" fill="none">
                      <path d="M0.75 6H11.25 M6 0.75L11.25 6L6 11.25" className="stroke-current text-transparent group-hover:text-indigo-700 transition-colors duration-200"></path>
                      <path d="M15 10L19.5 5.5L15 1" className="stroke-current text-transparent group-hover:text-indigo-500 transition-colors duration-400"></path>
                      <path d="M23 10L27.5 5.5L23 1" className="stroke-current text-transparent group-hover:text-indigo-300 transition-colors duration-600"></path>
                      <path d="M31 10L35.5 5.5L31 1" className="stroke-current text-transparent group-hover:text-indigo-100 transition-colors duration-800"></path>
                    </svg>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </main>
        <div className="flex-1/3"></div>
      </div>
    </div>
  )
}
