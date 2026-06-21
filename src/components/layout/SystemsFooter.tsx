import Link from 'next/link';
import { Mail, Linkedin, Twitter, Instagram } from 'lucide-react';

export default function SystemsFooter() {
    return (
        <footer className="bg-background-subtle dark:bg-background-subtle border-t border-border dark:border-white/10 text-muted-foreground dark:text-muted-foreground transition-colors duration-200">
            <div className="max-w-7xl mx-auto px-6 py-16">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    {/* Systems Brand */}
                    <div className="lg:col-span-1">
                        <h3 className="text-xl font-bold font-heading text-black dark:text-white mb-2">
                            Synapse Systems
                        </h3>
                        <p className="text-sm text-systems dark:text-systems-glow font-medium mb-4">
                            We don&apos;t just build software, we build systems.
                        </p>
                        <p className="text-sm leading-relaxed mb-6">
                            Building tomorrow&apos;s solutions, today. Platforms designed with vision and intention.
                        </p>
                        <div className="flex gap-4">
                            <a
                                href="https://twitter.com/synapse"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-lg bg-muted dark:bg-white/5 hover:bg-systems hover:text-white dark:hover:bg-systems transition-all"
                                aria-label="Twitter"
                            >
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a
                                href="https://linkedin.com/company/synapse"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-lg bg-muted dark:bg-white/5 hover:bg-systems hover:text-white dark:hover:bg-systems transition-all"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a
                                href="https://instagram.com/synapse"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-lg bg-muted dark:bg-white/5 hover:bg-systems hover:text-white dark:hover:bg-systems transition-all"
                                aria-label="Instagram"
                            >
                                <Instagram className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Platform */}
                    <div>
                        <h4 className="font-bold font-heading text-black dark:text-white mb-4">
                            Platform
                        </h4>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <Link href="/systems" className="hover:text-systems dark:hover:text-systems-glow transition-colors">
                                    Our Systems
                                </Link>
                            </li>
                            <li>
                                <Link href="/systems/impact" className="hover:text-systems dark:hover:text-systems-glow transition-colors">
                                    Impact
                                </Link>
                            </li>
                            <li>
                                <Link href="/systems/roadmap" className="hover:text-systems dark:hover:text-systems-glow transition-colors">
                                    Roadmap
                                </Link>
                            </li>
                            <li>
                                <Link href="/systems/collaborate" className="hover:text-systems dark:hover:text-systems-glow transition-colors">
                                    Collaborate
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Support & Legal */}
                    <div>
                        <h4 className="font-bold font-heading text-black dark:text-white mb-4">
                            Support & Legal
                        </h4>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <Link href="/systems/collaborate" className="hover:text-systems dark:hover:text-systems-glow transition-colors">
                                    Contact Support
                                </Link>
                            </li>
                            <li className="pt-2 border-t border-border dark:border-white/10">
                                <Link href="/privacy" className="hover:text-systems dark:hover:text-systems-glow transition-colors">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms" className="hover:text-systems dark:hover:text-systems-glow transition-colors">
                                    Terms of Service
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Connect */}
                    <div>
                        <h4 className="font-bold font-heading text-black dark:text-white mb-4">
                            Connect
                        </h4>
                        <ul className="space-y-3 text-sm mb-6">
                            <li>
                                <a
                                    href="mailto:synaptech25@gmail.com"
                                    className="flex items-center gap-2 hover:text-systems dark:hover:text-systems-glow transition-colors"
                                >
                                    <Mail className="w-4 h-4" />
                                    synaptech25@gmail.com
                                </a>
                            </li>
                        </ul>

                        {/* CTA */}
                        <div className="space-y-3">
                            <Link
                                href="/systems/collaborate"
                                className="block w-full px-6 py-3 bg-systems text-white text-center rounded-lg hover:bg-systems transition-all text-sm font-bold shadow-lg shadow-systems/20"
                            >
                                Partner With Us
                            </Link>
                            <a
                                href="https://twitter.com/synapse"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full px-6 py-2 border border-border dark:border-white/20 text-foreground dark:text-white text-center rounded-lg hover:border-systems dark:hover:border-systems/40 hover:text-systems dark:hover:text-systems-glow transition-all text-sm font-medium"
                            >
                                Follow Our Journey
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-border dark:border-white/10">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
                        <p className="text-muted-foreground dark:text-muted-foreground">
                            © {new Date().getFullYear()} Synapse Tech. All rights reserved.
                        </p>
                        <Link href="/studio" className="text-xs hover:text-primary transition-colors font-medium">
                            Need client services? → Synapse Studio
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
