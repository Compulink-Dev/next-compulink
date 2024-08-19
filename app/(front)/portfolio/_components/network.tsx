import React from "react";
import Projects from "./projects";
function Networking() {
    return (
        <>
            <h1 className="text-2xl text-gray-700 text-center pb-2 pt-10">
                Networking
                <hr className="w-20 mb-6 bg-blue-400 border-blue-400 border mx-auto" />
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mx-6 mb-14">
                <Projects
                    name="Store gate"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum amet fugit dolorum omnis pariatur asperiores perspiciatis enim in est dolor voluptate reiciendis suscipit distinctio, magni, quas placeat veniam corporis repudiandae!"
                    link='/'
                />
                <Projects
                    name="Old Mutual"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum amet fugit dolorum omnis pariatur asperiores perspiciatis enim in est dolor voluptate reiciendis suscipit distinctio, magni, quas placeat veniam corporis repudiandae!"
                    link='/'
                />
            </div>
        </>
    );
}

export default Networking;
