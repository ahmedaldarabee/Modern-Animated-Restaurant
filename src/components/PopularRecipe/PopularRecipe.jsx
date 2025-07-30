import {motion} from 'framer-motion'
import { SlideUp } from '../Header/Hero'
import { HotDessertData } from '../HotDessert/HotDessert'

const PopularRecipe = () => {
    return (
        <section>
            <div className='container py-12 max-sm:px-10 cursor-pointer'>

                <motion.h3
                    variants={SlideUp(0.5)}
                    initial= "hidden"
                    whileInView="show"
                    className='text-4xl text-center font-league font-semibold uppercase py-8'>
                    Our Popular Recipe
                </motion.h3>

                {/* card section */}
                <div 
                    className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center'>
                    {HotDessertData.map((item,idx) => {
                        return (
                            <div key={idx}
                            className='group space-y-3 text-center bg-white/50 shadow-xl p-3 rounded-xl'>
                                <img 
                                    className='w-44 mx-auto img-shadow group-hover:scale-x-110
                                    group-hover:translate-y-[-50px]
                                    group-hover:translate-x-10
                                    group-hover:rotate-[50deg]
                                    transition-all
                                    duration-500
                                    '
                                    src={item.img}
                                    alt={item.name}/>

                                <div>
                                    <button
                                        className='btn-primary group-hover:mb-3 opacity-0 group-hover:opacity-100 hover:bg-white hover:border hover:border-yellow-500 hover:text-black'
                                    >Buy Now</button>
                                    <p className='text-xl font-semibold'>{item.name}</p>
                                    <p className='text-xl font-bold text-yellow-500'
                                    >{item.price}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default PopularRecipe