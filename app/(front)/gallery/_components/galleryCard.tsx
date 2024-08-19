import React from "react";
import Image from "next/image";

const getGalleries = async () => {
    try {
        const res = await fetch(" http://localhost:3000/api/gallery", {
            cache: "no-store",
        });
        if (!res.ok) {
            throw new Error("Failed to fetch from gallery");
        }
        return res.json();
    } catch (error) {
        console.log(error);
    }
};

async function GalleryCard() {
    const { gallery } = await getGalleries();

    return (
        <>
            {gallery?.slice(0, 2).map((gallery: any, index: any) => (
                <div
                    key={index}
                    className="w-96 h-full border ">
                    <Image
                        src={
                            "/images/gallery.gif"
                        }
                        height={400}
                        width={500}
                        alt=""
                        className="w-96 h-56 object-cover"
                    />
                    <div className="p-2 ">
                        <h1 className=" uppercase text-sm  font-semibold">
                            Technology
                            <hr className="border bg-blue-700 py-[0.8px] w-24" />
                        </h1>
                        <p className="text-2xl font-bold">{gallery.projectName}</p>
                        <p className="text-ellipsis overflow-hidden py-2 text-gray-600">
                            {gallery.description}
                        </p>
                        <p className="text-gray-700">
                            By <span className="text-black">{gallery.company}</span> -{" "}
                            {/* {dateFormat(gallery.createdAt)} */}
                        </p>
                    </div>
                </div>
            ))}
        </>
    );
}

export default GalleryCard;
