import { motion } from 'framer-motion';
import {
    Wifi,
    Wind,
    BedDouble,
    MapPin,
    ShieldCheck,
    Waves,
    Sparkles,
    Utensils
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import type { TFunction } from 'i18next';

const getAmenitiesList = (t: TFunction) => [
    { icon: <Wind size={32} strokeWidth={1.5} />, title: t('amenities.list.ac.title'), desc: t('amenities.list.ac.desc') },
    { icon: <Wifi size={32} strokeWidth={1.5} />, title: t('amenities.list.wifi.title'), desc: t('amenities.list.wifi.desc') },
    { icon: <Utensils size={32} strokeWidth={1.5} />, title: t('amenities.list.kitchen.title'), desc: t('amenities.list.kitchen.desc') },
    { icon: <BedDouble size={32} strokeWidth={1.5} />, title: t('amenities.list.bedding.title'), desc: t('amenities.list.bedding.desc') },
    { icon: <Sparkles size={32} strokeWidth={1.5} />, title: t('amenities.list.cleaning.title'), desc: t('amenities.list.cleaning.desc') },
    { icon: <Waves size={32} strokeWidth={1.5} />, title: t('amenities.list.leisure.title'), desc: t('amenities.list.leisure.desc') },
    { icon: <ShieldCheck size={32} strokeWidth={1.5} />, title: t('amenities.list.security.title'), desc: t('amenities.list.security.desc') },
    { icon: <MapPin size={32} strokeWidth={1.5} />, title: t('amenities.list.perfect_location.title'), desc: t('amenities.list.perfect_location.desc') },
];

export function Amenities() {
    const { t } = useTranslation();
    const amenitiesList = getAmenitiesList(t);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <section id="comodidades" className="py-14 bg-[var(--color-background-sand)]">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <motion.h2
                        className="text-3xl md:text-5xl font-serif text-gray-900 mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
                        {t('amenities.title')}
                    </motion.h2>
                    <motion.p
                        className="text-lg text-gray-600"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {t('amenities.subtitle')}
                    </motion.p>
                </div>

                <motion.div
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-10"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {amenitiesList.map((amenity, idx) => (
                        <motion.div
                            key={idx}
                            variants={itemVariants}
                            className="group flex flex-col items-center text-center p-6 rounded-2xl bg-white/50 hover:bg-white border border-transparent hover:border-gray-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                        >
                            <div className="w-16 h-16 rounded-full bg-[var(--color-background-sand)] group-hover:bg-[var(--color-primary-light)] group-hover:text-white text-[var(--color-primary-dark)] flex items-center justify-center mb-4 transition-colors duration-300">
                                {amenity.icon}
                            </div>
                            <h3 className="text-lg font-serif text-gray-900 mb-2">{amenity.title}</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">{amenity.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
