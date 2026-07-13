import { useState } from "react";

import Navbar from "../../components/navbar/PublicNavbar";
//import HeroSection from "../../components/public/HeroSection";
import Footer from "../../components/public/Footer";
import AuthModal from "../../components/public/AuthModal";
import HeroSection from "../../components/public/hero/HeroSection";
import StatsSection from "../../components/public/stats/StatsSection";
import FeatureShowcase from "../../components/public/featureShowcase/FeatureShowcase";

const Home = () => {
  const [showAuth, setShowAuth] = useState(false);
  const [mode, setMode] = useState("login");

  const openLogin = () => {
    setMode("login");
    setShowAuth(true);
  };

  const openSignup = () => {
    setMode("signup");
    setShowAuth(true);
  };

  return (
    <>
      <Navbar
        onLoginClick={openLogin}
        onSignupClick={openSignup}
      />

      <HeroSection />
      <StatsSection />
      <FeatureShowcase />

      <Footer />

      <AuthModal
        isOpen={showAuth}
        onClose={() => setShowAuth(false)}
        initialMode={mode}
      />
    </>
  );
};

export default Home;