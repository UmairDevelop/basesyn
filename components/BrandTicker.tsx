export default function BrandTicker() {
    const brands = [
        { name: "HubSpot", logo: "https://upload.wikimedia.org/wikipedia/commons/1/11/HubSpot_Logo.svg" },
        { name: "Buffer", logo: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Buffer_Logo.svg" },
        { name: "Stripe", logo: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" },
        { name: "Framer", logo: "https://upload.wikimedia.org/wikipedia/commons/8/8b/Framer_logo.svg" },
        { name: "Dropbox", logo: "https://upload.wikimedia.org/wikipedia/commons/7/78/Dropbox_Icon.svg" },
        { name: "Netflix", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" },
    ];

    // Create a base set that is wide enough to fill the screen
    // 6 brands * 4 = 24 items. Enough for > 4000px width
    const baseSet = [...brands, ...brands, ...brands, ...brands];

    return (
        <section className="py-10 bg-accent-mint overflow-hidden border-t border-black/5">
            <div className="flex w-full overflow-hidden mask-gradient">
                {/* First Set */}
                <div className="flex animate-scroll gap-16 pr-16 min-w-full shrink-0 items-center justify-around">
                    {baseSet.map((brand, index) => (
                        <div key={`set1-${index}`} className="flex items-center justify-center shrink-0">
                            <span className="text-2xl font-bold text-black flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity cursor-pointer">
                                {/* Placeholder Icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z" /></svg>
                                {brand.name}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Second Set (Duplicate for Loop) */}
                <div className="flex animate-scroll gap-16 pr-16 min-w-full shrink-0 items-center justify-around" aria-hidden="true">
                    {baseSet.map((brand, index) => (
                        <div key={`set2-${index}`} className="flex items-center justify-center shrink-0">
                            <span className="text-2xl font-bold text-black flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity cursor-pointer">
                                {/* Placeholder Icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z" /></svg>
                                {brand.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
