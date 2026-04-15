import { Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 bg-[#020617] border-t border-white/5">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4">
            <div className="flex items-baseline gap-3">
              <span className="text-[17px] font-bold text-white logo-text">Linkwise Global</span>
              <span className="text-[11px] text-primary font-bold tracking-[0.05em]">領維國際有限公司</span>
            </div>
          </div>
          
          <div className="text-[12px] text-muted-foreground">
            © {new Date().getFullYear()} Linkwise Global Limited. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
