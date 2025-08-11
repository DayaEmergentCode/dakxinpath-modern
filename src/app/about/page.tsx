import { About as AboutSection } from "@/components/sections/about";

export default function AboutPage() {
    return (
        <main className="py-20">
            <div className="container">
                <div className="text-center space-y-4 mb-16">
                    <h1 className="text-4xl font-bold text-foreground">About Us</h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Learn more about our journey, mission, and commitment to excellence in agricultural exports
                    </p>
                </div>
            </div>
            <AboutSection />
        </main>
    );
}
