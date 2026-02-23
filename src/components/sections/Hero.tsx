import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export function Hero() {
    const { t, i18n } = useTranslation();

    return (
        <section
            id="inicio"
            className="relative w-full h-[100svh] flex items-center justify-center overflow-hidden"
        >
            {/* Background Image / Parallax */}
            <motion.div
                className="absolute inset-0 w-full h-full"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
            >
                <div className="absolute inset-0 bg-black/40 z-10" /> {/* Overlay escuro */}
                <img
                    src="/assets/images/heroo.webp"
                    alt="Residencial Santana Itacaré"
                    className="w-full h-full object-cover"
                />
            </motion.div>

            {/* Content */}
            <div className="relative z-20 container mx-auto px-6 text-center mt-16 md:mt-0 flex flex-col items-center">
                <motion.p
                    className="text-white/90 text-sm md:text-base font-medium tracking-widest uppercase mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {t('hero.welcome')}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mb-10 w-[350px] md:w-[460px] lg:w-[640px] xl:w-[780px]"
                >
                    <img
                        src={i18n.language === 'en' ? '/assets/images/residencialsantana-en.svg' : '/assets/images/residencialsantana.svg'}
                        alt="Residencial Santana"
                        className="w-full h-auto mx-auto"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                >
                    <a
                        href="#reservar"
                        className="bg-[var(--color-primary-dark)] hover:bg-[var(--color-primary-light)] text-white px-8 py-4 rounded-full text-lg font-medium transition-all transform hover:-translate-y-1 shadow-xl hover:shadow-2xl inline-flex items-center gap-2"
                    >
                        {t('hero.cta_availability')}
                    </a>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2"
                >
                    <div className="w-1.5 h-1.5 bg-white rounded-full" />
                </motion.div>
            </motion.div>
        </section>
    );
}
