import { motion } from 'motion/react';
import { HeartHandshake, Target, Rocket, Eye, Users, Compass } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import RevealImage from '../components/RevealImage';
import Infrastructure from '../sections/Infrastructure';
import GlobalSourcing from '../sections/GlobalSourcing';
import { aboutContent, company } from '../data/content';
import { asset } from '../lib/asset';

const pillars = [
  { icon: HeartHandshake, title: 'Our Principle', body: company.principle },
  { icon: Target, title: 'Our Tenet', body: company.tenet },
  { icon: Rocket, title: 'Our Goal', body: company.goal },
];

const outlook = [
  { icon: Eye, title: 'Our Vision', body: aboutContent.vision },
  { icon: Users, title: 'Who We Are', body: aboutContent.whoWeAre },
  { icon: Compass, title: 'Our Mission', body: aboutContent.mission },
];

export default function AboutUs() {
  return (
    <>
      <PageHeader title="About Us" />

      <section className="py-24 bg-bg-page">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start mb-20">
            <RevealImage
              wrapperClassName="rounded-2xl w-full h-72 md:h-full"
              src={asset("/assets/aboutus.jpg")}
              alt="SA-Ethics corporate meeting room"
              className="w-full h-full object-cover"
            />
            <div>
              <span className="section-label">Since inception</span>
              <h2 className="font-heading font-medium text-3xl text-navy mb-6">
                A promise of <span className="font-display-italic text-crimson">quality</span>, kept for over a decade.
              </h2>
              <div className="flex flex-col gap-4">
                {aboutContent.intro.map((para) => (
                  <p key={para.slice(0, 40)} className="text-text-muted leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden mb-8">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 flex flex-col h-full"
              >
                <div className="w-11 h-11 rounded-lg flex items-center justify-center mb-5 bg-navy/10 text-navy">
                  <pillar.icon size={22} aria-hidden="true" />
                </div>
                <h3 className="text-lg font-heading font-medium text-navy mb-3">{pillar.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{pillar.body}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden">
            {outlook.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-bg-soft p-8 flex flex-col h-full"
              >
                <div className="w-11 h-11 rounded-lg flex items-center justify-center mb-5 bg-crimson/10 text-crimson">
                  <item.icon size={22} aria-hidden="true" />
                </div>
                <h3 className="text-lg font-heading font-medium text-navy mb-3">{item.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Infrastructure />
      <GlobalSourcing />
    </>
  );
}
