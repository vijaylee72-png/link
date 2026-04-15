import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "關於我們", sub: "ABOUT", href: "#about" },
  { name: "主要業務", sub: "SERVICES", href: "#services" },
  { name: "專業領域", sub: "EXPERTISE", href: "#sectors" },
  { name: "聯繫我們", sub: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "py-4 bg-[#020617]/90 backdrop-blur-md border-b border-white/5" : "py-8 bg-transparent"}`}>
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex flex-col group">
            <span className="text-[17px] font-bold text-white leading-none logo-text">Linkwise Global</span>
            <span className="text-[9px] text-primary font-bold mt-1.5 tracking-[0.05em]">領維國際有限公司</span>
          </a>

          {/* Center Text - Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="w-8 h-[1px] bg-white/10" />
            <div className="flex items-center gap-2 text-[11px] font-bold tracking-[0.15em]">
              <span className="text-primary italic">LINK WISE,</span>
              <span className="text-white italic">LEAD FAR</span>
              <span className="text-white/20 mx-1">·</span>
              <span className="text-white/40 font-medium">以專業破局，助企業致遠</span>
            </div>
            <div className="w-8 h-[1px] bg-white/10" />
          </div>

          {/* Nav Links - Desktop */}
          <div className="hidden md:flex items-center gap-10">
            <div className="flex items-center gap-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="flex flex-col items-center group"
                >
                  <span className="text-[13px] font-bold text-white/70 group-hover:text-primary transition-colors">{link.name}</span>
                  <span className="text-[8px] font-bold tracking-widest text-white/20 group-hover:text-primary/50 transition-colors mt-0.5">{link.sub}</span>
                </a>
              ))}
            </div>
            
            <a 
              href="#contact" 
              className="px-6 py-2 bg-primary text-primary-foreground rounded-lg flex flex-col items-center justify-center hover:opacity-90 transition-all shadow-[0_0_20px_rgba(16,185,129,0.2)] min-w-[100px]"
            >
              <span className="text-[13px] font-bold leading-tight">立即諮詢</span>
              <span className="text-[9px] font-medium opacity-70 tracking-wider">CONTACT US</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0f172a] border-b border-white/5 overflow-hidden"
          >
            <div className="px-6 py-10 space-y-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between group"
                >
                  <div className="flex flex-col">
                    <span className="text-lg font-bold text-white">{link.name}</span>
                    <span className="text-[10px] text-muted-foreground tracking-widest">{link.sub}</span>
                  </div>
                  <div className="w-8 h-[1px] bg-white/10 group-hover:w-12 group-hover:bg-primary transition-all" />
                </a>
              ))}
              <a 
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full py-4 bg-primary text-primary-foreground rounded-xl text-center font-bold"
              >
                立即諮詢 Consult
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
