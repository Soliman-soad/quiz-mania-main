import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Quiz = () => {
    const quizData =useLoaderData();
    console.log(quizData.data);
    const {name,questions} = quizData.data
    return (
        <div>
            <h1 className='text-center text-4xl m-3'>{name} Question</h1>
            {
                questions.map(question => <Question key={question.id} question={question}/>)
            }
        </div>
    );
};

export default Quiz;