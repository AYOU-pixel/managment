
import { useState } from "react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    content: "We saved 30% of time on each sprint thanks to Smart Task Manager! The task assignment and progress tracking features are exactly what our team needed.",
    author: "Sarah Johnson",
    role: "CTO at Innovatech",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg",
  },
  {
    content: "The analytics and reporting have transformed how we approach project management. We can now identify bottlenecks and optimize our workflow instantly.",
    author: "Michael Chen",
    role: "Product Manager at DevFlow",
    avatar: "https://randomuser.me/api/portraits/men/44.jpg",
  },
  {
    content: "As a startup founder juggling multiple projects, Smart Task Manager has been a lifesaver. The intuitive interface and automation features have freed up my time for strategic thinking.",
    author: "Lisa Rodriguez",
    role: "Founder of LaunchPad",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    content: "The collaboration features are outstanding. Our remote team finally feels connected and aligned on all our initiatives.",
    author: "David Park",
    role: "Team Lead at RemoteFirst",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Loved by teams worldwide
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            See what our customers have to say about Smart Task Manager
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Desktop Carousel */}
          <div className="hidden md:block">
            <div className="flex items-stretch gap-6 mt-12">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={cn(
                    "bg-white rounded-xl shadow-sm p-6 border transition-all duration-300 flex-1",
                    index === activeIndex ? "border-primary shadow-lg scale-105" : "border-gray-100 opacity-70"
                  )}
                >
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.author}</h4>
                      <p className="text-gray-600 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">{testimonial.content}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Carousel */}
          <div className="md:hidden relative">
            <div className="bg-white rounded-xl shadow-sm p-6 border border-primary">
              <div className="flex items-center mb-4">
                <img
                  src={testimonials[activeIndex].avatar}
                  alt={testimonials[activeIndex].author}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonials[activeIndex].author}</h4>
                  <p className="text-gray-600 text-sm">{testimonials[activeIndex].role}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">{testimonials[activeIndex].content}</p>
            </div>

            <div className="flex justify-between mt-4">
              <button
                onClick={handlePrev}
                className="p-2 rounded-full bg-white border border-gray-200 shadow-sm hover:bg-gray-50"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={cn(
                      "w-2 h-2 rounded-full",
                      index === activeIndex ? "bg-primary" : "bg-gray-300"
                    )}
                  />
                ))}
              </div>
              <button
                onClick={handleNext}
                className="p-2 rounded-full bg-white border border-gray-200 shadow-sm hover:bg-gray-50"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
