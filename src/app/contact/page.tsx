import { Contact as ContactSection } from "@/components/sections/contact";

export default function ContactPage() {
    return (
        <main className="py-20">
            <div className="container">
                <div className="text-center space-y-4 mb-16">
                    <h1 className="text-4xl font-bold text-foreground">Contact Us</h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Ready to start your agricultural export journey? Get in touch with our team today
                    </p>
                </div>
            </div>
            <ContactSection />
        </main>
    );
}
