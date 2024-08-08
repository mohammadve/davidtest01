import React from 'react';
import CrossIcon from '../assets/images/cross.svg';

export const Sidebar = () => {
    return (
        <>
            {/* Mobile Sidebar Section */}
            <div id="mobile-menu-overlay" className="fixed inset-0 bg-black opacity-25 z-50 hidden"></div>
            <div id="mobile-menu-drawer" className="fixed inset-y-0 left-0 w-[320px] bg-black text-white transform -translate-x-full transition-transform duration-300 ease-in-out z-50 p-4" style="filter: drop-shadow(0px 4px 4px rgb(0 0 0 / 0.25));">
                <div className="mobile-sidebar flex items-center justify-between gap-2 pb-[52px]">
                    <div className="logo-wrapper">
                        <img src={require('../assets/images/logo.png')} alt="Logo" class="max-w-[176px] md:max-w-[215px]" />
                    </div>
                    <button type="button" class="md:hidden h-[40px] min-w-[56px] flex items-center justify-center border border-orange rounded-full ms-auto px-5 py-3">
                        <img src={CrossIcon} alt="Cancel" className="icon" />
                    </button>
                </div>
                <div className="menu-wrapper">
                    <ul className="list-none">
                        <li className="mb-[32px]">
                            <a href="#" className="text-white hover:text-orange focus:text-orange active:text-orange font-teko font-bold text-[44px] transition duration-700 ease-in-out">Shop</a>
                        </li>
                        <li className="mb-[32px]">
                            <a href="#" className="text-white hover:text-orange focus:text-orange active:text-orange font-teko font-bold text-[44px] transition duration-700 ease-in-out">About</a>
                        </li>
                        <li className="mb-[32px]">
                            <a href="#" className="text-white hover:text-orange focus:text-orange active:text-orange font-teko font-bold text-[44px] transition duration-700 ease-in-out">Discover</a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
