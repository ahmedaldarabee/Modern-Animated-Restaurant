import { motion } from "framer-motion"

const RestaurantInfo = [
    {
        id:1,
        title: "Our Menu Information",
        subTitleFirst: "Breakfast",
        subTitleSecond: "Lunch",
        subTitleThird: "Desserts",
    },{
        id:2,
        title: "About Us Information",
        subTitleFirst: "Our Story",
        subTitleSecond: "Team",
        subTitleThird: "Careers",
    },{
        id:3,
        title: "Support Information",
        subTitleFirst: "Contact",
        subTitleSecond: "FAQs",
        subTitleThird: "Privacy Policy",
    }
]

const Footer = () => {
    return (
        <motion.footer
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1}}
        className="bg-lightYellow rounded-t-3xl cursor-pointer">
            <div className="container py-5  max-sm:px-10 cursor-pointer space-y-3">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Banner info */}
                    <div className='max-sm:text-center space-y-3 lg:max-w-[300px] max-sm:ml-7'>
                        <h1 className='font-league text-3xl'>Darabee Restaurant</h1>
                        <p> 
                            Serving Amman with passion and flavor. Discover handcrafted dishes, warm hospitality, and a dining experience to remember.
                        </p>
                        <a href='/' className='inline-block mt-6 text-sm no-underline font-semibold'>
                            darabee.info@gmail.com
                        </a>
                    </div>
                    <div className='grid col-span-2 grid-cols-1 md:grid-cols-3 gap-6 max-sm:place-items-center'>
                        {/* Quick Links */}
                        {RestaurantInfo.map((info,index) => {
                            return (
                                <div key={info.id}>
                                    <h1 className='text-xl font-semibold'>{info.title}</h1>
                                    <ul className='max-sm:text-center space-y-3 mt-6'>
                                        <li className='footer-link'>{info.subTitleFirst}</li>
                                        <li className='footer-link'>{info.subTitleSecond}</li>
                                        <li className='footer-link'>{info.subTitleThird}</li>
                                    </ul>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="w-full border-black py-4 border-t-2 flex justify-center items-center">
                    <p className="text-[16px]">&copy; ahmed al darabee | all rights are reserved 2025 </p>
                </div>
            </div>
        </motion.footer>
    )
}

export default Footer