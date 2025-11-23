import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-accent-mint text-black pt-24 pb-12">
            <div className="container px-4 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">

                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 bg-black rounded-tr-xl rounded-bl-xl"></div>
                            <span className="text-2xl font-bold tracking-tight">Basesyn</span>
                        </Link>
                        <p className="text-sm leading-relaxed font-medium max-w-xs">
                            Our team has a successful track record of helping brands scale profitably based high-performing strategies.
                        </p>
                        <div className="flex gap-4 pt-2">
                            {/* Social Icons */}
                            <Link href="#" className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
                            </Link>
                            <Link href="#" className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>
                            </Link>
                            <Link href="#" className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
                            </Link>
                            <Link href="#" className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                            </Link>
                        </div>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h4 className="font-bold text-lg mb-6">Company</h4>
                        <ul className="space-y-4">
                            {['Home', 'Services', 'Project', 'Team', 'Pricing Plans'].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-sm font-medium hover:opacity-70 transition-opacity">{item}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div>
                        <h4 className="font-bold text-lg mb-6">Legal</h4>
                        <ul className="space-y-4">
                            {['Style Guide', 'License', 'Contact', 'Client Say', 'FAQs'].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-sm font-medium hover:opacity-70 transition-opacity">{item}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="font-bold text-lg mb-6">Contact Info</h4>
                        <ul className="space-y-4 mb-8">
                            <li className="text-sm font-medium">Add: Sunamganj, Sylhet, Bangladesh</li>
                            <li className="text-sm font-medium">Email: hello@basesyn.com</li>
                            <li className="text-sm font-medium">Call: +8801316203355</li>
                        </ul>
                        <Link href="#contact" className="inline-flex items-center justify-center h-12 px-8 bg-black text-white text-sm font-bold rounded-md hover:opacity-80 transition-opacity group">
                            LET'S TALK
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 group-hover:translate-x-1 transition-transform"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                        </Link>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-black/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm font-medium">Copyright ©2024 Basesyn. All rights reserved.</p>
                    <div className="flex gap-8">
                        {['Our Credentials', 'Terms & Conditions', 'Privacy Policy'].map((item) => (
                            <Link key={item} href="#" className="text-sm font-medium hover:opacity-70 transition-opacity">{item}</Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
