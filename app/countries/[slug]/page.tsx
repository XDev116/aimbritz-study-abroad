import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, CheckCircle, DollarSign, FileText, GraduationCap, Home } from "lucide-react";
import { countries, getAllCountrySlugs, getCountryBySlug } from "@/lib/data/countries";
import { getUniversitiesByCountry } from "@/lib/data/universities";

interface CountryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return getAllCountrySlugs().map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: CountryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const country = getCountryBySlug(slug);

  if (!country) {
    return {
      title: "Country Not Found",
    };
  }

  return {
    title: `Study in ${country.name}`,
    description: country.description,
  };
}

export default async function CountryPage({ params }: CountryPageProps) {
  const { slug } = await params;
  const country = getCountryBySlug(slug);

  if (!country) {
    notFound();
  }

  const universities = getUniversitiesByCountry(country.code);

  return (
    <div className="container mx-auto px-6 py-12 lg:px-8">
      {/* Breadcrumb */}
      <nav className="mb-8 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-primary">Home</Link>
        {" / "}
        <Link href="/countries" className="hover:text-primary">Countries</Link>
        {" / "}
        <span className="text-foreground">{country.name}</span>
      </nav>

      {/* Header */}
      <div className="mb-12">
        <div className="text-6xl mb-4">{country.flag}</div>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
          Study in {country.name}
        </h1>
        <p className="text-xl text-muted-foreground">
          {country.description}
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-muted-foreground">Universities</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{country.universitiesCount}+</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-muted-foreground">Programs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1000+</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-muted-foreground">Intakes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2-3/Year</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-muted-foreground">Work Rights</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Yes</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-12">
          {/* Why Study Here */}
          <section>
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-bold">Why Study in {country.name}?</h2>
            </div>
            <div className="space-y-3">
              {country.benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">{benefit}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Top Courses */}
          <section>
            <div className="flex items-center gap-2 mb-6">
              <FileText className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-bold">Popular Courses</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {country.topCourses.map((course, idx) => (
                <Card key={idx}>
                  <CardHeader>
                    <CardTitle className="text-lg">{course}</CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </section>

          {/* Visa Information */}
          <section>
            <div className="flex items-center gap-2 mb-6">
              <FileText className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-bold">Visa Information</h2>
            </div>
            <Card>
              <CardContent className="pt-6">
                <p className="text-muted-foreground whitespace-pre-line">{country.visaInfo}</p>
              </CardContent>
            </Card>
          </section>

          {/* Universities */}
          {universities.length > 0 && (
            <section>
              <div className="flex items-center gap-2 mb-6">
                <GraduationCap className="h-6 w-6 text-primary" />
                <h2 className="text-3xl font-bold">Top Universities</h2>
              </div>
              <div className="grid gap-4">
                {universities.map((uni) => (
                  <Link key={uni.id} href={`/universities/${uni.slug}`}>
                    <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle className="text-xl mb-2">
                              <span className="text-3xl mr-2">{uni.logo}</span>
                              {uni.name}
                            </CardTitle>
                            <p className="text-sm text-muted-foreground">
                              {uni.city} • Ranking: #{uni.ranking} • {uni.type}
                            </p>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-3">
                          {uni.description.substring(0, 150)}...
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {uni.courses.slice(0, 3).map((course) => (
                            <span
                              key={course.id}
                              className="text-xs bg-primary/10 text-primary px-2 py-1 rounded"
                            >
                              {course.name}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
              <div className="mt-6 text-center">
                <Button variant="outline" asChild>
                  <Link href="/universities">
                    View All Universities <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </section>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Cost of Living */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-primary" />
                <CardTitle>Cost of Living</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{country.costOfLiving}</p>
            </CardContent>
          </Card>

          {/* Quick Facts */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Facts</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div>
                <div className="font-semibold mb-1">Country Code</div>
                <div className="text-muted-foreground">{country.code}</div>
              </div>
              <div>
                <div className="font-semibold mb-1">Universities</div>
                <div className="text-muted-foreground">{country.universitiesCount}+</div>
              </div>
              <div>
                <div className="font-semibold mb-1">Language</div>
                <div className="text-muted-foreground">English</div>
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <Card className="bg-primary text-primary-foreground">
            <CardHeader>
              <CardTitle>Ready to Apply?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm opacity-90">
                Get expert guidance for studying in {country.name}. Our counselors will help you choose the right university and navigate the application process.
              </p>
              <Button variant="secondary" className="w-full" asChild>
                <Link href="/contact">
                  Schedule Consultation <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
