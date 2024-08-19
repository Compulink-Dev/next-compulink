import React from "react";
import Projects from "./projects";

function Software() {
    return (
        <>
            <h1 className="text-2xl text-gray-700 text-center pb-2">Software</h1>
            <hr className="w-20 mb-6 bg-blue-400 border-blue-400 border mx-auto" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mx-6">
                <Projects
                    name="CoinSwap"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum amet fugit dolorum omnis pariatur asperiores perspiciatis enim in est dolor voluptate reiciendis suscipit distinctio, magni, quas placeat veniam corporis repudiandae!"
                    link='/'
                />
                <Projects
                    name="E-Store"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum amet fugit dolorum omnis pariatur asperiores perspiciatis enim in est dolor voluptate reiciendis suscipit distinctio, magni, quas placeat veniam corporis repudiandae!"
                    link='/'
                />
                <Projects
                    name="E-Education"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum amet fugit dolorum omnis pariatur asperiores perspiciatis enim in est dolor voluptate reiciendis suscipit distinctio, magni, quas placeat veniam corporis repudiandae!"
                    link='/'
                />
                <Projects
                    name="H.R Platform"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum amet fugit dolorum omnis pariatur asperiores perspiciatis enim in est dolor voluptate reiciendis suscipit distinctio, magni, quas placeat veniam corporis repudiandae!"
                    link='/'
                />
            </div>
        </>
    );
}

export default Software;
