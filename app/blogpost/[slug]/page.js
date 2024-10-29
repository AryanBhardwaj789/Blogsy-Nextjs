import fs from "fs";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import rehypeDocument from 'rehype-document'
import rehypeFormat from 'rehype-format'
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import {unified} from 'unified'
import rehypePrettyCode from "rehype-pretty-code";
import { transformerCopyButton } from '@rehype-pretty/transformers'

export default async function Page({ params }) {
    // const blog = {
    //     title: "Typescript tutorial in hindi",
    //     author: "John Doe",
    //     description: "This is a sample blog description.",
    //     date: "2023-10-01T00:00:00Z",
    //     content: "<p>This is the blog content.</p>"
    // };

    const filepath = `content/${params.slug}.md`
    if(!fs.existsSync(filepath)){
        notFound()
        return
    }
        const fileContent = fs.readFileSync(filepath, "utf-8")
        const {content, data} = matter(fileContent)

    const processor = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeDocument, {title: '👋🌍'})
    .use(rehypeFormat)
    .use(rehypeStringify)
    .use(rehypePrettyCode, {
        theme: "github-dark",
        transformers: [
            transformerCopyButton({
              visibility: 'always',
              feedbackDuration: 3_000,
            }),
          ],
    })

    const htmlContent = (await processor.process(content)).toString()
  
    return (
        <div className="max-w-5xl mx-auto p-4">
            <h1 className="text-4xl font-bold mb-2">{data.title}</h1>
            <p className="text-base mb-4 border-l-4 border-gray-300 pl-4 italic">&quot;{data.description}&quot;</p>
            <div>
            <div className="flex gap-2 "></div>
            <p className="text-sm text-gray-500 mb-4 italic">By {data.author}</p>
            <p className="text-sm text-gray-500 mb-4">{data.date}</p>
            </div>
            <div className="prose dark:prose-invert" dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
        </div>
    )
}
