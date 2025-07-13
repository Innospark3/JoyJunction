
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Mail, Phone, MapPin, Clock, MessageSquare, HelpCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    category: "",
    message: "",
  });

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      category: "",
      message: "",
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const faqs = [
    {
      question: "How do I donate items?",
      answer: "Simply go to our Donate page, fill out the donation form with details about your items, and schedule a pickup time. Our verified delivery partners will collect the items from your location at no cost to you."
    },
    {
      question: "What types of items can I donate?",
      answer: "We accept toys, clothes, books, stationery, sports equipment, and educational materials suitable for children aged 0-18. All items should be in good condition and safe for children to use."
    },
    {
      question: "How can I track my donation?",
      answer: "After submitting your donation, you'll receive a tracking ID via email. Use this ID on our Track page to see the journey of your donation, from pickup to delivery, including photos of the children who received your items."
    },
    {
      question: "Is there any cost for donation pickup?",
      answer: "No, our pickup service is completely free. Our delivery partners volunteer their time and resources to collect and distribute donations as part of our community service mission."
    },
    {
      question: "How do you ensure donations reach the right children?",
      answer: "We work with verified NGOs, orphanages, and community centers. All our partner organizations are thoroughly vetted, and we require photo confirmations and feedback for each delivery to ensure transparency."
    },
    {
      question: "Can I become a delivery partner?",
      answer: "Yes! Visit our 'Become a Partner' page to apply. We welcome individuals, organizations, and businesses who want to volunteer their time and resources to help bridge the gap between donors and children in need."
    },
    {
      question: "How do you verify the condition of donated items?",
      answer: "Our delivery partners are trained to inspect items during pickup. We only accept items that are clean, safe, and in good working condition. Items that don't meet our standards are responsibly disposed of or recycled."
    },
    {
      question: "Can I donate money instead of items?",
      answer: "Currently, we focus on physical item donations to ensure direct impact and transparency. However, you can support us by becoming a delivery partner or helping spread awareness about our mission."
    },
    {
      question: "What areas do you serve?",
      answer: "We currently operate in major cities across India including Delhi, Mumbai, Bangalore, Chennai, Pune, and Hyderabad. We're constantly expanding our network to reach more communities."
    },
    {
      question: "How can my organization partner with JoyJunction?",
      answer: "Organizations can partner with us as donation centers, pickup points, or distribution partners. Contact us through this form or email partnerships@joyjunction.org for more information about partnership opportunities."
    }
  ];

  return (
    <div className="min-h-screen py-12 bg-gradient-to-br from-lime/10 via-background to-bubblegum/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 bg-turquoise/5 rounded-3xl p-8 border border-turquoise/20">
          <MessageSquare className="h-16 w-16 text-turquoise mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-foreground mb-4">Contact Us</h1>
          <p className="text-xl text-muted-foreground">
            Have questions? We're here to help! Reach out to us and we'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <Card className="p-8 h-fit bg-gradient-to-br from-purple/5 to-tangerine/5 border-purple/20">
              <h2 className="text-2xl font-bold mb-6 text-purple">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 rounded-lg bg-white/50">
                  <Mail className="h-6 w-6 text-turquoise mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-muted-foreground">hello@joyjunction.org</p>
                    <p className="text-muted-foreground">support@joyjunction.org</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg bg-white/50">
                  <Phone className="h-6 w-6 text-lime mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-muted-foreground">xxx</p>
                    <p className="text-muted-foreground">xxx</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg bg-white/50">
                  <MapPin className="h-6 w-6 text-bubblegum mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Address</h3>
                    <p className="text-muted-foreground">
                      123 Hope Street<br />
                      Mumbai, Maharashtra 400001<br />
                      India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg bg-white/50">
                  <Clock className="h-6 w-6 text-tangerine mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Office Hours</h3>
                    <p className="text-muted-foreground">
                      Mon - Fri: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Sponsor Section */}
              <div className="mt-8 p-4 bg-gradient-to-r from-lime/20 to-turquoise/20 rounded-lg border border-turquoise/30">
                <h3 className="font-semibold mb-2 text-center text-turquoise">Supported by</h3>
                <div className="text-center">
                  <span className="bg-white px-3 py-1 rounded-full text-sm font-medium text-turquoise border border-turquoise/30">
                    Community Connect Network
                  </span>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="p-8 bg-gradient-to-br from-bubblegum/5 to-lime/5 border-bubblegum/20">
              <h2 className="text-2xl font-bold mb-6 text-bubblegum">Send us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      required
                      className="mt-1 border-bubblegum/30 focus:border-bubblegum"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                      className="mt-1 border-bubblegum/30 focus:border-bubblegum"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="mt-1 border-bubblegum/30 focus:border-bubblegum"
                    />
                  </div>
                  <div>
                    <Label htmlFor="category">Category *</Label>
                    <Select value={formData.category} onValueChange={(value) => handleInputChange("category", value)}>
                      <SelectTrigger className="mt-1 border-bubblegum/30 focus:border-bubblegum">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="donation">Donation Related</SelectItem>
                        <SelectItem value="tracking">Tracking Issues</SelectItem>
                        <SelectItem value="partnership">Partnership Inquiry</SelectItem>
                        <SelectItem value="technical">Technical Support</SelectItem>
                        <SelectItem value="feedback">Feedback</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => handleInputChange("subject", e.target.value)}
                    required
                    className="mt-1 border-bubblegum/30 focus:border-bubblegum"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    placeholder="Please provide details about your inquiry..."
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    required
                    className="mt-1 border-bubblegum/30 focus:border-bubblegum"
                    rows={6}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <div className="text-center mb-12 bg-tangerine/5 rounded-3xl p-8 border border-tangerine/20">
            <HelpCircle className="h-12 w-12 text-tangerine mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">
              Find quick answers to common questions about JoyJunction.
            </p>
          </div>

          <Card className="p-8 bg-gradient-to-br from-purple/5 to-turquoise/5 border-purple/20">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-purple/20">
                  <AccordionTrigger className="text-left hover:text-purple">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>
        </div>

        {/* Additional Support */}
        <div className="mt-12 text-center">
          <Card className="p-8 bg-gradient-to-r from-lime/10 to-turquoise/10 border-lime/20">
            <h3 className="text-xl font-bold mb-4 text-turquoise">Need Immediate Help?</h3>
            <p className="text-muted-foreground mb-6">
              For urgent donation pickups or time-sensitive issues, please call our emergency helpline.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-lime hover:bg-lime/80 text-foreground">
                <Phone className="h-4 w-4 mr-2" />
                Emergency Helpline: xxx
              </Button>
              <Button variant="outline" className="border-turquoise/50 text-turquoise hover:bg-turquoise hover:text-white">
                <Mail className="h-4 w-4 mr-2" />
                urgent@joyjunction.org
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
