import Link from "next/link";
import Image from "next/image";

const projects = [
    {
        title: "Chaveirim",
        description: "Developed a robust community platform for a non-profit organization, facilitating volunteer coordination and emergency response services.",
        image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=2070&auto=format&fit=crop", // Community/Helping hands theme
        tags: ["Non-Profit", "Web Platform"],
        link: "https://chaveirim.org/"
    },
    {
        title: "Exotic Auto Services",
        description: "Designed and built a premium digital presence for a luxury auto service center, featuring service booking and portfolio showcases.",
        image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2070&auto=format&fit=crop", // Luxury car theme
        tags: ["Automotive", "Web Design"],
        link: "https://exoticautoservices.ae/"
    },
    {
        title: "Al Zaabi Auto Care",
        description: "Created a comprehensive corporate website for a leading auto care center, integrating service menus and customer inquiry forms.",
        image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=2070&auto=format&fit=crop", // Auto mechanic theme
        tags: ["Corporate", "Automotive"],
        link: "https://alzaabiautocare.com/"
    },
    {
        title: "Ayurveda AESMC",
        description: "Developed a calming, wellness-focused website for an Ayurvedic medical center, highlighting treatments and holistic health services.",
        image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070&auto=format&fit=crop", // Spa/Wellness theme
        tags: ["Healthcare", "Wellness"],
        link: "https://ayurveda.aesmc.com/"
    },
    {
        title: "Pet Med Mart",
        description: "Engineered a high-conversion e-commerce platform for pet medications, ensuring a seamless shopping experience for pet owners.",
        image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=2688&auto=format&fit=crop", // Dog/Pet theme
        tags: ["E-commerce", "Pet Care"],
        link: "https://petmedmart.com/"
    },
    {
        title: "We Buy Any Home",
        description: "Built a high-traffic real estate lead generation site, streamlining the property selling process with instant valuation tools.",
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073&auto=format&fit=crop", // Real estate theme
        tags: ["Real Estate", "Lead Gen"],
        link: "https://www.webuyanyhome.com/"
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
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

                {/* View More Button */}
                <div className="text-center">
                    <Link
                        href="#projects"
                        className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-accent-mint text-black font-bold tracking-wide hover:opacity-90 transition-opacity"
                    >
                        View More Project
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                    </Link>
                </div>

            </div>
        </section>
    );
}
