import React, {useEffect} from 'react'
import './home.css'
import {GrLocation} from 'react-icons/gr'
import {SlCalender} from 'react-icons/sl'
import {HiFilter} from 'react-icons/hi'
import {FiInstagram, FiYoutube} from 'react-icons/fi'
import {AiOutlineGithub, AiOutlineUnorderedList} from 'react-icons/ai'
import {TbApiApp} from 'react-icons/tb'
import video from '../../Assets/video.mp4'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {
   
    //creating react hook to implement a scroll animation feature
    
    useEffect(() =>{
        Aos.init({duration: 2000})
    }, [])
    
    
    return (
        <section className='home'>
            <div className='overlay'>
            </div>
             <video src={video} muted autoPlay loop type="video/mp4"></video>
            < div className="homeContent container">
                <div className="textDiv">

                    <span data-aos="fade-up" className="smallText">
                        Our Services
                    </span>
                    
                    <h1 data-aos="fade-up" className="homeTitle">
                        Search your Holiday Location
                    </h1>
                </div>
                
                <div data-aos="fade-up" className="cardDiv grid">
                    <div className='destination'>
                    <label htmlFor="city">Search your destination:</label>
                    <div className='input flex'>
                    <input type="text" placeholder='Enter name here...'/>
                   <GrLocation className='icon'/>
                    </div>
                    </div>    


                    <div className='dateInput'>
                    <label htmlFor="date">Select your date:</label>
                    <div className='input flex'>
                    <input type="date" />
                    <SlCalender className='icon'/>
                    </div>
                 </div>   


                 <div className='priceInput'>
                    <div className="label_total flex">
                        <label htmlFor='price'>Max price</label>
                        <h1 className='total'>$5000</h1>
                    </div>
                    <div className='input flex'>
                        <input type='range' max='5000' min="300"></input>
                    </div>
                </div>
                <div className='searchOptions flex'>
                <HiFilter className='icon'/>
                <span>MORE FILTERS</span>
                </div>  
             </div>

             <div className='homeFooterIcons flex'>
                <div className='rightIcons'>
                <FiInstagram className='icon'/>
                <FiYoutube className='icon'/>
                <AiOutlineGithub className='icon'/>
                </div>
                
                <div className='leftIcons'>
                    <AiOutlineUnorderedList className='icon'/>
                    <TbApiApp className='icon'/>
                </div>
             </div>
            </div>

            

        </section>

    )
}


export default Home