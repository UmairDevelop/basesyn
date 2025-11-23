export default function SocialProof() {
    const logos = [
        "TechCorp", "Innovate", "FutureScale", "NextGen", "AlphaWave", "BlueSky"
    ];

    return (
        <section className="py-12 border-y border-white/5 bg-white/5 backdrop-blur-sm">
            <div className="container px-4 mx-auto">
                <p className="text-center text-sm font-medium text-muted-foreground mb-8">
                    TRUSTED BY INNOVATIVE TEAMS WORLDWIDE
                </p>
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                    {logos.map((logo, index) => (
                        <div key={index} className="text-xl font-bold font-mono">
                            {logo}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
