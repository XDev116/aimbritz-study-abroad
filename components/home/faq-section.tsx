"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "How do I choose the right university for me?",
    answer: "Our expert counselors will help you evaluate universities based on your academic background, career goals, budget, and preferences. We consider factors like program quality, location, cost of living, and post-study work opportunities to find the perfect match for you.",
  },
  {
    question: "What are the costs involved in studying abroad?",
    answer: "Costs vary by country and university, but typically include tuition fees, living expenses, visa fees, health insurance, and travel. UK tuition ranges from £10,000-£40,000/year, while countries like Germany and Norway offer low or no tuition fees. We'll help you find scholarships and budget-friendly options.",
  },
  {
    question: "Do I need IELTS or TOEFL to study abroad?",
    answer: "Most universities require English proficiency tests like IELTS (usually 6.0-7.5) or TOEFL (79-100+). However, some universities waive this requirement if you've completed previous education in English. We provide test preparation guidance and can recommend universities with flexible requirements.",
  },
  {
    question: "How long does the application process take?",
    answer: "The entire process typically takes 3-6 months from application to visa approval. We recommend starting at least 6-9 months before your intended start date. This includes university applications (2-3 months), offer letters (1-2 months), and visa processing (1-3 months depending on the country).",
  },
  {
    question: "Can I work while studying abroad?",
    answer: "Yes! Most countries allow international students to work part-time during studies. UK allows 20 hours/week during term, full-time during breaks. USA allows on-campus work and Optional Practical Training (OPT). Canada, Australia, and many European countries also offer work opportunities.",
  },
  {
    question: "What documents do I need for the application?",
    answer: "Typical documents include: academic transcripts and certificates, English proficiency test scores (IELTS/TOEFL), statement of purpose (SOP), letters of recommendation, passport copy, financial proof, and CV/resume. Specific requirements vary by university and program.",
  },
  {
    question: "Are there scholarships available for international students?",
    answer: "Yes! Many universities offer merit-based scholarships ranging from £1,000 to full tuition coverage. We help you identify and apply for scholarships, government funding programs, and university-specific financial aid based on your academic profile and achievements.",
  },
  {
    question: "What support do you provide after I get my visa?",
    answer: "Our services continue even after visa approval! We help with pre-departure orientation, accommodation booking, airport pickup arrangements, bank account setup guidance, and connecting you with other students. We're here to support your entire journey.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-black via-gray-800 to-black bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Got questions? We've got answers. Here are the most common questions our students ask.
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl border border-black/5 overflow-hidden transition-all duration-300 hover:shadow-lg"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-black/5 transition-colors"
                >
                  <span className="text-base md:text-lg font-semibold text-gray-900 pr-8">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 text-gray-500 flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="px-6 pb-5 pt-2">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <a
            href="tel:+919747277233"
            className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white rounded-xl hover:bg-gray-900 transition-colors shadow-lg font-semibold"
          >
            Talk to Our Experts
          </a>
        </div>
      </div>
    </section>
  );
}
