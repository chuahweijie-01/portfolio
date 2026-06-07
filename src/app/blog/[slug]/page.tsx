export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params
    const { default: Post, metadata } = await import(`@/src/content/${slug}.mdx`)

    return (
        <>
            <div>
                <div className="pb-5">
                    <h1 className="text-3xl font-bold mb-2">{metadata.title}</h1>
                    <p className="pb-10">{metadata.description}</p>
                    <p className="text-sm text-gray-500 mb-8">Created on {metadata.created} and last updated on {metadata.updated}</p>
                </div>
                <Post />
            </div>
        </>
    )
}
