import fs from "fs/promises";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import rehypeDocument from 'rehype-document';
import rehypeFormat from 'rehype-format';
import rehypeStringify from 'rehype-stringify';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';
import rehypePrettyCode from "rehype-pretty-code";
import { transformerCopyButton } from '@rehype-pretty/transformers';
import OnThisPage from "@/components/onthispage";
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';

// Make the function async
export default async function Page({ params }) {
    try {
        const { slug } = await params;
        const filepath = `content/${slug}.md`;
        const fileExists = await fs.access(filepath).then(() => true).catch(() => false);
        if (!fileExists) {
            notFound();
            return;
        }
        const fileContent = await fs.readFile(filepath, "utf-8");
        const { content, data } = matter(fileContent);

        const processor = unified()
            .use(remarkParse)
            .use(remarkRehype)
            .use(rehypeDocument, { title: '👋🌍' })
            .use(rehypeFormat)
            .use(rehypeStringify)
            .use(rehypeSlug)
            .use(rehypeAutolinkHeadings)
            .use(rehypePrettyCode, {
                theme: "github-dark",
                transformers: [
                    transformerCopyButton({
                        visibility: 'always',
                        feedbackDuration: 3000,
                    }),
                ],
            });

        const htmlContent = (await processor.process(content)).toString();

        return (
            <div className="max-w-5xl mx-auto p-4">
                <h1 className="text-4xl font-bold mb-2">{data.title}</h1>
                <p className="text-base mb-4 border-l-4 border-gray-300 pl-4 italic">
                    &quot;{data.description}&quot;
                </p>
                <div>
                    <div className="flex gap-2 "></div>
                    <p className="text-sm text-gray-500 mb-4 italic">By {data.author}</p>
                    <p className="text-sm text-gray-500 mb-4">{data.date}</p>
                </div>
                <div
                    className="prose dark:prose-invert"
                    dangerouslySetInnerHTML={{ __html: htmlContent }}
                ></div>
                <OnThisPage htmlContent={htmlContent} />
            </div>
        );
    } catch (error) {
        console.error("Error loading blog post:", error);
        notFound();
    }
}
