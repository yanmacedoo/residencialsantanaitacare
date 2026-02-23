import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import type { TFunction } from 'i18next';

// Função para retornar o array estático de FAQs traduzidas
const getFaqs = (t: TFunction) => [
    {
        question: t('faq.questions.0.q'),
        answer: t('faq.questions.0.a')
    },
    {
        question: t('faq.questions.1.q'),
        answer: t('faq.questions.1.a')
    },
    {
        question: t('faq.questions.2.q'),
        answer: t('faq.questions.2.a')
    },
    {
        question: t('faq.questions.3.q'),
        answer: t('faq.questions.3.a')
    }
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const { t } = useTranslation();
    const faqs = getFaqs(t);

    return (
        <section id="faq" className="py-14 bg-white relative overflow-hidden">
            {/* Elemento decorativo */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-primary-light)]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

            <div className="container mx-auto px-6 lg:px-12 max-w-4xl relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        className="text-3xl md:text-5xl font-serif text-gray-900 mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
                        {t('faq.title')}
                    </motion.h2>
                    <motion.p
                        className="text-lg text-gray-600"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {t('faq.subtitle')}
                    </motion.p>
                </div>

                <motion.div
                    className="space-y-4"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`border border-gray-100 rounded-2xl overflow-hidden transition-colors duration-300 ${openIndex === index ? 'bg-gray-50' : 'bg-white hover:bg-gray-50/80'}`}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full text-left px-6 lg:px-8 py-5 flex justify-between items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary-light)] group"
                            >
                                <span className={`font-medium text-lg pr-8 transition-colors ${openIndex === index ? 'text-[var(--color-primary-dark)]' : 'text-gray-900 group-hover:text-[var(--color-primary-dark)]'}`}>
                                    {faq.question}
                                </span>
                                <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${openIndex === index ? 'bg-[var(--color-primary-light)] text-white' : 'bg-gray-100 text-gray-500'}`}>
                                    {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                                </span>
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-6 lg:px-8 pb-6 pt-2 text-gray-600 leading-relaxed border-t border-gray-200/50 mt-2 mx-4">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </motion.div>

                <div className="mt-12 text-center">
                    <p className="text-gray-600 mb-6">{t('faq.more_questions')}</p>
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
                            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white px-8 py-4 rounded-full text-lg font-medium transition-all transform hover:-translate-y-1 shadow-md hover:shadow-xl"
                        >
                            <MessageCircle size={24} />
                            {t('faq.contact_whatsapp')}
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
