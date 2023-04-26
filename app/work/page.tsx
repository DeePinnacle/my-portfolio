import Link from 'next/link';
const Work = () => {
    return ( 
        <div className="p-1">
            {/* work header */}
            <div className="p-1">
                <p className="text-xl text-zinc-500 uppercase text-center py-3">My Work</p>
                <p className="text-4xl text-zinc-500 uppercase text-center">Projects</p>
                <div className="w-full p-2 mt-3">
                    <p className="text-center text-zinc-500">Lorem ipsum dolor sit amet, consec optio at vel <br />soluta hic nihil ut sunt nam quod odit ea?</p>
                </div>
            </div>
            <div className="p-2 mt-28">
                <div className="p-2">
                    <Link href="https://google.com" className='text-red-500'>Keken Couture</Link>
                </div>
            </div>
        </div>
     );
}
 
export default Work;