"use client";

import { useState } from "react";
import Link from "next/link";

const faqs = [
    {
        question: "How can AI automation benefit my business?",
        answer: "AI automation can significantly reduce manual workload, minimize errors, and operate 24/7. From customer support chatbots to data processing workflows, we tailor solutions that drive efficiency and cost savings.",
    },
    {
        question: "Do you develop native apps for both iOS and Android?",
        answer: "Yes, we specialize in native development using Swift for iOS and Kotlin for Android to ensure maximum performance. We also offer cross-platform solutions depending on your project requirements.",
    },
    {
        question: "How does your staff augmentation service work?",
        answer: "We provide pre-vetted, senior-level developers who integrate directly into your existing team. You manage them as your own, while we handle payroll, benefits, and retention.",
    },
    {
        question: "What is the typical timeline for a custom web application?",
        answer: "Timelines vary based on complexity, but a standard MVP usually takes 8-12 weeks. We follow an agile methodology to deliver iterative value and ensure the final product meets your exact needs.",
    },
    {
        question: "Can you help us integrate AI into our existing software?",
        answer: "Absolutely. We specialize in API integrations and can embed AI capabilities—like predictive analytics or natural language processing—into your legacy systems to modernize them.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-24 bg-black text-white">
            <div className="container px-4 mx-auto max-w-4xl">

                {/* Header */}
                <div className="text-center mb-16">
                    <span className="inline-block py-1 px-4 rounded-full border border-accent-mint/30 text-accent-mint text-xs font-bold tracking-widest uppercase mb-6">
                        FAQs
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        The Most Common <br />
                        Questions
                    </h2>
                </div>

                {/* Accordion */}
                <div className="space-y-4 mb-16">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`rounded-2xl border transition-all duration-300 overflow-hidden
                ${openIndex === index
                                    ? 'bg-[#111] border-white/10'
                                    : 'bg-[#111] border-white/10 hover:border-accent-mint/30'
                                }`}
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full p-6 md:p-8 flex items-center justify-between text-left focus:outline-none"
                            >
                                <span className="text-lg md:text-xl font-bold pr-8">{faq.question}</span>
                                <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300
                  ${openIndex === index ? 'bg-accent-mint text-black' : 'bg-white/10 text-white'}`}>
                                    {openIndex === index ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /></svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
                                    )}
                                </div>
                            </button>

                            <div
                                className={`grid transition-all duration-300 ease-in-out ${openIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                            >
                                <div className="overflow-hidden">
                                    <p className="p-6 md:p-8 pt-0 text-gray-400 leading-relaxed border-t border-white/5 mt-2">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* See All Button */}
                <div className="text-center">
                    <Link
                        href="#faq"
                        className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-accent-mint text-black font-bold tracking-wide hover:opacity-90 transition-opacity"
                    >
                        SEE ALL FAQS
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                    </Link>
                </div>

            </div>
        </section>
    );
}
