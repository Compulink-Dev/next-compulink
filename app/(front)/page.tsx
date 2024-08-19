'use client'
import Chatbot from '@/components/Chatbot';
import MainLayout from '@/components/mainLayout';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Hero from './_components/hero';
import Parnters from './_components/partners';
import About from './_components/about';
import Work from './_components/work';
import Service from './_components/service';
import Testimonials from './_components/testimonials';
import HomeCarousel from './_components/carousel';
import Promotion from './_components/promotions';

export default function Home() {
  return (
    <MainLayout backImage='main.jpg' image='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png'>
      <div className="">
        <div className="">
          {/* <Image src='/images/hero.jpg' alt='' width={200} height={200} className='w-full h-[500px]' />
          <div className="">Right</div> */}
        </div>
        <Parnters />
        <About />
        <Work />
        <Service />
        <Testimonials />
        <HomeCarousel />
        <Promotion />
        <Chatbot />
      </div>
    </MainLayout>
  );
}
