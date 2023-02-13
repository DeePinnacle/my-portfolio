import Link from "next/link"
const Navbar = () => {
    return (
        <nav className={`w-full h-screen p-2 box-border bg-zinc-800 text-right`}>
            <Link href="/" className="text-white block p-6 text-xl font-extralight hover:bg-zinc-900">Home</Link>
            <Link href="/about" className="text-white block p-6 text-xl font-extralight hover:bg-zinc-900">About</Link>
            <Link href="/resume" className="text-white block p-6 text-xl font-extralight hover:bg-zinc-900">Resume</Link>
            <Link href="/services" className="text-white block p-6 text-xl font-extralight hover:bg-zinc-900">Services</Link>
            <Link href="/portfolio" className="text-white block p-6 text-xl font-extralight hover:bg-zinc-900">Portfolio</Link>
            <Link href="/contact" className="text-white block p-6 text-xl font-extralight hover:bg-zinc-900">Contact</Link>
        </nav>
    )
}

export default Navbar