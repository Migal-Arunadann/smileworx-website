import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MobileActionBar } from './components/MobileActionBar';
import { ScrollToTop } from './components/ScrollToTop';
import { Home } from './pages/Home';
import { Treatments } from './pages/Treatments';
import { About } from './pages/About';
import { Contact } from './pages/Contact';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <main style={{ flex: '1 0 auto' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/treatments" element={<Treatments />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            {/* Fallback to Home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
        <MobileActionBar />
      </div>
    </BrowserRouter>
  );
}
