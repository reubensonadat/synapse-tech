import Button from '@/components/ui/Button';

/**
 * CTASection — the closing call-to-action for the Studio world.
 * Premium ambient glow, token colors, consistent eyebrow tracking.
 */
export default function CTASection() {
    return (
        <section className="relative py-24 md:py-32 px-6 bg-background overflow-hidden">
            {/* Ambient glow */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[600px] h-[300px] bg-primary-glow/15 rounded-full blur-[120px]" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto text-center">
                {/* Label */}
                <p className="label-eyebrow text-primary mb-5">
                    Let’s Collaborate
                </p>

                {/* Heading */}
                <h2 className="text-4xl md:text-6xl font-bold font-heading mb-6 text-foreground leading-[1.1]">
                    Ready to write your next chapter?
                </h2>

                {/* Subtext */}
                <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
                    Let’s discuss how we can help you reach every goal and get it built in a custom
                    digital strategy tailor-made for you.
                </p>

                {/* CTA Button */}
                <Button href="/studio/work" variant="primary" size="lg" className="text-lg">
                    Let’s build your idea
                </Button>

                {/* Decorative Elements */}
                <div className="mt-16 flex items-center justify-center gap-8 opacity-50">
                    <div className="h-px w-24 bg-gradient-to-r from-transparent to-muted-foreground" />
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <div className="h-px w-24 bg-gradient-to-l from-transparent to-muted-foreground" />
                </div>
            </div>
        </section>
    );
}
