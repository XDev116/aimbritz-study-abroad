import { Award, Heart, TrendingUp, Users2 } from "lucide-react";

const milestones = [
  {
    icon: Users2,
    title: "Student-First Approach",
    description:
      "Every decision we make is centered around one question: What's best for our students? This philosophy has guided us for over a decade.",
  },
  {
    icon: Award,
    title: "Excellence in Service",
    description:
      "Recognized as one of the leading study abroad consultancies, with a 98% visa success rate and countless success stories.",
  },
  {
    icon: TrendingUp,
    title: "Continuous Growth",
    description:
      "From a small team to serving thousands of students across multiple countries, our growth reflects the trust placed in us.",
  },
  {
    icon: Heart,
    title: "Lifelong Relationships",
    description:
      "We don't just help you get admitted - we build lasting relationships and support you throughout your academic journey and beyond.",
  },
];

export function SuccessStorySection() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Story */}
          <div>
            <div className="inline-block px-4 py-2 bg-black/5 rounded-full mb-6">
              <span className="text-sm font-bold text-gray-700">Our Journey</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-black via-gray-800 to-black bg-clip-text text-transparent leading-tight">
              10 Years of Transforming Dreams into Reality
            </h2>

            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                What started as a passionate mission to help students access world-class education has evolved into a trusted name in study abroad consultancy. Over the past decade, we've guided over <strong className="text-black">5,000 students</strong> to their dream universities across <strong className="text-black">50+ countries</strong>.
              </p>
              <p>
                Our success isn't measured just in numbers, but in the lives we've changed - students who've returned as doctors, engineers, business leaders, and changemakers. Every acceptance letter, every visa approval, every graduation ceremony fills us with pride.
              </p>
              <p>
                We've built partnerships with <strong className="text-black">270+ top universities worldwide</strong>, ensuring you have access to the best institutions that match your aspirations. Our team of experienced counselors has helped navigate everything from application essays to visa interviews, making the complex simple.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <div className="glass-card px-6 py-4 rounded-2xl border border-black/5">
                <div className="text-3xl font-bold text-black">98%</div>
                <div className="text-sm text-gray-600">Visa Success Rate</div>
              </div>
              <div className="glass-card px-6 py-4 rounded-2xl border border-black/5">
                <div className="text-3xl font-bold text-black">4.9/5</div>
                <div className="text-sm text-gray-600">Student Rating</div>
              </div>
              <div className="glass-card px-6 py-4 rounded-2xl border border-black/5">
                <div className="text-3xl font-bold text-black">100%</div>
                <div className="text-sm text-gray-600">Commitment</div>
              </div>
            </div>
          </div>

          {/* Right Column - Milestones */}
          <div className="space-y-6">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-2xl border border-black/5 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-black/5 flex items-center justify-center group-hover:bg-black group-hover:scale-110 transition-all duration-300">
                      <milestone.icon className="h-6 w-6 text-black group-hover:text-white transition-colors" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center glass-card p-12 rounded-3xl border border-black/5 bg-gradient-to-br from-gray-50 to-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
            Ready to Write Your Success Story?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of successful students who've achieved their study abroad dreams with AimBritz. Let's start your journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-black text-white rounded-xl hover:bg-gray-900 transition-colors shadow-lg font-semibold"
            >
              Book Free Consultation
            </a>
            <a
              href="tel:+1234567890"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-black border-2 border-black rounded-xl hover:bg-black hover:text-white transition-colors font-semibold"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
