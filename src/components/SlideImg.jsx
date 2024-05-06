import React, { useState } from "react";

const SlideImg = () => {
    const slideData = [
        {
            albumId: 1,
            id: 1,
            title: 1,
            url: "https://via.placeholder.com/600/92c952",
            thumbnailUrl: "https://via.placeholder.com/150/92c952",
        },
        {
            albumId: 1,
            id: 2,
            title: 2,
            url: "https://via.placeholder.com/600/771796",
            thumbnailUrl: "https://via.placeholder.com/150/771796",
        },
        {
            albumId: 1,
            id: 3,
            title: 3,
            url: "https://via.placeholder.com/600/24f355",
            thumbnailUrl: "https://via.placeholder.com/150/24f355",
        },
        {
            albumId: 1,
            id: 4,
            title: 4,
            url: "https://via.placeholder.com/600/d32776",
            thumbnailUrl: "https://via.placeholder.com/150/d32776",
        },
        {
            albumId: 1,
            id: 5,
            title: 5,
            url: "https://via.placeholder.com/600/f66b97",
            thumbnailUrl: "https://via.placeholder.com/150/f66b97",
        },
    ];

    const [slideCount, setSlideCount] = useState(0);

    const preSlide = () => {
        slideCount === 0
            ? setSlideCount(slideData.length - 1)
            : setSlideCount(slideCount - 1);
    };

    const nextSlide = () => {
        slideCount === slideData.length - 1
            ? setSlideCount(0)
            : setSlideCount(slideCount + 1);
    };

    console.log(slideCount);
    return (
        <>
            <div className=" overflow-x-hidden w-[90%] sm:w-[60%] mx-auto my-10 sm:my-32 relative">
                <div
                    className="flex  transition-transform duration-500 ease-in"
                    style={{
                        transform: `translateX(-${slideCount * 100}%)`,
                    }}
                >
                    {slideData.map((item, i) => (
                        <img src={item.url} key={item.id} alt="" className="" />
                    ))}
                </div>
                <div className="absolute inset-0 flex justify-between items-center">
                    <button className="text-4xl " onClick={() => preSlide()}>
                        ◀️
                    </button>
                    <button className="text-4xl " onClick={() => nextSlide()}>
                        ▶️
                    </button>
                </div>
                <div className="absolute bottom-0 flex justify-center items-center w-full">
                    {slideData.map((_, i) => (
                        <div
                        onClick={()=>setSlideCount(i)}
                            className={`${slideCount === i ? "p-2 bg-white" : "p-1 bg-slate-400"} rounded-full justify-center items-center gap-3 `}
                        ></div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default SlideImg;
