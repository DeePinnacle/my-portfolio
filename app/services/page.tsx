import { PaintBrushIcon, CodeBracketIcon, DevicePhoneMobileIcon } from '@heroicons/react/24/outline'
const Services = () => {
    return ( 
        <div className="p-1">
            {/* service header */}
            <div className="p-1">
                <p className="text-xl text-zinc-500 uppercase text-center py-3">What i do</p>
                <p className="text-4xl text-zinc-500 uppercase text-center">Services</p>
                <div className="w-full p-2 mt-3">
                    <p className="text-center text-zinc-500">Lorem ipsum dolor sit amet, consec optio at vel <br />soluta hic nihil ut sunt nam quod odit ea?</p>
                </div>
            </div>
            {/* service content */}
            <div className="p-2 mt-28">
                <div className="bg-zinc-800 rounded-lg p-1 my-3 mx-auto">
                    {/* icon */}
                    <div className="p-5 my-2 flex justify-center items-center">
                        <PaintBrushIcon className='h-16 w-16 text-zinc-500' />
                    </div>
                    {/* title */}
                    <div className="my-2 p-2">
                        <p className='text-zinc-500 text-center text-2xl font-extralight'>UI/UX Designer</p>
                    </div>
                    {/* content */}
                    <div className="p-3 my-2">
                        <p className='text-center text-zinc-500 p-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, nihil voluptate expedita beatae aliquam, nisi earum optio blanditiis dolore dicta, perspiciatis voluptates sit commodi culpa sint ea esse dignissimos inventore?</p>
                    </div>
                </div>
                <div className="bg-zinc-800 rounded-lg p-1 my-3 mx-auto">
                    {/* icon */}
                    <div className="p-5 my-2 flex justify-center items-center">
                        <CodeBracketIcon className='h-16 w-16 text-zinc-500' />
                    </div>
                    {/* title */}
                    <div className="my-2 p-2">
                        <p className='text-zinc-500 text-center text-2xl font-extralight'>Web Developer</p>
                    </div>
                    {/* content */}
                    <div className="p-3 my-2">
                        <p className='text-center text-zinc-500 p-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, nihil voluptate expedita beatae aliquam, nisi earum optio blanditiis dolore dicta, perspiciatis voluptates sit commodi culpa sint ea esse dignissimos inventore?</p>
                    </div>
                </div>
                <div className="bg-zinc-800 rounded-lg p-1 my-3 mx-auto">
                    {/* icon */}
                    <div className="p-5 my-2 flex justify-center items-center">
                        <DevicePhoneMobileIcon className='h-16 w-16 text-zinc-500' />
                    </div>
                    {/* title */}
                    <div className="my-2 p-2">
                        <p className='text-zinc-500 text-center text-2xl font-extralight'>Web Application</p>
                    </div>
                    {/* content */}
                    <div className="p-3 my-2">
                        <p className='text-center text-zinc-500 p-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, nihil voluptate expedita beatae aliquam, nisi earum optio blanditiis dolore dicta, perspiciatis voluptates sit commodi culpa sint ea esse dignissimos inventore?</p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Services;