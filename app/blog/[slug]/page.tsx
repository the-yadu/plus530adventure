import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import Container from '@/components/ui/Container';
import { getAllPosts, getPostBySlug } from '@/lib/blog';
import { Metadata } from 'next';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${post.image}')` }}
        />
        <Container className="relative z-20">
          <Link href="/blog" className="inline-flex items-center text-white hover:text-orange-400 mb-6 transition-colors">
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Blog
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {post.title}
          </h1>
          <div className="flex items-center space-x-6 text-gray-200">
            <div className="flex items-center space-x-2">
              <Calendar className="h-5 w-5" />
              <span>{new Date(post.date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</span>
            </div>
            <div className="flex items-center space-x-2">
              <User className="h-5 w-5" />
              <span>{post.author}</span>
            </div>
          </div>
        </Container>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <Container>
          <article className="max-w-4xl mx-auto prose prose-lg prose-orange">
            <ReactMarkdown
              components={{
                h1: ({ children }) => <h1 className="text-4xl font-bold text-gray-900 mb-4 mt-8">{children}</h1>,
                h2: ({ children }) => <h2 className="text-3xl font-bold text-gray-900 mb-3 mt-6">{children}</h2>,
                h3: ({ children }) => <h3 className="text-2xl font-bold text-gray-900 mb-2 mt-4">{children}</h3>,
                p: ({ children }) => <p className="text-gray-700 mb-4 leading-relaxed">{children}</p>,
                ul: ({ children }) => <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700">{children}</ul>,
                ol: ({ children }) => <ol className="list-decimal list-inside mb-4 space-y-2 text-gray-700">{children}</ol>,
                li: ({ children }) => <li className="text-gray-700">{children}</li>,
                a: ({ href, children }) => (
                  <Link href={href || '#'} className="text-orange-600 hover:text-orange-700 underline">
                    {children}
                  </Link>
                ),
                blockquote: ({ children }) => (
                  <blockquote className="border-l-4 border-orange-600 pl-4 italic my-4 text-gray-600">
                    {children}
                  </blockquote>
                ),
                strong: ({ children }) => <strong className="font-bold text-gray-900">{children}</strong>,
                code: ({ children }) => (
                  <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-gray-800">
                    {children}
                  </code>
                ),
              }}
            >
              {post.content}
            </ReactMarkdown>
          </article>
        </Container>
      </section>
    </div>
  );
}
