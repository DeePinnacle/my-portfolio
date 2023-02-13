import Link from "next/link"
const Navbar = () => {
    return (
        <nav className={`w-full h-screen p-2 box-border bg-zinc-800 text-right`}>
            <Link href="/" className="anchor">Home</Link>
            <Link href="/about" className="anchor">About</Link>
            <Link href="/resume" className="anchor">Resume</Link>
            <Link href="/services" className="anchor">Services</Link>
            <Link href="/portfolio" className="anchor">Portfolio</Link>
            <Link href="/contact" className="anchor">Contact</Link>
        </nav>
    )
}

export default Navbar