import React from 'react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"
import fs, { readFileSync } from 'fs';
import matter from 'gray-matter';

const dirContent = fs.readdirSync("content", "utf-8")
const blogs = dirContent.map(file=>{
  const fileContent = fs.readFileSync(`content/${file}`, "utf-8")
  const {data} = matter(fileContent)
  return data
})

// const blogs = [
//   {
//     title: 'First Blog Post',
//     description: 'This is the description for the first blog post.',
//     slug: 'first-blog-post',
//     date: '2023-10-01',
//     author: 'John Doe',
//     image: 'https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
//   },
//   {
//     title: 'Second Blog Post',
//     description: 'This is the description for the second blog post.',
//     slug: 'second-blog-post',
//     date: '2023-10-02',
//     author: 'Jane Smith',
//     image: 'https://images.pexels.com/photos/1240527/pexels-photo-1240527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
//   },
//   {
//     title: 'Third Blog Post',
//     description: 'This is the description for the third blog post.',
//     slug: 'third-blog-post',
//     date: '2023-10-02',
//     author: 'Will Byers',
//     image: 'https://images.pexels.com/photos/965345/pexels-photo-965345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
//   }
// ];

const Blog = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog, index) => (
          <Card key={index} className="shadow-md rounded-lg overflow-hidden">
            <CardHeader>
              <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
            </CardHeader>
            <CardContent>
              <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
              <p className="text-gray-300 mb-4">{blog.description}</p>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>{blog.author}</span>
                <span>{new Date(blog.date).toLocaleDateString()}</span>
              </div>
            </CardContent>
            <CardFooter>
              <a
                href={`/blogpost/${blog.slug}`}
                className="px-4 py-2 text-white bg-primary rounded-lg hover:bg-primary/70 focus:outline-none focus:bg-primary/70"
              >
                Read More
              </a>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Blog;
