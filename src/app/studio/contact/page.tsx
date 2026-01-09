"use client";

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Navbar from '@/components/layout/Navbar';
import StudioFooter from '@/components/layout/StudioFooter';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInUp, fadeInDown, stagger, scaleIn, viewportOnce } from '@/lib/animations';
import { EnvelopeIcon, PhoneIcon, ChatBubbleLeftRightIcon, MapPinIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

type ServiceType = '' | 'website-development' | 'content-creation' | 'graphic-design' | 'powerpoint' | 'maintenance' | 'general';

export default function ContactPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-white dark:bg-synapse-black" />}>
            <ContactPageContent />
        </Suspense>
    );
}

function ContactPageContent() {
    const searchParams = useSearchParams();
    const [formStep, setFormStep] = useState(1);
    const [selectedService, setSelectedService] = useState<ServiceType>('');
    const [formData, setFormData] = useState({
        // Basic Info
        name: '',
        email: '',
        phone: '',
        company: '',

        // Website Development
        websitePackage: '',
        websitePages: '',
        websiteFeatures: [] as string[],
        businessDescription: '',

        // Content Creation
        contentTier: '',
        contentTerm: '',
        contentTypes: [] as string[],
        brandInfo: '',

        // Graphic Design
        designCount: '',
        designTypes: [] as string[],
        hasBrandGuidelines: '',

        // PowerPoint
        slideCount: '',
        presentationPurpose: '',

        // Website Maintenance
        currentWebsite: '',
        websitePlatform: '',
        maintenanceNeeds: [] as string[],

        // General
        budget: '',
        timeline: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleCheckboxChange = (field: string, value: string) => {
        const currentValues = formData[field as keyof typeof formData] as string[];
        const newValues = currentValues.includes(value)
            ? currentValues.filter(v => v !== value)
            : [...currentValues, value];

        setFormData({
            ...formData,
            [field]: newValues
        });
    };

    const handleServiceSelect = (service: ServiceType) => {
        setSelectedService(service);
        setFormStep(2);
    };

    // Read URL parameters and pre-fill form
    useEffect(() => {
        const service = searchParams.get('service') as ServiceType;
        const packageParam = searchParams.get('package');
        const tier = searchParams.get('tier');
        const term = searchParams.get('term');

        if (service) {
            setSelectedService(service);
            setFormStep(2);

            // Pre-fill service-specific fields
            const updates: Partial<typeof formData> = {};

            if (service === 'website-development' && packageParam) {
                updates.websitePackage = packageParam;
            }

            if (service === 'content-creation') {
                if (tier) updates.contentTier = tier;
                if (term) updates.contentTerm = term;
            }

            if (Object.keys(updates).length > 0) {
                setFormData(prev => ({ ...prev, ...updates }));
            }
        }
    }, [searchParams]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', { service: selectedService, ...formData });
        // Form submission logic
    };

    return (
        <div className="min-h-screen bg-white dark:bg-synapse-black text-black dark:text-white transition-colors duration-200">
            <Navbar />

            <main className="pt-16">
                {/* Enhanced Gradient Header */}
                <section className="relative w-full min-h-[50vh] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 transition-all duration-700 ease-in-out">
                        <div className="absolute inset-0 bg-gradient-to-bl from-sky-100/40 via-indigo-50/40 to-purple-100/40 dark:opacity-0 opacity-100 transition-opacity duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-bl from-slate-950 via-[#0f172a] to-[#312e81] dark:opacity-100 opacity-0 transition-opacity duration-700" />
                    </div>

                    <div
                        className="absolute inset-0 bg-[size:3rem_3rem] transition-all duration-700 dark:opacity-[0.15] opacity-[0.25]"
                        style={{
                            backgroundImage: `linear-gradient(to right, #7c3aed45 1px, transparent 1px), linear-gradient(to bottom, #7c3aed45 1px, transparent 1px)`,
                            maskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, #000 20%, transparent 100%)',
                            WebkitMaskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, #000 20%, transparent 100%)'
                        }}
                    />

                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-400/20 rounded-full blur-[100px] pointer-events-none mix-blend-multiply dark:mix-blend-screen dark:bg-indigo-500/10 dark:opacity-40 animate-pulse-slow" />
                    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sky-400/20 rounded-full blur-[100px] pointer-events-none mix-blend-multiply dark:mix-blend-screen dark:bg-purple-500/10 dark:opacity-40" />

                    <motion.div
                        className="relative z-10 max-w-4xl mx-auto px-6 text-center py-16 md:py-24"
                        initial="hidden"
                        animate="visible"
                        variants={stagger}
                    >
                        <motion.h1
                            className="text-4xl md:text-6xl font-bold font-heading tracking-tight mb-4"
                            variants={fadeInUp}
                        >
                            <span className="bg-clip-text text-transparent bg-gradient-to-r dark:from-white dark:via-indigo-100 dark:to-purple-200 from-slate-900 via-indigo-800 to-slate-900">
                                Let's Build Together
                            </span>
                        </motion.h1>

                        <motion.p
                            className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed dark:text-slate-400 text-slate-600"
                            variants={fadeInUp}
                        >
                            Tell us about your project and we'll create a custom solution for you.
                        </motion.p>
                    </motion.div>
                </section>

                {/* Dynamic Contact Form */}
                <section className="px-6 py-16">
                    <div className="max-w-4xl mx-auto">

                        {/* Step 1: Service Selection */}
                        <AnimatePresence mode="wait">
                            {formStep === 1 && (
                                <motion.div
                                    key="step1"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <h2 className="text-3xl font-bold font-heading mb-4 text-center">What can we help you with?</h2>
                                    <p className="text-synapse-gray dark:text-gray-400 text-center mb-12">Select a service to get started</p>

                                    <div className="grid md:grid-cols-2 gap-4">
                                        {[
                                            { id: 'website-development', name: 'Website Development', desc: 'Build a new website or redesign' },
                                            { id: 'content-creation', name: 'Content Creation', desc: 'Videos & photography packages' },
                                            { id: 'graphic-design', name: 'Graphic Design', desc: 'Logos, banners, social posts' },
                                            { id: 'powerpoint', name: 'PowerPoint Presentations', desc: 'Professional pitch decks' },
                                            { id: 'maintenance', name: 'Website Maintenance', desc: 'Keep your site running smoothly' },
                                            { id: 'general', name: 'General Inquiry', desc: 'Just want to chat' }
                                        ].map((service) => (
                                            <motion.button
                                                key={service.id}
                                                onClick={() => handleServiceSelect(service.id as ServiceType)}
                                                className="text-left p-6 bg-white dark:bg-synapse-slate rounded-2xl border-2 border-gray-200 dark:border-white/10 hover:border-synapse-main dark:hover:border-synapse-main transition-all group"
                                                whileHover={{ scale: 1.02, y: -4 }}
                                                whileTap={{ scale: 0.98 }}
                                            >
                                                <h3 className="font-bold text-lg mb-1 group-hover:text-synapse-main transition-colors">{service.name}</h3>
                                                <p className="text-sm text-synapse-gray dark:text-gray-400">{service.desc}</p>
                                            </motion.button>
                                        ))}
                                    </div>
                                </motion.div>
                            )}

                            {/* Step 2: Dynamic Form Based on Service */}
                            {formStep === 2 && (
                                <motion.div
                                    key="step2"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <button
                                        onClick={() => setFormStep(1)}
                                        className="text-synapse-main hover:underline mb-6 flex items-center gap-2"
                                    >
                                        ← Change Service
                                    </button>

                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        {/* Basic Information (Always Shown) */}
                                        <div className="bg-white dark:bg-synapse-slate p-8 rounded-2xl border border-gray-200 dark:border-white/10">
                                            <h3 className="text-2xl font-bold mb-6">Your Information</h3>

                                            <div className="grid md:grid-cols-2 gap-6">
                                                <div>
                                                    <label className="block text-sm font-medium mb-2">Full Name *</label>
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        required
                                                        value={formData.name}
                                                        onChange={handleChange}
                                                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-white/10 bg-white dark:bg-synapse-black focus:border-synapse-main outline-none"
                                                        placeholder="John Doe"
                                                    />
                                                </div>

                                                <div>
                                                    <label className="block text-sm font-medium mb-2">Email *</label>
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        required
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-white/10 bg-white dark:bg-synapse-black focus:border-synapse-main outline-none"
                                                        placeholder="john@example.com"
                                                    />
                                                </div>

                                                <div>
                                                    <label className="block text-sm font-medium mb-2">Phone</label>
                                                    <input
                                                        type="tel"
                                                        name="phone"
                                                        value={formData.phone}
                                                        onChange={handleChange}
                                                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-white/10 bg-white dark:bg-synapse-black focus:border-synapse-main outline-none"
                                                        placeholder="+233 54 813 5853"
                                                    />
                                                </div>

                                                <div>
                                                    <label className="block text-sm font-medium mb-2">Company/Business</label>
                                                    <input
                                                        type="text"
                                                        name="company"
                                                        value={formData.company}
                                                        onChange={handleChange}
                                                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-white/10 bg-white dark:bg-synapse-black focus:border-synapse-main outline-none"
                                                        placeholder="Your Company Ltd"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Website Development Specific Fields */}
                                        {selectedService === 'website-development' && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                className="bg-white dark:bg-synapse-slate p-8 rounded-2xl border border-gray-200 dark:border-white/10"
                                            >
                                                <h3 className="text-2xl font-bold mb-6">Website Details</h3>

                                                <div className="space-y-6">
                                                    <div>
                                                        <label className="block text-sm font-medium mb-2">Package Interest *</label>
                                                        <select
                                                            name="websitePackage"
                                                            required
                                                            value={formData.websitePackage}
                                                            onChange={handleChange}
                                                            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-white/10 bg-white dark:bg-synapse-black focus:border-synapse-main outline-none"
                                                        >
                                                            <option value="">Select a package</option>
                                                            <option value="starter">Starter (GH₵3,500 - 5,000)</option>
                                                            <option value="business">Business (GH₵8,000 - 12,000)</option>
                                                            <option value="ecommerce">E-Commerce (GH₵18,000 - 25,000)</option>
                                                            <option value="custom">Custom/Not Sure</option>
                                                        </select>
                                                    </div>

                                                    <div>
                                                        <label className="block text-sm font-medium mb-2">Approximate Number of Pages</label>
                                                        <input
                                                            type="text"
                                                            name="websitePages"
                                                            value={formData.websitePages}
                                                            onChange={handleChange}
                                                            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-white/10 bg-white dark:bg-synapse-black focus:border-synapse-main outline-none"
                                                            placeholder="e.g., 5-10 pages"
                                                        />
                                                    </div>

                                                    <div>
                                                        <label className="block text-sm font-medium mb-3">Features Needed (select all that apply)</label>
                                                        <div className="grid md:grid-cols-2 gap-3">
                                                            {['Blog/CMS', 'E-commerce', 'User Accounts', 'Payment Integration', 'Booking System', 'Multi-language'].map((feature) => (
                                                                <label key={feature} className="flex items-center gap-2 cursor-pointer">
                                                                    <input
                                                                        type="checkbox"
                                                                        checked={formData.websiteFeatures.includes(feature)}
                                                                        onChange={() => handleCheckboxChange('websiteFeatures', feature)}
                                                                        className="w-4 h-4 text-synapse-main focus:ring-synapse-main"
                                                                    />
                                                                    <span className="text-sm">{feature}</span>
                                                                </label>
                                                            ))}
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <label className="block text-sm font-medium mb-2">Describe Your Business/Purpose *</label>
                                                        <textarea
                                                            name="businessDescription"
                                                            required
                                                            value={formData.businessDescription}
                                                            onChange={handleChange}
                                                            rows={4}
                                                            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-white/10 bg-white dark:bg-synapse-black focus:border-synapse-main outline-none resize-none"
                                                            placeholder="What does your business do? Who are your customers?"
                                                        />
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}

                                        {/* Content Creation Specific Fields */}
                                        {selectedService === 'content-creation' && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                className="bg-white dark:bg-synapse-slate p-8 rounded-2xl border border-gray-200 dark:border-white/10"
                                            >
                                                <h3 className="text-2xl font-bold mb-6">Content Package Details</h3>

                                                <div className="space-y-6">
                                                    <div>
                                                        <label className="block text-sm font-medium mb-2">Package Tier *</label>
                                                        <select
                                                            name="contentTier"
                                                            required
                                                            value={formData.contentTier}
                                                            onChange={handleChange}
                                                            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-white/10 bg-white dark:bg-synapse-black focus:border-synapse-main outline-none"
                                                        >
                                                            <option value="">Select a tier</option>
                                                            <option value="basic">Basic (1 video, 3-4 photos/month)</option>
                                                            <option value="standard">Standard (3 videos, 6-8 photos/month)</option>
                                                            <option value="premium">Premium (5 videos, 10+ photos/month)</option>
                                                        </select>
                                                    </div>

                                                    <div>
                                                        <label className="block text-sm font-medium mb-2">Contract Term *</label>
                                                        <select
                                                            name="contentTerm"
                                                            required
                                                            value={formData.contentTerm}
                                                            onChange={handleChange}
                                                            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-white/10 bg-white dark:bg-synapse-black focus:border-synapse-main outline-none"
                                                        >
                                                            <option value="">Select term length</option>
                                                            <option value="3-month">3 Months</option>
                                                            <option value="6-month">6 Months (Save 8%)</option>
                                                            <option value="12-month">12 Months (Save 20% - Best Value)</option>
                                                        </select>
                                                    </div>

                                                    <div>
                                                        <label className="block text-sm font-medium mb-3">Content Types Interested In</label>
                                                        <div className="grid md:grid-cols-2 gap-3">
                                                            {['Product Shots', 'Testimonial Videos', 'Brand Photography', 'Social Media Videos', 'Event Coverage', 'Behind-the-Scenes'].map((type) => (
                                                                <label key={type} className="flex items-center gap-2 cursor-pointer">
                                                                    <input
                                                                        type="checkbox"
                                                                        checked={formData.contentTypes.includes(type)}
                                                                        onChange={() => handleCheckboxChange('contentTypes', type)}
                                                                        className="w-4 h-4 text-synapse-main focus:ring-synapse-main"
                                                                    />
                                                                    <span className="text-sm">{type}</span>
                                                                </label>
                                                            ))}
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <label className="block text-sm font-medium mb-2">About Your Brand *</label>
                                                        <textarea
                                                            name="brandInfo"
                                                            required
                                                            value={formData.brandInfo}
                                                            onChange={handleChange}
                                                            rows={4}
                                                            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-white/10 bg-white dark:bg-synapse-black focus:border-synapse-main outline-none resize-none"
                                                            placeholder="Tell us about your brand, target audience, and content goals"
                                                        />
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}

                                        {/* Graphic Design Specific Fields */}
                                        {selectedService === 'graphic-design' && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                className="bg-white dark:bg-synapse-slate p-8 rounded-2xl border border-gray-200 dark:border-white/10"
                                            >
                                                <h3 className="text-2xl font-bold mb-6">Design Details</h3>

                                                <div className="space-y-6">
                                                    <div>
                                                        <label className="block text-sm font-medium mb-2">How Many Designs Do You Need? *</label>
                                                        <input
                                                            type="text"
                                                            name="designCount"
                                                            required
                                                            value={formData.designCount}
                                                            onChange={handleChange}
                                                            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-white/10 bg-white dark:bg-synapse-black focus:border-synapse-main outline-none"
                                                            placeholder="e.g., 3-5 designs"
                                                        />
                                                    </div>

                                                    <div>
                                                        <label className="block text-sm font-medium mb-3">Types of Designs Needed</label>
                                                        <div className="grid md:grid-cols-2 gap-3">
                                                            {['Logo', 'Social Media Posts', 'Banners/Ads', 'Business Cards', 'Flyers/Posters', 'Brand Identity'].map((type) => (
                                                                <label key={type} className="flex items-center gap-2 cursor-pointer">
                                                                    <input
                                                                        type="checkbox"
                                                                        checked={formData.designTypes.includes(type)}
                                                                        onChange={() => handleCheckboxChange('designTypes', type)}
                                                                        className="w-4 h-4 text-synapse-main focus:ring-synapse-main"
                                                                    />
                                                                    <span className="text-sm">{type}</span>
                                                                </label>
                                                            ))}
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <label className="block text-sm font-medium mb-2">Do you have brand guidelines? *</label>
                                                        <select
                                                            name="hasBrandGuidelines"
                                                            required
                                                            value={formData.hasBrandGuidelines}
                                                            onChange={handleChange}
                                                            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-white/10 bg-white dark:bg-synapse-black focus:border-synapse-main outline-none"
                                                        >
                                                            <option value="">Select option</option>
                                                            <option value="yes">Yes, I have brand guidelines</option>
                                                            <option value="partial">I have some brand elements</option>
                                                            <option value="no">No, need help creating them</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}

                                        {/* PowerPoint Specific Fields */}
                                        {selectedService === 'powerpoint' && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                className="bg-white dark:bg-synapse-slate p-8 rounded-2xl border border-gray-200 dark:border-white/10"
                                            >
                                                <h3 className="text-2xl font-bold mb-6">Presentation Details</h3>

                                                <div className="space-y-6">
                                                    <div>
                                                        <label className="block text-sm font-medium mb-2">Approximate Number of Slides *</label>
                                                        <input
                                                            type="text"
                                                            name="slideCount"
                                                            required
                                                            value={formData.slideCount}
                                                            onChange={handleChange}
                                                            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-white/10 bg-white dark:bg-synapse-black focus:border-synapse-main outline-none"
                                                            placeholder="e.g., 10-15 slides"
                                                        />
                                                    </div>

                                                    <div>
                                                        <label className="block text-sm font-medium mb-2">Presentation Purpose *</label>
                                                        <select
                                                            name="presentationPurpose"
                                                            required
                                                            value={formData.presentationPurpose}
                                                            onChange={handleChange}
                                                            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-white/10 bg-white dark:bg-synapse-black focus:border-synapse-main outline-none"
                                                        >
                                                            <option value="">Select purpose</option>
                                                            <option value="pitch">Investor Pitch Deck</option>
                                                            <option value="sales">Sales Presentation</option>
                                                            <option value="corporate">Corporate/Internal</option>
                                                            <option value="keynote">Keynote/Conference</option>
                                                            <option value="other">Other</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}

                                        {/* Website Maintenance Specific Fields */}
                                        {selectedService === 'maintenance' && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                className="bg-white dark:bg-synapse-slate p-8 rounded-2xl border border-gray-200 dark:border-white/10"
                                            >
                                                <h3 className="text-2xl font-bold mb-6">Website Maintenance Details</h3>

                                                <div className="space-y-6">
                                                    <div>
                                                        <label className="block text-sm font-medium mb-2">Current Website URL *</label>
                                                        <input
                                                            type="url"
                                                            name="currentWebsite"
                                                            required
                                                            value={formData.currentWebsite}
                                                            onChange={handleChange}
                                                            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-white/10 bg-white dark:bg-synapse-black focus:border-synapse-main outline-none"
                                                            placeholder="https://yourwebsite.com"
                                                        />
                                                    </div>

                                                    <div>
                                                        <label className="block text-sm font-medium mb-2">Website Platform/CMS *</label>
                                                        <select
                                                            name="websitePlatform"
                                                            required
                                                            value={formData.websitePlatform}
                                                            onChange={handleChange}
                                                            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-white/10 bg-white dark:bg-synapse-black focus:border-synapse-main outline-none"
                                                        >
                                                            <option value="">Select platform</option>
                                                            <option value="wordpress">WordPress</option>
                                                            <option value="wix">Wix</option>
                                                            <option value="squarespace">Squarespace</option>
                                                            <option value="custom">Custom/React/Next.js</option>
                                                            <option value="other">Other</option>
                                                            <option value="unknown">Not Sure</option>
                                                        </select>
                                                    </div>

                                                    <div>
                                                        <label className="block text-sm font-medium mb-3">Maintenance Needs</label>
                                                        <div className="grid md:grid-cols-2 gap-3">
                                                            {['Security Updates', 'Performance Optimization', 'Content Updates', 'Bug Fixes', 'Backup Management', 'SEO Monitoring'].map((need) => (
                                                                <label key={need} className="flex items-center gap-2 cursor-pointer">
                                                                    <input
                                                                        type="checkbox"
                                                                        checked={formData.maintenanceNeeds.includes(need)}
                                                                        onChange={() => handleCheckboxChange('maintenanceNeeds', need)}
                                                                        className="w-4 h-4 text-synapse-main focus:ring-synapse-main"
                                                                    />
                                                                    <span className="text-sm">{need}</span>
                                                                </label>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}

                                        {/* Common Fields for All Services */}
                                        <div className="bg-white dark:bg-synapse-slate p-8 rounded-2xl border border-gray-200 dark:border-white/10">
                                            <h3 className="text-2xl font-bold mb-6">Project Details</h3>

                                            <div className="space-y-6">
                                                {selectedService !== 'general' && (
                                                    <div>
                                                        <label className="block text-sm font-medium mb-2">Budget Range</label>
                                                        <select
                                                            name="budget"
                                                            value={formData.budget}
                                                            onChange={handleChange}
                                                            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-white/10 bg-white dark:bg-synapse-black focus:border-synapse-main outline-none"
                                                        >
                                                            <option value="">Select budget range</option>
                                                            <option value="under-5k">Under GH₵5,000</option>
                                                            <option value="5k-10k">GH₵5,000 - GH₵10,000</option>
                                                            <option value="10k-20k">GH₵10,000 - GH₵20,000</option>
                                                            <option value="20k-plus">GH₵20,000+</option>
                                                            <option value="flexible">Flexible</option>
                                                        </select>
                                                    </div>
                                                )}

                                                <div>
                                                    <label className="block text-sm font-medium mb-2">Timeline/Deadline</label>
                                                    <input
                                                        type="text"
                                                        name="timeline"
                                                        value={formData.timeline}
                                                        onChange={handleChange}
                                                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-white/10 bg-white dark:bg-synapse-black focus:border-synapse-main outline-none"
                                                        placeholder="e.g., Within 2 weeks, By end of month"
                                                    />
                                                </div>

                                                <div>
                                                    <label className="block text-sm font-medium mb-2">Additional Information *</label>
                                                    <textarea
                                                        name="message"
                                                        required
                                                        value={formData.message}
                                                        onChange={handleChange}
                                                        rows={6}
                                                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-white/10 bg-white dark:bg-synapse-black focus:border-synapse-main outline-none resize-none"
                                                        placeholder="Tell us more about your project, goals, or any specific requirements..."
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Submit Button */}
                                        <motion.button
                                            type="submit"
                                            className="w-full bg-synapse-main hover:bg-synapse-main/90 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg shadow-synapse-main/30 hover:shadow-xl hover:shadow-synapse-main/40 flex items-center justify-center gap-3"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            <CheckCircleIcon className="w-6 h-6" />
                                            Submit Request
                                        </motion.button>

                                        <p className="text-sm text-center text-synapse-gray dark:text-gray-400">
                                            We'll review your request and get back to you within 24 hours.
                                        </p>
                                    </form>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </section>

                {/* Contact Info */}
                <section className="px-6 py-16 bg-gray-50 dark:bg-synapse-black/50">
                    <motion.div
                        className="max-w-4xl mx-auto text-center"
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportOnce}
                        variants={stagger}
                    >
                        <motion.h2 className="text-3xl font-bold font-heading mb-4" variants={fadeInUp}>
                            Or reach us directly
                        </motion.h2>
                        <motion.p className="text-synapse-gray dark:text-gray-400 mb-12" variants={fadeInUp}>
                            Prefer to chat? We're here to help!
                        </motion.p>

                        <motion.div className="grid md:grid-cols-3 gap-6" variants={stagger}>
                            <motion.a
                                href="mailto:synaptech25@gmail.com"
                                className="p-6 bg-white dark:bg-synapse-slate rounded-2xl border border-gray-200 dark:border-white/10 hover:border-synapse-main transition-all group"
                                variants={scaleIn}
                                whileHover={{ y: -5 }}
                            >
                                <EnvelopeIcon className="w-8 h-8 text-synapse-main mx-auto mb-3" />
                                <p className="font-medium mb-1">Email</p>
                                <p className="text-sm text-synapse-gray dark:text-gray-400">synaptech25@gmail.com</p>
                            </motion.a>

                            <motion.a
                                href="tel:+233548135853"
                                className="p-6 bg-white dark:bg-synapse-slate rounded-2xl border border-gray-200 dark:border-white/10 hover:border-synapse-main transition-all group"
                                variants={scaleIn}
                                whileHover={{ y: -5 }}
                            >
                                <PhoneIcon className="w-8 h-8 text-synapse-main mx-auto mb-3" />
                                <p className="font-medium mb-1">Phone</p>
                                <p className="text-sm text-synapse-gray dark:text-gray-400">+233 54 813 5853</p>
                            </motion.a>

                            <motion.a
                                href="https://wa.me/233548135853"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-6 bg-white dark:bg-synapse-slate rounded-2xl border border-gray-200 dark:border-white/10 hover:border-synapse-main transition-all group"
                                variants={scaleIn}
                                whileHover={{ y: -5 }}
                            >
                                <ChatBubbleLeftRightIcon className="w-8 h-8 text-synapse-main mx-auto mb-3" />
                                <p className="font-medium mb-1">WhatsApp</p>
                                <p className="text-sm text-synapse-gray dark:text-gray-400">+233 54 813 5853</p>
                            </motion.a>
                        </motion.div>
                    </motion.div>
                </section>
            </main>

            <StudioFooter />
        </div>
    );
}
