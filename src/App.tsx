const IMG = {
  mirror: 'https://cdn.shopify.com/s/files/1/0462/8591/4267/files/protagonist-sarah-mirror.png',
  discovery: 'https://cdn.shopify.com/s/files/1/0462/8591/4267/files/protagonist-discovery.png',
  firstUseOpen: 'https://cdn.shopify.com/s/files/1/0462/8591/4267/files/first-use-excitement.png',
  firstUseWearing: 'https://cdn.shopify.com/s/files/1/0462/8591/4267/files/first-use-wearing.png',
  results2w: 'https://cdn.shopify.com/s/files/1/0462/8591/4267/files/results-2weeks.png',
  results6w: 'https://cdn.shopify.com/s/files/1/0462/8591/4267/files/results-6weeks.png',
  comparison: 'https://cdn.shopify.com/s/files/1/0462/8591/4267/files/comparison-overwhelmed-vs-simple.png',
  transformation: 'https://cdn.shopify.com/s/files/1/0462/8591/4267/files/transformation-confidence-portrait.png',
}

const CTA_ESSENTIAL = 'https://orthocliner.myshopify.com/cart/48083744260251:1?discount=SECRET25'
const CTA_COMPLETE = 'https://orthocliner.myshopify.com/cart/48083744293019:1?discount=SECRET25'

const ss = {
  section: { padding: '40px 20px' } as const,
  h1: { fontSize: 'clamp(1.5rem, 4vw, 2.2rem)', fontWeight: 800, lineHeight: 1.2, marginBottom: '16px' } as const,
  body: { fontSize: '16px', lineHeight: 1.85, color: '#333', marginBottom: '20px' } as const,
  cta: { display: 'inline-block', background: '#66BB6A', color: '#fff', padding: '16px 36px', borderRadius: '6px', fontSize: '15px', fontWeight: 700, textAlign: 'center' as const } as const,
  quote: { borderLeft: '3px solid #66BB6A', paddingLeft: '16px', margin: '24px 0', fontStyle: 'italic' as const, color: '#555' } as const,
  img: { margin: '24px 0', borderRadius: '12px' } as const,
}

export default function App() {
  return (
    <>
      {/* Disclosure */}
      <div style={{ background: '#f5f5f5', textAlign: 'center', padding: '6px', fontSize: '11px', color: '#999', textTransform: 'uppercase', letterSpacing: '1px' }}>
        Advertorial
      </div>

      {/* Hero */}
      <section style={{ padding: '48px 20px' }}>
        <div className="container">
          <h1 style={ss.h1}>She Spent $14,000 on Skincare in 3 Years. The One Thing That Actually Changed Her Skin Cost $249.</h1>
          <p style={{ fontSize: '14px', color: '#999', marginBottom: '24px' }}>By Lauren Mitchell | March 3, 2026</p>
          <img src={IMG.mirror} alt="Sarah looking in mirror" style={ss.img} />
        </div>
      </section>

      {/* Hook */}
      <section style={ss.section}>
        <div className="container">
          <p style={ss.body}>Sarah Thompson didn't think of herself as someone who'd fall for skincare marketing.</p>
          <p style={ss.body}>She was a VP of operations at a tech company. Data-driven. Analytical. She researched everything before buying it. She had a 9-step morning routine and an 11-step evening routine, each product vetted, reviewed, and deliberately chosen.</p>
          <p style={ss.body}>And every month, another $300-400 left her bank account.</p>
          <img src={IMG.comparison} alt="Overwhelming skincare vs simple routine" style={ss.img} />
        </div>
      </section>

      {/* Problem */}
      <section style={{ ...ss.section, background: '#FAFAFA' }}>
        <div className="container">
          <blockquote style={{ ...ss.quote, fontSize: '18px', fontWeight: 600 }}>
            "I had the routine. I had the knowledge. I had the products. What I didn't have was results."
          </blockquote>
          <p style={ss.body}>That's how Sarah describes the realization that hit her at 45. Her dermatologist told her the uncomfortable truth:</p>
          <p style={ss.body}>"Your skin is healthy. But the changes you're seeing — fine lines, loss of firmness, dullness — those are structural. They're happening below the epidermis. Your products can't reach the dermis."</p>
          <p style={ss.body}>"You mean my $80 serum can't actually build collagen?"</p>
          <p style={ss.body}>"No topical product can reach the fibroblasts that produce collagen. They live 1-4mm below the surface. Creams work on the outer 0.1mm."</p>
          <p style={{ ...ss.body, fontWeight: 600 }}>Sarah did the math: Three years. $14,000. Hundreds of products. All working on the outermost fraction of her skin.</p>
        </div>
      </section>

      {/* Failed Attempts */}
      <section style={ss.section}>
        <div className="container">
          <p style={ss.body}>She tried prescription-grade retinol — brutal peeling, marginal improvement. Microneedling — $900 for three sessions, redness for days. Chemical peels — her skin revolted. She started seriously considering Botox.</p>
          <blockquote style={ss.quote}>"I just wanted to feel like myself when I looked in the mirror. Not younger, exactly. Just... like my skin had life in it again."</blockquote>
        </div>
      </section>

      {/* Discovery */}
      <section style={{ ...ss.section, background: '#FAFAFA' }}>
        <div className="container">
          <p style={ss.body}>It was her college roommate who changed everything. Emily looked different — not like work done, but rested. Glowing. Like she'd just walked out of a facial.</p>
          <p style={ss.body}>"Promise you won't think I'm crazy? I shine a light on my face for 10 minutes every night."</p>
          <img src={IMG.discovery} alt="Sarah's discovery moment" style={ss.img} />
          <p style={ss.body}>Sarah — ever the researcher — spent the next two weeks deep in PubMed and Reddit. The science behind red and near-infrared light therapy was solid. 50+ years of research. Hundreds of peer-reviewed studies. NASA used it for wound healing in the 1990s.</p>
          <p style={ss.body}>But then she looked at prices. Omnilux: $395. CurrentBody: $470. Dr. Dennis Gross: $435. Therabody: $550-$650.</p>
          <p style={ss.body}>Then she found the LuxeBeam.</p>
          <div style={{ textAlign: 'center', margin: '24px 0' }}>
            <a href={CTA_ESSENTIAL} style={ss.cta}>See the Mask Sarah Found →</a>
          </div>
        </div>
      </section>

      {/* Product Reveal */}
      <section style={ss.section}>
        <div className="container">
          <p style={{ ...ss.body, fontWeight: 600, fontSize: '18px' }}>"$249 for clinically matched wavelengths? Same as what Omnilux and CurrentBody use? I literally said out loud, 'What's the catch?'"</p>
          <img src={IMG.firstUseOpen} alt="Unboxing excitement" style={ss.img} />
          <p style={ss.body}>630-660nm red + 830-850nm near-infrared. Soft silicone. Fully wireless, USB-C rechargeable. 10-minute sessions with auto-shutoff. 100-day money-back guarantee.</p>
          <p style={ss.body}>"The 100-day guarantee sealed it. That's three months. Enough time to actually know if it works."</p>
        </div>
      </section>

      {/* Experience */}
      <section style={{ ...ss.section, background: '#FAFAFA' }}>
        <div className="container">
          <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '16px' }}>The Results</h2>
          <p style={ss.body}><strong>Week 1:</strong> "Honestly? I felt nothing. But the research said 3-4 weeks for initial changes, so I committed. 10 minutes every evening while watching TV."</p>
          <img src={IMG.firstUseWearing} alt="Sarah wearing LuxeBeam on couch" style={ss.img} />
          <p style={ss.body}><strong>Week 3-4:</strong> "My skin felt smoother. My pores looked smaller. The texture across my cheeks was evening out."</p>
          <img src={IMG.results2w} alt="Results at 2 weeks" style={ss.img} />
          <p style={ss.body}><strong>Week 6:</strong> "My colleague told me I looked 'really well-rested.' My skin looked plump. Alive. Like it had light behind it."</p>
          <p style={ss.body}><strong>Week 8:</strong> "My fine lines around my eyes were visibly softer. The crepe-like texture on my neck improved. My jawline looked firmer."</p>
          <img src={IMG.results6w} alt="Results at 6 weeks" style={ss.img} />
        </div>
      </section>

      {/* Transformation */}
      <section style={ss.section}>
        <div className="container">
          <p style={ss.body}>Sarah dropped 7 products from her regimen. She went from $350/month on skincare to about $60. And her skin looks better.</p>
          <p style={{ ...ss.body, fontWeight: 600 }}>Her total cost: $249 for the LuxeBeam. One time. Monthly savings: $290. The mask paid for itself in less than a month.</p>
          <img src={IMG.transformation} alt="Sarah's transformation — confident portrait" style={ss.img} />
          <div style={{ textAlign: 'center', margin: '24px 0' }}>
            <a href={CTA_ESSENTIAL} style={ss.cta}>Try LuxeBeam Risk-Free — 25% OFF</a>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section style={{ ...ss.section, background: '#FAFAFA' }}>
        <div className="container">
          <h2 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '16px', textAlign: 'center' }}>15,000+ Women. 4.8/5 Stars.</h2>
          {[
            { text: 'I noticed a HUGE difference in my skin. More even tone and fewer fine lines.', name: 'Karen L., 51' },
            { text: 'Works at a deeper level than just topicals. My skin has never looked better.', name: 'Amanda J., 42' },
            { text: 'I got obsessed with my red light device. It\'s the one thing I actually look forward to.', name: 'Rebecca N., 45' },
            { text: 'My skin looks full of life. Glowy. Plump. Even.', name: 'Emily F., 36' },
          ].map((r, i) => (
            <div key={i} style={{ padding: '16px 0', borderBottom: '1px solid #eee' }}>
              <div style={{ color: '#FFA500', marginBottom: '4px' }}>★★★★★</div>
              <p style={{ fontSize: '15px', fontStyle: 'italic', marginBottom: '4px' }}>"{r.text}"</p>
              <p style={{ fontSize: '13px', fontWeight: 600 }}>— {r.name} | Verified Purchase</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ padding: '48px 20px', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '16px' }}>Where to Get It</h2>
          <p style={ss.body}>Right now: <strong>25% off with code SECRET25</strong></p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px', margin: '20px 0', textAlign: 'center' }}>
            <div style={{ padding: '16px', background: '#f9f9f9', borderRadius: '8px' }}>
              <p style={{ fontWeight: 700 }}>Essential</p>
              <p><s style={{ color: '#999' }}>$249</s> <strong style={{ color: '#66BB6A' }}>$186.75</strong></p>
            </div>
            <div style={{ padding: '16px', background: '#E8F5E9', borderRadius: '8px', border: '2px solid #66BB6A' }}>
              <p style={{ fontWeight: 700 }}>Complete Ritual</p>
              <p><s style={{ color: '#999' }}>$329</s> <strong style={{ color: '#66BB6A' }}>$246.75</strong></p>
              <p style={{ fontSize: '11px', color: '#555' }}>Most popular</p>
            </div>
            <div style={{ padding: '16px', background: '#f9f9f9', borderRadius: '8px' }}>
              <p style={{ fontWeight: 700 }}>Ultimate Glow</p>
              <p><s style={{ color: '#999' }}>$449</s> <strong style={{ color: '#66BB6A' }}>$336.75</strong></p>
            </div>
          </div>
          <p style={{ fontSize: '14px', color: '#555', marginBottom: '20px' }}>Sarah's advice? "Just try it. The guarantee removes all the risk. Give it 6-8 weeks."</p>
          <p style={{ fontSize: '13px', color: '#E00000', fontWeight: 600, marginBottom: '16px' }}>UPDATE: Due to demand, LuxeBeam is currently in stock but quantities are limited.</p>
          <a href={CTA_COMPLETE} style={{ ...ss.cta, padding: '18px 40px', fontSize: '17px' }}>GET 25% OFF LUXEBEAM NOW</a>
        </div>
      </section>

      {/* Disclaimer */}
      <footer style={{ background: '#f5f5f5', padding: '24px 20px', fontSize: '11px', color: '#999', textAlign: 'center' }}>
        <p>This is an advertorial and not an actual news article, blog, or consumer protection update. This article may receive compensation for clicks on or purchase of products featured. Individual results may vary. Always consult with a healthcare professional before starting any new skincare device. Statements regarding these products have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.</p>
      </footer>
    </>
  )
}
