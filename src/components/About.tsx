import { motion } from "motion/react";
import { Shield, Target, Zap, Users, BarChart, Globe } from "lucide-react";

export default function About() {
  const services = [
    { name: "戰略諮詢", sub: "Strategy", icon: Target },
    { name: "營運優化", sub: "Operations", icon: Zap },
    { name: "品牌建設", sub: "Branding", icon: Shield },
    { name: "供應鏈管理", sub: "Supply Chain", icon: Globe },
    { name: "合規管理", sub: "Compliance", icon: Shield },
    { name: "數字化轉型", sub: "Digitalization", icon: BarChart },
  ];

  return (
    <section id="about" className="py-20 bg-[#020617] relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[1px] bg-primary" />
              <span className="text-primary text-[11px] font-bold tracking-[0.2em] uppercase">ABOUT US · 關於我們</span>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white leading-tight">
              資深從業者<br />
              <span className="text-primary">組成的智庫</span>
            </h2>
            
            <p className="text-lg italic text-muted-foreground/60 mb-10">
              A Think Tank of Seasoned Practitioners
            </p>

            <div className="space-y-8 text-[15px] text-muted-foreground leading-relaxed max-w-xl">
              <p>
                領維國際有限公司是一家專業諮詢公司，聚焦互聯網、大消費及跨境電商領域。匯集行業資深從業者，組建了專業的智庫團隊。
              </p>
              <p>
                公司業務覆蓋戰略、營運、品牌、供應鏈、合規和數字化等多個維度，為客戶企業的全週期發展提供定制化專業服務，助力客戶實現突破性增長和可持續的長遠成功。
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-16">
              {services.map((item) => (
                <div key={item.name} className="p-5 bg-white/[0.02] border border-white/5 rounded-2xl group hover:border-primary/30 transition-all">
                  <item.icon className="w-5 h-5 text-primary mb-4 opacity-60 group-hover:opacity-100 transition-opacity" />
                  <div className="text-[13px] font-bold text-white mb-1">{item.name}</div>
                  <div className="text-[9px] text-muted-foreground font-medium uppercase tracking-wider opacity-60">{item.sub}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-10 bg-white/[0.02] border border-white/5 rounded-[32px] relative group overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Globe className="w-32 h-32 text-primary" />
              </div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Globe className="text-primary w-5 h-5" />
                </div>
                <div>
                  <div className="text-white font-bold text-lg">立足香港，放眼全球</div>
                  <div className="text-[10px] text-muted-foreground font-medium uppercase tracking-widest">Hong Kong To The World</div>
                </div>
              </div>
              <p className="text-[14px] text-muted-foreground leading-relaxed">
                總部位於香港灣仔華潤大廈，借助香港國際金融中心的獨特地位，搭建中國企業與全球資本的橋樑。
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-10 bg-primary/5 border border-primary/10 rounded-[32px] relative overflow-hidden"
            >
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
              <h3 className="text-2xl font-bold text-white mb-2">我們的使命</h3>
              <div className="text-primary text-[11px] font-bold tracking-widest uppercase mb-8 italic">Our Mission</div>
              <p className="text-[14px] text-white/80 leading-relaxed mb-6">
                為企業全生命週期發展提供定制化專業服務，助力客戶實現突破性增長和可持續的長遠成功。
              </p>
              <p className="text-[12px] text-white/40 italic leading-relaxed">
                To deliver customized expert services throughout the entire lifecycle of enterprise development, empowering clients to achieve breakthrough growth and sustainable long-term success.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
