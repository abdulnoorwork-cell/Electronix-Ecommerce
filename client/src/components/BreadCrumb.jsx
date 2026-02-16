import React from 'react'
import { TfiAngleRight } from "react-icons/tfi";
import { Link } from 'react-router-dom';
import { RiHomeLine } from "react-icons/ri";

const BreadCrumb = ({page,category,name}) => {
    return (
        <div className="flex flex-wrap justify-center items-center space-x-2 text-sm text-gray-800 font-medium">
            <Link to={'/'}>
            <span className='text-xl'>
                <RiHomeLine />
            </span>
            </Link>
            <TfiAngleRight />
            <Link to={'/shop'}>Shop</Link>
            <TfiAngleRight />
            <Link to={'/smart-tv'}>Smart TV</Link>
            <TfiAngleRight />
            <span className="text-[#994CF5]">{name}</span>
        </div>
    );
};

export default BreadCrumb