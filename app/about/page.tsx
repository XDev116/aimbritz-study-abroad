import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Target, Eye, Heart, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about AimBritz - your trusted partner for study abroad consultancy. Our mission, vision, and commitment to helping students achieve their dreams.",
};

const values = [
  {
    icon: Heart,
    title: "Student-First Approach",
    description: "Every decision we make is centered around what's best for our students and their future."
  },
  {
    icon: Target,
    title: "Excellence",
    description: "We strive for excellence in every aspect of our service, from counseling to visa support."
  },
  {
    icon: Users,
    title: "Integrity",
    description: "We provide honest, transparent guidance, always prioritizing student success over profits."
  },
  {
    icon: Eye,
    title: "Innovation",
    description: "We continuously improve our services and adopt new technologies to serve students better."
  }
];

const stats = [
  { value: "10,000+", label: "Students Placed" },
  { value: "500+", label: "Partner Universities" },
  { value: "50+", label: "Countries" },
  { value: "95%", label: "Success Rate" },
];

const team = [
  {
    name: "Dr. Priya Sharma",
    role: "Founder & CEO",
    bio: "15+ years of experience in international education with a PhD in Educational Leadership.",
    initial: "PS"
  },
  {
    name: "Raj Malhotra",
    role: "Head of Counseling",
    bio: "Former university admissions officer with expertise in USA and UK applications.",
    initial: "RM"
  },
  {
    name: "Sarah Johnson",
    role: "Visa Expert",
    bio: "Immigration consultant with 10+ years of experience in student visa processing.",
    initial: "SJ"
  },
  {
    name: "Michael Chen",
    role: "Test Prep Director",
    bio: "Specialized in IELTS, TOEFL, GRE, and GMAT preparation with proven results.",
    initial: "MC"
  }
];

export default function AboutPage() {
  return (
    <div className="container mx-auto px-6 py-12 lg:px-8">
      {/* Header */}
      <div className="mx-auto max-w-3xl text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
          About AimBritz
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          We're more than just a consultancy – we're your partners in achieving global education dreams.
          With over a decade of experience, we've helped thousands of students transform their aspirations into reality.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
            <div className="text-sm text-muted-foreground">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Story */}
      <section className="mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                AimBritz was founded in 2013 with a simple yet powerful mission: to make quality international
                education accessible to deserving students, regardless of their background.
              </p>
              <p>
                Our founder, Dr. Priya Sharma, experienced firsthand the challenges of studying abroad. The
                confusing application processes, unclear visa requirements, and lack of reliable guidance inspired
                her to create a consultancy that would simplify this journey for others.
              </p>
              <p>
                What started as a small office helping 20 students has grown into a leading consultancy with
                thousands of success stories. But our core values remain unchanged: integrity, excellence,
                and a genuine commitment to student success.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Card className="bg-primary/5">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-primary">2013</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">Founded</p>
              </CardContent>
            </Card>
            <Card className="bg-primary/5">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-primary">10K+</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">Students</p>
              </CardContent>
            </Card>
            <Card className="bg-primary/5">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-primary">50+</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">Countries</p>
              </CardContent>
            </Card>
            <Card className="bg-primary/5">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-primary">95%</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">Success Rate</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-gradient-to-br from-primary/10 to-primary/5">
            <CardHeader>
              <Target className="h-12 w-12 text-primary mb-4" />
              <CardTitle className="text-2xl">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                To empower students with world-class education opportunities by providing expert guidance,
                transparent counseling, and comprehensive support throughout their study abroad journey.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-accent/10 to-accent/5">
            <CardHeader>
              <Eye className="h-12 w-12 text-accent mb-4" />
              <CardTitle className="text-2xl">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                To be the most trusted and student-centric study abroad consultancy, recognized globally for
                our integrity, expertise, and commitment to transforming lives through education.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Values */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Values</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            These core values guide every decision we make and every interaction we have with students.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value) => (
            <Card key={value.title} className="text-center">
              <CardHeader>
                <value.icon className="h-10 w-10 text-primary mx-auto mb-3" />
                <CardTitle className="text-lg">{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our team of experienced counselors, visa experts, and education specialists are dedicated to your success.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <Card key={member.name}>
              <CardHeader className="text-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {member.initial}
                </div>
                <CardTitle className="text-lg">{member.name}</CardTitle>
                <p className="text-sm text-primary">{member.role}</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground text-center">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose AimBritz?</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Personalized Guidance</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                One-on-one counseling tailored to your unique profile, goals, and preferences.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Proven Track Record</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                95% visa success rate and 10,000+ students placed in top universities worldwide.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>End-to-End Support</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                From university selection to post-landing support, we're with you every step.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <div className="bg-primary text-primary-foreground rounded-2xl p-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
        <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
          Join thousands of successful students who trusted AimBritz with their study abroad dreams.
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
