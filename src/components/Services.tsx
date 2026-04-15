import { motion } from "motion/react";
import { ShieldCheck, TrendingUp, Zap } from "lucide-react";

export default function Advantage() {
  const advantages = [
    {
      title: "嚴格合規管理",
      sub: "Rigorous Compliance",
      desc: "精準把握國際監管環境，確保企業跨境營運的安全與穩健。",
      icon: ShieldCheck,
    },
    {
      title: "戰略數字化轉型",
      sub: "Strategic Digitalization",
      desc: "部署先進數字化框架，優化供應鏈效率，提升現代企業營運能力。",
      icon: Zap,
    },
    {
      title: "突破性增長路徑",
      sub: "Breakthrough Trajectories",
      desc: "洞察新商業模式與技術前沿的高速成長潛力，引領企業實現跨越式發展。",
      icon: TrendingUp,
    },
  ];

  return (
    <section id="advantage" className="py-20 bg-[#020617]">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[1px] bg-primary" />
              <span className="text-primary text-[11px] font-bold tracking-[0.2em] uppercase">THE LINKWISE ADVANTAGE</span>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white leading-tight">
              為何選擇<br />
              <span className="text-primary">領維國際</span>
            </h2>
            
            <p className="text-[15px] text-muted-foreground leading-relaxed max-w-md">
              在瞬息萬變的商業環境中，企業需要的不僅是資本，更需要具有前瞻性的戰略佈局與卓越的營運支持。我們是推動企業突破性發展的關鍵催化劑。
            </p>
          </motion.div>

          <div className="space-y-4">
            {advantages.map((adv, i) => (
              <motion.div
                key={adv.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-white/[0.02] border border-white/5 rounded-[24px] group hover:border-primary/30 transition-all flex items-center gap-8"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <adv.icon className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">{adv.title}</h3>
                  <div className="text-primary text-[10px] font-bold tracking-widest uppercase mb-2 italic">{adv.sub}</div>
                  <p className="text-[14px] text-muted-foreground leading-relaxed">
                    {adv.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
