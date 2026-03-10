import React from 'react'

const IMG = {
  mirror: 'https://cdn.shopify.com/s/files/1/0462/8591/4267/files/protagonist-sarah-mirror.png',
  discovery: 'https://cdn.shopify.com/s/files/1/0462/8591/4267/files/protagonist-discovery.png',
  firstUseOpen: 'https://cdn.shopify.com/s/files/1/0462/8591/4267/files/first-use-excitement.png',
  firstUseWearing: 'https://cdn.shopify.com/s/files/1/0462/8591/4267/files/first-use-wearing.png',
  results2w: 'https://cdn.shopify.com/s/files/1/0462/8591/4267/files/results-2weeks.png',
  results6w: 'https://cdn.shopify.com/s/files/1/0462/8591/4267/files/results-6weeks.png',
  comparison: 'https://cdn.shopify.com/s/files/1/0462/8591/4267/files/comparison-overwhelmed-vs-simple.png',
  transform: 'https://cdn.shopify.com/s/files/1/0462/8591/4267/files/transformation-confidence-portrait.png',
}

const CTA_E = 'https://orthocliner.myshopify.com/cart/48083744260251:1?discount=SECRET25'
const CTA_C = 'https://orthocliner.myshopify.com/cart/48083744293019:1?discount=SECRET25'

export default function App() {
  return (
    <>
      <div className="disclosure">Advertorial</div>
      <div className="wrap article">
        <div className="article-header">
          <h1>She Spent $14,000 on Skincare in 3 Years. The One Thing That Actually Changed Her Skin Cost $249.</h1>
          <div className="byline">By Lauren Mitchell | March 3, 2026 · ★★★★★ Published</div>
        </div>

        <img src={IMG.comparison} alt="Vanity full of products vs simple routine" className="article-img" />

        <p>Sarah Thompson didn't think of herself as someone who'd fall for skincare marketing.</p>
        <p>She was a VP of operations at a tech company. Data-driven. Analytical. She researched everything before buying it. She had a 9-step morning routine and an 11-step evening routine, each product vetted, reviewed, and deliberately chosen.</p>
        <p>And every month, another $300-400 left her bank account.</p>

        <img src={IMG.mirror} alt="Sarah looking in mirror" className="article-img" />

        <h2>The Uncomfortable Truth</h2>
        <p>"I had the routine. I had the knowledge. I had the products. What I didn't have was results."</p>
        <p>That's how Sarah describes the realization that hit her at 45. Sitting in her dermatologist's office, the conversation she'd been avoiding finally happened.</p>
        <p>"Your skin is healthy," Dr. Patel told her. "But the changes you're seeing — the fine lines, the loss of firmness — those are structural. They're happening below the epidermis. Your products can't reach the dermis."</p>
        <p><strong>Three years. $14,000. Hundreds of products. All working on the outermost fraction of her skin.</strong></p>

        <p>She tried prescription retinol. Brutal peeling. Marginal improvement after 4 months. She tried microneedling — three sessions at $300 each. Redness for days. She tried chemical peels. Her skin revolted.</p>
        <p>She started seriously considering Botox.</p>

        <h2>The Discovery</h2>
        <p>It was her college roommate who changed everything.</p>
        <p>"Emily and I hadn't seen each other in almost a year. She looked... different. Not different like work done. Different like rested. Glowing."</p>
        <p>"Promise you won't think I'm crazy? I shine a light on my face for 10 minutes every night."</p>

        <img src={IMG.discovery} alt="Sarah researching red light therapy" className="article-img" />

        <p>Sarah spent the next two weeks deep in PubMed and Reddit. What she found stunned her.</p>
        <p>"The science behind red and near-infrared light therapy is actually solid. 50+ years of research. Hundreds of peer-reviewed studies. It's not fringe science."</p>
        <p>The mechanism: red light (630-660nm) and near-infrared (830-850nm) penetrate the skin, are absorbed by cytochrome c oxidase in the mitochondria, stimulating ATP production — supercharging fibroblasts to produce more collagen and elastin.</p>

        <div className="cta-center">
          <a href={CTA_E} className="cta-btn">See the Mask Sarah Found →</a>
        </div>

        <h2>Finding LuxeBeam</h2>
        <p>"$249 for clinically matched wavelengths? Same as what Omnilux and CurrentBody use? I literally said out loud, 'What's the catch?'"</p>
        <p>She ordered the LuxeBeam Essential: 630-660nm red + 830-850nm NIR, soft silicone, fully wireless, USB-C, 10-minute auto-shutoff, 100-day money-back guarantee.</p>
        <p>"The 100-day guarantee sealed it. Three months — enough time to actually know if it works."</p>

        <img src={IMG.firstUseOpen} alt="Opening the LuxeBeam" className="article-img" />

        <h3>Week 1</h3>
        <p>"Honestly? I felt nothing. But the research said 3-4 weeks. 10 minutes every evening while watching TV. My husband called it my 'sci-fi spa time.'"</p>

        <img src={IMG.firstUseWearing} alt="Wearing the LuxeBeam on the couch" className="article-img" />

        <h3>Week 3-4</h3>
        <p>"My skin felt different — smoother, almost professionally hydrated. My pores looked smaller. The texture across my cheeks was evening out."</p>

        <img src={IMG.results2w} alt="Results after 2 weeks" className="article-img" />

        <h3>Week 6-8</h3>
        <p>"My colleague told me I looked 'really well-rested.' My fine lines were visibly softer. The crepe-like texture on my neck improved. My jawline looked firmer. I called Emily and said, 'You weren't crazy. This actually works.'"</p>

        <img src={IMG.results6w} alt="Results after 6 weeks" className="article-img" />

        <h2>The Transformation</h2>
        <p>Sarah dropped 7 products from her regimen. She went from spending $350/month to about $60. And her skin looks better.</p>
        <p><strong>Total cost: $249 for the LuxeBeam. One time. Monthly savings: $290.</strong></p>

        <img src={IMG.transform} alt="Sarah confident portrait" className="article-img" />

        <div className="cta-center">
          <a href={CTA_E} className="cta-btn">Try LuxeBeam Risk-Free — 25% OFF</a>
        </div>

        <div className="social-proof">
          <h3>What Other Women Are Saying</h3>
          <div className="sp-review"><span className="stars">★★★★★</span> "I noticed a HUGE difference in my skin. More even tone and fewer fine lines. The biggest game-changer for my routine." — Karen L., 51</div>
          <div className="sp-review"><span className="stars">★★★★★</span> "Works at a deeper level than just topicals. My skin has never looked better." — Amanda J., 42</div>
          <div className="sp-review"><span className="stars">★★★★★</span> "I got obsessed with my red light device. It's the one thing in my routine I actually look forward to." — Rebecca N., 45</div>
          <div className="sp-review"><span className="stars">★★★★★</span> "My skin looks full of life. Glowy. Plump. Even." — Emily F., 36</div>
        </div>

        <div className="final-cta">
          <h2>Where to Get It</h2>
          <p>Right now: <strong>25% off with code SECRET25</strong></p>
          <p>Essential: <s>$249</s> → <strong>$186.75</strong> · Complete Ritual: <s>$329</s> → <strong>$246.75</strong> (most popular) · Ultimate Glow: <s>$449</s> → <strong>$336.75</strong></p>
          <p>Free US shipping · 100-day guarantee · Responsive customer support</p>
          <p style={{fontSize:13,marginTop:8,marginBottom:16}}><strong>UPDATE:</strong> Due to demand, LuxeBeam is currently in stock but quantities are limited.</p>
          <a href={CTA_C} className="cta-btn">GET 25% OFF LUXEBEAM NOW</a>
        </div>

        <div className="disclaimer">
          This is an advertorial and not an actual news article, blog, or consumer protection update. This article may receive compensation for clicks on or purchase of products featured. Individual results may vary. Always consult with a healthcare professional before starting any new skincare device. Statements regarding these products have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.
        </div>
      </div>
    </>
  )
}
