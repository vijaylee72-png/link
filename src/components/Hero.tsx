import { motion } from "motion/react";
import { ArrowRight, ChevronRight } from "lucide-react";

export default function Hero() {
  const stats = [
    { num: "3", title: "核心業務領域", sub: "Core Business Verticals" },
    { num: "6+", title: "專業服務維度", sub: "Service Dimensions" },
    { num: "360°", title: "全生命週期覆蓋", sub: "Lifecycle Coverage" },
    { num: "HK", title: "立足香港·輻射全球", sub: "Global Reach from Hong Kong" },
  ];

  return (
    <section id="home" className="relative flex items-center pt-32 pb-16 overflow-hidden bg-[#020617]">
      {/* Background Image with Radial Fade */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?q=80&w=2070&auto=format&fit=crop" 
            alt="Hong Kong Central Commercial District" 
            className="w-full h-full object-cover opacity-30"
            style={{ 
              maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 80%)',
              WebkitMaskImage: 'radial-gradient(ellipse at center, black 20%, transparent 80%)'
            }}
            referrerPolicy="no-referrer"
            loading="eager"
          />
        </div>
        {/* Blending Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-transparent to-[#020617] opacity-60" />
        <div className="absolute inset-0 bg-[#020617]/20" />
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] z-[1]" />
      <div className="absolute inset-0 bg-radial-at-t from-primary/10 via-transparent to-transparent opacity-30 z-[1]" />
      
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6"
            >
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-[10px] font-bold text-primary tracking-widest uppercase">Professional Consulting Firm · 專業諮詢機構</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-8xl font-bold text-white mb-6 leading-[1.1] tracking-tight"
            >
              驅動企業<br />
              <span className="text-primary">突破成長</span>
              <span className="block text-[20px] md:text-[24px] mt-4 opacity-40 font-medium tracking-normal">Driving Enterprise Breakthrough Growth</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-6 max-w-2xl"
            >
              <p className="text-xl md:text-2xl font-bold text-primary italic tracking-tight">
                Empowering Breakthrough Growth
              </p>
              <p className="text-[15px] text-muted-foreground leading-relaxed font-medium">
                領維國際匯集行業資深從業者，專注互聯網、大消費及跨境電商領域。為企業提供涵蓋戰略、營運、品牌、供應鏈、合規及數字化的全週期定制諮詢服務，助力客戶實現可持續的長期成功。
                <span className="block mt-4 opacity-60 font-normal italic">Linkwise Global brings together industry veterans focused on the Internet, consumer goods, and cross-border e-commerce. We provide customized full-lifecycle consulting services covering strategy, operations, branding, supply chain, compliance, and digitalization to help clients achieve sustainable long-term success.</span>
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4 mt-10"
            >
              <a 
                href="mailto:link@linkwiseglobal.com"
                className="px-8 py-4 bg-primary text-primary-foreground rounded-xl font-bold text-[14px] flex items-center gap-2 hover:opacity-90 transition-all shadow-[0_0_30px_rgba(16,185,129,0.2)]"
              >
                預約諮詢 · CONSULT NOW
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>

          <div className="lg:col-span-5">
            <div className="grid grid-cols-1 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="group relative p-6 bg-white/[0.02] border border-white/5 rounded-[24px] hover:border-primary/30 hover:bg-white/[0.04] transition-all duration-500"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6">
                      <div className="text-3xl font-bold text-primary font-mono w-16">{stat.num}</div>
                      <div>
                        <div className="text-[13px] font-bold text-white mb-0.5">{stat.title}</div>
                        <div className="text-[10px] text-muted-foreground font-medium tracking-wider uppercase opacity-60">{stat.sub}</div>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-white/10 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
