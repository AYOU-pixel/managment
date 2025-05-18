
import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do I assign tasks to team members?",
    answer: "You can assign tasks by clicking on any task and selecting the team member from the dropdown menu. You can also set up automatic task assignment rules based on team member roles and workload."
  },
  {
    question: "Can I use this platform for free?",
    answer: "Yes, Smart Task Manager offers a free tier with basic features for individuals and small teams. For advanced features like reporting, analytics, and integrations, you can upgrade to our premium plans."
  },
  {
    question: "What integrations are supported?",
    answer: "Smart Task Manager integrates with popular tools like Slack, Google Workspace, Microsoft Office, Zoom, Notion, Figma, and many more. We're constantly adding new integrations based on user feedback."
  },
  {
    question: "Is there a mobile version?",
    answer: "Yes, Smart Task Manager is available on iOS and Android devices. You can download our mobile app from the App Store or Google Play Store to manage your tasks on the go."
  },
  {
    question: "How secure is my data on Smart Task Manager?",
    answer: "We take security seriously. All data is encrypted in transit and at rest. We implement industry-standard security practices including regular security audits and compliance with GDPR, CCPA, and SOC 2."
  },
  {
    question: "Can I export my data from Smart Task Manager?",
    answer: "Yes, you can export your data in various formats including CSV, Excel, and PDF. You can also use our API to integrate with your own systems for data portability."
  },
];

const FaqSection = () => {
  return (
    <section id="faq" className="py-20">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Everything you need to know about Smart Task Manager
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg font-medium text-gray-900">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
