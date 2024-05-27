import image from '../assets/amos.jpg'

const About = () => {
  return (
     <div className='section min-h-screen bg-[#121212] flex ' id="about">

        <div className="w-[90%] mx-auto sm:justify-center flex  md:justify-between gap-8 flex-wrap items-start">
          <div className='max-w-[400px] h-[400px] backdrop-blur-3xl'>
             <img src={image} alt=""  className=' w-full h-full object-cover rounded-md' />
          </div>
          <div className='max-w-[500px] space-y-2'>
            <h2 className='text-white border-b border-[#e195a2]'>A propos de moi</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto officia temporibus cum molestiae minima dolorum voluptas consequatur aliquid quae pariatur eum accusantium, culpa tempore? Et vitae pariatur nisi. A, rerum.</p>

          </div>

        </div>
         
      </div>)
};

export default About;
