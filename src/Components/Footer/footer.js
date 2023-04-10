import React, {useEffect} from 'react'
import './footer.css'
import video2 from '../../Assets/video (2).mp4'
import {FiSend, FiChevronRight} from 'react-icons/fi'
import {WiDayFog} from 'react-icons/wi'
import {FaTripadvisor} from 'react-icons/fa'
import {AiOutlineTwitter} from 'react-icons/ai'
import {SlSocialGoogle, SlSocialLinkedin} from 'react-icons/sl'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {

    useEffect(() =>{
        Aos.init({duration: 2000})
    }, [])
   
   
    return (
        <section className='footer'>
            <div className='videoDiv'>
            <video src= {video2} loop autoPlay muted type="video/mp4" ></video>
            </div>
            
            <div className="secContent container">
                <div className="contactDiv flex">
                    <div data-aos="fade-up" className="text">
                        <small>KEEP IN TOUCH</small>
                        <h2>Travel with us!</h2>
                    </div>


                    <div className='inputDiv flex'>
                        <input data-aos="fade-up" type="text" placeholder='Enter Email Address' />
                        <button data-aos="fade-up" className='btn flex' type='submit'>
                           SEND <FiSend className='icon'/>
                        </button>
                        
                    </div>
                </div>

                <div className="footerCard flex">
                    <div className="footerIntro flex">
                            <div className="logoDiv">
                                <a href="#" className='logo flex'>
                                <WiDayFog className='icon'/>   Travel.
                                </a>
                            </div>

                            <div data-aos="fade-up" className='footerParagraph'>
                                Including an all expensive sight
                            </div>

                        <div data-aos="fade-up" className='footerSocials flex'>
                            <FaTripadvisor className="icon"/>
                            <AiOutlineTwitter className="icon"/>
                            <SlSocialGoogle className='icon'/>
                            <SlSocialLinkedin className='icon'/>
                        </div>

                      
                    </div>

                    <div data-aos="fade-up" className='footerLinks grid'>

                    {/* Group one */}
                 <div data-aos="fade-up"
                 data-aos-duration="3000"
                  className='linkGroup'>
                        <span className='groupTitle'>
                        OUR AGENCY
                        </span>

                        <li className='footerList flex'>
                        <FiChevronRight className="icon"/>Services
                        </li>

                        <li className='footerList flex'>
                        <FiChevronRight className="icon"/>Insurance
                        </li>

                        <li className='footerList flex'>
                        <FiChevronRight className="icon"/>About us
                        </li>

                        <li className='footerList flex'>
                        <FiChevronRight className="icon"/>Tourism
                        </li>

                        <li className='footerList flex'>
                        <FiChevronRight className="icon"/>Payment
                        </li>
                    </div>

                    {/* Group two */}
                 <div data-aos="fade-up" data-aos-duration="4000" className='linkGroup'>
                        <span className='groupTitle'>
                        PARTNERS
                        </span>

                        <li className='footerList flex'>
                        <FiChevronRight className="icon"/>Bookings
                        </li>

                        <li className='footerList flex'>
                        <FiChevronRight className="icon"/>Rentacar
                        </li>

                        <li className='footerList flex'>
                        <FiChevronRight className="icon"/>HostelWorld
                        </li>

                        <li className='footerList flex'>
                        <FiChevronRight className="icon"/>Trivago
                        </li>

                        <li className='footerList flex'>
                        <FiChevronRight className="icon"/>TripAdvisor
                        </li>
                    </div>

                    {/* Group three */}
                 <div data-aos="fade-up" 
                 data-aos-duration="5000"
                 className='linkGroup'>
                        <span className='groupTitle'>
                        LAST MINUTE
                        </span>

                        <li className='footerList flex'>
                        <FiChevronRight className="icon"/>London
                        </li>

                        <li className='footerList flex'>
                        <FiChevronRight className="icon"/>San Diego
                        </li>

                        <li className='footerList flex'>
                        <FiChevronRight className="icon"/>Barcelona
                        </li>

                        <li className='footerList flex'>
                        <FiChevronRight className="icon"/>Lyon
                        </li>

                        <li className='footerList flex'>
                        <FiChevronRight className="icon"/>Melbourne
                        </li>
                    </div>
                
                </div>

                <div className="footerDiv flex">
                        <small>BEST TRAVEL WEBSITE THEME</small>
                        <small>COPYRIGHTS RESERVED - MARCUS WINBUSH 
                            2023</small>
                </div>



                </div>  
            </div>
        </section>
    )
}


export default Footer