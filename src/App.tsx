/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Sectors from "./components/Sectors";
import CoreServices from "./components/CoreServices";
import Advantage from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#020617] text-foreground selection:bg-primary selection:text-primary-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Sectors />
        <CoreServices />
        <Advantage />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
