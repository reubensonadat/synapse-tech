import Button from '@/components/ui/Button';

export default function CTASection() {
    return (
        <section className="py-20 md:py-32 px-6 bg-white dark:bg-synapse-slate">
            <div className="max-w-4xl mx-auto text-center">
                {/* Label */}
                <p className="text-sm text-synapse-main uppercase tracking-[0.2em] font-bold mb-4">
                    LET'S COLLABORATE
                </p>

                {/* Heading */}
                <h2 className="text-4xl md:text-6xl font-bold font-heading mb-6 text-black dark:text-white leading-tight">
                    Ready to write your next chapter?
                </h2>

                {/* Subtext */}
                <p className="text-lg md:text-xl text-synapse-gray dark:text-synapse-gray mb-10 max-w-2xl mx-auto leading-relaxed">
                    Let's discuss how we can help you reach every goal and get it built in a custom
                    digital strategy tailor-made for you.
                </p>

                {/* CTA Button */}
                <Button href="/studio/contact" variant="primary" className="text-lg px-8 py-4">
                    Let's build your idea
                </Button>

                {/* Decorative Elements */}
                <div className="mt-16 flex items-center justify-center gap-8 opacity-50">
                    <div className="h-px w-24 bg-gradient-to-r from-transparent to-synapse-gray" />
                    <div className="w-2 h-2 rounded-full bg-synapse-main animate-pulse" />
                    <div className="h-px w-24 bg-gradient-to-l from-transparent to-synapse-gray" />
                </div>
            </div>
        </section>
    );
}
