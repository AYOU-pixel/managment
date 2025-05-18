import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToSignup = () => {
    document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="pt-28 pb-20 md:pt-36 md:pb-24 bg-gradient-to-b from-gray-50 to-white relative">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight animate-fade-in mb-6">
              Manage your projects efficiently with the smart Task Manager tool!
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-lg animate-fade-in animate-delay-100 leading-relaxed">
              An integrated platform for organizing tasks, collaborating with the team, and easily tracking project progress. Try it now and maximize your productivity!
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 animate-fade-in animate-delay-200">
              <Button size="lg" className="px-8 py-6 text-lg bg-primary text-white hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-primary ring-offset-2" onClick={scrollToSignup}>
                Start Free Trial Now!
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-6 text-lg hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-primary ring-offset-2">
                Watch How It Works
              </Button>
            </div>
            <div className="mt-8 flex items-center space-x-4 animate-fade-in animate-delay-300">
              <div className="flex -space-x-2">
                <img src="https://randomuser.me/api/portraits/men/32.jpg " alt="Team member avatar" className="w-8 h-8 rounded-full border-2 border-white" />
                <img src="https://randomuser.me/api/portraits/women/44.jpg " alt="Team member avatar" className="w-8 h-8 rounded-full border-2 border-white" />
                <img src="https://randomuser.me/api/portraits/men/86.jpg " alt="Team member avatar" className="w-8 h-8 rounded-full border-2 border-white" />
              </div>
              <p className="text-sm text-gray-600">
                Trusted by <span className="font-semibold">10,000+</span> teams
              </p>
            </div>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0 animate-fade-in animate-delay-300 relative">
            <div className="rounded-xl overflow-hidden shadow-xl border">
              <img 
                src="https://www.digitaltrends.com/wp-content/uploads/2024/11/macbook-pro-m402.jpg?fit=720%2C720&p=1 " 
                alt="Smart Task Manager Dashboard" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
