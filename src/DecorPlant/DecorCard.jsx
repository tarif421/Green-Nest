import React from 'react';

const DecorCard = ({item}) => {
    const {title, description, image} = item
    return (
       <>
  <section>
 

    <div className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition duration-300  p-2 lg:p-5 flex flex-col h-full">
      <div className='h-48 lg:h-78 w-full'>
        <img className="w-full h-full object-cover" src={image} alt="" />
      </div>
      <div className="mt-4 items-center lg:text-center">
        <p> <span className="font-semibold font-serif">{title}</span></p>
        <p > <span className='text-medium text-gray-600' >Description :</span > {description}</p>
      </div>
    </div>
  </section>
  </>
    );
};

export default DecorCard;