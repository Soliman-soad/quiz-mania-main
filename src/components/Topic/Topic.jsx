import React from 'react';

const Topic = ({topic}) => {
    return (
        
            <div className="max-w-md sm:mx-auto sm:text-center w-full p-4 rounded-lg border-2">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
            <img src={topic.logo} className='bg-slate-800 rounded-lg' alt="" />
          </div>
          <h6 className="mb-3 text-xl font-bold leading-5">{topic.name}</h6>
          <p className="mb-3 text-sm text-gray-900">
            Quiz Quantity: {topic.total}
          </p>
          <a
            href="/"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800 bg-blue-500 p-2 rounded-lg text-white"
          >
            Start Quiz
          </a>
        </div>
        
    );
};

export default Topic;