import Banner from '@/component/Banner';
import HeroBanner from '@/component/HeroBanner';
import HeroUISection from '@/component/HeroUISection';
import React from 'react';

const page = () => {
  return (
    <div>
      <HeroBanner></HeroBanner>
      <HeroUISection></HeroUISection>
      <Banner></Banner>
    </div>
  );
};

export default page;