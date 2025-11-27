import React from 'react';
import { useLoaderData } from 'react-router';
import Blogs from './Blogs';

const Blog = () => {
    const data = useLoaderData();
    
    return (
        <div className='flex flex-col gap-10 p-10 m-2'>
            {
                data.map(d=> <Blogs key={d.id} d={d}></Blogs>)
            }
        </div>
    );
};

export default Blog;