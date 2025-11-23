import Link from "next/link";

const services = [
    {
        title: "Development",
        description: "Create a platform with the best and coolest quality from us.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
        ),
        active: true,
    },
    {
        title: "UI/UX Designer",
        description: "We provide UI/UX Design services, and of course with the best quality",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></svg>
        ),
        active: false,
    },
    {
        title: "Graphik Designer",
        description: "We provide Graphic Design services, with the best designers",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" /></svg>
        ),
        active: false,
    },
    {
        title: "Motion Graphik",
        description: "Create a platform with the best and coolest quality from us.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20v-6M6 20V10M18 20V4" /></svg>
        ),
        active: false,
    },
    {
        title: "Photography",
        description: "We provide Photography services, and of course with the best quality",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" /><circle cx="12" cy="13" r="4" /></svg>
        ),
        active: false,
    },
    {
        title: "Videography",
        description: "Create a platform with the best and coolest quality from us.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" /><line x1="7" y1="2" x2="7" y2="22" /><line x1="17" y1="2" x2="17" y2="22" /><line x1="2" y1="12" x2="22" y2="12" /><line x1="2" y1="7" x2="7" y2="7" /><line x1="2" y1="17" x2="7" y2="17" /><line x1="17" y1="17" x2="22" y2="17" /><line x1="17" y1="7" x2="22" y2="7" /></svg>
        ),
        active: false,
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
                        Explore what services <br />
                        we're offering
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Every one of us loves something different. So explore the world through the lens of our visual capabilities, and find what you love
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`relative group p-10 rounded-2xl border transition-all duration-300 flex flex-col items-center text-center
                ${service.active
                                    ? 'bg-accent-mint border-accent-mint text-black'
                                    : 'bg-[#111] border-white/10 text-white hover:border-accent-mint/50'
                                }`}
                        >
                            {/* Icon Circle */}
                            <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-8 border-2 
                ${service.active ? 'border-black text-black' : 'border-white/20 text-white'}`}>
                                {service.icon}
                            </div>

                            <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                            <p className={`text-sm leading-relaxed ${service.active ? 'text-black/80' : 'text-gray-400'}`}>
                                {service.description}
                            </p>

                            {/* Active Arrow Button */}
                            {service.active && (
                                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-accent-mint rounded-full border-4 border-black flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
