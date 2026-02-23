import { MapPin, Phone, Mail, Instagram } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function Footer() {
    const currentYear = new Date().getFullYear();
    const { t } = useTranslation();

    return (
        <footer className="bg-[#8e684f] text-white pt-20 pb-10">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16 border-b border-white/20 pb-16 items-start">

                    {/* Logo e About */}
                    <div className="lg:col-span-1">
                        <img
                            src="/assets/images/logo-horizontal.svg"
                            alt="Residencial Santana"
                            className="h-12 w-auto mb-6 brightness-0 invert opacity-100"
                        />
                        <p
                            className="text-white/75 leading-relaxed mb-6 text-sm"
                            dangerouslySetInnerHTML={{ __html: t('footer.about') }}
                        />
                        <div className="flex gap-4">
                            <a
                                href="https://instagram.com/res.idencialsantana"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:bg-white/20 transition-all"
                                aria-label="Instagram"
                            >
                                <Instagram size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Links Rápidos */}
                    <div>
                        <h4 className="text-xs font-sans font-semibold uppercase tracking-widest mb-6 text-white/50 border-b border-white/15 pb-3">
                            {t('footer.links_title')}
                        </h4>
                        <ul className="space-y-3 font-light text-sm">
                            <li><a href="#inicio" className="text-white/75 hover:text-white transition-colors">{t('header.nav.home')}</a></li>
                            <li><a href="#acomodacoes" className="text-white/75 hover:text-white transition-colors">{t('header.nav.accommodations')}</a></li>
                            <li><a href="#comodidades" className="text-white/75 hover:text-white transition-colors">{t('header.nav.amenities')}</a></li>
                            <li><a href="#galeria" className="text-white/75 hover:text-white transition-colors">{t('header.nav.gallery')}</a></li>
                            <li><a href="#faq" className="text-white/75 hover:text-white transition-colors">{t('header.nav.faq')}</a></li>
                        </ul>
                    </div>

                    {/* Contato */}
                    <div className="lg:col-span-2">
                        <h4 className="text-xs font-sans font-semibold uppercase tracking-widest mb-6 text-white/50 border-b border-white/15 pb-3">
                            {t('footer.contact_title')}
                        </h4>
                        <ul className="space-y-4 font-light text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin className="text-white/60 shrink-0 mt-0.5" size={18} />
                                <span
                                    className="text-white/75 leading-relaxed"
                                    dangerouslySetInnerHTML={{ __html: t('footer.address') }}
                                />
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="text-white/60 shrink-0" size={18} />
                                <a href="https://wa.me/5573998343464" target="_blank" rel="noopener noreferrer" className="text-white/75 hover:text-white transition-colors">
                                    (73) 99834-3464
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="text-white/60 shrink-0" size={18} />
                                <a href="mailto:residencialsantana01@gmail.com" className="text-white/75 hover:text-white transition-colors">
                                    residencialsantana01@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
                    <p>&copy; {currentYear} {t('footer.rights')}</p>
                    <a
                        href="http://nuscorre.com.br"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity"
                    >
                        <span className="text-white/50">Desenvolvido por</span>
                        <img
                            src="/assets/images/logo-nuscorre.svg"
                            alt="Nuscorre"
                            className="h-5 w-auto brightness-0 invert"
                        />
                    </a>
                </div>
            </div>
        </footer>
    );
}
