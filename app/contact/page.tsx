import { Metadata } from "next";
import { ContactForm } from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Contact - Ashish Kumar Jha",
  description:
    "Get in touch with Ashish Kumar Jha for software development opportunities, collaborations, and technical discussions.",
};

export default function ContactPage() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Get In Touch</h1>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Have a project in mind? Want to collaborate? Or just want to say hi?
            I&apos;d love to hear from you. Let&apos;s build something amazing
            together.
          </p>
        </div>

        <ContactForm />

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-muted rounded-full">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-sm text-foreground/70">
              Usually responds within 24 hours
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
