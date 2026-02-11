import Navbar from '@/components/layout/Navbar';
import MainFooter from '@/components/layout/MainFooter';
import { NotFound as NotFoundComponent } from '@/components/ui/not-found-2';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-white dark:bg-synapse-black text-black dark:text-white transition-colors duration-200 flex flex-col">
            <Navbar />

            <main className="flex-grow flex items-center justify-center">
                <NotFoundComponent />
            </main>

            <MainFooter />
        </div>
    );
}
