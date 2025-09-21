import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#0a2a38] border-t border-[#2d4a5f]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid md:grid-cols-3 gap-8">
                    <div>
                        <div className="flex items-center mb-4">
                             <a href="#home" className="flex items-center">
                        <div>
                            <img
                                src="ChatGPT Image 21. Sept. 2gfg025, 192_09_51.png"
                                width={150}
                                alt="Eine Beschreibung des Bildes für Barrierefreiheit"
                            />
                        </div>

                    </a>
                        </div>
                        <p className="text-gray-400 mb-4">
                            Elevating your digital presence through beautiful design and robust technology.
                        </p>
                       
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">Contact</h3>
                        <div className="space-y-2 text-gray-400">
                            <p>info@digilevate.com</p>
                            <p className="text-sm text-gray-500">
                            © 2024 Digilevate. All rights reserved.
                        </p>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">Services</h3>
                        <div className="space-y-2 text-gray-400">
                            <p>Website Design & Development</p>
                            <p>E-commerce Solutions</p>
                            <p>Website Maintenance</p>
                            <p>SEO Optimization</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
