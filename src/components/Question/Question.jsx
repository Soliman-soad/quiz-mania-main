import React from 'react';

const Question = ({question}) => {
    return (
        <div className='bg-gray-100 p-5 m-5'>
            <h3 className='text-2xl font-bold'>Q.{question.question}</h3>
            <div className='grid grid-cols-2 gap-3 m-3'>
                {
                    question.options.map(option => <div key={question.options.indexOf(option)} className='p-3 shadow-sm border-2 hover:bg-blue-400 hover:text-white'>{option}</div>)
                }
            </div>
        </div>
    );
};

export default Question;