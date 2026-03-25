import React from 'react';
import { motion } from 'motion/react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip as RechartsTooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, AreaChart, Area } from 'recharts';
import { Scale, ShieldCheck, Flag, Smartphone, Users, Zap, Euro, TrendingUp, Clock, MapPin, CheckCircle2, ArrowRight, Globe, Shield, Map, MessageSquare, CreditCard, Server } from 'lucide-react';

const BRAND_NAME = "Équité";

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

export const slides = [
  {
    id: 'cover',
    component: () => (
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?q=80&w=2000&auto=format&fit=crop" 
            alt="Eiffel Tower at night" 
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/50 to-transparent" />
        </div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="relative z-10 max-w-5xl w-full px-12 flex flex-col items-start"
        >
          <motion.div variants={itemVariants} className="mb-6 px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-sm font-medium tracking-wide uppercase">
            The first 0% Commission Subscription Platform for Paris
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-7xl md:text-9xl font-bold tracking-tighter mb-6 text-white">
            {BRAND_NAME}<span className="text-amber-500">.</span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-2xl md:text-4xl font-light text-zinc-300 mb-12 max-w-2xl leading-tight">
            Empowering Drivers.<br/>
            <span className="font-medium text-white">Fairer Rides.</span>
          </motion.p>
          
          <motion.div variants={itemVariants} className="mt-auto pt-12 border-t border-zinc-800 w-full max-w-md">
            <p className="text-zinc-500 text-sm uppercase tracking-widest mb-1">Presented by</p>
            <p className="text-zinc-200 font-medium">Founding Team</p>
          </motion.div>
        </motion.div>
      </div>
    )
  },
  {
    id: 'problem',
    component: () => (
      <div className="w-full h-full flex flex-col md:flex-row bg-zinc-950">
        <div className="w-full md:w-1/2 p-12 md:p-24 flex flex-col justify-center">
          <motion.div variants={containerVariants} initial="hidden" animate="show">
            <motion.h2 variants={itemVariants} className="text-amber-500 font-mono text-sm tracking-widest uppercase mb-4">01 / The Problem</motion.h2>
            <motion.h3 variants={itemVariants} className="text-5xl font-bold tracking-tight mb-12">A Broken System.</motion.h3>
            
            <div className="space-y-8">
              {[
                { title: 'The "Commission Trap"', desc: 'Uber/Bolt take 25% of every single fare.', icon: Euro },
                { title: 'Inflation', desc: 'Rising fuel and insurance costs are crushing driver margins.', icon: TrendingUp },
                { title: 'Social Unrest', desc: 'Frequent driver protests in Paris against "Algorithm Dictatorship."', icon: Users },
                { title: 'High Churn', desc: 'Drivers have zero loyalty to existing apps.', icon: Clock },
              ].map((item, i) => (
                <motion.div key={i} variants={itemVariants} className="flex gap-6 items-start group">
                  <div className="p-3 rounded-2xl bg-zinc-900 border border-zinc-800 group-hover:border-amber-500/50 transition-colors">
                    <item.icon className="w-6 h-6 text-amber-500" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-zinc-100 mb-1">{item.title}</h4>
                    <p className="text-zinc-400 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        <div className="w-full md:w-1/2 relative hidden md:block">
          <img 
            src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop" 
            alt="Frustrated driver" 
            className="w-full h-full object-cover opacity-60 grayscale"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 to-transparent" />
        </div>
      </div>
    )
  },
  {
    id: 'solution',
    component: () => (
      <div className="w-full h-full p-12 md:p-24 flex flex-col bg-zinc-950 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-zinc-900/30 rounded-l-[100px] -mr-20" />
        
        <motion.div variants={containerVariants} initial="hidden" animate="show" className="relative z-10 h-full flex flex-col">
          <motion.h2 variants={itemVariants} className="text-amber-500 font-mono text-sm tracking-widest uppercase mb-4">02 / The Solution</motion.h2>
          <motion.h3 variants={itemVariants} className="text-5xl font-bold tracking-tight mb-16">The "SaaS" Model.</motion.h3>
          
          <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={itemVariants} className="bg-zinc-900/80 backdrop-blur-xl border border-zinc-800 rounded-3xl p-10 shadow-2xl">
              <div className="flex flex-col items-center justify-center space-y-8">
                <div className="flex items-center justify-between w-full max-w-sm p-6 bg-zinc-950 rounded-2xl border border-zinc-800">
                  <span className="text-xl font-medium text-zinc-300">Rider Fare</span>
                  <ArrowRight className="text-amber-500" />
                  <span className="text-2xl font-bold text-emerald-400">100% to Driver</span>
                </div>
                <div className="w-px h-12 bg-zinc-800" />
                <div className="flex items-center justify-between w-full max-w-sm p-6 bg-zinc-950 rounded-2xl border border-zinc-800">
                  <span className="text-xl font-medium text-zinc-300">Subscription</span>
                  <ArrowRight className="text-amber-500" />
                  <span className="text-2xl font-bold text-white">€150/mo to App</span>
                </div>
              </div>
            </motion.div>
            
            <div className="space-y-10">
              {[
                { title: '0% Commission', desc: 'Drivers keep every Euro the rider pays. No hidden fees.' },
                { title: 'Flat Monthly Fee', desc: 'Drivers pay a fixed subscription (e.g., €150/month).' },
                { title: 'Independence', desc: 'Drivers are treated as true entrepreneurs, not "gig workers."' },
                { title: 'Predictability', desc: 'The platform earns stable MRR (Monthly Recurring Revenue).' },
              ].map((item, i) => (
                <motion.div key={i} variants={itemVariants} className="flex gap-4 items-start">
                  <CheckCircle2 className="w-6 h-6 text-amber-500 shrink-0 mt-1" />
                  <div>
                    <h4 className="text-2xl font-medium text-zinc-100 mb-2">{item.title}</h4>
                    <p className="text-zinc-400 text-lg">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    )
  },
  {
    id: 'market',
    component: () => (
      <div className="w-full h-full flex flex-col md:flex-row bg-zinc-950">
        <div className="w-full md:w-1/2 relative hidden md:block">
          <img 
            src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1200&auto=format&fit=crop" 
            alt="Paris aerial" 
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-zinc-950 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-48 h-48 border border-amber-500/30 rounded-full flex items-center justify-center bg-zinc-950/50 backdrop-blur-sm">
              <MapPin className="w-16 h-16 text-amber-500" />
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-12 md:p-24 flex flex-col justify-center">
          <motion.div variants={containerVariants} initial="hidden" animate="show">
            <motion.h2 variants={itemVariants} className="text-amber-500 font-mono text-sm tracking-widest uppercase mb-4">03 / Market Opportunity</motion.h2>
            <motion.h3 variants={itemVariants} className="text-5xl font-bold tracking-tight mb-12">France & Paris.</motion.h3>
            
            <div className="space-y-12">
              <motion.div variants={itemVariants} className="border-l-2 border-amber-500 pl-6">
                <h4 className="text-3xl font-light text-zinc-100 mb-2">Market Size</h4>
                <p className="text-xl text-zinc-400">Over <strong className="text-white font-semibold">30,000</strong> licensed VTC drivers in the Île-de-France region.</p>
              </motion.div>
              
              <motion.div variants={itemVariants} className="border-l-2 border-amber-500 pl-6">
                <h4 className="text-3xl font-light text-zinc-100 mb-2">Target Segment</h4>
                <p className="text-xl text-zinc-400">Focus exclusively on the Paris <strong className="text-white font-semibold">High-End (Berline)</strong> and <strong className="text-white font-semibold">Airport</strong> segments first.</p>
              </motion.div>
              
              <motion.div variants={itemVariants} className="border-l-2 border-amber-500 pl-6">
                <h4 className="text-3xl font-light text-zinc-100 mb-2">Perfect Timing</h4>
                <p className="text-xl text-zinc-400">Post-Olympic Paris is seeking <strong className="text-white font-semibold">"Ethical Tech"</strong> alternatives amidst high anti-Uber sentiment.</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    )
  },
  {
    id: 'validation',
    component: () => (
      <div className="w-full h-full p-12 md:p-24 flex flex-col bg-zinc-950">
        <motion.div variants={containerVariants} initial="hidden" animate="show" className="h-full flex flex-col">
          <motion.h2 variants={itemVariants} className="text-amber-500 font-mono text-sm tracking-widest uppercase mb-4">04 / Market Validation</motion.h2>
          <motion.h3 variants={itemVariants} className="text-5xl font-bold tracking-tight mb-12">Proven in the US. Blue Ocean in Paris.</motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              { name: 'Empower', region: 'United States', desc: 'Tens of thousands of drivers saving millions in commission. Flat subscription model.', icon: Globe },
              { name: 'Wridz', region: 'United States', desc: 'Expanding across mid-sized US markets. 100% take-home pay with a focus on safety.', icon: Shield },
              { name: 'inDrive', region: 'Global', desc: 'Proved that drivers and riders are desperate for alternatives to algorithmic pricing.', icon: TrendingUp },
            ].map((item, i) => (
              <motion.div key={i} variants={itemVariants} className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 flex flex-col">
                <item.icon className="w-10 h-10 text-amber-500 mb-6" />
                <h4 className="text-2xl font-semibold text-white mb-2">{item.name}</h4>
                <p className="text-amber-500/80 text-sm font-mono mb-4">{item.region}</p>
                <p className="text-zinc-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="mt-auto bg-amber-500/10 border border-amber-500/30 rounded-2xl p-8 text-center">
            <h4 className="text-2xl font-medium text-amber-400 mb-2">The Paris Opportunity</h4>
            <p className="text-zinc-300 text-lg">No one has successfully captured the premium European market (Paris Berline) with the SaaS model yet. This is our blue ocean.</p>
          </motion.div>
        </motion.div>
      </div>
    )
  },
  {
    id: 'competition',
    component: () => (
      <div className="w-full h-full p-12 md:p-24 flex flex-col bg-zinc-950">
        <motion.div variants={containerVariants} initial="hidden" animate="show" className="h-full flex flex-col">
          <motion.h2 variants={itemVariants} className="text-amber-500 font-mono text-sm tracking-widest uppercase mb-4">05 / Competitive Landscape</motion.h2>
          <motion.h3 variants={itemVariants} className="text-5xl font-bold tracking-tight mb-12">The Paris Battlefield.</motion.h3>

          <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                name: 'Uber', 
                role: 'The Incumbent',
                share: '~60% Share',
                weakness: '25% commission. Uses "Black Box" algorithms to decouple rider prices from driver payouts, maximizing corporate take-rate.',
                color: 'border-zinc-700'
              },
              { 
                name: 'Bolt', 
                role: 'The Challenger',
                share: '~25% Share',
                weakness: 'The "Race to the Bottom." Aggressively discounts fares to steal share, squeezing driver margins to fund cheap rides.',
                color: 'border-emerald-500/30'
              },
              { 
                name: 'Heetch & Others', 
                role: 'Local Players',
                share: '~15% Share',
                weakness: 'The "Friendly" alternative, but still takes a massive 15% cut (€750 on a €5k month). Skews heavily toward budget rides.',
                color: 'border-blue-500/30'
              },
            ].map((item, i) => (
              <motion.div key={i} variants={itemVariants} className={`bg-zinc-900/50 border ${item.color} rounded-3xl p-8 flex flex-col relative overflow-hidden`}>
                <div className="absolute top-0 right-0 p-6 opacity-10 text-6xl font-bold text-white">{i + 1}</div>
                <h4 className="text-3xl font-bold text-white mb-1">{item.name}</h4>
                <p className="text-amber-500 font-mono text-sm mb-6">{item.role} • {item.share}</p>
                
                <div className="mt-auto">
                  <p className="text-zinc-500 text-xs uppercase tracking-wider mb-2">Key Weakness</p>
                  <p className="text-zinc-300 text-lg leading-relaxed">{item.weakness}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="mt-12 bg-amber-500/10 border border-amber-500/30 rounded-2xl p-8 flex items-center justify-between">
            <div>
              <h4 className="text-2xl font-medium text-amber-400 mb-2">The {BRAND_NAME} Exploit</h4>
              <p className="text-zinc-300 text-lg">By shifting to a 0% commission SaaS model, we instantly capture the market's most constrained resource: <strong className="text-white">Driver Supply.</strong></p>
            </div>
            <div className="hidden md:flex w-16 h-16 rounded-full bg-amber-500/20 items-center justify-center shrink-0 ml-8">
              <Zap className="w-8 h-8 text-amber-500" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    )
  },
  {
    id: 'value-prop',
    component: () => {
      const data = [
        { name: 'Traditional App', Takehome: 3750, Commission: 1250 },
        { name: BRAND_NAME, Takehome: 4850, Commission: 150 },
      ];

      return (
        <div className="w-full h-full p-12 md:p-24 flex flex-col bg-zinc-950">
          <motion.div variants={containerVariants} initial="hidden" animate="show" className="h-full flex flex-col">
            <motion.h2 variants={itemVariants} className="text-amber-500 font-mono text-sm tracking-widest uppercase mb-4">06 / Driver Value Proposition</motion.h2>
            <motion.h3 variants={itemVariants} className="text-5xl font-bold tracking-tight mb-12">The Math.</motion.h3>
            
            <div className="flex-1 flex flex-col lg:flex-row gap-16 items-center">
              <motion.div variants={itemVariants} className="w-full lg:w-1/2 space-y-8">
                <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8">
                  <h4 className="text-zinc-400 mb-2">Traditional App</h4>
                  <div className="flex justify-between items-end mb-4">
                    <span className="text-xl">€5,000 Turnover</span>
                    <span className="text-red-400">- €1,250 Commission (25%)</span>
                  </div>
                  <div className="pt-4 border-t border-zinc-800 flex justify-between items-center">
                    <span className="text-zinc-500">Net to Driver</span>
                    <span className="text-3xl font-bold text-white">€3,750</span>
                  </div>
                </div>

                <div className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/20 blur-3xl rounded-full" />
                  <h4 className="text-amber-400 mb-2">{BRAND_NAME}</h4>
                  <div className="flex justify-between items-end mb-4">
                    <span className="text-xl">€5,000 Turnover</span>
                    <span className="text-amber-500">- €150 Subscription</span>
                  </div>
                  <div className="pt-4 border-t border-amber-500/20 flex justify-between items-center">
                    <span className="text-zinc-400">Net to Driver</span>
                    <span className="text-4xl font-bold text-white">€4,850</span>
                  </div>
                </div>

                <div className="p-6 bg-emerald-500/10 border border-emerald-500/20 rounded-xl">
                  <p className="text-emerald-400 text-xl font-medium text-center">
                    Outcome: <strong className="text-2xl text-emerald-300">+€1,100 extra per month</strong> in the driver's pocket.
                  </p>
                  <p className="text-center text-zinc-400 mt-2 text-sm">The ultimate "Growth Hack" for driver supply.</p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="w-full lg:w-1/2 h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#27272a" vertical={false} />
                    <XAxis dataKey="name" stroke="#a1a1aa" tick={{fill: '#a1a1aa'}} axisLine={false} tickLine={false} />
                    <YAxis stroke="#a1a1aa" tick={{fill: '#a1a1aa'}} axisLine={false} tickLine={false} tickFormatter={(value) => `€${value}`} />
                    <RechartsTooltip 
                      cursor={{fill: '#27272a', opacity: 0.4}}
                      contentStyle={{ backgroundColor: '#18181b', border: '1px solid #27272a', borderRadius: '8px', color: '#fff' }}
                    />
                    <Legend wrapperStyle={{ paddingTop: '20px' }} />
                    <Bar dataKey="Takehome" name="Driver Take-home" stackId="a" fill="#10b981" radius={[0, 0, 4, 4]} />
                    <Bar dataKey="Commission" name="Platform Fee" stackId="a" fill="#ef4444" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </motion.div>
            </div>
          </motion.div>
        </div>
      );
    }
  },
  {
    id: 'subscription-model',
    component: () => (
      <div className="w-full h-full p-12 md:p-24 flex flex-col bg-zinc-950">
        <motion.div variants={containerVariants} initial="hidden" animate="show" className="h-full flex flex-col">
          <motion.h2 variants={itemVariants} className="text-amber-500 font-mono text-sm tracking-widest uppercase mb-4">07 / The SaaS Model</motion.h2>
          <motion.h3 variants={itemVariants} className="text-5xl font-bold tracking-tight mb-8">Pricing & Revenue Expansion.</motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            {[
              { name: 'Flex', price: '€75', desc: 'For part-time/weekend drivers', features: ['0% Commission', 'Up to 50 rides/mo', 'Basic Support'] },
              { name: 'Standard', price: '€150', desc: 'For independent drivers', features: ['0% Commission', 'Unlimited Rides', 'Standard Dispatch'] },
              { name: 'Premium', price: '€250', desc: 'For Berline/Van drivers', features: ['Priority Airport Dispatch', 'Advanced Analytics', 'Premium Rider Matching'], highlight: true },
              { name: 'Fleet', price: 'Custom', desc: 'For fleet operators', features: ['Multi-vehicle Management', 'Automated Payouts', 'Tax & Accounting API'] }
            ].map((tier, i) => (
              <motion.div key={i} variants={itemVariants} className={`bg-zinc-900/50 border ${tier.highlight ? 'border-amber-500/50' : 'border-zinc-800'} rounded-2xl p-6 relative`}>
                {tier.highlight && <div className="absolute top-0 right-0 bg-amber-500 text-zinc-950 text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-xl uppercase tracking-wider">Most Popular</div>}
                <h4 className="text-xl font-bold text-white mb-1">{tier.name}</h4>
                <p className="text-zinc-500 text-sm mb-4">{tier.desc}</p>
                <div className="mb-6"><span className="text-4xl font-bold text-white">{tier.price}</span><span className="text-zinc-500">/mo</span></div>
                <ul className="space-y-3">
                  {tier.features.map((f, j) => (
                    <li key={j} className="flex items-center text-zinc-300 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-amber-500 mr-3 shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div variants={itemVariants} className="bg-zinc-900/30 border border-zinc-800/50 rounded-2xl p-6 flex flex-col justify-center">
              <h4 className="text-lg font-bold text-white mb-4 flex items-center"><Zap className="w-5 h-5 text-amber-500 mr-2" /> High-Margin Add-Ons</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-zinc-800/50 pb-2">
                  <span className="text-zinc-300">Instant Payouts</span>
                  <span className="text-amber-500 font-mono text-sm">1% Fee</span>
                </div>
                <div className="flex justify-between items-center border-b border-zinc-800/50 pb-2">
                  <span className="text-zinc-300">Accounting & Tax Automation</span>
                  <span className="text-amber-500 font-mono text-sm">€20/mo</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-zinc-300">EV Charging Network Access</span>
                  <span className="text-amber-500 font-mono text-sm">€15/mo</span>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-6 flex flex-col justify-center">
              <h4 className="text-lg font-bold text-amber-400 mb-4 flex items-center"><TrendingUp className="w-5 h-5 mr-2" /> Projected ARR (Base Tier)</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-zinc-300">1,000 Drivers <span className="text-zinc-500 text-xs ml-2">(~3% Paris Market)</span></span>
                  <span className="text-white font-bold">€1.8M ARR</span>
                </div>
                <div className="w-full bg-zinc-900 rounded-full h-2"><div className="bg-amber-500 h-2 rounded-full" style={{width: '15%'}}></div></div>
                
                <div className="flex justify-between items-center pt-2">
                  <span className="text-zinc-300">5,000 Drivers <span className="text-zinc-500 text-xs ml-2">(~15% Paris Market)</span></span>
                  <span className="text-white font-bold">€9.0M ARR</span>
                </div>
                <div className="w-full bg-zinc-900 rounded-full h-2"><div className="bg-amber-500 h-2 rounded-full" style={{width: '45%'}}></div></div>
                
                <div className="flex justify-between items-center pt-2">
                  <span className="text-zinc-300">15,000 Drivers <span className="text-zinc-500 text-xs ml-2">(~45% Paris Market)</span></span>
                  <span className="text-white font-bold">€27.0M ARR</span>
                </div>
                <div className="w-full bg-zinc-900 rounded-full h-2"><div className="bg-amber-500 h-2 rounded-full" style={{width: '85%'}}></div></div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    )
  },
  {
    id: 'financials',
    component: () => {
      const data = [
        { name: 'Gross Profit', value: 120.65, color: '#10b981' },
        { name: 'Mapping APIs', value: 16.00, color: '#f59e0b' },
        { name: 'Comms/SMS', value: 6.00, color: '#3b82f6' },
        { name: 'Servers/DB', value: 5.00, color: '#8b5cf6' },
        { name: 'Payment Fees', value: 2.35, color: '#ef4444' },
      ];

      return (
        <div className="w-full h-full p-12 md:p-24 flex flex-col bg-zinc-950">
          <motion.div variants={containerVariants} initial="hidden" animate="show" className="h-full flex flex-col">
            <motion.h2 variants={itemVariants} className="text-amber-500 font-mono text-sm tracking-widest uppercase mb-4">08 / Unit Economics</motion.h2>
            <motion.h3 variants={itemVariants} className="text-5xl font-bold tracking-tight mb-12">80% Gross Margin SaaS.</motion.h3>

            <div className="flex-1 flex flex-col lg:flex-row gap-16 items-center">
              <motion.div variants={itemVariants} className="w-full lg:w-1/2 space-y-6">
                <div className="mb-8">
                  <p className="text-zinc-400 text-xl mb-2">Monthly Revenue per Driver</p>
                  <p className="text-6xl font-bold text-white tracking-tighter">€150.00</p>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-medium text-zinc-300 border-b border-zinc-800 pb-2">COGS Breakdown (Est. 200 rides/mo)</h4>
                  {[
                    { title: 'Mapping & Location APIs', cost: '€16.00', icon: Map, color: 'text-amber-500' },
                    { title: 'Communication (SMS/Calls)', cost: '€6.00', icon: MessageSquare, color: 'text-blue-500' },
                    { title: 'Cloud Servers & DB', cost: '€5.00', icon: Server, color: 'text-purple-500' },
                    { title: 'Payment Processing (Stripe)', cost: '€2.35', icon: CreditCard, color: 'text-red-500' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-4 bg-zinc-900/50 rounded-xl border border-zinc-800/50">
                      <div className="flex items-center gap-3">
                        <item.icon className={`w-5 h-5 ${item.color}`} />
                        <span className="text-zinc-300">{item.title}</span>
                      </div>
                      <span className="text-zinc-400 font-mono">{item.cost}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-emerald-500/10 border border-emerald-500/20 rounded-xl flex justify-between items-center">
                  <span className="text-emerald-400 text-xl font-medium">Gross Profit</span>
                  <span className="text-3xl font-bold text-emerald-300">€120.65 <span className="text-lg font-normal opacity-80">/ mo</span></span>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="w-full lg:w-1/2 h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={data}
                      cx="50%"
                      cy="50%"
                      innerRadius={120}
                      outerRadius={160}
                      paddingAngle={2}
                      dataKey="value"
                      stroke="none"
                    >
                      {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <RechartsTooltip
                      contentStyle={{ backgroundColor: '#18181b', border: '1px solid #27272a', borderRadius: '8px', color: '#fff' }}
                      itemStyle={{ color: '#fff' }}
                      formatter={(value) => [`€${value}`, 'Amount']}
                    />
                  </PieChart>
                </ResponsiveContainer>
                <p className="text-center text-zinc-500 mt-4 text-sm">Highly scalable SaaS economics applied to mobility.</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      );
    }
  },
  {
    id: 'projections',
    component: () => {
      const data = [
        { year: 'Year 1', MRR: 0.15, EBITDA: -0.5, DAC: 300 },
        { year: 'Year 2', MRR: 0.45, EBITDA: -0.2, DAC: 200 },
        { year: 'Year 3', MRR: 1.05, EBITDA: 0.4, DAC: 120 },
        { year: 'Year 4', MRR: 1.80, EBITDA: 1.2, DAC: 80 },
        { year: 'Year 5', MRR: 2.70, EBITDA: 2.1, DAC: 50 },
      ];

      return (
        <div className="w-full h-full p-12 md:p-24 flex flex-col bg-zinc-950">
          <motion.div variants={containerVariants} initial="hidden" animate="show" className="h-full flex flex-col">
            <motion.h2 variants={itemVariants} className="text-amber-500 font-mono text-sm tracking-widest uppercase mb-4">09 / Financial Projections</motion.h2>
            <motion.h3 variants={itemVariants} className="text-5xl font-bold tracking-tight mb-12">Path to Profitability.</motion.h3>

            <div className="flex-1 flex flex-col lg:flex-row gap-16 items-center">
              <motion.div variants={itemVariants} className="w-full lg:w-1/3 space-y-6">
                <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6">
                  <h4 className="text-zinc-400 text-sm uppercase tracking-wider mb-1">Year 5 Target MRR</h4>
                  <p className="text-4xl font-bold text-white">€2.7M</p>
                  <p className="text-amber-500/80 text-sm mt-2">18,000 Active Drivers</p>
                </div>
                <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6">
                  <h4 className="text-zinc-400 text-sm uppercase tracking-wider mb-1">Driver Acquisition Cost (DAC)</h4>
                  <p className="text-4xl font-bold text-white">€300 <span className="text-xl text-zinc-500">→ €50</span></p>
                  <p className="text-emerald-500/80 text-sm mt-2">Decreases via network effects</p>
                </div>
                <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6">
                  <h4 className="text-zinc-400 text-sm uppercase tracking-wider mb-1">Profitability</h4>
                  <p className="text-4xl font-bold text-white">Year 3</p>
                  <p className="text-blue-500/80 text-sm mt-2">EBITDA positive at 7,000 drivers</p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="w-full lg:w-2/3 h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <defs>
                      <linearGradient id="colorMRR" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="colorEBITDA" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#f59e0b" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#27272a" vertical={false} />
                    <XAxis dataKey="year" stroke="#a1a1aa" tick={{fill: '#a1a1aa'}} axisLine={false} tickLine={false} />
                    <YAxis stroke="#a1a1aa" tick={{fill: '#a1a1aa'}} axisLine={false} tickLine={false} tickFormatter={(value) => `€${value}M`} />
                    <RechartsTooltip 
                      cursor={{stroke: '#27272a', strokeWidth: 2}}
                      contentStyle={{ backgroundColor: '#18181b', border: '1px solid #27272a', borderRadius: '8px', color: '#fff' }}
                      formatter={(value, name) => [`€${value}M`, name]}
                    />
                    <Legend wrapperStyle={{ paddingTop: '20px' }} />
                    <Area type="monotone" dataKey="MRR" name="Monthly Recurring Revenue" stroke="#10b981" strokeWidth={3} fillOpacity={1} fill="url(#colorMRR)" />
                    <Area type="monotone" dataKey="EBITDA" name="EBITDA" stroke="#f59e0b" strokeWidth={3} fillOpacity={1} fill="url(#colorEBITDA)" />
                  </AreaChart>
                </ResponsiveContainer>
              </motion.div>
            </div>
          </motion.div>
        </div>
      );
    }
  },
  {
    id: 'regulatory',
    component: () => (
      <div className="w-full h-full p-12 md:p-24 flex flex-col bg-zinc-950 items-center justify-center">
        <motion.div variants={containerVariants} initial="hidden" animate="show" className="w-full max-w-5xl">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-amber-500 font-mono text-sm tracking-widest uppercase mb-4">10 / Foundation</h2>
            <h3 className="text-5xl font-bold tracking-tight">Regulatory & Legal Roadmap.</h3>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Scale, title: 'Entity & Licensing', desc1: 'French SAS (Société par Actions Simplifiée).', desc2: 'Registered as "Centrale de Réservation" via the REVTC.' },
              { icon: ShieldCheck, title: 'Compliance', desc1: 'Full Loi LOM compliance.', desc2: 'Strict GDPR adherence for user data protection.' },
              { icon: Flag, title: 'Insurance', desc1: 'Platform-wide Professional Liability.', desc2: '(RC Pro) coverage.' },
            ].map((item, i) => (
              <motion.div key={i} variants={itemVariants} className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-10 flex flex-col items-center text-center hover:bg-zinc-900 transition-colors">
                <div className="w-20 h-20 rounded-full bg-zinc-950 border border-zinc-800 flex items-center justify-center mb-8">
                  <item.icon className="w-10 h-10 text-amber-500" />
                </div>
                <h4 className="text-2xl font-semibold text-zinc-100 mb-6">{item.title}</h4>
                <p className="text-zinc-400 mb-2">{item.desc1}</p>
                <p className="text-zinc-400">{item.desc2}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    )
  },
  {
    id: 'tech',
    component: () => (
      <div className="w-full h-full flex flex-col md:flex-row bg-zinc-950">
        <div className="w-full md:w-1/2 p-12 md:p-24 flex flex-col justify-center">
          <motion.div variants={containerVariants} initial="hidden" animate="show">
            <motion.h2 variants={itemVariants} className="text-amber-500 font-mono text-sm tracking-widest uppercase mb-4">11 / Tech Strategy</motion.h2>
            <motion.h3 variants={itemVariants} className="text-5xl font-bold tracking-tight mb-12">The MVP.</motion.h3>
            
            <div className="space-y-10">
              <motion.div variants={itemVariants} className="flex gap-6 items-start">
                <Smartphone className="w-8 h-8 text-amber-500 shrink-0" />
                <div>
                  <h4 className="text-2xl font-semibold text-zinc-100 mb-2">Engine</h4>
                  <p className="text-zinc-400 text-lg">High-end White-Label solution for rapid time-to-market.</p>
                </div>
              </motion.div>
              
              <motion.div variants={itemVariants} className="flex gap-6 items-start">
                <Zap className="w-8 h-8 text-amber-500 shrink-0" />
                <div>
                  <h4 className="text-2xl font-semibold text-zinc-100 mb-2">Key Features</h4>
                  <p className="text-zinc-400 text-lg">Subscription billing, priority dispatch, and French language localization.</p>
                </div>
              </motion.div>
              
              <motion.div variants={itemVariants} className="flex gap-6 items-start">
                <Euro className="w-8 h-8 text-amber-500 shrink-0" />
                <div>
                  <h4 className="text-2xl font-semibold text-zinc-100 mb-2">Payment</h4>
                  <p className="text-zinc-400 text-lg">Integrated with Stripe Connect for instant driver payouts.</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
        <div className="w-full md:w-1/2 relative hidden md:flex items-center justify-center bg-zinc-900/30">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.1)_0%,transparent_70%)]" />
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
            className="relative w-64 h-[500px] bg-zinc-950 rounded-[3rem] border-8 border-zinc-800 shadow-2xl overflow-hidden"
          >
            <div className="w-full h-full flex flex-col">
              <div className="h-20 bg-zinc-900 flex items-end justify-between px-6 pb-4">
                <div className="w-8 h-8 rounded-full bg-zinc-800" />
                <div className="w-24 h-4 rounded bg-zinc-800" />
              </div>
              <div className="flex-1 p-6 space-y-4">
                <div className="w-full h-32 rounded-2xl bg-zinc-900" />
                <div className="w-full h-16 rounded-xl bg-zinc-900" />
                <div className="w-full h-16 rounded-xl bg-zinc-900" />
              </div>
              <div className="h-24 bg-zinc-900 rounded-t-3xl mt-auto" />
            </div>
          </motion.div>
        </div>
      </div>
    )
  },
  {
    id: 'driver-acquisition',
    component: () => (
      <div className="w-full h-full p-12 md:p-24 flex flex-col bg-zinc-950">
        <motion.div variants={containerVariants} initial="hidden" animate="show" className="h-full flex flex-col">
          <motion.h2 variants={itemVariants} className="text-amber-500 font-mono text-sm tracking-widest uppercase mb-4">12 / Go-To-Market</motion.h2>
          <motion.h3 variants={itemVariants} className="text-5xl font-bold tracking-tight mb-16">Driver Acquisition: The "Multi-Apping" Exploit.</motion.h3>
          
          <div className="flex-1 flex flex-col lg:flex-row gap-12 items-center">
            <motion.div variants={itemVariants} className="w-full lg:w-1/2 space-y-8">
              <p className="text-2xl font-light text-zinc-300 leading-relaxed">
                We don't need drivers to quit Uber or Bolt. We just need to become their <strong className="text-white font-bold">Primary App</strong>.
              </p>
              
              <div className="space-y-6">
                <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6">
                  <h4 className="text-xl font-bold text-white mb-2">The Reality of Multi-Apping</h4>
                  <p className="text-zinc-400">Almost all 30,000+ VTC drivers in Paris run 2-3 apps simultaneously. They accept whichever ride pings first or pays best.</p>
                </div>
                
                <div className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-6">
                  <h4 className="text-xl font-bold text-amber-400 mb-2">The 0% Commission Advantage</h4>
                  <p className="text-zinc-300">Because Équité takes 0% commission, a ride on our platform pays 15-25% more for the exact same distance. When both apps ping, <strong className="text-white">Équité always wins.</strong></p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="w-full lg:w-1/2 flex justify-center">
              <div className="relative w-full max-w-md aspect-square">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl" />
                
                <div className="absolute top-10 left-10 bg-zinc-900 border border-zinc-700 p-4 rounded-xl shadow-2xl transform -rotate-12 opacity-50">
                  <div className="text-zinc-500 font-bold mb-2">Uber</div>
                  <div className="text-sm text-zinc-600">€15.00 Net</div>
                </div>
                
                <div className="absolute bottom-10 right-10 bg-zinc-900 border border-emerald-900 p-4 rounded-xl shadow-2xl transform rotate-12 opacity-50">
                  <div className="text-emerald-700 font-bold mb-2">Bolt</div>
                  <div className="text-sm text-zinc-600">€14.50 Net</div>
                </div>
                
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-zinc-900 border-2 border-amber-500 p-6 rounded-2xl shadow-[0_0_50px_rgba(245,158,11,0.2)] z-10 w-64">
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-amber-500 font-bold text-xl">{BRAND_NAME}</div>
                    <div className="bg-amber-500/20 text-amber-500 text-xs px-2 py-1 rounded uppercase font-bold">Primary</div>
                  </div>
                  <div className="text-3xl text-white font-bold mb-1">€20.00 Net</div>
                  <div className="text-sm text-zinc-400">Same distance. 0% cut.</div>
                  <div className="mt-6 bg-amber-500 text-zinc-950 text-center py-2 rounded-lg font-bold">Accept Ride</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    )
  },
  {
    id: 'acquisition',
    component: () => (
      <div className="w-full h-full p-12 md:p-24 flex flex-col bg-zinc-950">
        <motion.div variants={containerVariants} initial="hidden" animate="show" className="h-full flex flex-col">
          <motion.h2 variants={itemVariants} className="text-amber-500 font-mono text-sm tracking-widest uppercase mb-4">13 / Go-To-Market</motion.h2>
          <motion.h3 variants={itemVariants} className="text-5xl font-bold tracking-tight mb-16">Rider Acquisition Strategy.</motion.h3>
          
          <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: 'The "Ethical Alternative"', 
                desc: 'Market to riders as the brand that treats drivers fairly. Consumers increasingly care about the gig economy impact.',
                highlight: 'Brand Positioning'
              },
              { 
                title: 'Guerrilla Marketing', 
                desc: 'Leveraging drivers to hand out referral codes to their current passengers on other apps.',
                highlight: 'Driver-Led Growth'
              },
              { 
                title: 'Niche Focus', 
                desc: 'Partnerships with Paris hotels, luxury boutiques, and business districts (La Défense).',
                highlight: 'B2B & Premium'
              },
            ].map((item, i) => (
              <motion.div key={i} variants={itemVariants} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-b from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />
                <div className="h-full bg-zinc-900/50 border border-zinc-800 rounded-3xl p-10 flex flex-col relative z-10">
                  <span className="text-xs font-mono text-amber-500 mb-6 uppercase tracking-wider">{item.highlight}</span>
                  <h4 className="text-3xl font-light text-white mb-6">{item.title}</h4>
                  <p className="text-zinc-400 text-lg leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    )
  },
  {
    id: 'roadmap',
    component: () => (
      <div className="w-full h-full p-12 md:p-24 flex flex-col bg-zinc-950 justify-center">
        <motion.div variants={containerVariants} initial="hidden" animate="show" className="w-full max-w-6xl mx-auto">
          <motion.div variants={itemVariants} className="text-center mb-20">
            <h2 className="text-amber-500 font-mono text-sm tracking-widest uppercase mb-4">14 / Execution</h2>
            <h3 className="text-5xl font-bold tracking-tight">The Roadmap (Day 1 - Month 12).</h3>
          </motion.div>
          
          <div className="relative">
            <div className="absolute top-1/2 left-0 w-full h-1 bg-zinc-800 -translate-y-1/2 hidden md:block" />
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              {[
                { time: 'Months 1-2', title: 'Foundation', desc: 'Legal setup, REVTC registration, and Tech customization.' },
                { time: 'Months 3-4', title: 'Supply', desc: 'Driver Onboarding (The "Founding 500" - 3 months free).' },
                { time: 'Month 5', title: 'Launch', desc: 'Official Launch in Paris Central.' },
                { time: 'Months 6-12', title: 'Scale', desc: 'Scale marketing to riders; achieve 5,000 active users.' },
              ].map((item, i) => (
                <motion.div key={i} variants={itemVariants} className="relative pt-8 md:pt-0">
                  <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-amber-500 border-4 border-zinc-950" />
                  <div className={`bg-zinc-900 border border-zinc-800 rounded-2xl p-6 ${i % 2 === 0 ? 'md:mb-16' : 'md:mt-16'}`}>
                    <span className="text-amber-500 font-mono text-sm mb-2 block">{item.time}</span>
                    <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                    <p className="text-zinc-400 text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    )
  },
  {
    id: 'financials',
    component: () => {
      const data = [
        { year: 'Year 1', ARR: 1.2, Drivers: 1000 },
        { year: 'Year 2', ARR: 4.5, Drivers: 3000 },
        { year: 'Year 3', ARR: 12.0, Drivers: 8000 },
        { year: 'Year 4', ARR: 25.0, Drivers: 15000 },
        { year: 'Year 5', ARR: 45.0, Drivers: 25000 },
      ];

      return (
        <div className="w-full h-full p-12 md:p-24 flex flex-col bg-zinc-950">
          <motion.div variants={containerVariants} initial="hidden" animate="show" className="h-full flex flex-col">
            <motion.h2 variants={itemVariants} className="text-amber-500 font-mono text-sm tracking-widest uppercase mb-4">15 / Financials</motion.h2>
            <motion.h3 variants={itemVariants} className="text-5xl font-bold tracking-tight mb-12">5-Year Projections & Unit Economics.</motion.h3>
            
            <div className="flex-1 flex flex-col lg:flex-row gap-12 items-center">
              <motion.div variants={itemVariants} className="w-full lg:w-1/2 space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6">
                    <p className="text-zinc-500 text-sm uppercase tracking-wider mb-2">Driver CAC</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-white">€50</span>
                      <span className="text-zinc-400 text-sm line-through">€150</span>
                    </div>
                    <p className="text-emerald-500 text-xs mt-2">↓ Decreasing via network effects</p>
                  </div>
                  
                  <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6">
                    <p className="text-zinc-500 text-sm uppercase tracking-wider mb-2">Driver LTV</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-white">€1,800</span>
                    </div>
                    <p className="text-amber-500 text-xs mt-2">Based on 12mo retention @ €150/mo</p>
                  </div>
                  
                  <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6">
                    <p className="text-zinc-500 text-sm uppercase tracking-wider mb-2">Gross Margin</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-white">85%</span>
                    </div>
                    <p className="text-zinc-400 text-xs mt-2">SaaS model efficiency</p>
                  </div>
                  
                  <div className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-6">
                    <p className="text-amber-500/80 text-sm uppercase tracking-wider mb-2">Profitability</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-amber-400">Month 18</span>
                    </div>
                    <p className="text-amber-500/80 text-xs mt-2">Cash-flow positive</p>
                  </div>
                </div>
                
                <div className="bg-zinc-900/30 border border-zinc-800/50 rounded-2xl p-6">
                  <h4 className="text-white font-bold mb-2">The SaaS Multiplier</h4>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Unlike traditional ride-hailing where margins are squeezed by driver incentives and rider discounts, our revenue scales linearly with driver acquisition. Fixed infrastructure costs mean margins expand significantly as we scale past 5,000 drivers.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="w-full lg:w-1/2 h-[400px] bg-zinc-900/20 border border-zinc-800 rounded-2xl p-6">
                <h4 className="text-zinc-300 font-medium mb-6 text-center">Projected ARR (€ Millions)</h4>
                <ResponsiveContainer width="100%" height="85%">
                  <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorARR" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#f59e0b" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#27272a" vertical={false} />
                    <XAxis dataKey="year" stroke="#a1a1aa" tick={{fill: '#a1a1aa'}} axisLine={false} tickLine={false} />
                    <YAxis stroke="#a1a1aa" tick={{fill: '#a1a1aa'}} axisLine={false} tickLine={false} tickFormatter={(value) => `€${value}M`} />
                    <RechartsTooltip 
                      cursor={{stroke: '#27272a', strokeWidth: 2}}
                      contentStyle={{ backgroundColor: '#18181b', border: '1px solid #27272a', borderRadius: '8px', color: '#fff' }}
                      formatter={(value: any) => [`€${value}M`, 'ARR']}
                    />
                    <Area type="monotone" dataKey="ARR" stroke="#f59e0b" strokeWidth={3} fillOpacity={1} fill="url(#colorARR)" />
                  </AreaChart>
                </ResponsiveContainer>
              </motion.div>
            </div>
          </motion.div>
        </div>
      )
    }
  },
  {
    id: 'funding',
    component: () => {
      const data = [
        { name: 'Marketing', value: 40, color: '#f59e0b' },
        { name: 'Technology', value: 30, color: '#10b981' },
        { name: 'Operations', value: 20, color: '#3b82f6' },
        { name: 'Reserve', value: 10, color: '#6366f1' },
      ];

      return (
        <div className="w-full h-full p-12 md:p-24 flex flex-col bg-zinc-950">
          <motion.div variants={containerVariants} initial="hidden" animate="show" className="h-full flex flex-col">
            <motion.h2 variants={itemVariants} className="text-amber-500 font-mono text-sm tracking-widest uppercase mb-4">16 / Ask</motion.h2>
            <motion.h3 variants={itemVariants} className="text-5xl font-bold tracking-tight mb-12">Seed Funding Request.</motion.h3>
            
            <div className="flex-1 flex flex-col lg:flex-row gap-16 items-center">
              <motion.div variants={itemVariants} className="w-full lg:w-1/2">
                <div className="mb-12">
                  <p className="text-zinc-400 text-xl mb-2">Target Raise</p>
                  <p className="text-7xl font-bold text-white tracking-tighter">€450,000</p>
                </div>
                
                <div className="space-y-6">
                  {[
                    { title: 'Marketing (40%)', desc: 'Rider acquisition & Brand building.', color: 'bg-amber-500' },
                    { title: 'Technology (30%)', desc: 'App maintenance, API fees, and customization.', color: 'bg-emerald-500' },
                    { title: 'Operations (20%)', desc: 'Legal, Insurance, and Core Team.', color: 'bg-blue-500' },
                    { title: 'Reserve (10%)', desc: 'The "Liquidity Gap" buffer.', color: 'bg-indigo-500' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className={`w-4 h-4 rounded-full mt-1.5 ${item.color}`} />
                      <div>
                        <h4 className="text-xl font-medium text-white">{item.title}</h4>
                        <p className="text-zinc-400">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="w-full lg:w-1/2 h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={data}
                      cx="50%"
                      cy="50%"
                      innerRadius={100}
                      outerRadius={160}
                      paddingAngle={5}
                      dataKey="value"
                      stroke="none"
                    >
                      {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <RechartsTooltip 
                      contentStyle={{ backgroundColor: '#18181b', border: '1px solid #27272a', borderRadius: '8px', color: '#fff' }}
                      itemStyle={{ color: '#fff' }}
                      formatter={(value) => [`${value}%`, 'Allocation']}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </motion.div>
            </div>
          </motion.div>
        </div>
      );
    }
  },
  {
    id: 'vision',
    component: () => (
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop" 
            alt="Diverse team" 
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent" />
        </div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="relative z-10 max-w-4xl w-full px-12 text-center"
        >
          <motion.h2 variants={itemVariants} className="text-amber-500 font-mono text-sm tracking-widest uppercase mb-8">17 / The Vision</motion.h2>
          
          <motion.h3 variants={itemVariants} className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 text-white">
            Join the Revolution.
          </motion.h3>
          
          <motion.p variants={itemVariants} className="text-2xl md:text-3xl font-light text-zinc-300 mb-12 leading-relaxed">
            Building a sustainable, fair, and profitable future for mobility in Paris.
          </motion.p>
          
          <motion.div variants={itemVariants}>
            <button className="px-8 py-4 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-semibold rounded-full text-lg transition-colors">
              Invest in {BRAND_NAME}
            </button>
          </motion.div>
        </motion.div>
      </div>
    )
  }
];
