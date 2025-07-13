import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Work from './pages/Work';
import Writing from './pages/Writing';
import Contact from './pages/Contact';
import PrivacyPolicyHowNotToSay from './pages/PrivacyPolicyHowNotToSay';
import PrivacyPolicyFearlessChange from './pages/PrivacyPolicyFearlessChange';
import PrivacyPolicyGodLight from './pages/PrivacyPolicyGodLight';
import PrivacyPolicyTicketTote from './pages/PrivacyPolicyTicketTote';
import TermsOfServiceHowNotToSay from './pages/TermsOfServiceHowNotToSay';
import TermsOfServiceFearlessChange from './pages/TermsOfServiceFearlessChange';
import TermsOfServiceGodLight from './pages/TermsOfServiceGodLight';
import TermsOfServiceTicketTote from './pages/TermsOfServiceTicketTote';
import { useDarkMode } from './hooks/useDarkMode';

function App() {
  // Initialize dark mode
  useDarkMode();

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/work" element={<Work />} />
            {/* <Route path="/writing" element={<Writing />} /> */} {/* Hidden until blog posts are ready */}
            <Route path="/contact" element={<Contact />} />
            {/* Legal pages for mobile apps - not linked in navigation */}
            <Route path="/privacy-policy-how-not-to-say" element={<PrivacyPolicyHowNotToSay />} />
            <Route path="/privacy-policy-fearless-change" element={<PrivacyPolicyFearlessChange />} />
            <Route path="/privacy-policy-godlight" element={<PrivacyPolicyGodLight />} />
            <Route path="/privacy-policy-ticket-tote" element={<PrivacyPolicyTicketTote />} />
            <Route path="/terms-of-service-how-not-to-say" element={<TermsOfServiceHowNotToSay />} />
            <Route path="/terms-of-service-fearless-change" element={<TermsOfServiceFearlessChange />} />
            <Route path="/terms-of-service-godlight" element={<TermsOfServiceGodLight />} />
            <Route path="/terms-of-service-ticket-tote" element={<TermsOfServiceTicketTote />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;