import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { blogPosts } from "@/data/blog";
import { buildMetadata } from "@/lib/seo";
import { SafeImage } from "@/components/shared/safe-image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface BlogDetailPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: BlogDetailPageProps): Metadata {
  const post = blogPosts.find((item) => item.slug === params.slug);
  if (!post) return buildMetadata("Post Not Found | PearlSmile", "Dental education article unavailable.");
  return buildMetadata(`${post.title} | PearlSmile Blog`, post.excerpt, `/blog/${post.slug}`);
}

export default function BlogDetailPage({ params }: BlogDetailPageProps) {
  const post = blogPosts.find((item) => item.slug === params.slug);
  if (!post) notFound();

  return (
    <main>
      <section className="border-b border-slate-200 bg-white py-14">
        <div className="container max-w-4xl space-y-5">
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
          <h1 className="text-4xl font-semibold text-slate-900 md:text-5xl">{post.title}</h1>
          <p className="text-sm text-slate-500">
            {post.publishedAt} • {post.readTime}
          </p>
          <div className="relative h-80 overflow-hidden rounded-2xl border border-slate-200">
            <SafeImage
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover"
              fallbackSrc="/images/placeholders/blog.svg"
            />
          </div>
        </div>
      </section>
      <section className="container max-w-4xl py-12">
        <div className="space-y-5 text-base leading-relaxed text-slate-700">
          {post.content.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="mt-8 flex gap-3">
          <Button asChild>
            <Link href="/booking">Book Consultation</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/blog">Back to Blog</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
