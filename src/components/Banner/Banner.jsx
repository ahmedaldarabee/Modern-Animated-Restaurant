/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion"
import BannerImg from '../../assets/banner.png'
import { SlideUp } from "../Header/Hero"
import { IoCartOutline } from "react-icons/io5"


const Banner = () => {
    return (
        <section>
            <div className="container py-24 max-sm:p-10 cursor-pointer">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-14 place-items-center">
                    {/* image section */}
                    <div className="relative">
                        <motion.img
                            initial= {{
                                opacity: 0,
                                x: -100,
                                y: 100
                            }}

                            whileInView={{
                                opacity: 1,
                                x: 0,
                                y: 0
                            }}

                            whileHover={{
                                scale: 1.2,
                                rotate:15,
                                x: 50,
                                y:-50
                            }}

                            transition={{
                                duration: 0.6,
                                delay: 0.5,
                                scale: {duration: 0.5}
                            }}
                            src={BannerImg}
                            alt="banner image"
                            className="relative z-10 w-full lg:max-w-[350px] img-shadow"
                        />

                        <motion.div
                            initial= {{opacity: 0}}
                            whileInView={{opacity:1}}
                            transition={{duration:0.6, delay:0.5}}
                            className="absolute top-[50%] right-[50%] transform translate-x-[50%] translate-y-[-50%] h-[320px] w-[320px] md:h-[400px] md:w-[400px] bg-lightYellow rounded-full" >
                        </motion.div>
                    </div>

                    {/* text section */}
                    <div className="space-y-5 lg:max-w-[400px]">
                        <motion.h1
                        variants={SlideUp(1)}
                        initial= "hidden"
                        whileInView="show"
                        className="max-sm:text-center text-[50px] md:text-6xl uppercase font-semibold font-league">
                            best restaurant food in jordan - amman
                        </motion.h1>

                        <motion.p
                            variants={SlideUp(1.3)}
                            initial= "hidden"
                            whileInView="show"
                        >
                            Nestled in the heart of Amman, this hidden gem offers a perfect blend of authentic flavors and modern ambiance. Whether you're craving a cozy dinner or a vibrant dining experience, every dish is crafted to impress — a true taste of Jordan with a contemporary twist.
                        </motion.p>

                        <motion.button
                        variants={SlideUp(1.6)}
                        initial= "hidden"
                        whileInView="show"
                        className="hover:bg-white hover:border hover:border-yellow-500 hover:text-black  btn-primary !inline-block !mt-10">
                            <IoCartOutline className="inline mr-2" />
                            Order Now
                        </motion.button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner