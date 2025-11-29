import React from 'react';

const PlantDetailsCard = ({plant}) => {
    const {plantName,price,rating,description,availableStock, image} = plant
    return (
        <div className='mx-w-[1280px] mx-auto p-10'>
            {/*plants details card  */}
            <section className='flex  justify-center gap-10'>
                <div className=' ml-40'>
                    <img className='w-[400px] h-90' src={image} alt="" />
                </div>
                <div className='mt-20 mr-40 flex-col flex-1 justify-center'>
                    <h2 className='font-bold'>Name: <span className='text-green-400'>{plantName}</span> </h2>
                    <h5 className='font-bold'>Price: <span className='text-green-400'>{price}</span> </h5>
                    <h5 className='font-bold'>Stock: <span className='text-green-400'>{availableStock}</span> </h5>
                    <h5 className='font-bold'>Rating: <span className='text-green-400'>{rating}</span> </h5>

                    <p className='font-bold '>Description: <span className='text-gray-400' > {description}</span> </p>

                </div>
            </section>
        </div>
    );
};

export default PlantDetailsCard;