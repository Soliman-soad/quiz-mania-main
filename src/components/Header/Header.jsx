import React from 'react';
import headerLogo from '../../images/quiz2.jpg';
const Header = () => {
    return (

      
          <section className="bg-gray-800 text-gray-100">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
        <div className='text-white'>
                <h1 className='text-5xl font-bold '>
                    Test your Knowledge, answer some quiz.
                </h1>
                <p className='mt-5'>Are you a budding computer programmer? Take our  quiz to see how much you know about the world of coding! We have some blogs of some topics also visit our blog section and read our</p>
            </div>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded bg-blue-500 hover:bg-white text-white hover:text-gray-900 mt-2">Suspendisse</a>
            
          </div>
        </div>
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img src={headerLogo} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
        </div>
      </div>
    </section>
        
    );
};

export default Header;