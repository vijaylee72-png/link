import { motion } from "motion/react";
import { Globe, ShoppingBag, Laptop } from "lucide-react";

export default function Sectors() {
  const sectors = [
    {
      title: "互聯網領域",
      sub: "Internet Sector",
      desc: (
        <>
          深度洞察數字化轉型趨勢，助力企業構建平台經濟優勢，把握互聯網行業屬性機會。
          <span className="block mt-2 opacity-60 text-[12px] italic">Deep insights into digital transformation trends, helping enterprises build platform economy advantages and seize opportunities in the Internet sector.</span>
        </>
      ),
      icon: Laptop,
    },
    {
      title: "大消費領域",
      sub: "Consumer Goods",
      desc: (
        <>
          精準捕捉消費升級與行為變遷，為企業提供品牌建設、渠道優化及市場策略全方位支持。
          <span className="block mt-2 opacity-60 text-[12px] italic">Precisely capturing consumption upgrades and behavioral changes, providing comprehensive support for brand building, channel optimization, and market strategy.</span>
        </>
      ),
      icon: ShoppingBag,
    },
    {
      title: "跨境電商",
      sub: "Cross-border E-commerce",
      desc: (
        <>
          整合國際貿易資源與跨境物流，協助企業高效佈局海外市場，實現可持續的跨境業務增長。
          <span className="block mt-2 opacity-60 text-[12px] italic">Integrating international trade resources and cross-border logistics to assist enterprises in efficiently deploying overseas markets and achieving sustainable growth.</span>
        </>
      ),
      icon: Globe,
    },
  ];

  return (
    <section id="sectors" className="py-20 bg-[#020617]">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-[1px] bg-primary" />
          <span className="text-primary text-[11px] font-bold tracking-[0.2em] uppercase">SPECIALIZED SECTORS · 專業領域</span>
        </div>

        <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white leading-tight">
          深耕三大垂直領域
          <span className="block text-[18px] md:text-[22px] mt-4 opacity-40 font-medium tracking-normal uppercase">Deep Expertise Across Vertical Sectors</span>
        </h2>
        
        <p className="text-lg italic text-muted-foreground/60 mb-20">
          Deep Expertise Across Three Dynamic Industries
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sectors.map((sector, i) => (
            <motion.div
              key={sector.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 bg-white/[0.02] border border-white/5 rounded-[32px] group hover:border-primary/30 transition-all"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary/20 transition-colors">
                <sector.icon className="text-primary w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{sector.title}</h3>
              <div className="text-primary text-[10px] font-bold tracking-widest uppercase mb-6 italic">{sector.sub}</div>
              <p className="text-[14px] text-muted-foreground leading-relaxed">
                {sector.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
