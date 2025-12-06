"use client";

import Link from "next/link";
import { useState, useMemo } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, GraduationCap, Search } from "lucide-react";
import { universities } from "@/lib/data/universities";

export default function UniversitiesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("All");

  const countries = useMemo(() =>
    ["All", ...new Set(universities.map(uni => uni.country))],
    []
  );

  const filteredUniversities = useMemo(() =>
    universities.filter(uni => {
      const matchesSearch = uni.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        uni.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
        uni.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCountry = selectedCountry === "All" || uni.country === selectedCountry;
      return matchesSearch && matchesCountry;
    }),
    [searchQuery, selectedCountry]
  );

  return (
    <div className="container mx-auto px-6 py-12 lg:px-8">
      {/* Header */}
      <div className="mx-auto max-w-2xl text-center mb-12">
        <GraduationCap className="h-12 w-12 text-primary mx-auto mb-4" />
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
          Top Universities Worldwide
        </h1>
        <p className="text-lg text-muted-foreground">
          Explore {universities.length} leading universities across the globe. Find the perfect match for your academic goals.
        </p>
      </div>

      {/* Filters */}
      <div className="mb-8 space-y-4">
        <div className="relative max-w-md mx-auto">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            placeholder="Search universities..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          {countries.map(country => (
            <Button
              key={country}
              variant={selectedCountry === country ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCountry(country)}
            >
              {country}
            </Button>
          ))}
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-6 text-center text-muted-foreground">
        Showing {filteredUniversities.length} {filteredUniversities.length === 1 ? 'university' : 'universities'}
      </div>

      {/* Universities Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredUniversities.map((uni) => (
          <Link key={uni.id} href={`/universities/${uni.slug}`}>
            <Card className="h-full hover:shadow-xl transition-all hover:scale-[1.02] cursor-pointer">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="text-4xl mb-3">{uni.logo}</div>
                    <CardTitle className="text-xl mb-2">{uni.name}</CardTitle>
                    <CardDescription className="text-base">
                      {uni.city}, {uni.country} • World Rank: #{uni.ranking}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {uni.description.substring(0, 150)}...
                </p>
                <div className="space-y-3">
                  <div>
                    <div className="text-sm font-semibold mb-2">Popular Programs:</div>
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
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">{uni.type} University</span>
                    <span className="font-semibold">Est. {uni.established}</span>
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

      {filteredUniversities.length === 0 && (
        <div className="text-center py-12">
          <p className="text-lg text-muted-foreground mb-4">No universities found matching your criteria.</p>
          <Button onClick={() => { setSearchQuery(""); setSelectedCountry("All"); }}>
            Clear Filters
          </Button>
        </div>
      )}

      {/* CTA Section */}
      <div className="mt-20 bg-secondary/30 rounded-2xl p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Need Help Choosing?</h2>
        <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
          Our expert counselors can help you shortlist universities based on your profile, budget, and career goals.
        </p>
        <Button size="lg" asChild>
          <Link href="/contact">
            Get Personalized Guidance <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
