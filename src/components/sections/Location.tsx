import { MapPin, Navigation } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export function Location() {
    const { t } = useTranslation();

    return (
        <section id="localizacao" className="py-14 bg-white">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    {/* Texto e Conteúdos */}
                    <motion.div
                        className="w-full lg:w-1/2"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex items-center gap-2 text-[var(--color-primary-light)] mb-4 font-semibold tracking-wider text-sm uppercase">
                            <Navigation size={18} />
                            <span>{t('location.label')}</span>
                        </div>

                        <h2 className="text-3xl md:text-5xl font-serif text-gray-900 mb-6 leading-tight">
                            {t('location.title')}
                        </h2>

                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            {t('location.desc')}
                        </p>

                        <ul className="space-y-4 mb-10 border-l-2 border-gray-100 pl-6">
                            <li className="flex flex-col">
                                <span className="font-medium text-gray-900 text-lg">{t('location.places.concha.name')}</span>
                                <span className="text-gray-500 text-sm">{t('location.places.concha.time')}</span>
                            </li>
                            <li className="flex flex-col">
                                <span className="font-medium text-gray-900 text-lg">{t('location.places.tiririca.name')}</span>
                                <span className="text-gray-500 text-sm">{t('location.places.tiririca.time')}</span>
                            </li>
                            <li className="flex flex-col">
                                <span className="font-medium text-gray-900 text-lg">{t('location.places.pituba.name')}</span>
                                <span className="text-gray-500 text-sm">{t('location.places.pituba.time')}</span>
                            </li>
                        </ul>

                        <a
                            href="https://maps.app.goo.gl/a3URwnwUkYgG1Qju5"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-[var(--color-primary-dark)] hover:bg-[var(--color-primary-light)] text-white px-8 py-3.5 rounded-xl font-medium transition-all shadow-md group"
                        >
                            <MapPin size={20} className="group-hover:animate-bounce" />
                            {t('location.map_btn')}
                        </a>
                    </motion.div>

                    {/* Imagem */}
                    <motion.div
                        className="w-full lg:w-1/2 relative"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden relative shadow-2xl">
                            <img
                                src="/assets/images/hero9.webp"
                                alt="Lifestyle Itacaré"
                                className="w-full h-full object-cover"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

                            <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/50">
                                <p className="font-serif text-xl text-gray-900 mb-1">{t('location.card_title')}</p>
                                <p className="text-sm text-gray-600">{t('location.card_desc')}</p>
                            </div>
                        </div>
                        {/* Decoração bg */}
                        <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-[var(--color-primary-light)] rounded-3xl -z-10 opacity-30"></div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
