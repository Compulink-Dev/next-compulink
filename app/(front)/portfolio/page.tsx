import React from 'react'
import MainLayout from '../../../components/mainLayout'
import AboutSection from './_components/about'
import Services from './_components/services'
import Software from './_components/software'
import Networking from './_components/network'
import { AccordionTabs } from './_components/accordion'
import Hero from '../_components/hero'

function Portfolio() {
    return (
        <MainLayout backImage='cyber.webp' image=''>
            <div className=" flex flex-col items-center justify-center w-full py-32 px-32">
                <h1 className=" pb-10 text-center text-3xl text-blue-700 font-semibold">
                    <div className=" relative translate-x-52 translate-y- w-5  overflow-hidden inline-block">
                        {/* <div className=" h-10  bg-blue-800 -rotate-45 transform origin-top-left"></div> */}
                    </div>
                    Who Are We?
                    <hr className="w-48 translate-x-5 border-x-4 border-gray-300 my-1" />
                </h1>

                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
                    dolorem, incidunt voluptatem, magnam ducimus officia aliquid illum
                    sint unde laborum nemo mollitia quis error recusandae dolor. Ullam
                    non illum fugiat?
                </p>
            </div>
            <div className="bg-slate-900 text-white">
                <AccordionTabs />
            </div>
            {/* <AboutSection /> */}
            <Services />
            <h1 className="text-center text-3xl font-semibold pt-10 text-blue-700">
                Projects
            </h1>
            <Software />
            <Networking />
        </MainLayout>
    )
}

export default Portfolio