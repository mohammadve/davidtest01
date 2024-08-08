import React from 'react';
import { Marquee } from './Marquee';
import hamburger from '../assets/images/hamburger.svg';

export const Header = () => {
    return (
        <header className="relative z-40">
            {/* Top Marquee Section */}
            <div class="infobar bg-orange h-[38px] flex items-center justify-center py-2">
                <Marquee text="a cracking unfiltered tropical ipa" />
            </div>

            {/* Main Navbar Section */}
            <nav class="bg-transparent md:bg-black md:border-b border-white py-[20px]">
                <div class="container">
                    <div class="grid gap-2 grid-cols-2 items-center justify-between">
                        <div class="left-sec">
                            <div class="logo-wrapper">
                                <img src={require('../assets/images/logo.png')} alt="Logo" class="max-w-[176px] md:max-w-[215px]" />
                            </div>
                        </div>
                        <div class="right-sec text-right">
                            <button type="button" class="md:hidden h-[40px] min-w-[56px] flex items-center justify-center border border-orange rounded-full ms-auto px-5 py-3">
                                <img src={hamburger} alt="Mobile Menu" className="icon" />
                            </button>
                            <ul class="hidden list-none md:flex flex-wrap items-center justify-end gap-[32px] lg:gap-[24px]">
                                <li>
                                    <a href="#" class="text-lg text-white hover:text-orange font-teko font-bold inline-block uppercase transition-all mt-1">The beer</a>
                                </li>
                                <li>
                                    <a href="#" class="text-lg text-white hover:text-orange font-teko font-bold inline-block uppercase transition-all mt-1">Trade</a>
                                </li>
                                <li>
                                    <a href="#" class="text-lg text-white hover:text-orange font-teko font-bold inline-block uppercase transition-all mt-1">shop</a>
                                </li>
                                <li>
                                    <a href="#" class="contact-btn h-[40px] flex items-center justify-center bg-black hover:bg-orange text-white hover:text-black text-lg font-teko font-bold uppercase transition-all border border-orange rounded-full px-5 py-2 pt-3 ms-2">Contact us</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}
