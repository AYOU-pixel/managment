
import { Button } from "@/components/ui/button";

const OfferBanner = () => {
  return (
    <section className="bg-primary py-12">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="mb-6 lg:mb-0 text-center lg:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Get a free month when you register now!
            </h2>
            <p className="mt-2 text-lg text-primary-foreground opacity-90">
              Plus, 40% discount for the first 100 new users!
            </p>
          </div>
          <div>
            <Button size="lg" variant="secondary" className="font-medium text-primary">
              Start Your Free Trial
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferBanner;
