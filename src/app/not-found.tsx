import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import MainFooter from '@/components/layout/MainFooter';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-white dark:bg-synapse-black text-black dark:text-white transition-colors duration-200 flex flex-col">
            <Navbar />

            <main className="flex-grow flex items-center justify-center px-6 py-24">
                <div className="text-center max-w-2xl mx-auto">
                    <h1 className="text-9xl font-bold font-heading text-gray-200 dark:text-white/5 mb-4 select-none">
                        404
                    </h1>
                    <div className="relative -mt-16 sm:-mt-20">
                        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
                            Page Not Found
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 max-w-md mx-auto">
                            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/"
                                className="px-8 py-3 bg-synapse-main text-white font-bold rounded-xl hover:bg-synapse-main/90 transition-all hover:scale-105"
                            >
                                Return Home
                            </Link>
                            <Link
                                href="/studio"
                                className="px-8 py-3 bg-gray-100 dark:bg-white/10 text-black dark:text-white font-bold rounded-xl hover:bg-gray-200 dark:hover:bg-white/20 transition-all"
                            >
                                Visit Studio
                            </Link>
                        </div>
                    </div>
                </div>
            </main>

            <MainFooter />
        </div>
    );
}
