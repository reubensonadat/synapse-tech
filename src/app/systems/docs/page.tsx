
import Navbar from '@/components/layout/Navbar';
import SystemsFooter from '@/components/layout/SystemsFooter';
import SectionBadge from '@/components/ui/SectionBadge';

export default function DocumentationPage() {
    return (
        <div className="min-h-screen bg-background-subtle dark:bg-background text-foreground dark:text-white transition-colors duration-200">
            <Navbar />

            <main className="pt-24 pb-20 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <SectionBadge title="Resources" variant="systems" animated={true} />
                    <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">
                        System Documentation
                    </h1>
                    <p className="text-lg text-muted-foreground dark:text-muted-foreground max-w-2xl mx-auto mb-12">
                        Comprehensive guides, API references, and integration details for all Synapse Systems.
                    </p>

                    <div className="p-12 border border-dashed border-border dark:border-white/10 rounded-3xl bg-white/50 dark:bg-white/5 backdrop-blur-sm">
                        <div className="w-16 h-16 mx-auto bg-systems-soft dark:bg-systems-deep/20 text-systems rounded-2xl flex items-center justify-center mb-6">
                            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold mb-2">Documentation Coming Soon</h3>
                        <p className="text-muted-foreground dark:text-muted-foreground">
                            We are currently compiling detailed documentation for our ecosystem.
                        </p>
                    </div>
                </div>
            </main>

            <SystemsFooter />
        </div>
    );
}
