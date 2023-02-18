/* eslint-disable react/no-unescaped-entities */
import AboutImage from 'public/AboutImage.jpg'
import Image from 'next/image'
import { PhoneIcon, EnvelopeIcon, HomeIcon } from '@heroicons/react/24/outline';
import { SocialIcon } from 'react-social-icons'
const About = () => {
    return ( 
        <div>
            <div className='uppercase text-white text-center p-3'>
                <h1 className=" text-6xl font-semibold mb-6">About</h1>
                <p className='text-2xl mb-4 text-zinc-500 font-extralight'>Who i am</p>
            </div>
            <div className="p-5">
                <div className="relative max-w-4xl h-96 mb-2">
                    <Image src = { AboutImage } fill = { true } style={{ objectFit : "cover"}} alt="About Image" />
                </div>
                <div className="max-w-4xl min-h-0 p-3">
                    <h1 className="text-center text-white text-xl font-semibold pb-5">Hi! I*'m Lawal Kamaldeen</h1>
                    <div className='p-2my-3'>
                        <p className='text-justify text-zinc-500'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis laudantium officiis rem 
                            doloribus eius voluptatem quod, magnam quos non sapiente eveniet. Quisquam iusto architecto 
                            odio odit distinctio minima assumenda tempora!
                        </p>
                    </div>
                    <div className="p-2my-3">
                        <div className='p-3 my-3 flex flex-row justify-between text-zinc-500'>
                            <PhoneIcon className='h-7' />
                            <p>+243-807-476-38-29</p>
                        </div>
                        <div className='p-3 my-3 flex flex-row justify-between text-zinc-500'>
                            <EnvelopeIcon className='h-7' />
                            <p>deepinnacle@gmail.com</p>
                        </div>
                        <div className='p-3 my-3 flex flex-row justify-between text-zinc-500'>
                            <SocialIcon url="https://linkedin.com/pinnacle" style={{ height: 36, width: 36}} fgColor='gray' bgColor='transparent' /> 
                            <p>OfficailDeePinnacle</p>
                        </div>
                        <div className='p-3 my-3 flex flex-row justify-between text-zinc-500'>
                            <HomeIcon className='h-7' />
                            <p>Kubwa Phase 3, Abuja</p>
                        </div>
                        <div className=''>
                            <button className='w-full p-3 bg-blue-500 text-white'>Contact Me</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default About;
