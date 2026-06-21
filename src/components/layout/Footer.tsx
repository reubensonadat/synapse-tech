import Link from 'next/link';
import { Mail, Phone, Linkedin, Twitter, Instagram, Github } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-background-subtle dark:bg-background-subtle border-t border-border dark:border-white/10 text-muted-foreground dark:text-muted-foreground transition-colors duration-200">
            <div className="max-w-7xl mx-auto px-6 py-16">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    {/* Company Info */}
                    <div className="lg:col-span-1">
                        <h3 className="text-xl font-bold font-heading text-black dark:text-white mb-4">
                            Synapse
                        </h3>
                        <p className="text-sm leading-relaxed mb-6">
                            We create digital solutions that drive growth and build systems for tomorrow.
                        </p>
                        <div className="flex gap-4">
                            <a
                                href="https://twitter.com/synapse"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-lg bg-muted dark:bg-white/5 hover:bg-primary hover:text-white dark:hover:bg-primary transition-all"
                                aria-label="Twitter"
                            >
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a
                                href="https://linkedin.com/company/synapse"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-lg bg-muted dark:bg-white/5 hover:bg-primary hover:text-white dark:hover:bg-primary transition-all"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a
                                href="https://instagram.com/synapse"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-lg bg-muted dark:bg-white/5 hover:bg-primary hover:text-white dark:hover:bg-primary transition-all"
                                aria-label="Instagram"
                            >
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a
                                href="https://github.com/synapse"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-lg bg-muted dark:bg-white/5 hover:bg-primary hover:text-white dark:hover:bg-primary transition-all"
                                aria-label="GitHub"
                            >
                                <Github className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Studio Services */}
                    <div>
                        <h4 className="font-bold font-heading text-black dark:text-white mb-4">
                            Studio
                        </h4>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <Link href="/studio" className="hover:text-primary transition-colors">
                                    Studio
                                </Link>
                            </li>
                            <li>
                                <Link href="/studio/work" className="hover:text-primary transition-colors">
                                    Work
                                </Link>
                            </li>
                            <li>
                                <Link href="/studio/pricing" className="hover:text-primary transition-colors">
                                    Pricing
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Systems */}
                    <div>
                        <h4 className="font-bold font-heading text-black dark:text-white mb-4">
                            Systems
                        </h4>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <Link href="/systems/products" className="hover:text-primary transition-colors">
                                    Products
                                </Link>
                            </li>
                            <li>
                                <Link href="/systems/impact" className="hover:text-primary transition-colors">
                                    Impact
                                </Link>
                            </li>
                            <li>
                                <Link href="/systems/research" className="hover:text-primary transition-colors">
                                    Research
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="hover:text-primary transition-colors">
                                    About Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="font-bold font-heading text-black dark:text-white mb-4">
                            Get in Touch
                        </h4>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <a
                                    href="mailto:synaptech25@gmail.com"
                                    className="flex items-center gap-2 hover:text-primary transition-colors"
                                >
                                    <Mail className="w-4 h-4" />
                                    synaptech25@gmail.com
                                </a>
                            </li>
                            <li>
                                <a
                                    href="tel:+233548135853"
                                    className="flex items-center gap-2 hover:text-primary transition-colors"
                                >
                                    <Phone className="w-4 h-4" />
                                    +233 54 813 5853
                                </a>
                            </li>
                            <li className="pt-4">
                                <Link
                                    href="/studio/work"
                                    className="inline-block px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all text-sm font-medium"
                                >
                                    Book a Consultation
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-border dark:border-white/10">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
                        <p className="text-muted-foreground dark:text-muted-foreground">
                            © {new Date().getFullYear()} Synapse Tech. All rights reserved.
                        </p>

                        <div className="flex gap-6">
                            <Link href="/privacy" className="hover:text-primary transition-colors">
                                Privacy Policy
                            </Link>
                            <Link href="/terms" className="hover:text-primary transition-colors">
                                Terms of Service
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
