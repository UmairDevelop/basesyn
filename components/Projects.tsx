import Link from "next/link";
import Image from "next/image";

const projects = [
    {
        title: "AI Customer Support Bot",
        description: "Implemented a custom NLP-driven chatbot for a fintech firm, reducing support ticket volume by 45% and improving response times.",
        image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=2006&auto=format&fit=crop",
        tags: ["AI Automation", "Chatbot"],
    },
    {
        title: "E-commerce Mobile App",
        description: "Developed a high-performance native iOS and Android app for a retail brand, resulting in a 30% increase in mobile sales.",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop",
        tags: ["Mobile App", "iOS & Android"],
    },
    {
        title: "Enterprise Staff Augmentation",
        description: "Provided a dedicated team of senior React developers to accelerate the launch of a SaaS platform's new dashboard feature.",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
        tags: ["Staff Augmentation", "Web Dev"],
    },
    {
        title: "Logistics Automation System",
        description: "Built an AI-powered workflow automation tool that streamlined inventory management and reduced manual data entry errors by 90%.",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
        tags: ["AI Automation", "Web App"],
    },
    {
        title: "Fintech Web Platform",
        description: "Designed and developed a secure, responsive web application for real-time financial tracking and investment management.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
        tags: ["Web Application", "Fintech"],
    },
    {
        title: "Healthcare Patient Portal",
        description: "Created a HIPAA-compliant mobile app allowing patients to schedule appointments and view medical records securely.",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2028&auto=format&fit=crop",
        tags: ["Mobile App", "Healthcare"],
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
                        <div
                            key={index}
                            className="group rounded-3xl overflow-hidden border border-white/10 bg-[#111] text-white transition-all duration-300 flex flex-col hover:bg-accent-mint hover:border-accent-mint hover:text-black cursor-pointer"
                        >
                            {/* Image Container */}
                            <div className="p-6 pb-0">
                                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-accent-mint rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 scale-50 group-hover:scale-100">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black"><line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" /></svg>
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8 pt-6 flex flex-col grow">
                                {/* Tags */}
                                <div className="flex flex-wrap gap-3 mb-4">
                                    {project.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="px-4 py-1.5 rounded-full text-xs font-bold border border-white/20 text-white group-hover:border-black/20 group-hover:text-black transition-colors duration-300"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                                <p className="text-sm leading-relaxed mb-4 text-gray-400 group-hover:text-black/80 transition-colors duration-300">
                                    {project.description}
                                </p>
                            </div>
                        </div>
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
