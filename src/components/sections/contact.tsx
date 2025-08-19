"use client"
import { Button } from "@/components/core/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/core/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/core/form";
import { Input } from "@/components/core/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/core/select";
import { Textarea } from "@/components/core/textarea";
import { useToast } from "@/hooks/use-toast";
import { ContactForm, contactFormSchema } from "@/shared/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { useForm } from "react-hook-form";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    details: ["dakxinpath@gmail.com"]
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+91 9449495963"]
  },
  {
    icon: MapPin,
    title: "Address",
    details: ["Sri Lakshmi Venkateshwara Nilaya", "Harohalli Garden", "Vijayanagara", "Kolar, KA, India, 563101.  "]
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Monday - Friday: 8:00 AM - 6:00 PM EST", "Saturday - Sunday: 9:00 AM - 2:00 PM EST"]
  }
];

const offices = [
  { region: "North America", locations: "• USA • Canada" },
  { region: "Europe", locations: "•  Netherlands •  Germany" },
  { region: "Middle East", locations: "• Bahrain • Kuwait • Oman • Qatar • Saudi Arabia • UAE" },
  { region: "Asia Pacific", locations: "• Singapore • India • China" }
];

export function Contact() {
  const { toast } = useToast();

  const form = useForm<ContactForm>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      country: "",
      products: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactForm) => {
    try {
      // Here you would typically send the form data to your API
      console.log("Form submitted:", data);
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your inquiry. We will get back to you soon.",
      });
      form.reset();
    } catch (error) {
      console.log(error);

      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <section className="py-20 bg-muted/50">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-foreground">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your agricultural export journey? Contact us today for personalized solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 max-w-7xl mx-auto">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Send us a message</CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First Name</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last Name</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input type="email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company Name (Optional)</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="country"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Country</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select Country" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="US">United States</SelectItem>
                            <SelectItem value="CA">Canada</SelectItem>
                            <SelectItem value="UK">United Kingdom</SelectItem>
                            <SelectItem value="DE">Germany</SelectItem>
                            <SelectItem value="FR">France</SelectItem>
                            <SelectItem value="AU">Australia</SelectItem>
                            <SelectItem value="JP">Japan</SelectItem>
                            <SelectItem value="Other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="products"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Products of Interest</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select Category" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="grains">Grains & Cereals</SelectItem>
                            <SelectItem value="fruits">Fresh Fruits</SelectItem>
                            <SelectItem value="vegetables">Vegetables</SelectItem>
                            <SelectItem value="spices">Spices & Herbs</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us about your requirements..."
                            className="min-h-[120px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full" size="lg">
                    Send Message
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={info.title} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{info.title}</h4>
                        {
                          info.details.map((detail, index) => {

                            if (info.title === 'Phone') {
                              return (<p key={index} className="text-muted-foreground">
                                <a href="tel:+919449495963" > {detail}  </a>
                              </p>);
                            } else if (info.title === 'Email') {
                              return (<p key={index} className="text-muted-foreground">
                                <a href="mailto:dakxinpath@gmail.com"> {detail}</a>
                              </p>);
                            } else {
                              return (<p key={index} className="text-muted-foreground">{detail}</p>);
                            }
                          })
                        }
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* Office Locations */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Global Reach</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {offices.map((office) => (
                  <div key={office.region}>
                    <h4 className="font-medium text-foreground">{office.region}</h4>
                    <p className="text-sm text-muted-foreground">{office.locations}</p>
                  </div>
                ))}
                <div>
                  {"& many more ..."}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
