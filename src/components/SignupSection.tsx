
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const SignupSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Success!",
        description: "Thank you for signing up for the free trial!",
      });
      setEmail("");
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="signup" className="py-20 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="bg-primary p-8 text-white flex flex-col justify-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Start your free trial today</h2>
              <p className="text-primary-foreground opacity-90">
                Join thousands of teams that use Smart Task Manager to improve their productivity
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "14-day free trial",
                  "No credit card required",
                  "Cancel anytime",
                  "24/7 customer support"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">Create your account</h3>
              <p className="text-gray-600 mb-6">
                Get started with Smart Task Manager in seconds
              </p>
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Work email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@company.com"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full"
                    />
                  </div>
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Creating account..." : "Start free trial"}
                  </Button>
                </div>
              </form>
              <p className="text-sm text-gray-500 mt-4">
                By signing up, you agree to our{" "}
                <a href="#" className="text-primary hover:underline">Terms of Service</a> and{" "}
                <a href="#" className="text-primary hover:underline">Privacy Policy</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignupSection;
