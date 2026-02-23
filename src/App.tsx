import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { BookingWidget } from './components/sections/BookingWidget';
import { Accommodations } from './components/sections/Accommodations';
import { Amenities } from './components/sections/Amenities';
import { Location } from './components/sections/Location';
import { Gallery } from './components/sections/Gallery';
import { FAQ } from './components/sections/FAQ';

function App() {
  return (
    <div className="min-h-screen bg-[var(--color-background-offwhite)] font-sans antialiased selection:bg-[var(--color-primary-light)] selection:text-white">
      <Header />
      <main>
        <Hero />
        <BookingWidget />
        <Accommodations />
        <Amenities />
        <Location />
        <Gallery />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
