import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Award, BookOpen, CheckCircle, FileCheck, Globe, GraduationCap, Plane, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Comprehensive study abroad services including career counseling, university selection, application support, visa assistance, and test preparation.",
};

const services = [
  {
    icon: Users,
    title: "Career Counseling",
    description: "Expert one-on-one guidance to identify your strengths, interests, and ideal career path.",
    features: [
      "Personalized profile assessment",
      "Career aptitude testing",
      "Course and specialization recommendations",
      "Country selection based on career goals",
      "Industry trend analysis"
    ]
  },
  {
    icon: Globe,
    title: "University Selection",
    description: "Strategic university shortlisting based on your academic profile, budget, and preferences.",
    features: [
      "Comprehensive university database access",
      "Ranking and reputation analysis",
      "Scholarship opportunity identification",
      "Cost-benefit comparison",
      "Customized university list (6-10 universities)"
    ]
  },
  {
    icon: FileCheck,
    title: "Application Assistance",
    description: "End-to-end support for university applications ensuring accuracy and completeness.",
    features: [
      "Document preparation and review",
      "Statement of Purpose (SOP) writing and editing",
      "Letter of Recommendation (LOR) guidance",
      "Resume/CV optimization",
      "Application form completion",
      "Application tracking and follow-up"
    ]
  },
  {
    icon: Plane,
    title: "Visa Assistance",
    description: "Complete visa processing support with high success rates across all countries.",
    features: [
      "Visa eligibility assessment",
      "Document checklist and preparation",
      "Application form guidance",
      "Financial documentation support",
      "Interview preparation and mock sessions",
      "Post-visa landing guidance"
    ]
  },
  {
    icon: Award,
    title: "Scholarship Guidance",
    description: "Maximize your chances of receiving financial aid and scholarships.",
    features: [
      "Scholarship search and identification",
      "Eligibility assessment",
      "Application strategy development",
      "Essay and document review",
      "Deadline management",
      "Alternative funding options"
    ]
  },
  {
    icon: BookOpen,
    title: "Test Preparation",
    description: "Comprehensive preparation for IELTS, TOEFL, GRE, GMAT, SAT, and other tests.",
    features: [
      "Diagnostic tests and score analysis",
      "Customized study plans",
      "Expert trainers and study materials",
      "Practice tests and mock exams",
      "Tips and strategies for high scores",
      "Flexible online and offline classes"
    ]
  },
  {
    icon: GraduationCap,
    title: "Pre-Departure Briefing",
    description: "Prepare for life abroad with our comprehensive pre-departure orientation.",
    features: [
      "Country-specific orientation sessions",
      "Accommodation and travel guidance",
      "Banking and currency advice",
      "Cultural adaptation tips",
      "Health insurance guidance",
      "Part-time work regulations"
    ]
  },
  {
    icon: CheckCircle,
    title: "Post-Landing Support",
    description: "Continued assistance even after you reach your destination.",
    features: [
      "Airport pickup assistance (select locations)",
      "University enrollment support",
      "SIN/SSN application guidance",
      "Job search and internship help",
      "PR and immigration consulting",
      "Alumni network access"
    ]
  }
];

const processSteps = [
  {
    step: 1,
    title: "Free Consultation",
    description: "Initial assessment of your profile, goals, and preferences"
  },
  {
    step: 2,
    title: "Course & University Selection",
    description: "Shortlist universities based on your profile and budget"
  },
  {
    step: 3,
    title: "Test Preparation",
    description: "Prepare for and take required standardized tests"
  },
  {
    step: 4,
    title: "Application Process",
    description: "Complete and submit applications with our guidance"
  },
  {
    step: 5,
    title: "Offer Letters",
    description: "Receive and evaluate offers from universities"
  },
  {
    step: 6,
    title: "Visa Application",
    description: "Apply for and obtain your student visa"
  },
  {
    step: 7,
    title: "Pre-Departure",
    description: "Final preparations before your journey"
  },
  {
    step: 8,
    title: "Departure & Beyond",
    description: "Travel and continue with post-landing support"
  }
];

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-6 py-12 lg:px-8">
      {/* Header */}
      <div className="mx-auto max-w-3xl text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
          Our Services
        </h1>
        <p className="text-xl text-muted-foreground">
          Comprehensive end-to-end support for your study abroad journey.
          From initial counseling to post-landing assistance, we're with you every step of the way.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
        {services.map((service) => (
          <Card key={service.title} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
                <service.icon className="h-6 w-6" />
              </div>
              <CardTitle className="text-2xl">{service.title}</CardTitle>
              <CardDescription className="text-base">{service.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Process Timeline */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Process</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Follow our proven 8-step process to successfully study abroad
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((item) => (
            <Card key={item.step} className="relative">
              <CardHeader>
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">
                  {item.step}
                </div>
                <CardTitle className="text-lg mt-4">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="mb-20">
        <Card className="bg-secondary/30">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl">Why Choose Our Services?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">95%</div>
                <div className="text-sm text-muted-foreground">Visa Success Rate</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Partner Universities</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">10K+</div>
                <div className="text-sm text-muted-foreground">Students Placed</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Service Packages */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Service Packages</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the package that best fits your needs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Basic Package</CardTitle>
              <CardDescription>Essential services to get started</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>Career Counseling</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>University Selection</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>Basic Application Support</span>
              </div>
              <Button variant="outline" className="w-full mt-6" asChild>
                <Link href="/contact">Get Started</Link>
              </Button>
            </CardContent>
          </Card>
          <Card className="border-primary shadow-xl">
            <CardHeader>
              <div className="text-xs font-semibold text-primary mb-2">MOST POPULAR</div>
              <CardTitle className="text-2xl">Premium Package</CardTitle>
              <CardDescription>Complete end-to-end support</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>All Basic Package services</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>Complete Application Assistance</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>Visa Processing Support</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>Pre-Departure Briefing</span>
              </div>
              <Button className="w-full mt-6" asChild>
                <Link href="/contact">Get Started</Link>
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">VIP Package</CardTitle>
              <CardDescription>Premium personalized service</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>All Premium Package services</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>Dedicated Counselor</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>Priority Processing</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>Post-Landing Support</span>
              </div>
              <Button variant="outline" className="w-full mt-6" asChild>
                <Link href="/contact">Get Started</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <div className="bg-primary text-primary-foreground rounded-2xl p-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
          Book a free consultation with our expert counselors to discuss your study abroad plans.
        </p>
        <Button size="lg" variant="secondary" asChild>
          <Link href="/contact">
            Schedule Free Consultation <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
