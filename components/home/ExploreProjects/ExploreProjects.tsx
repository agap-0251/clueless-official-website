import React from 'react';
import ExploreCard from './ExploreCard';

function ExploreProjects() {
  const contentData = [
    {
      title: 'ClueLess Official Website',
      tags: ['HTML', 'Tailwind CSS'],
      desc: 'built with the vision to encourage open-source enthusiasts!',
    },
    {
      title: 'SeamLess UI',
      tags: ['HTML', 'Tailwind CSS'],
      desc: 'built with the vision to encourage open-source enthusiasts!',
    },
    {
      title: 'Flutter UI Components',
      tags: ['Flutter', 'Tailwind CSS'],
      desc: 'built with the vision to encourage open-source enthusiasts!',
    },
  ];

  return (
    <div>
      <div id="projects" className="w-full md:pb-20 lg:pb-0 relative">
        {/* Heading Part */}
        <div className="flex justify-between gap-2 md:items-center flex-col md:flex-row mb-5">
          <h1 className="xl:text-[55px] text-[#7EE787] font-medium xl:leading-[70.5px] w-full leading-[40px] text-[36px]">
            Explore Projects to contribute
          </h1>
          <button className="btn-outline w-fit px-6">Explore projects</button>
        </div>

        {/* Cards */}
        <div className="flex md:flex-row flex-col gap-6 py-6">
          <div className="md:w-1/2 w-full">
            <ExploreCard data={contentData[0]} />
          </div>
          <div className="md:w-1/2 md:mt-40 w-full">
            <ExploreCard data={contentData[1]} />
          </div>
        </div>

        {/* Blur Effect */}
        <div
          className="hidden md:block absolute ml-56 shrink-0 -mt-24 w-[200px] h-[200px]"
          style={{
            background: 'rgba(126, 231, 135, 0.54)',
            filter: 'blur(180px)',
          }}
        />

        {/* Cards */}
        <div className="flex md:mt-1">
          <div className="w-1/4 hidden md:block pt-28 pb-12 px-10">
            <img
              className="lg:h-96"
              src="/LandingPage/OpenSource/Frame.png"
              alt=""
            />
          </div>
          <div className="md:w-1/2 w-full relative shrink-0">
            <ExploreCard data={contentData[2]} />
          </div>
          <div className="w-1/4 hidden md:block"></div>
        </div>

        {/* Connector Mobile */}
        <div className="flex md:hidden sm:h-40 h-28 m-10">
          <img src="/line1.png" alt="line3 " />
        </div>
      </div>
    </div>
  );
}

export default ExploreProjects;
