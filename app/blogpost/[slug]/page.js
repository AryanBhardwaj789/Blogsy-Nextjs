export default async function Page({ params }) {
    const blog = {
        title: "Typescript tutorial in hindi",
        author: "John Doe",
        description: "This is a sample blog description.",
        date: "2023-10-01T00:00:00Z",
        content: "<p>This is the blog content.</p>"
    };

    return (
        <div className="max-w-5xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-2">{blog.title}</h1>
            <p className="text-base mb-4 border-l-4 border-gray-300 pl-4 italic">&quot;{blog.description}&quot;</p>
            <div>
            <div className="flex gap-2 "></div>
            <p className="text-sm text-gray-500 mb-4 italic">By {blog.author}</p>
            <p className="text-sm text-gray-500 mb-4">{new Date(blog.date).toLocaleDateString()}</p>
            </div>
            <div className="prose" dangerouslySetInnerHTML={{ __html: blog.content }}></div>
        </div>
    )
}
