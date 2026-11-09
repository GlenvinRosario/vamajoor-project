import { motion } from "framer-motion";
import { FileText, Shield, Video, Download, ArrowUpRight, ShieldAlert } from "lucide-react";

export default function Resources() {
  return (
    <main className="bg-[#f6fbf8] min-h-screen pb-24 overflow-hidden antialiased">
      {/* Premium Context Hero Header */}
      <section className="relative pt-24 pb-20 overflow-hidden bg-[#cfe7d8] border-b border-[#b5dbbe]">
        <div className="absolute inset-0 bg-[radial-gradient(#1a4d2e_2px,transparent_2px)] [background-size:32px_32px] opacity-15" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-black tracking-tight text-[#0a2614] mb-4"
          >
            Institutional Resources
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-xl mx-auto text-[#1c4228] text-base font-semibold opacity-90"
          >
            Access official governance reports, policy mandates, transparency frameworks, and strategic operational guidelines.
          </motion.p>
        </div>
      </section>

      {/* Main Framework Grid Setup */}
      <section className="container mx-auto max-w-5xl px-4 mt-16">
        <h2 className="text-2xl font-black text-slate-800 tracking-tight mb-8 flex items-center gap-3">
          <span className="h-6 w-1.5 bg-[#1a4d2e] rounded-full" />
          Official Documentation & Governance
        </h2>

        {/* 2-Column Responsive Layout Grid for Core Policies */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {coreResources.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={item.title}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                whileHover={{ y: -4 }}
                className="group flex items-start gap-5 p-6 bg-white rounded-3xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.015)] hover:shadow-[0_12px_30px_rgba(26,77,46,0.06)] hover:border-[#1a4d2e]/20 transition-all duration-300"
              >
                <div className="p-4 rounded-2xl bg-[#f4faf6] text-[#1a4d2e] group-hover:bg-[#1a4d2e] group-hover:text-white transition-colors duration-300">
                  <Icon size={24} />
                </div>
                
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-extrabold tracking-widest text-[#2e6f47] uppercase bg-[#eaf4ee] px-2.5 py-0.5 rounded-md">
                      {item.tag}
                    </span>
                    <Download size={15} className="text-slate-400 group-hover:text-[#1a4d2e] transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 tracking-tight pt-1 group-hover:text-[#1a4d2e] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-400 font-medium leading-normal line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </motion.a>
            );
          })}
        </div>
      </section>

      {/* Corporate Co-Partners Institutional Section */}
      <section className="container mx-auto max-w-5xl px-4 mt-24">
        <h2 className="text-2xl font-black text-slate-800 tracking-tight mb-3 flex items-center gap-3">
          <span className="h-6 w-1.5 bg-[#1a4d2e] rounded-full" />
          Co-Partners & Affiliate Networks
        </h2>
        <p className="text-sm text-slate-400 font-medium max-w-xl mb-8">
          Collaborating alongside standard regional alliances and corporate foundations to power sustainable development profiles.
        </p>

        {/* 4-Column High-End Partnership Showcase Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {dummyPartners.map((partner, idx) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="group p-6 bg-white rounded-2xl border border-slate-100 flex flex-col items-center justify-center text-center relative overflow-hidden h-32 hover:border-[#1a4d2e]/30 transition-all duration-300 shadow-sm"
            >
              {/* Premium Geometric Vector Decorative Accent */}
              <div className="absolute top-0 right-0 h-12 w-12 bg-gradient-to-bl from-[#eaf4ee] to-transparent rounded-bl-full opacity-40 group-hover:from-[#cfe7d8] transition-colors" />
              
              <div className="font-black text-slate-400 text-sm tracking-wider uppercase group-hover:text-[#1a4d2e] transition-colors">
                {partner.logoText}
              </div>
              <div className="text-[11px] font-bold tracking-tight text-slate-500 mt-2 opacity-80">
                {partner.name}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}

const coreResources = [
  {
    title: "Financial Audit Report",
    description: "Verified financial statement tracking resource management metrics, expenditure details, and yearly statement clarity portfolios.",
    tag: "Financials",
    icon: FileText,
    url: "#"
  },
  {
    title: "Annual Operational Report",
    description: "Comprehensive operational overview highlighting infrastructure developments, project outcomes, and outreach metrics across regional sectors.",
    tag: "Annual Report",
    icon: FileText,
    url: "#"
  },
  {
    title: "Child Protection Policy Mandate",
    description: "Strict procedural framework ensuring child safe regulations, regulatory protective standards, and zero-tolerance operational models.",
    tag: "Child Safety",
    icon:  Shield,
    url: "#"
  },
  {
    title: "Media & Public Relations Policy",
    description: "Institutional guidelines governing photography distribution protocols, brand representation rules, and secure media documentation channels.",
    tag: "Media Policy",
    icon: Video,
    url: "#"
  }
];

const dummyPartners = [
  { name: "Catholic Relief Foundation", logoText: "CRF ALLIANCE" },
  { name: "Dharma Social Trust", logoText: "DST NETWORKS" },
  { name: "Global Outreach Initiatives", logoText: "GO IMPACT" },
  { name: "Apostolic Mission Guild", logoText: "AMG UNITED" }
];
