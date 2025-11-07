"use client";

import Link from "next/link";
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Calendar, Clock } from "lucide-react";
import { blogPosts, blogCategories } from "@/lib/data/blog";

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = selectedCategory === "All"
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="container mx-auto px-6 py-12 lg:px-8">
      {/* Header */}
      <div className="mx-auto max-w-2xl text-center mb-12">
        <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
          Study Abroad Blog
        </h1>
        <p className="text-lg text-muted-foreground">
          Expert insights, tips, and guides to help you navigate your study abroad journey.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {blogCategories.map(category => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {filteredPosts.map((post) => (
          <Link key={post.id} href={`/blog/${post.slug}`}>
            <Card className="h-full hover:shadow-xl transition-all hover:scale-[1.02] cursor-pointer">
              <CardHeader>
                <div className="text-5xl mb-4">{post.image}</div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-medium">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {post.readTime}
                  </span>
                </div>
                <CardTitle className="text-2xl mb-2 hover:text-primary transition-colors">
                  {post.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">By {post.author}</span>
                  <Button variant="ghost" size="sm" className="group">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-lg text-muted-foreground mb-4">No blog posts found in this category.</p>
          <Button onClick={() => setSelectedCategory("All")}>
            View All Posts
          </Button>
        </div>
      )}

      {/* Newsletter CTA */}
      <div className="bg-secondary/30 rounded-2xl p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
        <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
          Subscribe to our newsletter for the latest study abroad tips, university updates, and scholarship opportunities.
        </p>
        <Button size="lg" asChild>
          <Link href="/contact">
            Contact Us <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
