import React from 'react'

export const Marquee = ({ text }) => {
    const repeatedItems = [...text, ...text];
    return (
        <div className="marquee-wrapper w-full box-border overflow-hidden ">
            <div className="marquee-content animate-marquee flex items-center justify-center gap-[32px] whitespace-nowrap">
                {repeatedItems.map((item, index) => (
                    <span className="text-lg font-bold uppercase mt-1" key={index}>{text}</span>
                ))}
            </div>
        </div>
    )
}
