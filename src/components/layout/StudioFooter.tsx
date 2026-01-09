import Link from 'next/link';
import { Mail, Phone, Linkedin, Twitter, Instagram } from 'lucide-react';

export default function StudioFooter() {
    return (
        <footer className="bg-gray-50 dark:bg-synapse-slate border-t border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400 transition-colors duration-200">
            <div className="max-w-7xl mx-auto px-6 py-16">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    {/* Studio Brand */}
                    <div className="lg:col-span-1">
                        <h3 className="text-xl font-bold font-heading text-black dark:text-white mb-2">
                            Synapse Studio
                        </h3>
                        <p className="text-sm text-synapse-main font-medium mb-4">
                            Creating digital experiences that drive business growth.
                        </p>
                        <p className="text-sm leading-relaxed mb-6">
                            We help businesses grow through thoughtful design and purposeful execution.
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
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="font-bold font-heading text-black dark:text-white mb-4">
                            Services
                        </h4>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <Link href="/studio/services" className="hover:text-synapse-main transition-colors">
                                    All Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/studio/services/website-development" className="hover:text-synapse-main transition-colors">
                                    Website Development
                                </Link>
                            </li>
                            <li>
                                <Link href="/studio/services/content-creation" className="hover:text-synapse-main transition-colors">
                                    Content Creation
                                </Link>
                            </li>
                            <li>
                                <Link href="/studio/services/graphic-design" className="hover:text-synapse-main transition-colors">
                                    Graphic Design
                                </Link>
                            </li>
                            <li>
                                <Link href="/studio/services/website-maintenance" className="hover:text-synapse-main transition-colors">
                                    Website Maintenance
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="font-bold font-heading text-black dark:text-white mb-4">
                            Company
                        </h4>
                        <ul className="space-y-3 text-sm">
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
                                <Link href="/about" className="hover:text-synapse-main transition-colors">
                                    About Us
                                </Link>
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

                    {/* Get in Touch */}
                    <div>
                        <h4 className="font-bold font-heading text-black dark:text-white mb-4">
                            Get in Touch
                        </h4>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <a
                                    href="mailto:synaptech25@gmail.com"
                                    className="flex items-center gap-2 hover:text-synapse-main transition-colors"
                                >
                                    <Mail className="w-4 h-4" />
                                    synaptech25@gmail.com
                                </a>
                            </li>
                            <li>
                                <a
                                    href="tel:+233548135853"
                                    className="flex items-center gap-2 hover:text-synapse-main transition-colors"
                                >
                                    <Phone className="w-4 h-4" />
                                    +233 54 813 5853
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://wa.me/233548135853"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 hover:text-synapse-main transition-colors"
                                >
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                    </svg>
                                    WhatsApp
                                </a>
                            </li>
                            <li className="pt-4">
                                <Link
                                    href="/studio/contact"
                                    className="inline-block px-6 py-3 bg-synapse-main text-white rounded-lg hover:bg-synapse-main/90 transition-all text-sm font-bold"
                                >
                                    Book a Free Consultation
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
                        <Link href="/systems" className="text-xs hover:text-blue-500 transition-colors">
                            Explore Synapse Systems →
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
