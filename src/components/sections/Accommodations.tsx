import { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';
import { Users, BedDouble, AirVent, Tv, CookingPot, Home, ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import type { TFunction } from 'i18next';

// Função para retornar os dados estáticos traduzidos
const getAccommodationsData = (t: TFunction) => [
    {
        id: 'suite',
        title: t('accommodations.suite.title'),
        description: t('accommodations.suite.desc'),
        details: [
            { icon: <Users size={18} />, text: t('accommodations.suite.capacity') },
            { icon: <BedDouble size={18} />, text: t('accommodations.suite.bed') },
            { icon: <AirVent size={18} />, text: t('accommodations.suite.amenity1') },
            { icon: <Tv size={18} />, text: t('accommodations.suite.tv') },
        ],
        images: [
            '/assets/images/suites/image1.webp',
            '/assets/images/suites/image2.webp',
            '/assets/images/suites/image3.webp',
            '/assets/images/suites/image4.webp',
            '/assets/images/suites/image5.webp',
        ],
        link: `https://wa.me/5573981084224?text=${encodeURIComponent(t('wa_messages.suite'))}`,
    },
    {
        id: 'loft',
        title: t('accommodations.loft.title'),
        description: t('accommodations.loft.desc'),
        details: [
            { icon: <Users size={18} />, text: t('accommodations.loft.capacity') },
            { icon: <BedDouble size={18} />, text: t('accommodations.loft.bed') },
            { icon: <CookingPot size={18} />, text: t('accommodations.loft.amenity1') },
            { icon: <Tv size={18} />, text: t('accommodations.loft.amenity2') },
        ],
        images: [
            '/assets/images/loft/image1.webp',
            '/assets/images/loft/image2.webp',
            '/assets/images/loft/image3.webp',
            '/assets/images/loft/image4.webp',
            '/assets/images/loft/image5.webp',
        ],
        link: `https://wa.me/5573981084224?text=${encodeURIComponent(t('wa_messages.loft'))}`,
    },
    {
        id: 'apartamento',
        title: t('accommodations.apartment.title'),
        description: t('accommodations.apartment.desc'),
        details: [
            { icon: <Users size={18} />, text: t('accommodations.apartment.capacity') },
            { icon: <BedDouble size={18} />, text: t('accommodations.apartment.bed') },
            { icon: <CookingPot size={18} />, text: t('accommodations.apartment.kitchen') },
            { icon: <Home size={18} />, text: t('accommodations.apartment.living') },
            { icon: <Tv size={18} />, text: t('accommodations.apartment.amenity2') },
        ],
        images: [
            '/assets/images/apt/image1.webp',
            '/assets/images/apt/image2.webp',
            '/assets/images/apt/image3.webp',
            '/assets/images/apt/image4.webp',
            '/assets/images/apt/image5.webp',
        ],
        link: `https://wa.me/5573981084224?text=${encodeURIComponent(t('wa_messages.apartment'))}`,
    }
];

// Componente individual de Carrossel para manter o estado separado por card
const ImageCarousel = ({ images, title }: { images: string[], title: string }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
    const [selectedIndex, setSelectedIndex] = useState(0);

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi, setSelectedIndex]);

    useEffect(() => {
        if (!emblaApi) return;
        // eslint-disable-next-line react-hooks/exhaustive-deps, react-hooks/set-state-in-effect
        onSelect();
        emblaApi.on('select', onSelect);
        emblaApi.on('reInit', onSelect);
    }, [emblaApi, onSelect]);

    return (
        <div className="relative group overflow-hidden bg-gray-100 h-64 md:h-80 w-full" ref={emblaRef}>
            <div className="flex h-full touch-pan-y">
                {images.map((src, index) => (
                    <div className="relative flex-[0_0_100%] h-full w-full" key={index}>
                        <img
                            src={src}
                            alt={`${title} - Foto ${index + 1}`}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            loading="lazy"
                            onError={(e) => {
                                // Fallback de imagem caso o arquivo não exista
                                (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=800&auto=format&fit=crop';
                            }}
                        />
                    </div>
                ))}
            </div>

            {/* Controlos Navigation */}
            <button
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-gray-800 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-sm z-10 hidden md:flex"
                onClick={scrollPrev}
                aria-label="Imagem anterior"
            >
                <ChevronLeft size={20} />
            </button>
            <button
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-gray-800 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-sm z-10 hidden md:flex"
                onClick={scrollNext}
                aria-label="Próxima imagem"
            >
                <ChevronRight size={20} />
            </button>

            {/* Pontos Nav */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={`w-2 h-2 rounded-full transition-all ${index === selectedIndex ? 'bg-white w-4' : 'bg-white/50 hover:bg-white/80'
                            }`}
                        onClick={() => emblaApi?.scrollTo(index)}
                        aria-label={`Ir para a foto ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export function Accommodations() {
    const { t } = useTranslation();
    const accommodationsData = getAccommodationsData(t);

    return (
        <section id="acomodacoes" className="py-14 bg-[var(--color-background-offwhite)]">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <motion.h2
                        className="text-3xl md:text-5xl font-serif text-gray-900 mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
                        {t('accommodations.title')}
                    </motion.h2>
                    <motion.p
                        className="text-lg text-gray-600"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {t('accommodations.subtitle')}
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {accommodationsData.map((acc, idx) => (
                        <motion.div
                            key={acc.id}
                            className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-lg shadow-gray-200/50 flex flex-col transition-transform hover:-translate-y-1 duration-300"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: idx * 0.2 }}
                        >
                            <ImageCarousel images={acc.images} title={acc.title} />

                            <div className="p-8 flex-1 flex flex-col">
                                <h3 className="text-2xl font-serif text-gray-900 mb-3">{acc.title}</h3>
                                <p className="text-gray-600 mb-6 leading-relaxed flex-1">
                                    {acc.description}
                                </p>

                                <div className="flex flex-wrap gap-3 mb-8">
                                    {acc.details.map((detail, i) => (
                                        <div key={i} className="flex items-center gap-1.5 text-sm font-medium text-gray-700 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100">
                                            <span className="text-[var(--color-primary-light)]">{detail.icon}</span>
                                            {detail.text}
                                        </div>
                                    ))}
                                </div>

                                <a
                                    href="#reservar"
                                    className="w-full inline-block text-center bg-[var(--color-background-offwhite)] hover:bg-[var(--color-primary-dark)] text-gray-800 hover:text-white border border-gray-200 hover:border-transparent rounded-xl px-6 py-3.5 font-medium transition-colors"
                                >
                                    {t('accommodations.check_availability')}
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
