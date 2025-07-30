import { motion } from "framer-motion"
import BannerImg from '../../assets/banner.png'
import Dog from '../../assets/dog.jpg'
import { SlideUp } from "../Header/Hero"

const Feedback = () => {
    return (
        <section>
            <div className="container py-24 max-sm:p-10 cursor-pointer">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-14 place-items-center">
                    {/* text section */}
                    <div className="space-y-5 lg:max-w-[400px]">
                        <motion.p
                        variants={SlideUp(0.4)}
                        initial="hidden"
                        whileInView="show"
                        className="text-xl font-serif relative z-10"
                        >
                            "Located in one of Amman’s liveliest districts, this restaurant brings people together through bold flavors and unforgettable vibes. From freshly prepared meals to friendly service, it’s more than just a place to eat — it’s where great food meets great moments.
                        </motion.p>

                        <div className="flex items-center gap-3">
                            <motion.img 
                                variants={SlideUp(0.8)}
                                initial="hidden"
                                whileInView="show"
                                src={Dog}
                                alt="dog img"
                                className="w-14 h-14 rounded-full object-cover"
                            />

                            <motion.div
                            variants={SlideUp(1.2)}
                            initial="hidden"
                            whileInView="show"
                            >
                                <h2
                                    className="text-xl font-bold"
                                >Alex Jorg</h2>
                                <p>Too many sweet food</p>
                            </motion.div>
                        </div>
                    </div>
                    
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
                            className="relative z-10 w-full lg:max-w-[250px] img-shadow"
                        />

                        <motion.div
                            initial= {{opacity: 0}}
                            whileInView={{opacity:1}}
                            transition={{duration:0.6, delay:0.5}}
                            className="absolute top-[50%] right-[50%] transform translate-x-[50%] translate-y-[-50%] h-[320px] w-[320px] bg-lightYellow rounded-full" >
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Feedback