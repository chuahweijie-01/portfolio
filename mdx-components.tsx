import type { MDXComponents } from 'mdx/types'

const components: MDXComponents = {
    h2: ({ children }) => (
        <h2 className="text-2xl font-bold">{children}</h2>
    ),
    h3: ({ children }) => (
        <h3 className="text-xl font-semibold mt-8 mb-4">{children}</h3>
    ),
    p: ({ children }) => (
        <p className="text-base leading-7 pb-4">{children}</p>
    ),
    code: ({ children }) => (
        <code className="bg-gray-100 text-sm px-1 py-0.5 rounded">{children}</code>
    ),
}

export function useMDXComponents(): MDXComponents {
    return components
}