"use client";

import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import StudioFooter from '@/components/layout/StudioFooter';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInUp, fadeInDown, stagger, scaleIn, viewportOnce } from '@/lib/animations';
import {
    CodeBracketIcon,
    PencilSquareIcon,
    PresentationChartLineIcon,
    XMarkIcon,
    ArrowTopRightOnSquareIcon
} from '@heroicons/react/24/outline';
import portfolioData from '@/data/studio-portfolio.json';

type Category = 'all' | 'website' | 'content' | 'powerpoint';

interface PortfolioItem {
    id: string;
    title: string;
    category: string;
    description: string;
    fullDescription: string;
    image: string;
    link: string;
    technologies?: string[];
    year?: string;
}

export default function PortfolioPage() {
    const [selectedCategory, setSelectedCategory] = useState<Category>('all');
    const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);

    const categories = [
        { id: 'all' as Category, label: 'All Projects', icon: null },
        { id: 'website' as Category, label: 'Websites', icon: CodeBracketIcon },
        { id: 'content' as Category, label: 'Content Creation', icon: PencilSquareIcon },
        { id: 'powerpoint' as Category, label: 'PowerPoint', icon: PresentationChartLineIcon },
    ];

    const filteredProjects = selectedCategory === 'all'
        ? portfolioData.portfolioItems
        : portfolioData.portfolioItems.filter(item => item.category === selectedCategory);

    const getCategoryBadge = (category: string) => {
        const badges = {
            website: { label: 'Website', color: 'bg-blue-500' },
            content: { label: 'Content', color: 'bg-purple-500' },
            powerpoint: { label: 'PowerPoint', color: 'bg-pink-500' },
        };
        return badges[category as keyof typeof badges] || { label: category, color: 'bg-gray-500' };
    };

    return (
        <div className="min-h-screen bg-white dark:bg-synapse-black text-black dark:text-white transition-colors duration-200">
            <Navbar />

            <main className="pt-16">
                {/* Enhanced Gradient Header */}
                <section className="relative w-full min-h-[60vh] flex items-center justify-center overflow-hidden">
                    {/* Background Layer */}
                    <div className="absolute inset-0 transition-all duration-700 ease-in-out">
                        <div className="absolute inset-0 bg-gradient-to-bl from-sky-100/40 via-indigo-50/40 to-purple-100/40 dark:opacity-0 opacity-100 transition-opacity duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-bl from-slate-950 via-[#0f172a] to-[#312e81] dark:opacity-100 opacity-0 transition-opacity duration-700" />
                    </div>

                    {/* Grid Overlay */}
                    <div
                        className="absolute inset-0 bg-[size:3rem_3rem] transition-all duration-700 dark:opacity-[0.15] opacity-[0.25]"
                        style={{
                            backgroundImage: `
                                linear-gradient(to right, #7c3aed45 1px, transparent 1px),
                                linear-gradient(to bottom, #7c3aed45 1px, transparent 1px)
                            `,
                            maskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, #000 20%, transparent 100%)',
                            WebkitMaskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, #000 20%, transparent 100%)'
                        }}
                    />

                    {/* Ambient Glow Spots */}
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-400/20 rounded-full blur-[100px] pointer-events-none mix-blend-multiply dark:mix-blend-screen dark:bg-indigo-500/10 dark:opacity-40 animate-pulse-slow" />
                    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sky-400/20 rounded-full blur-[100px] pointer-events-none mix-blend-multiply dark:mix-blend-screen dark:bg-purple-500/10 dark:opacity-40" />

                    {/* Content Container */}
                    <motion.div
                        className="relative z-10 max-w-4xl mx-auto px-6 text-center py-20 md:py-32"
                        initial="hidden"
                        animate="visible"
                        variants={stagger}
                    >
                        {/* Badge */}
                        <motion.div
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/60 dark:bg-white/5 border border-purple-200 dark:border-white/10 backdrop-blur-sm mb-8 shadow-sm transition-all duration-300 hover:scale-105 cursor-default"
                            variants={fadeInDown}
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                            </span>
                            <span className="text-xs font-medium tracking-wide uppercase text-purple-700 dark:text-purple-300">
                                Studio Portfolio
                            </span>
                        </motion.div>

                        {/* Headline */}
                        <motion.h1
                            className="text-5xl md:text-7xl font-bold font-heading tracking-tight mb-6 transition-colors duration-300"
                            variants={fadeInUp}
                        >
                            <span className="bg-clip-text text-transparent bg-gradient-to-r dark:from-white dark:via-indigo-100 dark:to-purple-200 from-slate-900 via-indigo-800 to-slate-900">
                                Our Work
                            </span>
                        </motion.h1>

                        {/* Subtext */}
                        <motion.p
                            className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed transition-colors duration-300 dark:text-slate-400 text-slate-600"
                            variants={fadeInUp}
                        >
                            Explore our portfolio of websites, content creation, and presentations that have helped brands grow.
                        </motion.p>
                    </motion.div>
                </section>

                {/* Filter Navigation */}
                <section className="px-6 py-12 border-b border-gray-200 dark:border-white/10">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            className="flex flex-wrap justify-center gap-3"
                            initial="hidden"
                            whileInView="visible"
                            viewport={viewportOnce}
                            variants={stagger}
                        >
                            {categories.map((category) => (
                                <motion.button
                                    key={category.id}
                                    onClick={() => setSelectedCategory(category.id)}
                                    className={`flex items-center gap-2 px-6 py-3 rounded-full border-2 transition-all duration-300 ${selectedCategory === category.id
                                            ? 'bg-synapse-main text-white border-synapse-main shadow-lg shadow-synapse-main/30'
                                            : 'border-gray-300 dark:border-white/20 hover:border-synapse-main/50 hover:bg-synapse-main/5'
                                        }`}
                                    variants={scaleIn}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {category.icon && <category.icon className="w-5 h-5" />}
                                    <span className="font-medium">{category.label}</span>
                                </motion.button>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* Portfolio Grid */}
                <section className="px-6 py-20">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                            initial="hidden"
                            animate="visible"
                            variants={stagger}
                            key={selectedCategory}
                        >
                            {filteredProjects.map((project) => {
                                const badge = getCategoryBadge(project.category);
                                return (
                                    <motion.div
                                        key={project.id}
                                        variants={scaleIn}
                                        whileHover={{ y: -10, scale: 1.02 }}
                                        className="group cursor-pointer"
                                        onClick={() => setSelectedProject(project)}
                                    >
                                        <div className="relative bg-white dark:bg-synapse-slate border-2 border-gray-200 dark:border-white/10 rounded-3xl overflow-hidden hover:border-synapse-main/50 dark:hover:border-synapse-main/50 transition-all duration-300 hover:shadow-2xl hover:shadow-synapse-main/20">
                                            {/* Category Badge */}
                                            <div className="absolute top-4 left-4 z-10">
                                                <span className={`${badge.color} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                                                    {badge.label}
                                                </span>
                                            </div>

                                            {/* Project Image */}
                                            <div className="relative h-48 overflow-hidden">
                                                <img
                                                    src={project.image}
                                                    alt={project.title}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                            </div>

                                            {/* Content */}
                                            <div className="p-6">
                                                <h3 className="text-xl font-bold font-heading mb-2 group-hover:text-synapse-main transition-colors">
                                                    {project.title}
                                                </h3>
                                                <p className="text-synapse-gray dark:text-gray-400 text-sm leading-relaxed mb-4">
                                                    {project.description}
                                                </p>

                                                {/* Technologies */}
                                                {project.technologies && (
                                                    <div className="flex flex-wrap gap-2 mb-4">
                                                        {project.technologies.map((tech, idx) => (
                                                            <span
                                                                key={idx}
                                                                className="text-xs bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-2 py-1 rounded-md"
                                                            >
                                                                {tech}
                                                            </span>
                                                        ))}
                                                    </div>
                                                )}

                                                {/* View Details */}
                                                <div className="inline-flex items-center gap-2 text-synapse-main font-medium group-hover:gap-3 transition-all">
                                                    View Details
                                                    <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                                                </div>
                                            </div>

                                            {/* Hover Gradient Overlay */}
                                            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-synapse-main/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </motion.div>

                        {/* Empty State */}
                        {filteredProjects.length === 0 && (
                            <motion.div
                                className="text-center py-20"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                            >
                                <p className="text-synapse-gray dark:text-gray-400 text-lg">
                                    No projects found in this category yet.
                                </p>
                            </motion.div>
                        )}
                    </div>
                </section>
            </main>

            <StudioFooter />

            {/* Project Detail Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            className="relative bg-white dark:bg-synapse-slate rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-4 right-4 z-20 p-2 bg-white/90 dark:bg-black/90 rounded-full hover:bg-synapse-main hover:text-white transition-all duration-300 shadow-lg"
                            >
                                <XMarkIcon className="w-6 h-6" />
                            </button>

                            {/* Project Image */}
                            <div className="relative h-64 md:h-80 overflow-hidden rounded-t-3xl">
                                <img
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                                {/* Category Badge on Image */}
                                <div className="absolute top-4 left-4">
                                    <span className={`${getCategoryBadge(selectedProject.category).color} text-white text-sm font-bold px-4 py-2 rounded-full`}>
                                        {getCategoryBadge(selectedProject.category).label}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8">
                                <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
                                    {selectedProject.title}
                                </h2>

                                {/* Year */}
                                {selectedProject.year && (
                                    <p className="text-synapse-gray dark:text-gray-400 mb-6">
                                        {selectedProject.year}
                                    </p>
                                )}

                                {/* Full Description */}
                                <p className="text-lg leading-relaxed text-synapse-gray dark:text-gray-300 mb-6">
                                    {selectedProject.fullDescription}
                                </p>

                                {/* Technologies */}
                                {selectedProject.technologies && (
                                    <div className="mb-6">
                                        <h3 className="text-sm font-bold uppercase tracking-wide text-synapse-gray dark:text-gray-400 mb-3">
                                            Technologies Used
                                        </h3>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedProject.technologies.map((tech, idx) => (
                                                <span
                                                    key={idx}
                                                    className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-4 py-2 rounded-lg font-medium"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Visit Project Button */}
                                <a
                                    href={selectedProject.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-8 py-4 bg-synapse-main text-white rounded-full font-bold hover:bg-synapse-main/90 hover:shadow-lg hover:shadow-synapse-main/30 transition-all duration-300 hover:scale-105"
                                >
                                    Visit Project
                                    <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
