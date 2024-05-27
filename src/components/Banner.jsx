
import image from '../assets/amos.jpg'
import {FaGithub, FaYoutube, FaLinkedin} from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import {fadeIn} from '../variants.js';
import Header from './Header';

const Banner = () => {
  return (
          <div className='min-h-screen bg-[#080808] flex flex-col text-white justify-between ' id="home">
            <Header/>
            <div className=' m-auto w-[90%] mx-auto flex justify-between flex-wrap items-start  p-3'>

                <div className="max-w-[600px]  flex flex-col space-y-2 ">
                   <motion.h1 variants={fadeIn('up', 0.3)} initial="hidden" whileInView={'show'} viewport={{once:false, amount:0.7}} className='text-3xl font-semibold'>SOSSOUKPE  AMOS</motion.h1>
                   <motion.div variants={fadeIn('up', 0.4)} initial="hidden" whileInView={'show'} viewport={{once:false, amount:0.7}}  className='text-3xl uppercase mb-5 leading-[1]'>
                     <span className='mr-4'>Je suis un</span>
                     <TypeAnimation sequence={[
                      "Developpeur web", 2000, 'Developpeur Mobile', 2000, 'Developpeur Logiciel'
                     ]} speed={50} className=' text-[#e195a2]' wrapper='span' repeat={Infinity}/>
                     <p className=' text-xl lowercase pt-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio, esse similique nam expedita adipisci numquam, aspernatur ea accusamus placeat molestias iusto? Qui sit repellendus neque repellat maxime mollitia recusandae odio minus itaque.</p>
                   </motion.div>
                   <motion.div variants={fadeIn('up', 0.5)} initial="hidden" whileInView={'show'} viewport={{once:false, amount:0.7}}  className='flex items-center gap-2'>
                       <button className='bg-[#e195a2] text-[#181818] font-semibold hover:text-white hover:bg-orange-500 rounded-md p-2'>Contactez moi</button>
                       
                   </motion.div>
                   <motion.div variants={fadeIn('up', 0.6)} initial="hidden" whileInView={'show'} viewport={{once:false, amount:0.7}}  className=' text-2xl flex gap-3 py-2'>
                       <a href="#" className=' text-[#e195a2] hover:text-white hover:bg-[#e195a2] border-2 border-[#e195a2] rounded-full p-2'>
                          <FaGithub/>
                       </a>
                       <a href="#" className=' text-[#e195a2] hover:text-white hover:bg-[#e195a2] border-2 border-[#e195a2] rounded-full p-2'>
                          <FaLinkedin/>
                       </a>
                       <a href="#" className=' text-[#e195a2] hover:text-white hover:bg-[#e195a2] border-2 border-[#e195a2] rounded-full p-2'>
                          <FaYoutube/>
                       </a>
                   </motion.div>
                </div>
                <motion.div variants={fadeIn('down', 0.5)} initial="hidden" whileInView={'show'}  className=" h-auto  hidden lg:flex ">
                  <img src={image} alt="" className="w-[300px] h-[300px] rounded-full   object-cover"/>
                </motion.div>

            </div>
             

          </div>)
};

export default Banner;
