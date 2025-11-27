import React from 'react';

const Blogs = ({d}) => {
    return (
        <div className='flex flex-col bg-white p-15 m-5 gap-5 rounded-2xl'>
            <h2 className='text-2xl font-bold'> <span className='font-extrabold text-red-400'>Question:</span> {d.question}</h2>
            <div className='border-t-2 w-full border-dotted'></div>
            <p className='font-semibold'> <span className='font-bold text-green-500'>Answer:</span> <br /> {d.answer}</p>
            <div className='border-t-2 w-full border-dotted'></div>
            <small className='font-medium'>Date: {d.date}</small>
        </div>
    );
};

export default Blogs;