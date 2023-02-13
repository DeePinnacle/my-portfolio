import { motion } from 'framer-motion'
import { Bars3Icon } from '@heroicons/react/24/outline'
const Burger = ({handleDropdown}) => {
    return ( 
        <motion.div 
        initial={{
            x: 300,
            opacity: 0,
            scale: 0.5,
        }}
        animate={{
            x: 0,
            opacity: 1,
            scale: 1,
        }}
        transition={{
            duration: 1.5
        }}
        className="burger">
            <Bars3Icon className="h-12 w-12 text-white cursor-pointer" onClick={()=>{handleDropdown()}}/>
        </motion.div>
     );
}
 
export default Burger;