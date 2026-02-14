import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Stats } from './components/sections/Stats';
import { Process } from './components/sections/Process';
import { Services } from './components/sections/Services';
import { Trust } from './components/sections/Trust';
import { LeadForm } from './components/sections/LeadForm';
import { EmergencyButton } from './components/ui/EmergencyButton';

function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-gold selection:text-black font-body">
      <Header />

      <main>
        <Hero />
        <Stats />
        <Services />
        <Process />
        <Trust />
        <LeadForm />
      </main>
      <Footer />
      <EmergencyButton />
    </div>
  );
}

export default App;
