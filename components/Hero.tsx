import Link from "next/link";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative pt-28 pb-12 md:pt-32 md:pb-24 bg-black overflow-hidden flex items-center min-h-[85vh]">
            <div className="container px-4 mx-auto h-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">

                    {/* Left Content */}
                    <div className="max-w-2xl flex flex-col justify-center">
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8 leading-[1.1]">
                            Scalable Digital <br />
                            Solutions for the <br />
                            <span className="text-accent-mint">AI Era</span>
                        </h1>

                        <p className="text-gray-400 text-lg mb-10 max-w-lg leading-relaxed">
                            We engineer high-performance mobile applications and intelligent AI automation systems that drive efficiency, growth, and digital transformation for forward-thinking businesses.
                        </p>

                        <div>
                            <Link
                                href="#contact"
                                className="group inline-flex items-center justify-center h-14 px-8 rounded-full border border-accent-mint text-accent-mint font-medium tracking-wide hover:bg-accent-mint hover:text-black transition-all duration-300"
                            >
                                START A PROJECT
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 group-hover:translate-x-1 transition-transform"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                            </Link>
                        </div>
                    </div>

                    {/* Right Content - Image */}
                    <div className="relative h-full flex items-center">
                        <div className="relative w-full aspect-[3/4] md:aspect-[4/5] lg:aspect-[5/6]">
                            <div className="rounded-[2rem] overflow-hidden w-full h-full">
                                {/* Placeholder for Team Image */}
                                <img
                                    src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2064&auto=format&fit=crop"
                                    alt="Modern Business Meeting"
                                    className="object-cover w-full h-full"
                                />
                            </div>

                            {/* Circular Overlay Element */}
                            <div className="absolute -bottom-12 -left-12 md:-bottom-16 md:-left-16 w-32 h-32 md:w-48 md:h-48 bg-black rounded-full flex items-center justify-center z-10">
                                <div className="relative w-full h-full animate-spin-slow">
                                    <svg viewBox="0 0 100 100" width="100%" height="100%" className="absolute top-0 left-0 w-full h-full p-2">
                                        <path
                                            id="curve"
                                            d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                                            fill="transparent"
                                        />
                                        <text className="text-[10px] uppercase font-bold tracking-widest fill-white">
                                            <textPath href="#curve">
                                                Let's Start A Project • Let's Start A Project •
                                            </textPath>
                                        </text>
                                    </svg>
                                </div>
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" /></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
