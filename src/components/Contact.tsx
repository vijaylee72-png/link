import { motion } from "motion/react";
import { Mail, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-[#020617]">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[1px] bg-primary" />
              <span className="text-primary text-[11px] font-bold tracking-[0.2em] uppercase">CONTACT · 聯繫我們</span>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
              開啟合作對話
            </h2>
            
            <p className="text-lg italic text-muted-foreground/60 mb-10">
              Begin the Dialogue
            </p>

            <p className="text-[15px] text-muted-foreground leading-relaxed mb-12 max-w-md">
              與我們的資深顧問團隊深入交流，探索領維國際如何為您的企業發展注入新的動能。
            </p>

            <div className="space-y-10">
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <MapPin className="text-primary w-6 h-6" />
                </div>
                <div>
                  <div className="font-bold text-lg text-white mb-2">辦公地址</div>
                  <div className="text-muted-foreground text-[14px] leading-relaxed">
                    香港灣仔港灣道26號華潤大廈27樓
                    <span className="block text-[11px] mt-1 opacity-60">27/F, China Resources Building, 26 Harbour Road, Wan Chai, Hong Kong</span>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Mail className="text-primary w-6 h-6" />
                </div>
                <div>
                  <div className="font-bold text-lg text-white mb-2">電子郵件</div>
                  <div className="text-primary text-[14px] font-mono">link@linkwiseglobal.com</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-[#0f172a]/50 border border-white/5 p-10 md:p-12 rounded-[40px] shadow-2xl backdrop-blur-sm"
          >
            <h3 className="text-2xl font-bold text-white mb-2">預約諮詢</h3>
            <div className="text-primary text-[11px] font-bold tracking-widest uppercase mb-10 italic">Request a Consultation</div>

            <div className="space-y-8">
              <div className="space-y-3">
                <label className="text-[11px] font-bold uppercase tracking-[0.15em] text-muted-foreground">企業名稱 ENTITY NAME</label>
                <input 
                  type="text" 
                  placeholder="e.g. 領維國際有限公司"
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-white focus:border-primary outline-none transition-all placeholder:text-white/10"
                />
              </div>
              <div className="space-y-3">
                <label className="text-[11px] font-bold uppercase tracking-[0.15em] text-muted-foreground">聯繫郵箱 CONTACT EMAIL</label>
                <input 
                  type="email" 
                  placeholder="your@email.com"
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-white focus:border-primary outline-none transition-all placeholder:text-white/10"
                />
              </div>
              <div className="space-y-3">
                <label className="text-[11px] font-bold uppercase tracking-[0.15em] text-muted-foreground">諮詢需求 INQUIRY</label>
                <textarea 
                  rows={4}
                  placeholder="請簡要描述您的諮詢需求..."
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-white focus:border-primary outline-none transition-all resize-none placeholder:text-white/10"
                />
              </div>
              <a 
                href="mailto:link@linkwiseglobal.com"
                className="w-full py-5 bg-primary text-primary-foreground rounded-xl font-bold text-[15px] flex items-center justify-center gap-2 hover:opacity-90 transition-all group shadow-[0_0_30px_rgba(16,185,129,0.2)]"
              >
                提交諮詢請求
                <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
