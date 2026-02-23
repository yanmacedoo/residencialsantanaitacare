import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, BedDouble, AirVent, Tv, CookingPot, Home, ChevronLeft, ChevronRight, Bath } from 'lucide-react';
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
            { icon: <Bath size={18} />, text: t('accommodations.suite.amenity1_ext') },
            { icon: <Tv size={18} />, text: t('accommodations.suite.tv') },
        ],
        images: [
            '/assets/images/suites/image1.webp',
            '/assets/images/suites/image2.webp',
            '/assets/images/suites/image3.webp',
            '/assets/images/suites/image4.webp',
            '/assets/images/suites/image5.webp',
            '/assets/images/suites/image6.webp',
            '/assets/images/suites/image7.webp',
            '/assets/images/suites/image8.webp',
            '/assets/images/suites/image9.webp',
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
            { icon: <AirVent size={18} />, text: t('accommodations.loft.amenity2') },
            { icon: <Tv size={18} />, text: t('accommodations.loft.amenity3') },
        ],
        images: [
            '/assets/images/loft/image1.webp',
            '/assets/images/loft/image2.webp',
            '/assets/images/loft/image3.webp',
            '/assets/images/loft/image4.webp',
            '/assets/images/loft/image5.webp',
            '/assets/images/loft/image6.webp',
            '/assets/images/loft/image7.webp',
            '/assets/images/loft/image8.webp',
            '/assets/images/loft/image9.webp',
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
            { icon: <AirVent size={18} />, text: t('accommodations.apartment.amenity2') },
            { icon: <Tv size={18} />, text: t('accommodations.apartment.amenity3') },
        ],
        images: [
            '/assets/images/apt/image1.webp',
            '/assets/images/apt/image2.webp',
            '/assets/images/apt/image3.webp',
            '/assets/images/apt/image4.webp',
            '/assets/images/apt/image5.webp',
            '/assets/images/apt/image6.webp',
            '/assets/images/apt/image7.webp',
            '/assets/images/apt/image8.webp',
            '/assets/images/apt/image9.webp',
        ],
        link: `https://wa.me/5573981084224?text=${encodeURIComponent(t('wa_messages.apartment'))}`,
    }
];

// Componente de Carrossel com Fade e Autoplay Sincronizado
const ImageCarousel = ({ images, title, globalIndex }: { images: string[], title: string, globalIndex: number }) => {
    // Mantemos um estado local para permitir navegação manual e um offset
    const [localIndex, setLocalIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [manualInteractionCount, setManualInteractionCount] = useState(0);

    const goTo = (index: number) => {
        setLocalIndex((index + images.length) % images.length);
        setManualInteractionCount(c => c + 1); // Desacopla temporariamente da sincronização global
    };

    const goPrev = () => goTo(localIndex - 1);
    const goNext = () => goTo(localIndex + 1);

    // Sincroniza com o timer global do pai apenas se o user não interagiu manualmente recentemente
    // ou se o mouse não está sobre o carrossel
    useEffect(() => {
        if (!isHovered && manualInteractionCount === 0) {
            setLocalIndex(globalIndex % images.length);
        }
    }, [globalIndex, isHovered, manualInteractionCount, images.length]);

    // Reseta a "pausa" manual depois de alguns segundos sem interagir
    useEffect(() => {
        if (manualInteractionCount > 0 && !isHovered) {
            const timer = setTimeout(() => {
                setManualInteractionCount(0);
                // Força um re-sync com o global offset atual
                setLocalIndex(globalIndex % images.length);
            }, 6000);
            return () => clearTimeout(timer);
        }
    }, [manualInteractionCount, isHovered, globalIndex, images.length]);

    return (
        <div
            className="relative group overflow-hidden bg-gray-100 h-64 md:h-80 w-full"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Imagens com fade */}
            <AnimatePresence mode="sync">
                <motion.img
                    key={localIndex}
                    src={images[localIndex]}
                    alt={`${title} - Foto ${localIndex + 1}`}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                    onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=800&auto=format&fit=crop';
                    }}
                />
            </AnimatePresence>

            {/* Setas de navegação */}
            <button
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-gray-800 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-sm z-10 hidden md:flex"
                onClick={goPrev}
                aria-label="Imagem anterior"
            >
                <ChevronLeft size={20} />
            </button>
            <button
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-gray-800 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-sm z-10 hidden md:flex"
                onClick={goNext}
                aria-label="Próxima imagem"
            >
                <ChevronRight size={20} />
            </button>

            {/* Dots de navegação */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={`h-2 rounded-full transition-all duration-300 ${index === localIndex ? 'bg-white w-4' : 'bg-white/50 w-2 hover:bg-white/80'}`}
                        onClick={() => goTo(index)}
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

    // Timer Global para Sincronização
    const [globalIndex, setGlobalIndex] = useState(0);
    const [isGlobalPaused, setIsGlobalPaused] = useState(false);

    useEffect(() => {
        if (isGlobalPaused) return;

        const timer = setInterval(() => {
            setGlobalIndex(prev => prev + 1);
        }, 4000);
        return () => clearInterval(timer);
    }, [isGlobalPaused]);

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

                <div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    onMouseEnter={() => setIsGlobalPaused(true)}
                    onMouseLeave={() => setIsGlobalPaused(false)}
                >
                    {accommodationsData.map((acc, idx) => (
                        <motion.div
                            key={acc.id}
                            className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-lg shadow-gray-200/50 flex flex-col transition-transform hover:-translate-y-1 duration-300"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: idx * 0.2 }}
                        >
                            <ImageCarousel images={acc.images} title={acc.title} globalIndex={globalIndex} />

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
