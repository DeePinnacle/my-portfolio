import { motion } from 'framer-motion';
const Logo = () => {
    return ( 
        <motion.div
        initial={{
            x: -300,
            opacity: 0,
            scale: 0.5,
        }}
        animate={{
            x: 0,
            opacity: 1,
            scale: 1,
        }}
        transition={{
            duration: 1.5,
        }}
        className="logo">
            <div className="bg-transparent border p-4">
                <p className="text-white text-xl font-extralight">KL</p>
            </div>
        </motion.div>
     );
}
 
export default Logo;