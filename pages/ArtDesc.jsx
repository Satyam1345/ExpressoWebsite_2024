import React, { useEffect, useState } from "react";
import Image from "next/image";
import ArtCard from "./ArtCard.jsx";
import artData from "./ArtData.jsx";

const ArtDesc = () => {
  const [toggle, setToggle] = useState(0); // Start with the first art piece
  const artKeys = Object.keys(artData);

  // Calculate the number of sets of art cards to display
  const totalSets = Math.ceil(artKeys.length / 5);

  const handleButtonLeft = () => {
    setToggle((prevIndex) => (prevIndex - 1 + totalSets) % totalSets);
  };

  const handleButtonRight = () => {
    setToggle((prevIndex) => (prevIndex + 1) % totalSets);
  };

  // Get the current set of art cards to display
  const startIndex = toggle * 5;
  const endIndex = startIndex + 5;
  const currentArtSet = artKeys.slice(startIndex, endIndex);

  return (
    <div className="flex flex-col min-h-screen bg-cover bg-center" style={{ backgroundImage: "url(/art-desc-bg.png)" }}>
      <div className="hidden lg:flex flex-col w-full h-full">
        <div className="flex flex-row w-full lg:w-2/3 h-1/2 overflow-auto lg:overflow-hidden">
          <div className="flex flex-col space-y-10 mt-6 mr-5 ml-16 lg:ml-10 lg:space-y-0 lg:space-x-10 lg:flex-row lg:flex-wrap">
            <div className="flex flex-row flex-wrap">
              {currentArtSet.slice(0, 2).map((key) => (
                <div key={key} className="w-full lg:w-1/2 p-6">
                  <ArtCard art={artData[key]} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div id="toggle" className="absolute top-12 right-5 h-1/2 w-1/3 mt-10 lg:mt-20">
          <div id="details" className="mt-12 mr-2 flex flex-col justify-center items-center h-full w-full">
            <div className="w-1/2 flex flex-col justify-center items-start text-white">
              <div className="w-full flex items-center justify-center">
                <div className="mr-4 mt-10">
                  <div className="flex items-center justify-center w-20 h-20">
                    {/* <Image height={150} src={artImage} width={130} alt="artImage" /> */}
                  </div>
                  <div className="mt-0 flex items-center justify-center w-full">
                    <div className="w-full text-center">
                      <h1 className="text-[150px] ml-4 font-Antonio whitespace-nowrap overflow-hidden overflow-ellipsis ">ART</h1>
                    </div>
                  </div>
                </div>
                <div className="mt-14 ml-5 flex items-center justify-center w-40 h-30">
                  {/* <Image src='/art.png' width={620} height={550} alt="artImage" /> */}
                </div>
              </div>
              <div className="mt-10 flex flex-row items-center justify-center w-full">
                <div className="mr-4 cursor-pointer">
                  <Image onClick={handleButtonLeft} src="/leftarrow-artdesc.png" width={50} height={50} alt="leftarrow" />
                </div>
                <div className="mr-4 font-Antonio text-5xl font-bold ml-4 flex items-center justify-center w-18 h-18 rounded-full bg-black text-white border-[#FDB851] border-4 p-2">
                  {toggle + 1}
                </div>
                <div className="ml-4 cursor-pointer">
                  <Image onClick={handleButtonRight} src="/rightarrow-artdesc.png" width={50} height={50} alt="rightarrow" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full h-1/2 lg:flex-row lg:justify-between items-center">
          <div className="flex flex-col lg:flex-row lg:space-x-10 justify-between mb-6 pt-10 lg:mr-5 lg:ml-10 h-full lg:h-auto lg:overflow-hidden">
            <div className="flex flex-row flex-wrap justify-between">
              {currentArtSet.slice(2).map((key) => (
                <div key={key} className="w-full lg:w-1/3 px-6">
                  <ArtCard art={artData[key]} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full lg:hidden">
        <div className="flex flex-col space-y-6 mt-6 ml-20 mb-6 mx-4">
          <ArtCard art={artData[currentArtSet[0]]} />
        </div>
        <div id="toggle" className="w-full mb-10">
          <div id="details" className="flex flex-col justify-center items-center w-full">
            <div className="w-full flex flex-col justify-center items-center text-white">
              <div className="w-full flex flex-col items-center">
                <div className="flex items-center justify-center w-20 h-20">
                  <Image height={150} src={artData[currentArtSet[0]].artImage} width={100} alt="artImage" />
                </div>
                <div className="mt-4 flex items-center justify-center w-full">
                  <div className="w-full text-center">
                    <h1 className="text-xl font-Antonio whitespace-nowrap overflow-hidden overflow-ellipsis">{artData[currentArtSet[0]].artName}</h1>
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-center w-40 h-30">
                  <Image src='/art.png' width={600} height={500} alt="artImage" />
                </div>
              </div>
              <div className="mt-6 flex flex-row items-center justify-center w-full">
                <div className="mr-4 cursor-pointer">
                  <Image onClick={handleButtonLeft} src="/leftarrow.png" width={50} height={50} alt="leftarrow" />
                </div>
                <div className="mr-4 font-Antonio text-5xl font-bold ml-4 flex items-center justify-center w-14 h-14 rounded-full bg-white text-black">
                  {toggle + 1}
                </div>
                <div className="ml-4 cursor-pointer">
                  <Image onClick={handleButtonRight} src="/rightarrow.png" width={50} height={50} alt="rightarrow" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtDesc;