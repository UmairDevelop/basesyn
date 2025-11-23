export default function Testimonials() {
    const testimonials = [
        {
            quote: "Basesyn's AI automation solution completely revolutionized our inventory management. We've seen a 40% reduction in operational costs within just three months.",
            author: "Sarah Johnson",
            role: "COO, LogisticsPro",
            avatar: "SJ"
        },
        {
            quote: "The mobile app they developed for us is flawless. Their team's expertise in both iOS and Android ensured a seamless launch and 5-star user reviews.",
            author: "Michael Chen",
            role: "Founder, RetailTech",
            avatar: "MC"
        },
        {
            quote: "We needed to scale our dev team fast, and Basesyn's staff augmentation service provided us with top-tier engineers who hit the ground running immediately.",
            author: "Emily Davis",
            role: "CTO, FinServe",
            avatar: "ED"
        }
    ];

    return (
        <section className="py-24 bg-black relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

            <div className="container px-4 mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="inline-block py-1 px-4 rounded-full border border-accent-mint/30 text-accent-mint text-xs font-bold tracking-widest uppercase mb-6">
                        Testimonials
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                        Client Stories
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Don't just take our word for it. Here's what our partners have to say.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="p-8 rounded-3xl bg-[#111] border border-white/10 text-white hover:border-accent-mint/30 transition-colors duration-300"
                        >
                            <div className="mb-6 text-accent-mint">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="opacity-100"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" /></svg>
                            </div>
                            <p className="text-lg mb-6 leading-relaxed text-gray-300">
                                "{testimonial.quote}"
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="h-12 w-12 rounded-full bg-accent-mint text-black flex items-center justify-center font-bold text-sm">
                                    {testimonial.avatar}
                                </div>
                                <div>
                                    <div className="font-bold text-white">{testimonial.author}</div>
                                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
