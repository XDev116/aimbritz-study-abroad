import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Calendar, Clock, User } from "lucide-react";
import { blogPosts, getAllBlogSlugs, getBlogPostBySlug } from "@/lib/data/blog";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id && p.category === post.category)
    .slice(0, 2);

  return (
    <div className="container mx-auto px-6 py-12 lg:px-8">
      {/* Back Button */}
      <div className="mb-8">
        <Button variant="ghost" asChild>
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Content */}
        <article className="lg:col-span-2">
          {/* Header */}
          <div className="mb-8">
            <div className="text-6xl mb-6">{post.image}</div>
            <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded text-sm font-medium mb-4">
              {post.category}
            </span>
            <h1 className="text-4xl font-bold tracking-tight mb-6">{post.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
              <span className="flex items-center gap-2">
                <User className="h-4 w-4" />
                {post.author}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {new Date(post.publishedAt).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="text-xl text-muted-foreground mb-8 font-medium">
              {post.excerpt}
            </div>
            <div className="whitespace-pre-wrap leading-relaxed">
              {post.content}
            </div>
          </div>

          {/* Share & Tags */}
          <div className="mt-12 pt-8 border-t">
            <h3 className="font-semibold mb-4">Share this article</h3>
            <div className="flex gap-3">
              <Button variant="outline" size="sm">Share</Button>
            </div>
          </div>
        </article>

        {/* Sidebar */}
        <aside className="space-y-8">
          {/* Author Card */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">About the Author</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                  {post.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-semibold">{post.author}</div>
                  <div className="text-sm text-muted-foreground">Expert Contributor</div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Experienced education consultant helping students achieve their study abroad dreams.
              </p>
            </CardContent>
          </Card>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Related Articles</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {relatedPosts.map((relatedPost) => (
                  <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`}>
                    <div className="group cursor-pointer">
                      <div className="text-2xl mb-2">{relatedPost.image}</div>
                      <h4 className="font-semibold text-sm group-hover:text-primary transition-colors mb-1">
                        {relatedPost.title}
                      </h4>
                      <p className="text-xs text-muted-foreground">{relatedPost.readTime}</p>
                    </div>
                  </Link>
                ))}
              </CardContent>
            </Card>
          )}

          {/* CTA Card */}
          <Card className="bg-primary text-primary-foreground">
            <CardHeader>
              <CardTitle>Need Expert Guidance?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm opacity-90">
                Get personalized counseling from our expert team to make your study abroad dreams a reality.
              </p>
              <Button variant="secondary" className="w-full" asChild>
                <Link href="/contact">
                  Schedule Consultation <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </aside>
      </div>
    </div>
  );
}
