import React from 'react';
import { HeroSection }       from './components/HeroSection';
// import { StatsSection }      from './components/StatsSection';
import { EcosystemSection }  from './components/EcosystemSection';
import { FeaturesSection }   from './components/FeaturesSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { CTASection }        from './components/CTASection';

const HomePage: React.FC = () => (
  <>
    <HeroSection />
    {/* <StatsSection /> */}
    <EcosystemSection />
    <FeaturesSection />
    <HowItWorksSection />
<CTASection />
  </>
);

export default HomePage;
