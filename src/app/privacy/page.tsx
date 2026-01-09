import Navbar from '@/components/layout/Navbar';
import MainFooter from '@/components/layout/MainFooter';

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-synapse-black text-black dark:text-white transition-colors duration-200">
            <Navbar />
            <main className="pt-24 pb-16 px-6">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold font-heading mb-8">Privacy Policy</h1>
                    <p className="text-gray-600 dark:text-gray-400 mb-12">
                        Last updated: {new Date().toLocaleDateString()}
                    </p>

                    <div className="space-y-8 prose dark:prose-invert max-w-none">
                        <section>
                            <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
                            <p>
                                At Synapse Tech, we respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy outlines how we collect, use, and safeguard your data when you visit our website or use our services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
                            <p>
                                We collect information that you voluntarily provide to us when you fill out our contact forms, request a quote, or communicate with us. This information may include:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mt-2">
                                <li><strong>Personal Identification:</strong> Name, Email address, Phone number.</li>
                                <li><strong>Business Information:</strong> Company name, Business description, Brand guidelines.</li>
                                <li><strong>Project Details:</strong> Budget, Timeline, Specific service requirements (e.g., number of pages, design preferences).</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
                            <p>
                                We use the collected data for the following purposes:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mt-2">
                                <li>To provide and deliver the services you request.</li>
                                <li>To communicate with you regarding your project, including updates and support.</li>
                                <li>To improve our website and service offerings based on your feedback.</li>
                                <li>To process payments and invoices.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4">4. Data Sharing and Protection</h2>
                            <p>
                                We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. Your data is only shared with trusted partners who assist us in operating our website or conducting our business, provided they agree to keep this information confidential.
                            </p>
                            <p className="mt-2">
                                We implement a variety of security measures to maintain the safety of your personal information.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4">5. Your Rights</h2>
                            <p>
                                You have the right to:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mt-2">
                                <li>Access the personal information we hold about you.</li>
                                <li>Request corrections to any inaccurate or incomplete data.</li>
                                <li>Request deletion of your personal data, subject to legal and contractual obligations.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4">6. Contact Us</h2>
                            <p>
                                If you have any questions regarding this Privacy Policy, you may contact us using the information below:
                            </p>
                            <ul className="list-none mt-2 space-y-1">
                                <li>Email: synaptech25@gmail.com</li>
                                <li>Phone: +233 54 813 5853</li>
                            </ul>
                        </section>
                    </div>
                </div>
            </main>
            <MainFooter />
        </div>
    );
}
