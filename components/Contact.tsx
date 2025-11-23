export default function Contact() {
    return (
        <section id="contact" className="py-24 bg-black text-white relative overflow-hidden">
            <div className="container px-4 mx-auto relative z-10">

                {/* Header */}
                <div className="text-center mb-20">
                    <span className="inline-block py-1 px-4 rounded-full border border-accent-mint/30 text-accent-mint text-xs font-bold tracking-widest uppercase mb-6">
                        Contact Us
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Ready to Transform <br />
                        Your Business?
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Let's discuss how our digital solutions can help you achieve your goals. Reach out to us for a consultation.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* Left Content */}
                    <div className="pt-8">
                        <h3 className="text-3xl md:text-4xl font-bold mb-6">
                            Let's build something <br />
                            extraordinary together.
                        </h3>
                        <p className="text-gray-400 text-lg mb-12 max-w-md leading-relaxed">
                            Whether you need a custom mobile app, an AI-powered automation system, or a dedicated development team, we're here to help.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-center gap-6">
                                <div className="w-12 h-12 rounded-full bg-accent-mint flex items-center justify-center text-black shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                                </div>
                                <div>
                                    <p className="text-white font-bold mb-1">Email:</p>
                                    <p className="text-gray-400">contact@basesyn.com</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-6">
                                <div className="w-12 h-12 rounded-full bg-accent-mint flex items-center justify-center text-black shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                </div>
                                <div>
                                    <p className="text-white font-bold mb-1">Phone:</p>
                                    <p className="text-gray-400">+92 315 467 3559</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Form */}
                    <div className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 md:p-12">
                        <form className="space-y-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-xs font-bold text-white uppercase tracking-wider">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Enter your name*"
                                    className="w-full h-14 px-4 rounded-lg bg-[#111] border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:border-accent-mint/50 transition-colors"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-xs font-bold text-white uppercase tracking-wider">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Enter your email*"
                                    className="w-full h-14 px-4 rounded-lg bg-[#111] border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:border-accent-mint/50 transition-colors"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-xs font-bold text-white uppercase tracking-wider">Your Messege</label>
                                <textarea
                                    id="message"
                                    rows={5}
                                    placeholder="Enter Your Messege ....."
                                    className="w-full p-4 rounded-lg bg-[#111] border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:border-accent-mint/50 transition-colors resize-none"
                                ></textarea>
                            </div>

                            <button
                                type="button"
                                className="inline-flex items-center justify-center h-12 px-8 rounded-md bg-accent-mint text-black font-bold text-sm hover:opacity-90 transition-opacity gap-2 mt-2"
                            >
                                SUBMIT
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}
