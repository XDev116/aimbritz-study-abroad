import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Award, BookOpen, Building, Calendar, DollarSign, ExternalLink, Globe, MapPin } from "lucide-react";
import { getAllUniversitySlugs, getUniversityBySlug } from "@/lib/data/universities";

interface UniversityPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return getAllUniversitySlugs().map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: UniversityPageProps): Promise<Metadata> {
  const { slug } = await params;
  const university = getUniversityBySlug(slug);

  if (!university) {
    return {
      title: "University Not Found",
    };
  }

  return {
    title: `${university.name}`,
    description: university.description,
  };
}

export default async function UniversityPage({ params }: UniversityPageProps) {
  const { slug } = await params;
  const university = getUniversityBySlug(slug);

  if (!university) {
    notFound();
  }

  return (
    <div className="container mx-auto px-6 py-12 lg:px-8">
      {/* Breadcrumb */}
      <nav className="mb-8 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-primary">Home</Link>
        {" / "}
        <Link href="/universities" className="hover:text-primary">Universities</Link>
        {" / "}
        <span className="text-foreground">{university.name}</span>
      </nav>

      {/* Header */}
      <div className="mb-12">
        <div className="text-7xl mb-4">{university.logo}</div>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
          {university.name}
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-4">
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5" />
            {university.city}, {university.country}
          </div>
          <div className="flex items-center gap-2">
            <Award className="h-5 w-5" />
            World Rank: #{university.ranking}
          </div>
          <div className="flex items-center gap-2">
            <Building className="h-5 w-5" />
            {university.type} University
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Est. {university.established}
          </div>
        </div>
        <div className="flex gap-4">
          <Button asChild>
            <Link href={university.website} target="_blank" rel="noopener noreferrer">
              Visit Website <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/contact">Apply Now</Link>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-12">
          {/* Overview */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Overview</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {university.description}
            </p>
          </section>

          {/* Programs Offered */}
          <section>
            <div className="flex items-center gap-2 mb-6">
              <BookOpen className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-bold">Programs Offered</h2>
            </div>
            <div className="space-y-4">
              {university.courses.map((course) => (
                <Card key={course.id}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2">{course.name}</CardTitle>
                        <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <GraduationCap className="h-4 w-4" />
                            {course.degree}
                          </span>
                          <span>•</span>
                          <span>{course.duration}</span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <DollarSign className="h-4 w-4" />
                            {course.tuitionFee.toLocaleString()} {course.currency}/year
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div>
                      <div className="text-sm font-semibold mb-2">Intake Dates:</div>
                      <div className="flex flex-wrap gap-2">
                        {course.intakeDates.map((intake, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-primary/10 text-primary px-2 py-1 rounded"
                          >
                            {intake}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Admission Requirements */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Admission Requirements</h2>
            <div className="space-y-6">
              {Object.entries(university.admissionRequirements).map(([level, requirements]) => (
                <Card key={level}>
                  <CardHeader>
                    <CardTitle className="capitalize">{level}'s Programs</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-primary mt-1">✓</span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Campus Life */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Campus Life</h2>
            <Card>
              <CardContent className="pt-6">
                <p className="text-muted-foreground leading-relaxed">{university.campusLife}</p>
              </CardContent>
            </Card>
          </section>

          {/* Scholarships */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Scholarships & Financial Aid</h2>
            <div className="grid gap-4">
              {university.scholarships.map((scholarship, idx) => (
                <Card key={idx}>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Award className="h-5 w-5 text-primary" />
                      {scholarship}
                    </CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Quick Facts */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Facts</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div>
                <div className="font-semibold mb-1">Type</div>
                <div className="text-muted-foreground">{university.type}</div>
              </div>
              <div>
                <div className="font-semibold mb-1">Established</div>
                <div className="text-muted-foreground">{university.established}</div>
              </div>
              <div>
                <div className="font-semibold mb-1">World Ranking</div>
                <div className="text-muted-foreground">#{university.ranking}</div>
              </div>
              <div>
                <div className="font-semibold mb-1">Location</div>
                <div className="text-muted-foreground">{university.city}, {university.country}</div>
              </div>
              <div>
                <div className="font-semibold mb-1">Programs</div>
                <div className="text-muted-foreground">{university.courses.length}+ Available</div>
              </div>
            </CardContent>
          </Card>

          {/* Apply CTA */}
          <Card className="bg-primary text-primary-foreground">
            <CardHeader>
              <CardTitle>Ready to Apply?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm opacity-90">
                Get expert assistance with your application to {university.name}. We'll guide you through every step of the process.
              </p>
              <Button variant="secondary" className="w-full" asChild>
                <Link href="/contact">
                  Start Application <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Related */}
          <Card>
            <CardHeader>
              <CardTitle>Related Links</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Link href={`/countries/${university.country.toLowerCase().replace(/\s+/g, '-')}`} className="block text-sm text-primary hover:underline">
                More about studying in {university.country}
              </Link>
              <Link href="/services" className="block text-sm text-primary hover:underline">
                Our Services
              </Link>
              <Link href="/blog" className="block text-sm text-primary hover:underline">
                Study Abroad Tips
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
