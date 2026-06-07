import type { MDXComponents } from 'mdx/types'

const components: MDXComponents = {
    h3: ({ children }) => (
        <h3 className="text-2xl font-bold mb-5 text-indigo-700 dark:text-indigo-300">{children}</h3>
    ),
    p: ({ children }) => (
        <p className="text-base leading-7 pb-4 dark:text-white">{children}</p>
    ),
    code: ({ children }) => (
        <code className="bg-gray-100 text-sm px-1 py-0.5 rounded dark:text-black">{children}</code>
    ),
}

export function useMDXComponents(): MDXComponents {
    return components
}