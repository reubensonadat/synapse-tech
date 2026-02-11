import Link from 'next/link';
import { Mail, Linkedin, Twitter, Instagram } from 'lucide-react';

export default function SystemsFooter() {
    return (
        <footer className="bg-gray-50 dark:bg-synapse-slate border-t border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400 transition-colors duration-200">
            <div className="max-w-7xl mx-auto px-6 py-16">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    {/* Systems Brand */}
                    <div className="lg:col-span-1">
                        <h3 className="text-xl font-bold font-heading text-black dark:text-white mb-2">
                            Synapse Systems
                        </h3>
                        <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-4">
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
                                className="p-2 rounded-lg bg-gray-200 dark:bg-white/5 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 transition-all"
                                aria-label="Twitter"
                            >
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a
                                href="https://linkedin.com/company/synapse"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-lg bg-gray-200 dark:bg-white/5 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 transition-all"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a
                                href="https://instagram.com/synapse"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-lg bg-gray-200 dark:bg-white/5 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 transition-all"
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
                                <Link href="/systems" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                    Our Systems
                                </Link>
                            </li>
                            <li>
                                <Link href="/systems/impact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                    Impact
                                </Link>
                            </li>
                            <li>
                                <Link href="/systems/roadmap" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                    Roadmap
                                </Link>
                            </li>
                            <li>
                                <Link href="/systems/collaborate" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                    Collaborate
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h4 className="font-bold font-heading text-black dark:text-white mb-4">
                            Resources
                        </h4>
                        <ul className="space-y-3 text-sm">

                            <li>
                                <Link href="/about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li className="pt-2 border-t border-gray-200 dark:border-white/10">
                                <Link href="/privacy" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
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
                                    className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
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
                                className="block w-full px-6 py-3 bg-blue-600 text-white text-center rounded-lg hover:bg-blue-500 transition-all text-sm font-bold shadow-lg shadow-blue-600/20"
                            >
                                Partner With Us
                            </Link>
                            <a
                                href="https://twitter.com/synapse"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full px-6 py-2 border border-gray-300 dark:border-white/20 text-gray-700 dark:text-white text-center rounded-lg hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all text-sm font-medium"
                            >
                                Follow Our Journey
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-gray-200 dark:border-white/10">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
                        <p className="text-gray-500 dark:text-gray-500">
                            © {new Date().getFullYear()} Synapse Tech. All rights reserved.
                        </p>
                        <Link href="/studio" className="text-xs hover:text-synapse-main transition-colors font-medium">
                            Need client services? → Synapse Studio
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
