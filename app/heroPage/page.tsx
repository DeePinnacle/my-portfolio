"use client"
import Image from 'next/image';
import MyImage from 'public/HeroImg.jpg';
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { SocialIcon } from 'react-social-icons'
type Props = {};

const HeroPage = ({}: Props) => {
    const myName = "< Lawal Kamaldeen />"
    const [text, count] = useTypewriter({
        words:[
            "A Web Developer",
            "UI/UX Designer",
        ],
        loop: true,
        delaySpeed: 2000
    })

    return ( 
        <div className='h-full grid bg-zinc-900 items-center justify-center py-100 overflow-hidden'>
            <div className='p-5'>
                <div className="relative overflow-hidden bg-zinc-800 p-5 mb-6 flex justify-center items-center rounded-full w-60 h-60 mx-auto">
                    <Image src={ MyImage } fill={ true } style={{objectFit: "cover"}}  alt="header image" />   
                </div>
                <div className='flex flex-row justify-between w-full p-5 my-6'>
                    <SocialIcon url="https://twitter.com/pinnacle" fgColor='gray' bgColor='transparent' /> 
                    <SocialIcon url="https://facebook.com/pinnacle" fgColor='gray' bgColor='transparent' /> 
                    <SocialIcon url="https://github.com/pinnacle" fgColor='gray' bgColor='transparent'/> 
                    <SocialIcon network="email" fgColor='gray' bgColor='transparent' /> 
                    <SocialIcon className="cursor-pointer" url="https://instagram.com/pinnacle" fgColor='gray' bgColor='transparent' /> 
                </div>
                <h1 className='uppercase text-center text-4xl overflow-hidden text-slate-700 font-light mb-6 tracking-widest'>Hello! I'm</h1>
                <p className='uppercase text-center text-4xl overflow-hidden text-white font-mono tracking-widest mb-6 font-extrabold'>{ myName }</p>
                <h1 className="text-center text-white text-3xl font-extralight overflow-hidden tracking-wider">
                    <span>{ text }</span>
                    <Cursor cursorColor='white' />
                </h1>
            </div>
        </div>
     );
}
 
export default HeroPage;