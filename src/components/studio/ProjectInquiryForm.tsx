"use client";

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInUp, stagger, scaleIn } from '@/lib/animations';
import { CheckCircleIcon } from '@heroicons/react/24/outline';
import { ChevronLeftIcon } from '@heroicons/react/24/outline';

type ServiceType = '' | 'website-development' | 'web-application' | 'content-creation' | 'graphic-design' | 'powerpoint' | 'maintenance' | 'general';

const serviceOptions = [
    { id: 'website-development', name: 'Website Development', desc: 'Build a new website or redesign' },
    { id: 'web-application', name: 'Web Application', desc: 'Business systems, ordering apps, PWAs' },
    { id: 'content-creation', name: 'Content Creation', desc: 'Videos & photography packages' },
    { id: 'graphic-design', name: 'Graphic Design', desc: 'Logos, banners, social posts' },
    { id: 'powerpoint', name: 'PowerPoint Presentations', desc: 'Professional pitch decks' },
    { id: 'maintenance', name: 'Website Maintenance', desc: 'Keep your site running smoothly' },
    { id: 'general', name: 'General Inquiry', desc: 'Just want to chat' },
];

export default function ProjectInquiryForm() {
    const searchParams = useSearchParams();
    const [formStep, setFormStep] = useState(1);
    const [selectedService, setSelectedService] = useState<ServiceType>('');
    const [formData, setFormData] = useState({
        name: '', email: '', phone: '', company: '',
        websitePackage: '', websitePages: '', websiteFeatures: [] as string[], businessDescription: '',
        webAppPackage: '', webAppBusinessType: '', webAppFeatures: [] as string[],
        contentTier: '', contentTerm: '', contentTypes: [] as string[], brandInfo: '',
        designCount: '', designTypes: [] as string[], hasBrandGuidelines: '',
        slideCount: '', presentationPurpose: '',
        currentWebsite: '', websitePlatform: '', maintenanceNeeds: [] as string[],
        budget: '', timeline: '', message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleCheckboxChange = (field: string, value: string) => {
        const currentValues = formData[field as keyof typeof formData] as string[];
        const newValues = currentValues.includes(value)
            ? currentValues.filter(v => v !== value)
            : [...currentValues, value];
        setFormData({ ...formData, [field]: newValues });
    };

    const handleServiceSelect = (service: ServiceType) => {
        setSelectedService(service);
        setFormStep(2);
    };

    // Read URL parameters and pre-fill form
    useEffect(() => {
        const source = searchParams.get('source');
        const systemId = searchParams.get('system');
        const service = searchParams.get('service') as ServiceType;
        const packageParam = searchParams.get('package');
        const tier = searchParams.get('tier');
        const term = searchParams.get('term');

        if (source === 'products' && systemId) {
            setSelectedService('web-application');
            setFormStep(2);
            const systemConfigs: Record<string, { type: string, name: string }> = {
                'school-lms': { type: 'other', name: 'School Management System' },
                'restaurant': { type: 'restaurant', name: 'Restaurant Management System' },
                'inventory': { type: 'retail', name: 'Inventory Management System' },
                'clinic': { type: 'service', name: 'Clinic Management System' },
                'hotel': { type: 'booking', name: 'Hotel Management System' },
                'library': { type: 'other', name: 'Library Management System' },
                'retail': { type: 'retail', name: 'Retail POS System' },
                'logistics': { type: 'service', name: 'Logistics & Delivery System' },
                'hr': { type: 'other', name: 'HR Management System' },
            };
            const config = systemConfigs[systemId];
            if (config) {
                setFormData(prev => ({
                    ...prev,
                    webAppPackage: 'standard-app',
                    webAppBusinessType: config.type,
                    message: `I am interested in the ${config.name} template. Please tell me more about customization options.`,
                }));
            }
        } else if (source === 'systems' || source === 'systems-impact' || source === 'scholastic-shield' || source === 'campus-guide' || source === 'roommate-link' || source === 'hostel-connect' || source === 'job-pulse') {
            setSelectedService('general');
            setFormStep(2);
            let interestSystem = '';
            if (source === 'scholastic-shield') interestSystem = 'Scholastic Shield';
            if (source === 'campus-guide') interestSystem = 'Campus Guide';
            if (source === 'roommate-link') interestSystem = 'Roommate Link';
            if (source === 'hostel-connect') interestSystem = 'Hostel Connect';
            if (source === 'job-pulse') interestSystem = 'Job Pulse';
            setFormData(prev => ({
                ...prev,
                message: `I am interested in partnering with Synapse Systems${interestSystem ? ` on ${interestSystem}` : ''}.`,
            }));
        } else if (source === 'custom-system') {
            setSelectedService('web-application');
            setFormStep(2);
            setFormData(prev => ({ ...prev, webAppPackage: 'premium-app', message: 'I need a custom system built from scratch.' }));
        } else if (service) {
            setSelectedService(service);
            setFormStep(2);
            const updates: Partial<typeof formData> = {};
            if (service === 'website-development' && packageParam) updates.websitePackage = packageParam;
            if (service === 'web-application' && packageParam) updates.webAppPackage = packageParam;
            if (service === 'content-creation') {
                if (tier) updates.contentTier = tier;
                if (term) updates.contentTerm = term;
            }
            if (Object.keys(updates).length > 0) setFormData(prev => ({ ...prev, ...updates }));
        }
    }, [searchParams]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', { service: selectedService, ...formData });
    };

    const inputClass = "w-full px-4 py-3 rounded-xl border-2 border-border dark:border-white/10 bg-card focus:border-primary outline-none transition-colors";
    const labelClass = "block text-sm font-medium mb-2";
    const cardClass = "bg-card p-6 md:p-8 rounded-2xl border border-border dark:border-white/10";

    return (
        <AnimatePresence mode="wait">
            {formStep === 1 && (
                <motion.div
                    key="step1"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                >
                    <h3 className="text-2xl md:text-3xl font-bold font-heading mb-3 text-center text-foreground">
                        What can we help you with?
                    </h3>
                    <p className="text-muted-foreground text-center mb-10">Select a service to get started</p>

                    <motion.div
                        className="grid md:grid-cols-2 gap-4"
                        initial="hidden"
                        animate="visible"
                        variants={stagger}
                    >
                        {serviceOptions.map((service) => (
                            <motion.button
                                key={service.id}
                                onClick={() => handleServiceSelect(service.id as ServiceType)}
                                className="text-left p-5 bg-card rounded-2xl border-2 border-border dark:border-white/10 hover:border-primary dark:hover:border-primary transition-all group"
                                variants={scaleIn}
                                whileHover={{ scale: 1.02, y: -4 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <h4 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors text-foreground">{service.name}</h4>
                                <p className="text-sm text-muted-foreground">{service.desc}</p>
                            </motion.button>
                        ))}
                    </motion.div>
                </motion.div>
            )}

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
                        className="text-primary hover:underline mb-6 flex items-center gap-2 font-medium"
                    >
                        <ChevronLeftIcon className="w-4 h-4" />
                        Change Service
                    </button>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Basic Information */}
                        <div className={cardClass}>
                            <h3 className="text-xl font-bold mb-6 text-foreground">Your Information</h3>
                            <div className="grid md:grid-cols-2 gap-5">
                                <div>
                                    <label className={labelClass}>Full Name *</label>
                                    <input type="text" name="name" required value={formData.name} onChange={handleChange} className={inputClass} placeholder="John Doe" />
                                </div>
                                <div>
                                    <label className={labelClass}>Email *</label>
                                    <input type="email" name="email" required value={formData.email} onChange={handleChange} className={inputClass} placeholder="john@example.com" />
                                </div>
                                <div>
                                    <label className={labelClass}>Phone</label>
                                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className={inputClass} placeholder="+233 54 813 5853" />
                                </div>
                                <div>
                                    <label className={labelClass}>Company/Business</label>
                                    <input type="text" name="company" value={formData.company} onChange={handleChange} className={inputClass} placeholder="Your Company Ltd" />
                                </div>
                            </div>
                        </div>

                        {/* Website Development Fields */}
                        {selectedService === 'website-development' && (
                            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className={cardClass}>
                                <h3 className="text-xl font-bold mb-6 text-foreground">Website Details</h3>
                                <div className="space-y-5">
                                    <div>
                                        <label className={labelClass}>Package Interest *</label>
                                        <select name="websitePackage" required value={formData.websitePackage} onChange={handleChange} className={inputClass}>
                                            <option value="">Select a package</option>
                                            <option value="basic">Basic - Starter (GH&#8373;2,500 - 3,500)</option>
                                            <option value="standard">Standard - Professional (GH&#8373;4,000 - 5,500)</option>
                                            <option value="premium">Premium - Enterprise (GH&#8373;7,000+)</option>
                                            <option value="custom">Custom/Not Sure</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className={labelClass}>Approximate Number of Pages</label>
                                        <input type="text" name="websitePages" value={formData.websitePages} onChange={handleChange} className={inputClass} placeholder="e.g., 5-10 pages" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-3">Features Needed (select all that apply)</label>
                                        <div className="grid md:grid-cols-2 gap-3">
                                            {['Blog/CMS', 'E-commerce', 'User Accounts', 'Payment Integration', 'Booking System', 'Multi-language'].map((feature) => (
                                                <label key={feature} className="flex items-center gap-2 cursor-pointer">
                                                    <input type="checkbox" checked={formData.websiteFeatures.includes(feature)} onChange={() => handleCheckboxChange('websiteFeatures', feature)} className="w-4 h-4 text-primary focus:ring-primary" />
                                                    <span className="text-sm">{feature}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <label className={labelClass}>Describe Your Business/Purpose *</label>
                                        <textarea name="businessDescription" required value={formData.businessDescription} onChange={handleChange} rows={4} className={`${inputClass} resize-none`} placeholder="What does your business do? Who are your customers?" />
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {/* Web Application Fields */}
                        {selectedService === 'web-application' && (
                            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className={cardClass}>
                                <h3 className="text-xl font-bold mb-6 text-foreground">Web Application Details</h3>
                                <div className="space-y-5">
                                    <div>
                                        <label className={labelClass}>Package Interest *</label>
                                        <select name="webAppPackage" required value={formData.webAppPackage} onChange={handleChange} className={inputClass}>
                                            <option value="">Select a package</option>
                                            <option value="basic-app">Basic App - The Order Taker (GH&#8373;4,000 - 5,500)</option>
                                            <option value="standard-app">Standard App - The Manager (GH&#8373;6,500 - 9,000)</option>
                                            <option value="premium-app">Premium App - The Full System (Custom Quote)</option>
                                            <option value="custom">Not Sure / Need Consultation</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className={labelClass}>What type of business is this for? *</label>
                                        <select name="webAppBusinessType" required value={formData.webAppBusinessType} onChange={handleChange} className={inputClass}>
                                            <option value="">Select business type</option>
                                            <option value="restaurant">Restaurant / Food Service</option>
                                            <option value="retail">Retail / Shop</option>
                                            <option value="booking">Booking / Appointments</option>
                                            <option value="service">Service Provider</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-3">Features Needed (select all that apply)</label>
                                        <div className="grid md:grid-cols-2 gap-3">
                                            {['Online Ordering', 'WhatsApp Integration', 'Admin Dashboard', 'User Accounts', 'Inventory Management', 'Payment Integration', 'Analytics & Reports', 'Real-time Notifications'].map((feature) => (
                                                <label key={feature} className="flex items-center gap-2 cursor-pointer">
                                                    <input type="checkbox" checked={formData.webAppFeatures.includes(feature)} onChange={() => handleCheckboxChange('webAppFeatures', feature)} className="w-4 h-4 text-primary focus:ring-primary" />
                                                    <span className="text-sm">{feature}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {/* Content Creation Fields */}
                        {selectedService === 'content-creation' && (
                            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className={cardClass}>
                                <h3 className="text-xl font-bold mb-6 text-foreground">Content Package Details</h3>
                                <div className="space-y-5">
                                    <div>
                                        <label className={labelClass}>Package Tier *</label>
                                        <select name="contentTier" required value={formData.contentTier} onChange={handleChange} className={inputClass}>
                                            <option value="">Select a tier</option>
                                            <option value="basic">Basic (3 videos, 10 flyers/month)</option>
                                            <option value="standard">Standard (5-6 videos, 10-20 flyers/month)</option>
                                            <option value="premium">Premium (10-12 videos, 25+ flyers/month)</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className={labelClass}>Contract Term *</label>
                                        <select name="contentTerm" required value={formData.contentTerm} onChange={handleChange} className={inputClass}>
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
                                                    <input type="checkbox" checked={formData.contentTypes.includes(type)} onChange={() => handleCheckboxChange('contentTypes', type)} className="w-4 h-4 text-primary focus:ring-primary" />
                                                    <span className="text-sm">{type}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <label className={labelClass}>About Your Brand *</label>
                                        <textarea name="brandInfo" required value={formData.brandInfo} onChange={handleChange} rows={4} className={`${inputClass} resize-none`} placeholder="Tell us about your brand, target audience, and content goals" />
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {/* Graphic Design Fields */}
                        {selectedService === 'graphic-design' && (
                            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className={cardClass}>
                                <h3 className="text-xl font-bold mb-6 text-foreground">Design Details</h3>
                                <div className="space-y-5">
                                    <div>
                                        <label className={labelClass}>How Many Designs Do You Need? *</label>
                                        <input type="text" name="designCount" required value={formData.designCount} onChange={handleChange} className={inputClass} placeholder="e.g., 3-5 designs" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-3">Types of Designs Needed</label>
                                        <div className="grid md:grid-cols-2 gap-3">
                                            {['Logo', 'Social Media Posts', 'Banners/Ads', 'Business Cards', 'Flyers/Posters', 'Brand Identity'].map((type) => (
                                                <label key={type} className="flex items-center gap-2 cursor-pointer">
                                                    <input type="checkbox" checked={formData.designTypes.includes(type)} onChange={() => handleCheckboxChange('designTypes', type)} className="w-4 h-4 text-primary focus:ring-primary" />
                                                    <span className="text-sm">{type}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <label className={labelClass}>Do you have brand guidelines? *</label>
                                        <select name="hasBrandGuidelines" required value={formData.hasBrandGuidelines} onChange={handleChange} className={inputClass}>
                                            <option value="">Select option</option>
                                            <option value="yes">Yes, I have brand guidelines</option>
                                            <option value="partial">I have some brand elements</option>
                                            <option value="no">No, need help creating them</option>
                                        </select>
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {/* PowerPoint Fields */}
                        {selectedService === 'powerpoint' && (
                            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className={cardClass}>
                                <h3 className="text-xl font-bold mb-6 text-foreground">Presentation Details</h3>
                                <div className="space-y-5">
                                    <div>
                                        <label className={labelClass}>Approximate Number of Slides *</label>
                                        <input type="text" name="slideCount" required value={formData.slideCount} onChange={handleChange} className={inputClass} placeholder="e.g., 10-15 slides" />
                                    </div>
                                    <div>
                                        <label className={labelClass}>Presentation Purpose *</label>
                                        <select name="presentationPurpose" required value={formData.presentationPurpose} onChange={handleChange} className={inputClass}>
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

                        {/* Maintenance Fields */}
                        {selectedService === 'maintenance' && (
                            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className={cardClass}>
                                <h3 className="text-xl font-bold mb-6 text-foreground">Website Maintenance Details</h3>
                                <div className="space-y-5">
                                    <div>
                                        <label className={labelClass}>Current Website URL *</label>
                                        <input type="url" name="currentWebsite" required value={formData.currentWebsite} onChange={handleChange} className={inputClass} placeholder="https://yourwebsite.com" />
                                    </div>
                                    <div>
                                        <label className={labelClass}>Website Platform/CMS *</label>
                                        <select name="websitePlatform" required value={formData.websitePlatform} onChange={handleChange} className={inputClass}>
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
                                                    <input type="checkbox" checked={formData.maintenanceNeeds.includes(need)} onChange={() => handleCheckboxChange('maintenanceNeeds', need)} className="w-4 h-4 text-primary focus:ring-primary" />
                                                    <span className="text-sm">{need}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {/* Common Project Details */}
                        <div className={cardClass}>
                            <h3 className="text-xl font-bold mb-6 text-foreground">Project Details</h3>
                            <div className="space-y-5">
                                {selectedService !== 'general' && (
                                    <div>
                                        <label className={labelClass}>Budget Range</label>
                                        <select name="budget" value={formData.budget} onChange={handleChange} className={inputClass}>
                                            <option value="">Select budget range</option>
                                            <option value="under-5k">Under GH&#8373;5,000</option>
                                            <option value="5k-10k">GH&#8373;5,000 - GH&#8373;10,000</option>
                                            <option value="10k-20k">GH&#8373;10,000 - GH&#8373;20,000</option>
                                            <option value="20k-plus">GH&#8373;20,000+</option>
                                            <option value="flexible">Flexible</option>
                                        </select>
                                    </div>
                                )}
                                <div>
                                    <label className={labelClass}>Timeline/Deadline</label>
                                    <input type="text" name="timeline" value={formData.timeline} onChange={handleChange} className={inputClass} placeholder="e.g., Within 2 weeks, By end of month" />
                                </div>
                                <div>
                                    <label className={labelClass}>Additional Information *</label>
                                    <textarea name="message" required value={formData.message} onChange={handleChange} rows={6} className={`${inputClass} resize-none`} placeholder="Tell us more about your project, goals, or any specific requirements..." />
                                </div>
                            </div>
                        </div>

                        <motion.button
                            type="submit"
                            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 flex items-center justify-center gap-3"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <CheckCircleIcon className="w-6 h-6" />
                            Submit Request
                        </motion.button>

                        <p className="text-sm text-center text-muted-foreground">
                            We’ll review your request and get back to you within 24 hours.
                        </p>
                    </form>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
