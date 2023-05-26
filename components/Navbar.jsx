import React, { useEffect, useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';




export const Navbar = () => {

    const [nav, setNav] = useState(false);
    const [color, setColor] = useState('transparent');
    const [textColor, setTextColor] = useState('white');

    const handleNav = () => {
        setNav(!nav);
    };



    useEffect(() => {
        const changeColor = () => {
          if (window.scrollY >= 90) {
            setColor('#ffffff');
            setTextColor('#000000');
          } else {
            setColor('transparent');
            setTextColor('#ffffff');
          }
        };
        window.addEventListener('scroll', changeColor);
      }, []);
    


    return (
        <div style={{ backgroundColor: `${color}` }} className='fixed left-0 top-0 w-full z-10 ease-in duration-300'>
            <div className='max-w-[1240px] m-auto flex justify-between items-center p-4 text-white'>
                <h1   className='font-bold text-4xl'>
                    <img style={{ color: `${textColor}` }} src="https://www.pandr.in/wp-content/uploads/2020/08/new-white-logo.png" className='h-10' />
                </h1>
                <ul style={{ color: `${textColor}` }} className='hidden sm:flex'>
                    <li className='p-4'>
                        About Us
                    </li>

                    <li className='p-4'>
                        Our Team
                    </li>

                    <li className='p-4'>
                        Services
                    </li>

                    <li className='p-4'>
                        Work with Us
                    </li>

                    <li className='p-4'>
                        Contact Us
                    </li>
                </ul>

                {/* Mobile button */}

                <div className='block sm:hidden z-10'>
                    {nav ? (
                        <AiOutlineClose size={20} style={{ color: `${textColor}` }} />
                    ) : (
                        <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
                    )}
                </div>

                {/* mobile menu */}

                <div 
                    className={
                        
                        nav
                        ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
                        : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
                    }
                    
                >
                    <ul>
                        <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
                            About Us
                        </li>

                        <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
                            Our Team
                        </li>

                        <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
                            Services
                        </li>

                        <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
                            Work with Us
                        </li>

                        <li onClick={handleNav}  className='p-4 text-4xl hover:text-gray-500'>
                            Contact Us
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
