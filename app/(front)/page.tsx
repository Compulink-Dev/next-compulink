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
import HomeLayout from '@/components/homeLayout';

export default function Home() {
  return (
    <HomeLayout>
      <div className="">
        <Parnters />
        <About />
        <Work />
        <Service />
        <Testimonials />
        <HomeCarousel />
        <Promotion />
        <Chatbot />
      </div>
    </HomeLayout>
  );
}
