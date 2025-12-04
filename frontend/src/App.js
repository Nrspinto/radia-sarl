import React from "react";
import "./App.css";
import { LanguageProvider } from "./context/LanguageContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Blog from "./components/Blog";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Toaster } from "./components/ui/sonner";

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <Header />
        <main>
          <Hero />
          <About />
          <Services />
          <Portfolio />
          <Blog />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
        <Toaster position="top-right" richColors />
      </div>
    </LanguageProvider>
  );
}

export default App;
