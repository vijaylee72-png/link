import { motion } from "motion/react";
import { BarChart3, LineChart, Cpu } from "lucide-react";

export default function CoreServices() {
  const services = [
    {
      title: "Industry Research and Strategy Planning",
      titleCn: "行業研究與戰略規劃",
      desc: "深度洞察互聯網、大消費及跨境電商行業趨勢，結合企業自身資源與市場定位，為客戶提供數據驅動的行業研究報告及量身定制的戰略規劃方案，助力企業搶佔先機、實現可持續增長。",
      descEn: "Delivering data-driven industry research and bespoke strategy roadmaps across internet, consumer goods, and cross-border e-commerce sectors — helping clients identify market opportunities and build a competitive edge for sustainable growth.",
      icon: LineChart,
    },
    {
      title: "Refined Operations and Sales Growth",
      titleCn: "精細化運營與業績增長",
      desc: "以精細化運營理念貫穿業務全鏈路，從用戶獲取、留存到轉化。系統化優化銷售渠道與業績增長路徑，結合品牌建設與市場推廣策略，幫助企業實現高效運營、持續提升盈利能力。",
      descEn: "Applying refined operational methodologies across the full business lifecycle — from user acquisition and retention to conversion — to systematically optimize sales channels and revenue growth, combined with brand-building strategies that drive lasting profitability.",
      icon: BarChart3,
    },
    {
      title: "Digital Transformation and Intelligent Tools",
      titleCn: "數字化轉型與智能工具",
      desc: "以前沿數字技術賦能企業轉型升級，涵蓋業務流程數字化、智能化工具部署及數據中台建設，幫助企業降本增效、增強競爭力，在數字經濟時代構建核心競爭優勢。",
      descEn: "Empowering enterprise transformation through cutting-edge digital technologies — including business process digitalization, intelligent tool deployment, and data platform construction — to reduce costs, enhance efficiency, and build core competitive advantages in the digital economy.",
      icon: Cpu,
    },
  ];

  return (
    <section id="services" className="py-20 bg-[#020617]">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-[1px] bg-primary" />
          <span className="text-primary text-[11px] font-bold tracking-[0.2em] uppercase">CORE SERVICES · 主要業務</span>
        </div>

        <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white leading-tight">
          三大核心業務
          <span className="block text-[18px] md:text-[22px] mt-4 opacity-40 font-medium tracking-normal uppercase">Three Core Business Pillars</span>
        </h2>
        
        <p className="text-lg italic text-muted-foreground/60 mb-20">
          Three Pillars of Financial Services
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 bg-white/[0.02] border border-white/5 rounded-[32px] group hover:border-primary/30 transition-all flex flex-col"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary/20 transition-colors">
                <service.icon className="text-primary w-7 h-7" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2 leading-tight">{service.title}</h3>
              <div className="text-primary text-[11px] font-bold tracking-widest uppercase mb-8 italic">{service.titleCn}</div>
              
              <div className="space-y-6 mt-auto">
                <p className="text-[14px] text-muted-foreground leading-relaxed">
                  {service.desc}
                </p>
                <p className="text-[12px] text-muted-foreground/40 italic leading-relaxed">
                  {service.descEn}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
