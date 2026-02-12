
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import MainFooter from '@/components/layout/MainFooter';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-white dark:bg-synapse-black text-black dark:text-white flex flex-col selection:bg-synapse-main selection:text-white transition-colors duration-200">
            <Navbar />

            <main className="flex-grow min-h-[80vh] flex items-center justify-center px-6 relative overflow-hidden">
                {/* Background Effects */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none transition-[background-image] duration-200" />

                <div className="relative z-10 text-center max-w-2xl mx-auto">
                    {/* Glitch Effect Text Idea - simplified with gradient */}
                    <h1 className="text-[150px] md:text-[200px] font-bold font-heading leading-none text-transparent bg-clip-text bg-gradient-to-b from-black to-gray-300 dark:from-white dark:to-white/10 select-none">
                        404
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8 max-w-lg mx-auto">
                        The page you&apos;re looking for might have been moved or doesn&apos;t exist.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="/"
                            className="px-8 py-3 bg-black text-white dark:bg-white dark:text-black font-medium rounded-lg hover:scale-105 transition-all duration-200 w-full sm:w-auto shadow-lg hover:shadow-xl"
                        >
                            Go Home
                        </Link>
                        <Link
                            href="/studio/portfolio"
                            className="px-8 py-3 bg-transparent border border-black/20 dark:border-white/20 text-black dark:text-white font-medium rounded-lg hover:bg-black/5 dark:hover:bg-white/10 hover:border-black/40 dark:hover:border-white/40 transition-all duration-200 flex items-center justify-center gap-2 w-full sm:w-auto"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" /></svg>
                            Explore Portfolio
                        </Link>
                    </div>
                </div>
            </main>

            <MainFooter />
        </div>
    );
}
