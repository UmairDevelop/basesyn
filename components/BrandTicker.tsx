export default function BrandTicker() {
    const brands = [
        "/brand-logos/brand_ticker1.webp",
        "/brand-logos/brand_ticker2.svg",
        "/brand-logos/brand_ticker3.webp",
        "/brand-logos/brand_ticker4.webp",
        "/brand-logos/brand_ticker5.webp",
        "/brand-logos/brand_ticker6.webp",
        "/brand-logos/brand_ticker7.png",
        "/brand-logos/brand_ticker8.avif",
        "/brand-logos/brand_ticker9.webp",
        "/brand-logos/brand_ticker10.svg",
        "/brand-logos/brand_ticker11.png",
        "/brand-logos/brand_ticker12.png",
    ];

    // Create a base set that is wide enough to fill the screen
    // 11 brands * 2 = 22 items.
    const baseSet = [...brands, ...brands];

    return (
        <section className="py-10 bg-accent-mint overflow-hidden border-t border-black/5">
            <div className="flex w-full overflow-hidden mask-gradient">
                {/* First Set */}
                <div className="flex animate-scroll gap-32 pr-32 min-w-full shrink-0 items-center justify-around">
                    {baseSet.map((logo, index) => (
                        <div key={`set1-${index}`} className="flex items-center justify-center shrink-0 h-14 w-40">
                            <img
                                src={logo}
                                alt={`Brand Logo ${index + 1}`}
                                className="max-h-full max-w-full object-contain opacity-80 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                            />
                        </div>
                    ))}
                </div>

                {/* Second Set (Duplicate for Loop) */}
                <div className="flex animate-scroll gap-32 pr-32 min-w-full shrink-0 items-center justify-around" aria-hidden="true">
                    {baseSet.map((logo, index) => (
                        <div key={`set2-${index}`} className="flex items-center justify-center shrink-0 h-14 w-40">
                            <img
                                src={logo}
                                alt={`Brand Logo ${index + 1}`}
                                className="max-h-full max-w-full object-contain opacity-80 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
