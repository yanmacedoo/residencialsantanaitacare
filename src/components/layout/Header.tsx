import { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { t, i18n } = useTranslation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    const navLinks = [
        { name: t('header.nav.home'), href: '#inicio' },
        { name: t('header.nav.accommodations'), href: '#acomodacoes' },
        { name: t('header.nav.amenities'), href: '#comodidades' },
        { name: t('header.nav.location'), href: '#localizacao' },
        { name: t('header.nav.gallery'), href: '#galeria' },
        { name: t('header.nav.faq'), href: '#faq' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-3' : 'bg-transparent py-5'
                }`}
        >
            <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
                {/* Logo */}
                <a href="#inicio" className="flex items-center gap-2 group">
                    <img
                        src="/assets/images/logo-horizontal.svg"
                        alt="Residencial Santana Logo"
                        className="h-10 w-auto transition-transform duration-300 group-hover:scale-105"
                    />
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    <ul className="flex gap-6">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    className="font-medium text-sm lg:text-base text-gray-800 hover:text-[var(--color-primary-dark)] transition-colors"
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Language Switcher */}
                    <div className="flex items-center gap-2 text-sm font-medium text-gray-800 border-l border-gray-300 pl-4 ml-2">
                        <Globe size={18} className="text-gray-500" />
                        <button
                            onClick={() => changeLanguage('pt')}
                            className={`hover:text-[var(--color-primary-dark)] transition-colors ${i18n.language === 'pt' ? 'font-bold text-[var(--color-primary-dark)]' : ''}`}
                        >
                            PT
                        </button>
                        <span className="text-gray-400">|</span>
                        <button
                            onClick={() => changeLanguage('en')}
                            className={`hover:text-[var(--color-primary-dark)] transition-colors ${i18n.language === 'en' ? 'font-bold text-[var(--color-primary-dark)]' : ''}`}
                        >
                            EN
                        </button>
                    </div>

                    <a
                        href="#reservar"
                        className="bg-[var(--color-primary-dark)] hover:bg-[var(--color-primary-light)] text-white px-6 py-2.5 rounded-full font-medium transition-all transform hover:-translate-y-1 shadow-md"
                    >
                        {t('header.reserve_btn')}
                    </a>
                </nav>

                {/* Mobile Menu Toggle & Lang Switcher Wrapper */}
                <div className="md:hidden flex items-center gap-4 text-gray-800">
                    <div className="flex items-center gap-2 text-sm font-medium">
                        <button onClick={() => changeLanguage('pt')} className={`${i18n.language === 'pt' ? 'font-bold text-[var(--color-primary-dark)]' : ''}`}>PT</button>
                        <span className="text-gray-300">|</span>
                        <button onClick={() => changeLanguage('en')} className={`${i18n.language === 'en' ? 'font-bold text-[var(--color-primary-dark)]' : ''}`}>EN</button>
                    </div>
                    <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            {isMobileMenuOpen && (
                <div className="absolute top-full left-0 right-0 glass-dark text-white shadow-lg border-t border-white/10 flex flex-col md:hidden py-4 px-6 gap-4">
                    <ul className="flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="block text-lg font-medium py-2 border-b border-white/10 text-gray-200 hover:text-[var(--color-primary-light)] transition-colors"
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <a
                        href="#reservar"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="bg-[var(--color-primary-dark)] text-white text-center px-6 py-3 rounded-xl font-medium mt-4 shadow-sm"
                    >
                        {t('header.reserve_now_btn')}
                    </a>
                </div>
            )}
        </header>
    );
}
