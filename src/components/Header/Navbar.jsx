/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/img-redundant-alt */

import { IoCartOutline } from 'react-icons/io5'
import Logo from '../../assets/logo.png'
import { motion } from 'framer-motion';

const NavMenu = [
    {
        id:1,
        title: "Home",
        path:"/",
        delay:0.1
    },{
        id:2,
        title: "About",
        path:"/about",
        delay:0.2
    },{
        id:3,
        title: "Menu",
        path:"/menu",
        delay:0.3
    },{
        id:4,
        title: "Delivery",
        path:"/delivery",
        delay:0.4
    },{
        id:5,
        title: "Contact Us",
        path:"/contact",
        delay:0.5
    }
]

const SlideDown = (delayNumber) => {
    return {
        initial: {
            y: "-100%",
            opacity:0,
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                delay: delayNumber
            }
        }
    }
}

const Navbar = () => {
    return (
        <nav>
            <div className='container mx-auto flex justify-between items-center font-league'>
                {/* logo */}
                <div>
                    <motion.img 
                        initial={{opacity:0}}
                        animate={{opacity:1}}
                        transition={{ duration:0.8, delay:0.3}}
                    src={Logo} alt="logo image" className='w-36'/>
                </div>

                {/* menu */}
                <div className='hidden md:block'>
                    <ul className='flex items-center justify-content-center gap-6'>
                        {NavMenu.map((menu,index) => {
                            return (
                                <motion.li 
                                    variants={SlideDown(menu.delay)}
                                    initial="initial"
                                    animate="animate"
                                    key={index}
                                    data-delay={menu.delay}
                                    className='nav-menu'>
                                    <a 
                                        className='inline-block p-2 text-2xl'
                                        href={menu.path}
                                    > {menu.title}</a>
                                </motion.li>
                            )
                        })}
                    </ul>                    
                </div>
                {/* button selection */}
                <motion.div
                    variants={SlideDown(2)}
                    initial="initial"
                    animate="animate"
                >
                    <button className='h-[40px] w-[40px] grid place-items-center rounded-full text-white bg-dark'>
                        <IoCartOutline />
                    </button>
                </motion.div>
            </div>
        </nav>
    )
}

export default Navbar