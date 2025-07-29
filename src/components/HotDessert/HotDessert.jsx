/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import Food1 from '../../assets/food.png'
import Food2 from '../../assets/banner.png'
import Food3 from '../../assets/food2.png'

import {motion} from 'framer-motion'
import { SlideUp } from '../Header/Hero'

export const HotDessertData = [
    {
        id: 1,
        name: "Hot Dessert",
        img: Food1,
        price: "$10.55",
        delay: 0.4
    },{
        id: 2,
        name: "Hot Cake",
        img: Food2,
        price: "$5.55",
        delay: 0.8
    },{
        id: 2,
        name: "Hot Food",
        img: Food3,
        price: "$15.55",
        delay: 1.2
    }
]

const HotDessert = () => {
    return (
        <section>
            <div className='container py-12 cursor-pointer max-sm:px-10'>
                {/* heading section */}
                <motion.h3
                variants={SlideUp(0)}
                initial= "hidden"
                whileInView="show"
                className='text-2xl  my-4 font-semibold text-darkGreen uppercase'>
                    out menu list | food
                </motion.h3>

                {/* grid section */}
                <div
                    className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                    {HotDessertData.map((item,idx) => ( 
                        
                        <motion.div
                        variants={SlideUp(item.delay)}
                        initial= "hidden"
                        whileInView="show"
                        key={idx} className='group bg-white/50 shadow-md p-3 flex items-center gap-3 rounded-lg border border-yellow-500'>
                            
                            <img src={item.img} alt={item.name} className="w-24 rounded-full img-shadow group-hover:scale-125 transition-all duration-700 group-hover:rotate-[50deg]"/>

                            <div>
                                <h3 className='text-xl font-semibold'>{item.name}</h3>

                                <p className='text-xl text-yellow-500'
                                >{item.price}</p>
                            </div>
                        </motion.div>)
                    )}
                </div>
            </div>
        </section>
    )
}

export default HotDessert