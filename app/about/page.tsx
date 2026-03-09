import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Target, Eye, Heart, Users, Globe, Shield, Lightbulb } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about AimBritz - your trusted partner for study abroad consultancy. Founded in 2018, recognized by Asia Book of Records & India Book of Records.",
};

const values = [
  {
    icon: Shield,
    title: "Integrity & Transparency",
    description: "Honest and transparent guidance in every student interaction, always prioritizing student success."
  },
  {
    icon: Heart,
    title: "Student-Centric Decisions",
    description: "Every decision we make is centered around what's best for our students and their future."
  },
  {
    icon: Globe,
    title: "Global Perspective",
    description: "Combining global expertise with deep local knowledge to deliver the best guidance."
  },
  {
    icon: Lightbulb,
    title: "Professional Excellence",
    description: "Continuous improvement and innovation in our services to deliver the highest standards."
  }
];

const stats = [
  { value: "2018", label: "Founded" },
  { value: "500+", label: "Partner Universities" },
  { value: "14+", label: "Countries" },
  { value: "5000+", label: "Students Placed" },
];

const team = [
  {
    name: "Al Ameen Mohammed Ali",
    role: "Founder & CEO",
    bio: "Experienced international student in the UK, Al Ameen founded AimBritz to help fellow aspirants pursue their studies without the struggles he faced abroad.",
    initial: "AA",
    image: "/images/team/alameen.png"
  },
  {
    name: "Akshay B Darsan",
    role: "Co-Founder",
    bio: "Co-founder driving AimBritz's vision for ethical, structured, and career-focused international education solutions.",
    initial: "AB",
    image: "/images/team/akshay.png"
  },
  {
    name: "Amal DS",
    role: "Co-Founder",
    bio: "Co-founder committed to building transparent and results-driven overseas education guidance for students.",
    initial: "AD",
    image: "/images/team/amal.png"
  },
  {
    name: "Ansab Muhammed",
    role: "Managing Partner – Ernakulam",
    bio: "Heading AimBritz's Ernakulam operations, connecting students across Kochi and surrounding regions with global education opportunities.",
    initial: "AM",
    image: "/images/team/ansab.png"
  },
  {
    name: "Adv. Reshma Salim",
    role: "Chief Operating Officer",
    bio: "Leading operations with a focus on compliance, student success, and delivering seamless educational journeys.",
    initial: "RS",
    image: "/images/team/reshma.png"
  },
  {
    name: "Raju Muthuswamy",
    role: "Managing Partner – Tamil Nadu",
    bio: "Driving AimBritz's expansion in Tamil Nadu, helping students across the region access world-class international education.",
    initial: "RM",
    image: "/images/team/raju.png"
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
          Building Global Futures Since 2020. A dynamic global education consultancy connecting ambitious students
          with internationally recognized academic opportunities.
        </p>
        <div className="mt-6 flex items-center justify-center gap-6 flex-wrap">
          <div className="relative w-20 h-20 rounded-full overflow-hidden">
            <Image src="/png/Asia.png" alt="Asia Book of Records" fill className="object-cover object-center" />
          </div>
          <div className="relative w-20 h-20 rounded-full overflow-hidden">
            <Image src="/png/india.png" alt="India Book of Records" fill className="object-cover object-center" />
          </div>
        </div>
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
                AimBritz was founded in 2018 and formally registered in 2020, evolving into a dynamic global
                education consultancy headquartered in Trivandrum, Kerala, with operational presence in India
                and the United Kingdom.
              </p>
              <p>
                Our Founder & CEO, Al Ameen Mohammed Ali, experienced firsthand the challenges of being an
                international student in Britain. That experience became the foundation of AimBritz — a promise
                to help every student pursue their studies without the pain and struggle he once faced.
              </p>
              <p>
                Built by a team of globally experienced professionals — many with firsthand international
                academic exposure — AimBritz combines industry expertise with personalized mentorship. Today,
                we are a trusted partner for students, universities, and institutions seeking reliable,
                transparent, and results-driven international education guidance.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Card className="bg-primary/5">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-primary">2018</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">Founded</p>
              </CardContent>
            </Card>
            <Card className="bg-primary/5">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-primary">5K+</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">Students</p>
              </CardContent>
            </Card>
            <Card className="bg-primary/5">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-primary">14+</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">Countries</p>
              </CardContent>
            </Card>
            <Card className="bg-primary/5">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-primary">500+</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">Universities</p>
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
                AimBritz is committed to delivering personalized, transparent, and professionally guided
                overseas education services that align students' ambitions with evolving global industry
                demands. Through expert counselling, international partnerships, and end-to-end support
                systems, AimBritz strives to create seamless educational journeys that extend beyond
                admissions into long-term career success.
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
                To become a globally recognized leader in international education consultancy, enabling
                students from diverse backgrounds to access world-class academic opportunities through
                ethical practices, strategic innovation, and lifelong career support.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Values */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            These values guide every decision we make and every interaction we have with students.
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

      {/* Achievements */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Achievements</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="text-center bg-gradient-to-br from-yellow-50 to-amber-50 border-amber-200">
            <CardHeader>
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="relative w-14 h-14 rounded-full overflow-hidden">
                  <Image src="/png/Asia.png" alt="Asia Book of Records" fill className="object-cover object-center" />
                </div>
                <div className="relative w-14 h-14 rounded-full overflow-hidden">
                  <Image src="/png/india.png" alt="India Book of Records" fill className="object-cover object-center" />
                </div>
              </div>
              <CardTitle className="text-lg">Asia & India Book of Records</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Recognized for hosting the largest overseas education seminar in the region.
              </p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardHeader>
              <Users className="h-10 w-10 text-primary mx-auto mb-3" />
              <CardTitle className="text-lg">British Council Certified</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Our counsellors are British Council certified, ensuring expert and internationally recognized guidance.
              </p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardHeader>
              <Globe className="h-10 w-10 text-primary mx-auto mb-3" />
              <CardTitle className="text-lg">Global Scholarship Placements</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Successful scholarship placements through government-funded initiatives across multiple countries.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Team */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Leadership Team</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Globally experienced professionals dedicated to your study abroad success.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member) => (
            <div key={member.name} className="group relative overflow-hidden rounded-3xl bg-gradient-to-b from-slate-900 to-slate-800 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              {/* Full portrait photo with 4:5 ratio */}
              <div className="relative w-full aspect-[4/5] overflow-hidden">
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/80 to-accent/80">
                    <span className="text-white text-8xl font-bold opacity-30">{member.initial}</span>
                  </div>
                )}
                {/* Thin gradient only at very bottom for text legibility */}
                <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-slate-900 to-transparent" />
                {/* Name + role over photo */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span className="inline-block bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full mb-2">
                    {member.role}
                  </span>
                  <h3 className="text-white font-bold text-xl leading-tight">{member.name}</h3>
                </div>
              </div>
              {/* Bio */}
              <div className="px-5 py-4 border-t border-white/10">
                <p className="text-slate-300 text-sm leading-relaxed">{member.bio}</p>
              </div>
            </div>
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
                Strategic career counselling tailored to your academic profile, career ambitions, and global market trends.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>End-to-End Support</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                From university selection and visa processing to pre-departure and post-arrival support — we're with you every step.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Ethical & Transparent</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Responsible counselling with honest guidance. We are proudly rated 5 stars on Google for trusted guidance and outstanding student success.
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
