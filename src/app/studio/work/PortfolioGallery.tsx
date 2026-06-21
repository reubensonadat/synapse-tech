'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    CodeBracketIcon,
    DevicePhoneMobileIcon,
    PencilSquareIcon,
    PresentationChartLineIcon,
    XMarkIcon,
    ArrowTopRightOnSquareIcon,
} from '@heroicons/react/24/outline';
import portfolioData from '@/data/studio-portfolio.json';

type Category = 'all' | 'website' | 'webapp' | 'content' | 'powerpoint';

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

const categories = [
    { id: 'all' as Category, label: 'All Work' },
    { id: 'website' as Category, label: 'Websites' },
    { id: 'webapp' as Category, label: 'Web Apps' },
    { id: 'content' as Category, label: 'Content' },
    { id: 'powerpoint' as Category, label: 'Presentations' },
];

const getCategoryMeta = (category: string) => {
    const meta: Record<string, { label: string; accent: string }> = {
        website: { label: 'Website', accent: 'text-systems' },
        webapp: { label: 'Web App', accent: 'text-primary' },
        content: { label: 'Content', accent: 'text-primary' },
        powerpoint: { label: 'Presentation', accent: 'text-systems' },
    };
    return meta[category] || { label: category, accent: 'text-muted-foreground' };
};

export default function PortfolioGallery() {
    const [selectedCategory, setSelectedCategory] = useState<Category>('all');
    const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);

    const filteredProjects = selectedCategory === 'all'
        ? portfolioData.portfolioItems
        : portfolioData.portfolioItems.filter(item => item.category === selectedCategory);

    return (
        <>
            {/* ─────────── FILTER PILLS ─────────── */}
            <div className="flex flex-wrap gap-3 mb-12">
                {categories.map((category) => (
                    <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${selectedCategory === category.id
                                ? 'bg-primary text-white shadow-lg shadow-primary/25'
                                : 'bg-white/50 dark:bg-white/5 backdrop-blur-sm border border-border dark:border-white/10 text-muted-foreground hover:border-primary/40 hover:text-foreground'
                            }`}
                    >
                        {category.label}
                    </button>
                ))}
            </div>

            {/* ─────────── PORTFOLIO GRID ─────────── */}
            <div
                key={selectedCategory}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
                {filteredProjects.map((project, index) => {
                    const meta = getCategoryMeta(project.category);
                    return (
                        <button
                            key={project.id}
                            onClick={() => setSelectedProject(project)}
                            className="group relative text-left bg-white/50 dark:bg-white/5 backdrop-blur-sm border border-border dark:border-white/10 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1"
                        >
                            {/* Numbered index */}
                            <div className={`absolute top-4 right-4 z-10 text-2xl font-bold font-heading opacity-20 ${index % 2 === 0 ? 'text-primary' : 'text-systems'}`}>
                                0{index + 1}
                            </div>

                            {/* Project Image */}
                            <div className="relative h-52 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                                <div className="absolute bottom-4 left-4">
                                    <span className={`text-xs font-bold uppercase tracking-wider ${meta.accent}`}>
                                        {meta.label}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold font-heading mb-2 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">
                                    {project.description}
                                </p>

                                <div className="inline-flex items-center gap-1.5 text-primary font-semibold text-sm group-hover:gap-2.5 transition-all">
                                    View Details
                                    <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                                </div>
                            </div>
                        </button>
                    );
                })}
            </div>

            {filteredProjects.length === 0 && (
                <div className="text-center py-20">
                    <p className="text-muted-foreground text-lg">
                        No projects found in this category yet.
                    </p>
                </div>
            )}

            {/* ─────────── PROJECT DETAIL MODAL ─────────── */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            className="relative bg-white dark:bg-card rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-white/20 dark:border-white/10"
                            initial={{ scale: 0.95, y: 20, opacity: 0 }}
                            animate={{ scale: 1, y: 0, opacity: 1 }}
                            exit={{ scale: 0.95, y: 20, opacity: 0 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-4 right-4 z-20 p-2.5 bg-white/80 dark:bg-card/80 backdrop-blur-sm rounded-full hover:bg-primary hover:text-white transition-all duration-300 shadow-lg border border-border dark:border-white/10"
                                aria-label="Close"
                            >
                                <XMarkIcon className="w-5 h-5" />
                            </button>

                            <div className="relative h-64 md:h-80 overflow-hidden rounded-t-3xl">
                                <img
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                            </div>

                            <div className="p-8 md:p-10">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className={`text-xs font-bold uppercase tracking-wider ${getCategoryMeta(selectedProject.category).accent}`}>
                                        {getCategoryMeta(selectedProject.category).label}
                                    </span>
                                    {selectedProject.year && (
                                        <span className="text-xs text-muted-foreground">· {selectedProject.year}</span>
                                    )}
                                </div>

                                <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6 leading-tight">
                                    {selectedProject.title}
                                </h2>

                                <p className="text-base md:text-lg leading-relaxed text-muted-foreground mb-8">
                                    {selectedProject.fullDescription}
                                </p>

                                {selectedProject.technologies && (
                                    <div className="mb-8">
                                        <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">
                                            Technologies Used
                                        </h3>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedProject.technologies.map((tech, idx) => (
                                                <span
                                                    key={idx}
                                                    className="bg-primary-soft dark:bg-primary/10 text-primary dark:text-primary-glow px-4 py-2 rounded-lg font-medium text-sm"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {selectedProject.link && selectedProject.link !== '#' && (
                                    <a
                                        href={selectedProject.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40"
                                    >
                                        Visit Project
                                        <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
