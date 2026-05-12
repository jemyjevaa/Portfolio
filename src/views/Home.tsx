import React from 'react';
import { Hero } from '../components/sections/Hero';
import { Stats } from '../components/sections/Stats';
import { About } from '../components/sections/About';
import { Projects } from '../components/sections/Projects';
import { Comparison } from '../components/sections/Comparison';
import { CrossPlatform } from '../components/sections/CrossPlatform';
import { Playground } from '../components/sections/Playground';
import { Process } from '../components/sections/Process';
import { Testimonials } from '../components/sections/Testimonials';
import { Blog } from '../components/sections/Blog';
import { Contact } from '../components/sections/Contact';

export const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Projects />
      <Comparison />
      <CrossPlatform />
      <Playground />
      <Process />
      {/* <Testimonials /> */}
      {/* <Blog /> */}
      <Contact />
    </>
  );
};
