"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Carousel({
    images,
}: {
    images: { src: string; caption: string }[];
}) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="relative w-full h-full">
            <Image
                src={images[index].src}
                alt={images[index].caption}
                fill
                className="object-cover transition-opacity duration-500"
            />
            {/* Caption */}
            <div className="absolute bottom-0 w-full bg-black/50 text-white text-center py-2 text-sm">
                {images[index].caption}
            </div>
            {/* Indicators */}
            <div className="absolute bottom-2 right-2 flex gap-2">
                {images.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setIndex(i)}
                        className={`w-3 h-3 rounded-full ${i === index ? "bg-white" : "bg-gray-500"
                            }`}
                    ></button>
                ))}
            </div>
        </div>
    );
}
