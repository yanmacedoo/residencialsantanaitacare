import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { MessageCircle } from 'lucide-react';

export function FAQ() {
    const { t } = useTranslation();

    return (
        <section id="faq" className="py-24 bg-white relative overflow-hidden">
            {/* Elemento decorativo */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-primary-light)]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

            <div className="container mx-auto px-6 lg:px-12 max-w-3xl relative z-10 text-center">
                <motion.h2
                    className="text-3xl md:text-5xl font-serif text-gray-900 mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    {t('faq.more_questions')}
                </motion.h2>
                <motion.p
                    className="text-lg text-gray-600 mb-10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {t('faq.subtitle')}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <a
                        href="https://wa.me/5573998343464"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1EBE5D] text-white px-8 py-4 rounded-full text-lg font-medium transition-all transform hover:-translate-y-1 shadow-md hover:shadow-xl"
                    >
                        <MessageCircle size={24} />
                        {t('faq.contact_whatsapp')}
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
