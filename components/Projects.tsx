import Link from "next/link";
import Image from "next/image";

const projects = [
    {
        title: "Chaveirim",
        description: "Developed a robust community platform for a non-profit organization, facilitating volunteer coordination and emergency response services.",
        image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=2070&auto=format&fit=crop",
        tags: ["Non-Profit", "Web Platform"],
        link: "https://chaveirim.org/",
        logo: "/brand-logos/brand_ticker12.png"
    },
    {
        title: "Exotic Auto Services",
        description: "Designed and built a premium digital presence for a luxury auto service center, featuring service booking and portfolio showcases.",
        image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2070&auto=format&fit=crop",
        tags: ["Automotive", "Web Design"],
        link: "https://exoticautoservices.ae/",
        logo: "/brand-logos/brand_ticker4.webp"
    },
    {
        title: "Al Zaabi Auto Care",
        description: "Created a comprehensive corporate website for a leading auto care center, integrating service menus and customer inquiry forms.",
        image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=2070&auto=format&fit=crop",
        tags: ["Corporate", "Automotive"],
        link: "https://alzaabiautocare.com/",
        logo: "/brand-logos/brand_ticker7.png"
    },
    {
        title: "Ayurveda AESMC",
        description: "Developed a calming, wellness-focused website for an Ayurvedic medical center, highlighting treatments and holistic health services.",
        image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070&auto=format&fit=crop",
        tags: ["Healthcare", "Wellness"],
        link: "https://ayurveda.aesmc.com/",
        logo: "/brand-logos/brand_ticker9.webp"
    },
    {
        title: "Pet Med Mart",
        description: "Engineered a high-conversion e-commerce platform for pet medications, ensuring a seamless shopping experience for pet owners.",
        image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=2688&auto=format&fit=crop",
        tags: ["E-commerce", "Pet Care"],
        link: "https://petmedmart.com/",
        logo: "/brand-logos/brand_ticker5.webp"
    },
    {
        title: "We Buy Any Home",
        description: "Built a high-traffic real estate lead generation site, streamlining the property selling process with instant valuation tools.",
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073&auto=format&fit=crop",
        tags: ["Real Estate", "Lead Gen"],
        link: "https://www.webuyanyhome.com/",
        logo: "/brand-logos/brand_ticker10.svg"
    },
];

export default function Projects() {
    return (
        <section id="project" className="py-24 bg-black text-white">
            <div className="container px-4 mx-auto">

                {/* Header */}
                <div className="text-center mb-16">
                    <span className="inline-block py-1 px-4 rounded-full border border-accent-mint/30 text-accent-mint text-xs font-bold tracking-widest uppercase mb-6">
                        Case Studies
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Our Recent Work
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Explore how we've helped businesses transform their operations and engage customers through innovative technology.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
                    {projects.map((project, index) => (
                        <a
                            key={index}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative block bg-[#111] border border-white/10 rounded-2xl overflow-hidden hover:border-accent-mint transition-colors duration-300"
                        >
                            {/* Image Container */}
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40"
                                />
                                {/* Logo Overlay */}
                                <div className="absolute inset-0 flex items-center justify-center z-10">
                                    <div className="w-32 h-16 flex items-center justify-center">
                                        <img
                                            src={project.logo}
                                            alt={`${project.title} logo`}
                                            className="max-w-full max-h-full object-contain drop-shadow-lg"
                                        />
                                    </div>
                                </div>
                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                                    <div className="w-16 h-16 rounded-full bg-accent-mint flex items-center justify-center text-black transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" /></svg>
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8 group-hover:bg-accent-mint transition-colors duration-300">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="text-xs font-bold uppercase tracking-wider text-accent-mint group-hover:text-black/70 transition-colors">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-2xl font-bold mb-3 group-hover:text-black transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 group-hover:text-black/80 transition-colors leading-relaxed">
                                    {project.description}
                                </p>
                            </div>
                        </a>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center">
                    <a
                        href="#contact"
                        className="inline-flex items-center justify-center h-14 px-8 rounded-full border border-accent-mint text-accent-mint font-medium tracking-wide hover:bg-accent-mint hover:text-black transition-all duration-300"
                    >
                        VIEW MORE PROJECTS
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                    </a>
                </div>

            </div>
        </section>
    );
}
