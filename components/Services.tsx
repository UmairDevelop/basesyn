import Link from "next/link";

const services = [
    {
        title: "Native Android Solutions",
        description: "Build high-performance, scalable Android applications tailored to your business needs using the latest Kotlin and Java frameworks.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18.36 6.64a9 9 0 1 1-12.73 0" /><line x1="12" y1="2" x2="12" y2="12" /></svg>
        ),
    },
    {
        title: "iOS Application Solutions",
        description: "Deliver exceptional user experiences with custom iOS apps developed in Swift, ensuring seamless performance across all Apple devices.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" /><path d="M10 2c1 .5 2 2 2 5" /></svg>
        ),
    },
    {
        title: "AI Automations",
        description: "Streamline your operations and reduce costs by integrating intelligent automation workflows that handle repetitive tasks with precision.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /><line x1="12" y1="19" x2="12" y2="23" /><line x1="8" y1="23" x2="16" y2="23" /></svg>
        ),
    },
    {
        title: "Staff Augmentation",
        description: "Scale your team rapidly with our vetted pool of top-tier developers and engineers, ready to integrate seamlessly into your projects.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
        ),
    },
    {
        title: "Web Applications",
        description: "Create robust, secure, and responsive web applications that drive engagement and deliver real business value using modern tech stacks.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" /></svg>
        ),
    },
    {
        title: "Custom AI Chatbots",
        description: "Enhance customer support and engagement with 24/7 intelligent chatbots trained on your specific business data and requirements.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8V4H8" /><rect width="16" height="12" x="4" y="8" rx="2" /><path d="M2 14h2" /><path d="M20 14h2" /><path d="M15 13v2" /><path d="M9 13v2" /></svg>
        ),
    },
];

export default function Services() {
    return (
        <section id="services" className="py-24 bg-black text-white">
            <div className="container px-4 mx-auto">

                {/* Header */}
                <div className="text-center mb-20">
                    <span className="inline-block py-1 px-4 rounded-full border border-accent-mint/30 text-accent-mint text-xs font-bold tracking-widest uppercase mb-6">
                        Our Services
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Comprehensive Digital <br />
                        Solutions
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        From mobile applications to AI-driven automation, we provide the technological expertise to propel your business forward.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <Link
                            href="#contact"
                            key={index}
                            className="relative group p-10 rounded-2xl border border-white/10 bg-[#111] text-white transition-all duration-300 flex flex-col items-center text-center hover:bg-accent-mint hover:border-accent-mint hover:text-black cursor-pointer"
                        >
                            {/* Icon Circle */}
                            <div className="w-16 h-16 rounded-full flex items-center justify-center mb-8 border-2 border-white/20 text-white group-hover:border-black group-hover:text-black transition-colors duration-300">
                                {service.icon}
                            </div>

                            <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                            <p className="text-sm leading-relaxed text-gray-400 group-hover:text-black/80 transition-colors duration-300">
                                {service.description}
                            </p>

                            {/* Active Arrow Button */}
                            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-accent-mint rounded-full border-4 border-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-50 group-hover:scale-100 shadow-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                            </div>
                        </Link>
                    ))}
                </div>

            </div>
        </section>
    );
}
