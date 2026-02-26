import type { Metadata } from "next";
import Link from "next/link";

import { blogPosts } from "@/data/blog";
import { PageHero } from "@/components/shared/page-hero";
import { SafeImage } from "@/components/shared/safe-image";
import { buildMetadata } from "@/lib/seo";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = buildMetadata(
  "Dental Tips Blog | PearlSmile Dental Clinic",
  "Read practical dental care tips, preventive guidance, and patient-focused oral health education.",
  "/blog",
);

export default function BlogPage() {
  return (
    <main>
      <PageHero
        eyebrow="Dental Tips"
        title="Patient education for healthier smiles"
        description="Evidence-informed, easy-to-read guidance to improve oral care habits and booking readiness."
      />
      <section className="container py-12">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {blogPosts.map((post) => (
            <article key={post.id} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="relative h-52">
                <SafeImage
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="object-cover"
                  fallbackSrc="/images/placeholders/blog.svg"
                />
              </div>
              <div className="space-y-3 p-5">
                <div className="flex flex-wrap gap-2">
                  {post.tags.slice(0, 2).map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                </div>
                <h2 className="text-lg font-semibold text-slate-900">
                  <Link href={`/blog/${post.slug}`} className="hover:text-cyan-700">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-sm text-slate-600">{post.excerpt}</p>
                <p className="text-xs text-slate-500">
                  {post.publishedAt} • {post.readTime}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
