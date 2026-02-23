import { useState } from "react";
import { MasonryPhotoAlbum } from "react-photo-album";
import "react-photo-album/masonry.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const photos = [
    { src: "/assets/images/galeria/IMG_1649.webp", width: 1200, height: 900 },
    { src: "/assets/images/galeria/IMG_1659.webp", width: 1200, height: 900 },
    { src: "/assets/images/galeria/IMG_1671.webp", width: 1200, height: 900 },
    { src: "/assets/images/galeria/IMG_1673.webp", width: 1200, height: 900 },
    { src: "/assets/images/galeria/IMG_1964.webp", width: 1200, height: 900 },
    { src: "/assets/images/galeria/IMG_1966.webp", width: 1200, height: 900 },
];

export function Gallery() {
    const [index, setIndex] = useState(-1);
    const { t } = useTranslation();

    return (
        <section id="galeria" className="py-14 bg-[var(--color-background-offwhite)]">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <motion.h2
                        className="text-3xl md:text-5xl font-serif text-gray-900 mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
                        {t('gallery.title')}
                    </motion.h2>
                    <motion.p
                        className="text-lg text-gray-600"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {t('gallery.subtitle')}
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8 }}
                >
                    <MasonryPhotoAlbum
                        photos={photos}
                        onClick={({ index }) => setIndex(index)}
                        spacing={16}
                        columns={(containerWidth) => {
                            if (containerWidth < 400) return 1;
                            if (containerWidth < 800) return 2;
                            return 3;
                        }}
                    />

                    <Lightbox
                        slides={photos}
                        open={index >= 0}
                        index={index}
                        close={() => setIndex(-1)}
                        styles={{ container: { backgroundColor: "rgba(0, 0, 0, 0.9)" } }}
                    />
                </motion.div>
            </div>
        </section>
    );
}
