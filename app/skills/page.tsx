import { 
    Html5Original, 
    JavascriptOriginal, 
    Css3Original, 
    TailwindcssOriginalWordmark,
    ReactOriginal,
    NextjsOriginal,
    PhpOriginal,
    LaravelPlain,
    NodejsOriginal,
    ExpressOriginal
} from "devicons-react";
const Skills = () => {
    return ( 
        <div className="p-1">
        {/* skills header  */}
            <div className="p-1">
                <div className="w-full p-2 uppercase text-center">
                    <h1 className="text-6xl text-white my-5">Skills</h1>
                    <p className="text-2xl mb-4 text-zinc-500 font-extralight">my strength</p>
                </div>
                {/* skills text */}
                <div className="w-full p-2">
                    <p className="text-zinc-500 text-justify">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo error ipsum doloremque maiores soluta laboriosam, ea ipsam quo 
                        consequuntur adipisci quos eveniet, ullam, molestiae qui praesentium rem in 
                        obcaecati aspernatur.
                    </p>
                </div>
            </div>
            {/* flex container */}
            <div className="p-2 bg-zinc-800">
                {/* devicon container */}
                <div className="p-2 grid grid-cols-2 gap-y-2.5 gap-x-2.5 place-content-center place-items-center">
                    <Html5Original size={80} />
                    <JavascriptOriginal size={80} />
                    <Css3Original size={80} />
                    <TailwindcssOriginalWordmark size={80} />
                    <ReactOriginal size={80} />
                    <NextjsOriginal size={80} />
                    <PhpOriginal size={80} />
                    <LaravelPlain size={80} />
                    <NodejsOriginal size={80} />
                    <ExpressOriginal size={80} />
                </div>
            </div>
            {/* progress bar */}
            <div className="p-1 bg-zinc-800 mt-4 font-extralight">
                <div className="p-1 font-extralight">
                    <p className="text-white font-semibold pb-3">Html5 <span> 95% </span></p>
                    {/* slider */}
                    <div className="bg-white p-1 border border-zinc-500 w-full h-4 rounded-lg">
                        <div className="bg-gray-300 w-full h-full rounded-lg">
                            <div className="w-9/12 h-full bg-blue-500"></div>
                        </div>
                    </div>
                </div>
                <div className="p-1 font-extralight">
                    <p className="text-white font-semibold pb-3">CSS3 <span> 95% </span></p>
                    {/* slider */}
                    <div className="bg-white p-1 border border-zinc-500 w-full h-4 rounded-lg">
                        <div className="bg-gray-300 w-full h-full rounded-lg">
                            <div className="w-9/12 h-full bg-blue-500"></div>
                        </div>
                    </div>
                </div>
                <div className="p-1 font-extralight">
                    <p className="text-white font-semibold pb-3">Javascript / React / NextJs <span> 95% </span></p>
                    {/* slider */}
                    <div className="bg-white p-1 border border-zinc-500 w-full h-4 rounded-lg">
                        <div className="bg-gray-300 w-full h-full rounded-lg">
                            <div className="w-9/12 h-full bg-blue-500"></div>
                        </div>
                    </div>
                </div>
                <div className="p-1 font-extralight">
                    <p className="text-white font-semibold pb-3">Php / Laravel <span> 95% </span></p>
                    {/* slider */}
                    <div className="bg-white p-1 border border-zinc-500 w-full h-4 rounded-lg">
                        <div className="bg-gray-300 w-full h-full rounded-lg">
                            <div className="w-9/12 h-full bg-blue-500"></div>
                        </div>
                    </div>
                </div>
                <div className="p-1 font-extralight">
                    <p className="text-white font-semibold pb-3">Node / Express <span> 95% </span></p>
                    {/* slider */}
                    <div className="bg-white p-1 border border-zinc-500 w-full h-4 rounded-lg">
                        <div className="bg-gray-300 w-full h-full rounded-lg">
                            <div className="w-9/12 h-full bg-blue-500"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Skills;