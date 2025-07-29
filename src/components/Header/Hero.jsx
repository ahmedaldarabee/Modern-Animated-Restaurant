/* eslint-disable no-unused-vars */
import { IoCartOutline } from "react-icons/io5"
import Leaf from "../../assets/leaf.png"
import FoodPng from '../../assets/food.png'
import Spoon from '../../assets/spoon.png'
import Banana from '../../assets/banana2.png'
import { motion } from "framer-motion"

const  headingStyle = "text-5xl lg:text-7xl xl:text-8xl font-bold uppercase"

export const SlideUp = (delayNumber) => {
    return {
        hidden: {
            y: "100%",
            opacity: 0,
        },
        show: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                delay: delayNumber
            }
        }
    }
}

const Hero = () => {
    return (
        <main className="cursor-pointer">
            <div className="container min-h-[600px] flex justify-center md:flex-row flex-column relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 place-items-center justify-between">
                    {/* text content */}
                    <div className="space-y-3 mt-14 text-center md:text-left md:mt-0">
                        <motion.h3 
                        variants={SlideUp(0.5)}
                        initial= "hidden"
                        whileInView="show"

                        className={`relative ${headingStyle} text-outline text-transparent`}>
                            Darabee
                            <img
                                src={Leaf}
                                alt="Leaf img"
                                className="absolute w-[50px] h-[50px] md:w-[100px] md:h-[100px] md:top-1 md:right-[25px] top-0 right-[110px]"/>
                        </motion.h3>

                        <motion.h3
                        variants={SlideUp(1)}
                        initial= "hidden"
                        whileInView="show"

                        className={`${headingStyle}`}>
                            Restorant
                        </motion.h3>

                        <motion.p
                        variants={SlideUp(1.5)}
                        initial= "hidden"
                        whileInView="show"

                        className="text-sm max-sm:px-20 font-serif">
                        A cozy restaurant offering delicious flavors and a warm atmosphere and the perfect spot to relax and enjoy every bite.</motion.p>

                        <motion.button
                        variants={SlideUp(2)}
                        initial= "hidden"
                        whileInView="show"

                        className="hover:bg-white hover:border hover:border-yellow-500 hover:text-black  btn-primary !inline-block !mt-10">
                            <IoCartOutline className="inline mr-2" />
                            Order Now
                        </motion.button>
                    </div>

                    {/* image content */}
                    <div className="relative">
                        <motion.img 
                            initial={{ opacity: 0, rotate: 20, x:200, y:100 }}
                            whileInView={{opacity: 1, rotate: 0, x:0, y:0}}
                            transition={{duration: 0.8}}
                            
                            src={FoodPng}
                            alt="food img"
                            className="img-shadow md:w-[450px]"
                            />

                        <motion.img
                            initial={{ opacity: 0, rotate: 120, x:200, y:100 }}
                            whileInView={{opacity: 1, rotate: 75, x:0, y:0}}
                            transition={{duration: 0.8}}
                            
                            src={Spoon}
                            alt="spoon img"
                            className="w-[350px] absolute bottom-[-120px] -left-16 rotate-[75deg] img-shadow"
                        />
                        
                        <motion.img
                            initial={{ opacity: 0, rotate: 20, x:200, y:100 }}
                            whileInView={{opacity: 1, rotate: 0, x:0, y:0}}
                            transition={{duration: 0.8}}

                            src={Banana}
                            alt="banana img"
                            className="w-[400px] absolute top-[-30px] right-[-130px] md:right-[-160px] img-shadow"
                        />
                    </div>
                </div>
            </div>

            {/* relative to the <main></main> as a parent */}
            <motion.div
            initial= {{opacity:0, rotate: 60, x: 200, y:100}}
            whileInView={{opacity: 1, rotate: 40, x: 40, y:0}}
            className="w-[2500px] h-[2500px] rounded-3xl bg-lightYellow absolute top-[-30%] left-[70%] z-0"
            ></motion.div>
        </main>
    )
}

export default Hero