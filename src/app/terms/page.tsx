import Navbar from '@/components/layout/Navbar';
import MainFooter from '@/components/layout/MainFooter';

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-synapse-black text-black dark:text-white transition-colors duration-200">
            <Navbar />
            <main className="pt-24 pb-16 px-6">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold font-heading mb-8">Terms of Service</h1>
                    <p className="text-gray-600 dark:text-gray-400 mb-12">
                        Last updated: {new Date().toLocaleDateString()}
                    </p>

                    <div className="space-y-8 prose dark:prose-invert max-w-none">
                        <section>
                            <h2 className="text-2xl font-bold mb-4">1. Agreement to Terms</h2>
                            <p>
                                By accessing our website or engaging our services at Synapse Tech, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4">2. Services</h2>
                            <p>
                                Synapse Tech provides digital services including but not limited to website development, content creation, graphic design, and software development. The specific scope of work for each project will be defined in a separate agreement or proposal.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4">3. Payments and Deposits</h2>
                            <p className="font-semibold">
                                To commence any project, a non-refundable deposit of 60% of the total estimated project cost is required.
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mt-2">
                                <li>Work will only begin after the 60% deposit has been received and confirmed.</li>
                                <li>The remaining 40% balance is due upon project completion and before the final delivery or launch of the digital asset.</li>
                                <li>For subscription-based services (e.g., website maintenance), payments are due at the beginning of each billing cycle.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4">4. Intellectual Property</h2>
                            <p>
                                Upon full payment of all fees, Synapse Tech assigns to the Client all right, title, and interest in the final deliverables created for the project. Synapse Tech retains the right to use the deliverables for portfolio and marketing purposes.
                            </p>
                            <p className="mt-2">
                                Until full payment is received, all materials and work product remain the exclusive property of Synapse Tech.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4">5. Client Responsibilities</h2>
                            <p>
                                You agree to provide all necessary assets, credentials, and feedback in a timely manner to avoid project delays. Synapse Tech is not responsible for delays caused by the Client's failure to provide required information.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4">6. Limitation of Liability</h2>
                            <p>
                                Synapse Tech shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of our services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4">7. Governing Law</h2>
                            <p>
                                These Terms shall be governed and construed in accordance with the laws of Ghana, without regard to its conflict of law provisions.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4">8. Contact Us</h2>
                            <p>
                                If you have any questions about these Terms, please contact us at:
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
