import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-50 bg-accent-mint border-b border-black/5">
            <div className="container mx-auto px-4 h-20 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-black rounded-tr-xl rounded-bl-xl"></div>
                    <span className="text-2xl font-bold tracking-tight text-black">Basesyn</span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    <Link href="/" className="text-sm font-medium text-black hover:opacity-70 transition-opacity flex items-center gap-1">
                        Home <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                    </Link>
                    <Link href="#services" className="text-sm font-medium text-black hover:opacity-70 transition-opacity">
                        Services
                    </Link>
                    <Link href="#project" className="text-sm font-medium text-black hover:opacity-70 transition-opacity">
                        Project
                    </Link>
                    <Link href="#page" className="text-sm font-medium text-black hover:opacity-70 transition-opacity flex items-center gap-1">
                        Page <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                    </Link>
                    <Link href="#contact" className="text-sm font-medium text-black hover:opacity-70 transition-opacity">
                        Contact Us
                    </Link>
                </div>

                {/* CTA Button */}
                <div className="flex items-center gap-4">
                    <Link
                        href="#contact"
                        className="hidden md:inline-flex h-10 items-center justify-center rounded-md bg-black px-6 text-sm font-bold text-white shadow transition-transform hover:scale-105"
                    >
                        LET'S TALK <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                    </Link>

                    {/* Mobile Menu Button */}
                    <button className="md:hidden p-2 text-black hover:bg-black/10 rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
                    </button>
                </div>
            </div>
        </nav>
    );
}
