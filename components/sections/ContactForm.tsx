"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Send, Mail, Phone, Linkedin, Github, MapPin } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (replace with actual implementation)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "ashishk2004a@gmail.com",
      href: "mailto:ashishk2004a@gmail.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/ashishk2004a",
      href: "https://www.linkedin.com/in/ashishk2004a/",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/Ashish-Github193",
      href: "https://github.com/Ashish-Github193",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "New Delhi, Delhi, India",
      href: null,
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Contact Form */}
      <Card>
        <CardHeader>
          <CardTitle>Send me a message</CardTitle>
          <CardDescription>
            I&apos;ll get back to you as soon as possible. Let&apos;s discuss
            your next project!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name *
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium mb-2"
              >
                Subject *
              </label>
              <Input
                id="subject"
                name="subject"
                type="text"
                required
                value={formData.subject}
                onChange={handleChange}
                placeholder="What's this about?"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Message *
              </label>
              <Textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project, idea, or just say hi!"
                className="min-h-[120px]"
              />
            </div>

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>

            {submitStatus === "success" && (
              <div className="p-3 bg-green-50 border border-green-200 rounded-md">
                <p className="text-green-800 text-sm">
                  Message sent successfully! I&apos;ll get back to you soon.
                </p>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-md">
                <p className="text-red-800 text-sm">
                  Something went wrong. Please try again or reach out directly
                  via email.
                </p>
              </div>
            )}
          </form>
        </CardContent>
      </Card>

      {/* Contact Information */}
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Let&apos;s Connect</CardTitle>
            <CardDescription>
              Available for new opportunities, collaborations, and interesting
              conversations.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {contactInfo.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex items-center space-x-3">
                  <Icon className="h-5 w-5 text-primary flex-shrink-0" />
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={
                          item.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          item.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="text-sm text-foreground/60 hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm text-foreground/60">{item.value}</p>
                    )}
                  </div>
                </div>
              );
            })}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Current Status</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-2">
              <Badge variant="default" className="bg-green-500">
                Available
              </Badge>
              <span className="text-sm">Open to new opportunities</span>
            </div>

            <div className="space-y-2 text-sm text-foreground/60">
              <p>• Full-time positions</p>
              <p>• Consulting projects</p>
              <p>• Technical collaborations</p>
              <p>• Open source contributions</p>
            </div>

            <div className="pt-4 border-t">
              <p className="text-sm">
                <strong>Response time:</strong> Usually within 24 hours
              </p>
              <p className="text-sm">
                <strong>Best time to reach:</strong> 9 AM - 6 PM IST (Monday -
                Friday)
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
