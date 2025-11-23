import Link from "next/link";
import Image from "next/image";

const projects = [
    {
        title: "Mobile App Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop",
        tags: ["App Design", "UX Research"],
    },
    {
        title: "Web Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2055&auto=format&fit=crop",
        tags: ["Web Design", "UX Research"],
    },
    {
        title: "Brand Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop",
        tags: ["Brand Design", "UX Research"],
    },
    {
        title: "UI/UX Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "https://images.unsplash.com/photo-1586717791821-3f44a5638d48?q=80&w=2070&auto=format&fit=crop",
        tags: ["UI/UX Design", "UX Research"],
    },
    {
        title: "Web Development",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
        tags: ["Web Develope", "UX Research"],
    },
    {
        title: "Graphic Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "https://images.unsplash.com/photo-1626785774573-4b79931256ce?q=80&w=2070&auto=format&fit=crop",
        tags: ["Graphik Design", "UX Research"],
    },
];

export default function Projects() {
    return (
        <section id="project" className="py-24 bg-black text-white">
            <div className="container px-4 mx-auto">

                {/* Header */}
                <div className="text-center mb-16">
                    <span className="inline-block py-1 px-4 rounded-full border border-accent-mint/30 text-accent-mint text-xs font-bold tracking-widest uppercase mb-6">
                        Project
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Our Project
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Some creative designs created by our agency
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
