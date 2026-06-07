import fs from 'fs'
import path from 'path'

export interface PostItem {
    slug: string
    title: string
    description?: string
    summary: string
}

export async function getAllPosts(): Promise<PostItem[]> {
    const contentDir = path.join(process.cwd(), 'src', 'content')
    const files = fs.readdirSync(contentDir)
    const mdxFiles = files.filter(file => file.endsWith('.mdx'))
    const posts = await Promise.all(
        mdxFiles.map(async (filename) => {
            const slug = filename.replace('.mdx', '')
            const { metadata } = await import(`@/src/content/${filename}`)

            return {
                slug,
                title: metadata.title || 'Untitled Post',
                date: metadata.created || '',
                description: metadata.description,
                summary: metadata.summary || '',
            }
        })
    )

    return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}