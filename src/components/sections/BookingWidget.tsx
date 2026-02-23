import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export function BookingWidget() {
    const { t } = useTranslation();

    return (
        <section id="reservar" className="py-14 bg-[var(--color-background-offwhite)] relative overflow-hidden">
            {/* Elemento de background subtil */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-primary-light)]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-[var(--color-primary-dark)]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4"></div>

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <motion.h2
                        className="text-3xl md:text-5xl font-serif text-gray-900 mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
                        {t('booking.title', 'Garanta a sua estadia')}
                    </motion.h2>
                    <motion.p
                        className="text-lg text-gray-600"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {t('booking.subtitle', 'Escolha as datas da sua viagem e reserve a sua acomodação preferida diretamente connosco.')}
                    </motion.p>
                </div>

                <motion.div
                    className="max-w-5xl mx-auto bg-white rounded-3xl p-1 md:p-3 shadow-xl border border-gray-100/50"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="relative w-full overflow-hidden rounded-2xl" style={{ minHeight: '330px' }}>
                        <iframe
                            src="https://admin.hqbeds.com.br/pt-br/hqb/O75y5L2ZaE/widget2?width=1280&use_fluid_width=1&body_color=FFFFFF&body_text_color=785a46&button_color=8e684f&button_text_color=ffffff"
                            style={{ width: '100%', height: '330px', border: 'none' }}
                            title="Residencial Santana - Motor de Reservas HQBeds"
                            allowFullScreen
                        ></iframe>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
