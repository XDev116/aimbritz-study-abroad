import Link from "next/link";
import type { Metadata } from "next";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe } from "lucide-react";
import { countries } from "@/lib/data/countries";

export const metadata: Metadata = {
  title: "Study Abroad Countries",
  description: "Explore top study destinations worldwide. Find detailed information about studying in USA, UK, Canada, Australia, Germany, and more countries.",
};

export default function CountriesPage() {
  return (
    <div className="container mx-auto px-6 py-12 lg:px-8">
      {/* Header */}
      <div className="mx-auto max-w-2xl text-center mb-16">
        <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
          Study Abroad Destinations
        </h1>
        <p className="text-lg text-muted-foreground">
          Discover world-class education opportunities across {countries.length} countries.
          Compare programs, costs, visa requirements, and post-study work options.
        </p>
      </div>

      {/* Countries Grid */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {countries.map((country) => (
          <Link key={country.id} href={`/countries/${country.slug}`}>
            <Card className="h-full hover:shadow-xl transition-all hover:scale-105 cursor-pointer">
              <CardHeader>
                <div className="text-5xl mb-4">{country.flag}</div>
                <CardTitle className="text-2xl">{country.name}</CardTitle>
                <CardDescription className="text-base">
                  {country.universitiesCount}+ Universities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {country.description.substring(0, 150)}...
                </p>
                <div className="space-y-2">
                  <div className="text-sm font-semibold">Top Courses:</div>
                  <div className="flex flex-wrap gap-2">
                    {country.topCourses.slice(0, 3).map((course, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-primary/10 text-primary px-2 py-1 rounded"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
                <Button variant="ghost" className="mt-4 w-full group">
                  View Details
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {/* CTA Section */}
      <div className="mt-20 bg-secondary/30 rounded-2xl p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Can't Decide Where to Study?</h2>
        <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
          Our expert counselors can help you choose the perfect destination based on your goals, budget, and preferences.
        </p>
        <Button size="lg" asChild>
          <Link href="/contact">
            Get Free Consultation <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
