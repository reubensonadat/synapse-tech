import Link from 'next/link';
import { Mail, Phone, Linkedin, Twitter, Instagram, Github } from 'lucide-react';

export default function MainFooter() {
    return (
        <footer className="bg-gray-50 dark:bg-synapse-slate border-t border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400 transition-colors duration-200">
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
                                className="p-2 rounded-lg bg-gray-200 dark:bg-white/5 hover:bg-synapse-main hover:text-white dark:hover:bg-synapse-main transition-all"
                                aria-label="Twitter"
                            >
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a
                                href="https://linkedin.com/company/synapse"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-lg bg-gray-200 dark:bg-white/5 hover:bg-synapse-main hover:text-white dark:hover:bg-synapse-main transition-all"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a
                                href="https://instagram.com/synapse"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-lg bg-gray-200 dark:bg-white/5 hover:bg-synapse-main hover:text-white dark:hover:bg-synapse-main transition-all"
                                aria-label="Instagram"
                            >
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a
                                href="https://github.com/synapse"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-lg bg-gray-200 dark:bg-white/5 hover:bg-synapse-main hover:text-white dark:hover:bg-synapse-main transition-all"
                                aria-label="GitHub"
                            >
                                <Github className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Studio Services */}
                    <div>
                        <h4 className="font-bold font-heading text-black dark:text-white mb-4">
                            Synapse Studio
                        </h4>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <Link href="/studio" className="hover:text-synapse-main transition-colors">
                                    Studio Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/studio/services" className="hover:text-synapse-main transition-colors">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/studio/portfolio" className="hover:text-synapse-main transition-colors">
                                    Portfolio
                                </Link>
                            </li>
                            <li>
                                <Link href="/studio/pricing" className="hover:text-synapse-main transition-colors">
                                    Pricing
                                </Link>
                            </li>
                            <li>
                                <Link href="/studio/contact" className="hover:text-synapse-main transition-colors">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Systems */}
                    <div>
                        <h4 className="font-bold font-heading text-black dark:text-white mb-4">
                            Synapse Systems
                        </h4>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <Link href="/systems" className="hover:text-blue-500 transition-colors">
                                    Systems Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/systems/impact" className="hover:text-blue-500 transition-colors">
                                    Impact
                                </Link>
                            </li>
                            <li>
                                <Link href="/systems/roadmap" className="hover:text-blue-500 transition-colors">
                                    Roadmap
                                </Link>
                            </li>
                            <li>
                                <Link href="/systems/collaborate" className="hover:text-blue-500 transition-colors">
                                    Collaborate
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Company & Legal */}
                    <div>
                        <h4 className="font-bold font-heading text-black dark:text-white mb-4">
                            Company
                        </h4>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <Link href="/about" className="hover:text-synapse-main transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <a
                                    href="mailto:synaptech25@gmail.com"
                                    className="flex items-center gap-2 hover:text-synapse-main transition-colors"
                                >
                                    <Mail className="w-4 h-4" />
                                    Contact
                                </a>
                            </li>
                            <li className="pt-2 border-t border-gray-200 dark:border-white/10">
                                <Link href="/privacy" className="hover:text-synapse-main transition-colors">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms" className="hover:text-synapse-main transition-colors">
                                    Terms of Service
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-gray-200 dark:border-white/10">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
                        <p className="text-gray-500 dark:text-gray-500">
                            © {new Date().getFullYear()} Synapse Tech. All rights reserved.
                        </p>
                        <p className="text-xs text-gray-400">
                            Building for clients today and platforms for tomorrow.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
