'use client'
import Image from 'next/image';
import { useState } from 'react';
import { IconLeftArrow, IconRightArrow } from '../Icons/Icons';
import { brands } from '../utils/brands';

const OurBrands = () => {

    const duplicatedBrands = [...brands, ...brands, ...brands];

    const [scrolling, setScrolling] = useState(true);
    const [, setCurrentIndex] = useState(0);

    const nextBrand = () => {
        setScrolling(false);
        setCurrentIndex((prevIndex) => (prevIndex + 3));
        setTimeout(() => setScrolling(true), 300);
    };

    const prevBrand = () => {
        setScrolling(false);
        setCurrentIndex((prevIndex) => (prevIndex - 3));
        setTimeout(() => setScrolling(true), 300);
    };

    return (
        <div className="overflow-hidden relative space-y-2">
            <header className="text-center">
                <h1 className="text-2xl md:text-4xl">Our Clients & Projects</h1>
            </header>
            <div className="p-2  bg-gradient-to-r from-background via-blue-900 to-background">

                <div className="flex  p-6 items-center justify-between ">

                    <div className={`flex ${scrolling ? 'animate-scroll' : ''}`}>
                        {duplicatedBrands.map((brand, index) => (
                            <div key={index} className="flex-shrink-0 h-[34px] mx-2">
                                <div className='relative min-w-40 h-7'>
                                    <Image src={brand.logo} alt={brand.name} fill />
                                </div>
                            </div>
                        ))}
                    </div>
                    <button onClick={nextBrand} className="text-blue-500 absolute right-3 hover:text-white transition hover:bg-blue-500 rounded-full size-12 ">
                        <IconRightArrow />
                    </button>
                    <button onClick={prevBrand} className="text-blue-500 absolute left-3 hover:text-white transition hover:bg-blue-500 rounded-full size-12 ">
                        <IconLeftArrow />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default OurBrands;
