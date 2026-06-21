"use client";

import Navbar from '@/components/layout/Navbar';
import Link from 'next/link';
import SystemsFooter from '@/components/layout/SystemsFooter';
import { motion } from 'framer-motion';
import { fadeInUp, fadeInDown, stagger, scaleIn } from '@/lib/animations';
import SectionBadge from '@/components/ui/SectionBadge';


import { IconSchoolLMS, IconRestaurant, IconInventory, IconClinic, IconHotel, IconLibrary, IconRetail, IconLogistics, IconHR, IconArrowRight } from '@/components/icons/SystemsIcons';

const products = [
    {
        id: 'school-lms',
        name: 'School Management System',
        description: 'Complete learning management with student records, grades, attendance, and parent portals.',
        Icon: IconSchoolLMS,
        features: ['Student Records', 'Grade Management', 'Attendance Tracking', 'Parent Portal']
    },
    {
        id: 'restaurant',
        name: 'Restaurant Management',
        description: 'Digital menus, order management, inventory tracking, and sales analytics for restaurants.',
        Icon: IconRestaurant,
        features: ['Digital Menu', 'Order System', 'Inventory', 'Sales Reports']
    },
    {
        id: 'inventory',
        name: 'Inventory Management',
        description: 'Track stock levels, manage suppliers, automate reordering, and generate reports.',
        Icon: IconInventory,
        features: ['Stock Tracking', 'Supplier Management', 'Auto Reorder', 'Reports']
    },
    {
        id: 'clinic',
        name: 'Clinic Management',
        description: 'Patient records, appointment scheduling, prescription management, and billing.',
        Icon: IconClinic,
        features: ['Patient Records', 'Appointments', 'Prescriptions', 'Billing']
    },
    {
        id: 'hotel',
        name: 'Hotel Management',
        description: 'Room bookings, guest management, housekeeping schedules, and revenue tracking.',
        Icon: IconHotel,
        features: ['Room Booking', 'Guest Management', 'Housekeeping', 'Revenue']
    },
    {
        id: 'library',
        name: 'Library Management',
        description: 'Catalog management, member registration, book lending, and overdue tracking.',
        Icon: IconLibrary,
        features: ['Catalog', 'Members', 'Lending', 'Overdue Alerts']
    },
    {
        id: 'retail',
        name: 'Retail POS System',
        description: 'Point of sale, inventory sync, customer management, and sales analytics.',
        Icon: IconRetail,
        features: ['POS', 'Inventory Sync', 'Customers', 'Analytics']
    },
    {
        id: 'logistics',
        name: 'Logistics & Delivery',
        description: 'Fleet tracking, route optimization, delivery management, and driver assignments.',
        Icon: IconLogistics,
        features: ['Fleet Tracking', 'Routes', 'Deliveries', 'Drivers']
    },
    {
        id: 'hr',
        name: 'HR Management',
        description: 'Employee records, payroll, leave management, and performance tracking.',
        Icon: IconHR,
        features: ['Employees', 'Payroll', 'Leave', 'Performance']
    }
];

export default function ProductsPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-background text-foreground dark:text-white transition-colors duration-200">
            <Navbar />

            <main className="pt-16">
                {/* Hero */}
                <section className="relative w-full py-20 md:py-28 overflow-hidden">
                    <div className="absolute inset-0 bg-background-subtle dark:bg-background transition-colors duration-200" />
                    <div className="absolute top-1/4 left-1/3 w-[400px] h-[400px] bg-systems/5 dark:bg-systems/10 rounded-full blur-[150px] pointer-events-none" />

                    <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                        <motion.div initial="hidden" animate="visible" variants={stagger}>
                            <SectionBadge title="For Clients" variant="systems" />

                            <motion.h1 className="text-4xl md:text-6xl font-bold font-heading tracking-tight mb-6" variants={fadeInUp}>
                                <span className="text-foreground dark:text-white">Systems We </span>
                                <span className="text-systems">Build</span>
                            </motion.h1>

                            <motion.p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed text-muted-foreground dark:text-muted-foreground" variants={fadeInUp}>
                                Professional management systems tailored to your business. Choose a template and we&apos;ll customize it for you.
                            </motion.p>
                        </motion.div>
                    </div>
                </section>

                {/* Products Grid */}
                <section className="py-20 bg-white dark:bg-background transition-colors duration-200">
                    <div className="max-w-6xl mx-auto px-6">
                        <motion.div
                            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={stagger}
                        >
                            {products.map((product) => (
                                <motion.div key={product.id} variants={scaleIn}>
                                    <Link href={`/studio/contact?source=products&system=${product.id}`}>
                                        <div className="h-full bg-background-subtle dark:bg-background rounded-2xl p-6 border border-border dark:border-white/5 hover:border-systems/40 transition-all group cursor-pointer">
                                            <div className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform">
                                                <product.Icon />
                                            </div>

                                            <h3 className="text-xl font-bold text-foreground dark:text-white mb-2">{product.name}</h3>
                                            <p className="text-sm text-muted-foreground dark:text-muted-foreground mb-4 leading-relaxed">{product.description}</p>

                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {product.features.map((feature, i) => (
                                                    <span key={i} className="px-2 py-1 text-xs bg-muted dark:bg-white/10 text-muted-foreground dark:text-muted-foreground rounded-full">
                                                        {feature}
                                                    </span>
                                                ))}
                                            </div>

                                            <div className="flex items-center gap-2 text-systems text-sm font-medium group-hover:gap-3 transition-all">
                                                Get This System
                                                <div className="w-4 h-4"><IconArrowRight /></div>
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-20 bg-background-subtle dark:bg-background/50 transition-colors duration-200">
                    <div className="max-w-3xl mx-auto px-6 text-center">
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
                            <motion.h2 className="text-3xl md:text-4xl font-bold text-foreground dark:text-white mb-4" variants={fadeInUp}>
                                Need something different?
                            </motion.h2>
                            <motion.p className="text-lg text-muted-foreground dark:text-muted-foreground mb-8" variants={fadeInUp}>
                                We build custom systems too. Tell us what you need and we&apos;ll make it happen.
                            </motion.p>
                            <motion.div variants={fadeInUp}>
                                <Link href="/studio/contact?source=custom-system" className="inline-flex items-center gap-2 px-8 py-4 bg-systems text-white font-bold rounded-xl hover:bg-systems/90 transition-all shadow-lg shadow-systems/25 group">
                                    Request Custom System
                                    <div className="w-5 h-5 group-hover:translate-x-1 transition-transform"><IconArrowRight /></div>
                                </Link>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>
            </main>

            <SystemsFooter />
        </div>
    );
}
