import React, {useEffect} from 'react'
import './main.css'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {AiOutlineCheckSquare} from 'react-icons/ai'
import img from '../../Assets/img1.jpg'
import img2 from '../../Assets/img2.jpeg'
import img3 from '../../Assets/img3.jpg'
import img4 from '../../Assets/img4.jpg'
import img5 from '../../Assets/img5.jpg'
import img6 from '../../Assets/img6.jpg'
import img7 from '../../Assets/img7.jpg'
import img8 from '../../Assets/img8.jpg'
import img9 from '../../Assets/img9.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'



const Data = [
    {
    id:1,
    imgSrc: img,
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX ',
    fees: '$700',
    description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the world. This place is known for its luxurious stays and adventurous activities.'
    },

    {
        id:2,
        imgSrc: img2,
        destTitle: 'Paris',
        location: 'France',
        grade: 'CULTURAL RELAX ',
        fees: '$1,300',
        description: 'One of the most beautiful cities in the world. It is known worldwide for the Louvre Museum, Notre-Dame cathedral, and the Eiffel tower. It has a reputation of being a romantic and cultural city.'
    },

    {
        id:3,
        imgSrc: img3,
        destTitle: 'Tokyo',
        location: 'Japan',
        grade: 'CULTURAL RELAX ',
        fees: '$1,100',
        description: 'Japans capital and the worlds most populous metropolis. It is also one of Japans 47 prefectures, consisting of 23 central city wards and multiple cities, towns and villages west of the city center.'
    },


    {
        id:4,
        imgSrc: img4,
        destTitle: 'Seoul',
        location: 'Korea',
        grade: 'NIGHT LIFE ',
        fees: '$1,000',
        description: 'The capital and largest metropolis of the Republic of Korea (commonly known as South Korea). Seoul is the worlds 16th largest city, and forms the heart of the Seoul Capital Area, which includes the surrounding Incheon metropolis and Gyeonggi province.'

    },

    {
        id:5,
        imgSrc: img5,
        destTitle: 'Sydney',
        location: 'Australia',
        grade: 'CULTURAL RELAX ',
        fees: '$1,200',
        description: 'Home to must-visit icons like the Sydney Harbour Bridge and Opera House, but this Harbour City is constantly evolving. New rooftop bars, theatre shows and designer shops pop up at every turn, and the urban excitement is perfectly balanced by afternoons spent lying on the sand.'
    },

    {
        id:6,
        imgSrc: img6,
        destTitle: 'Duino',
        location: 'Italy',
        grade: 'CULTURAL RELAX ',
        fees: '$1,100',
        description: 'History, art and culture combine perfectly with beautiful beaches, lagoon areas and green parks: Cagliari is the Sardinian jewel of a city captivating with its majestic architecture, winding alleys and privileged location directly overlooking the sea.'
    },
    
    {
        id:7,
        imgSrc: img7,
        destTitle: 'Beijing',
        location: 'China',
        grade: 'CULTURAL RELAX ',
        fees: '$2,400',
        description: 'Beijing, the capital of China, is a city where the ancient culture and the modern civilization are well integrated. Beijing is endowed with rare cultural heritage by its long history.'
    },

    {
        id:8,
        imgSrc: img8,
        destTitle: 'New York City',
        location: 'United States',
        grade: 'CULTURAL RELAX ',
        fees: '$1,100',
        description:'New York is composed of five boroughs: Brooklyn, the Bronx, Manhattan, Queens and Staten Island - is home to 8.4 million people who speak more than 200 languages'
    },
    
    {
        id:9,
        imgSrc: img9,
        destTitle: 'London',
        location: 'England',
        grade: 'CULTURAL RELAX ',
        fees: '$1,400',
        description: 'The capital city of the United Kingdom. London is also among the oldest of the worlds great cities, with its history spanning nearly two millennia.'
    },


]

const Main = () => {
     //creating react hook to implement a scroll animation feature
    
     useEffect(() =>{
        Aos.init({duration: 2000})
    }, [])



    return (
        <section className='main container section'>
           
            <div className="secTitle">
                <h3 data-aos="fade-right" className='title'>
                    Most visited places
                </h3>
            </div>

            <div className="secContent grid">
                {
                    Data.map(({id, imgSrc, destTitle, location, grade, fees,
                         description  })=> {
                        return(
                            <div key={id} 
                            data-aos="fade-up"className="singleDestination">
                                <div className="imageDiv">
                                    <img src={imgSrc} alt={destTitle}/>
                                </div>

                                <div className="cardInfo">
                                    <h4 className="desTitle">{destTitle}</h4>
                                    <span className="continent flex">
                                        <HiOutlineLocationMarker className='icon'/>
                                        <span className='name'>{location}</span>
                                    </span>

                                    <div className="fees flex">
                                        <div className="grade">
                                            <span>{grade}<small>+1</small></span>
                                        </div>
                                        <div className='price'>
                                            <h5>{fees}</h5>
                                        </div>
                                    </div>

                                    <div className='desc'>
                                        <p>{description}</p>
                                    </div>

                                    <button className='btn flex'>
                                        DETAILS <AiOutlineCheckSquare className='icon'/>
                                    </button>
                                </div>
                            </div>


                        )
                     })
                }
                
            </div>

        </section>
    )
}


export default Main