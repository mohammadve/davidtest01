import React from 'react';
import arrowRight from '../assets/images/arrow-right.svg';

export const Home = () => {

    return (
        <div className="home-page">
            {/* Main Image Text Section */}
            <section className="main-banner-section mb-[30px] md:mb-0 md:pb-[72px]">
                <div class="container relative">
                    <div class="grid gap-2 sm:grid-cols-2">
                        <div class="left-sec relative z-10 pt-[44px] pb-9 md:pb-0 md:pt-[72px] xl:pt-[180px]">
                            <div className="heading text-[80px] lg:text-[130px] xl:text-[180px] text-black font-teko font-bold uppercase leading-[64px] lg:leading-[110px] xl:leading-[144px] mb-6">
                                <span className="text-orange block">THE</span>
                                <span className="text-white block">TROPICAL</span>
                                <span className="text-orange block">CODE</span>
                            </div>
                            <div className="subheading text-white text-lg md:text-2xl leading-[21px] md:leading-[28px] mb-6">
                                Crack a tropical cipher with this thirst shattering 4.8% double dry-hopped sessionable New England IPA bursting with passion fruit, pineapple and mango.
                            </div>
                            <div className="btn-wrapper mb-[40px] lg:mb-[52px]">
                                <button className='btn h-[40px] min-w-[118px] bg-orange hover:bg-white transition-all flex items-center justify-center gap-[8px] text-lg text-black font-teko font-bold rounded-full px-6 py-2 pt-3 uppercase'>
                                    <img src={arrowRight} alt="Arrow Right" /> shop
                                </button>
                            </div>
                            <div className="medal-wrapper flex flex-wrap items-center gap-5">
                                <div className="img-wrapper">
                                    <img src={require('../assets/images/bronze.jpg')} alt="Bronze" class="w-[96px]" />
                                </div>
                                <div className="img-wrapper">
                                    <img src={require('../assets/images/gold.png')} alt="Gold" class="w-[96px]" />
                                </div>
                            </div>
                        </div>
                        <div class="right-sec relative z-50">
                            <div class="img-wrapper lg:mt-[-40px]">
                                <img src={require('../assets/images/bundle-box.png')} alt="Bundle Box" class="w-[618px] ms-auto" />
                            </div>
                            <div className="hidden sm:block hatImg absolute top-[56px] right-0">
                                <img src={require('../assets/images/hat-logo.png')} alt="Bundle Box" class="w-[100px] lg:w-[160px]" />
                            </div>
                        </div>
                    </div>

                    {/* Leaf Background Image */}
                    <div className="leafImg absolute top-[-132px] md:top-[-78px] 2xl:top-[-122px] right-[-32px] md:right-[-112px] 2xl:right-[-258px]">
                        <img src={require('../assets/images/leaf.png')} alt="Bundle Box" class="w-[307px] md:w-[558px] xl:w-[658px]" />
                    </div>
                </div>
            </section>

            {/* Unravel Taste Section */}
            <section className="unravel-taste-section bg-orange relative py-[60px] lg:py-[130px]">
                <div className="container">
                    <div className="icon-background-img md:py-[100px] xl:py-[170px] lg:ml-[83px]">
                        <div className="custom-wrapper max-w-[733px] md:mx-[25px]">
                            <div className="heading text-[40px] md:text-[90px] xl:text-[120px] text-black font-teko font-bold uppercase leading-[32px] md:leading-[75px] xl:leading-[96px] mb-6">
                                UNRAVEL TASTE
                            </div>
                            <div className="subheading text-black text-[28px] xl:text-[44px] font-bold uppercase leading-[25.2px] md:leading-[39.6px] mb-6">
                                Infusing the copper with Citra and Azacca at flameout, then double
                                dry-hopped with El Dorado, Citra and Azacca for flavour and haze
                                before transferring to conditioning tank.
                            </div>
                            <hr className="border border-black my-10" />
                            <div className="btn-wrapper">
                                <button className='btn h-[40px] min-w-[125px] bg-white text-black transition-all flex items-center justify-center gap-[8px] text-lg font-teko font-bold rounded-full px-6 py-2 pt-3 uppercase'>
                                    <img src={arrowRight} alt="Arrow Right" /> Trade
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
