import React, {useEffect} from 'react'
import './main.css'
import { CiLocationOn } from "react-icons/ci";
import { LuClipboardCheck } from "react-icons/lu";
import Aos from 'aos';
import 'aos/dist/aos.css'

import img from '../../assets/img.jpg'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'
import img4 from '../../assets/img4.jpg'
import img5 from '../../assets/img5.jpg'
import img6 from '../../assets/img6.jpg'
import img7 from '../../assets/img7.jpg'
import img8 from '../../assets/img8.jpg'
import img9 from '../../assets/img9.jpg'

const Data = [
  {
    id:1,
    imgSrc: img,
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the world. This place is known for its luxurious stays and adventurous activities. '
  },
  {
    id:2,
    imgSrc: img2,
    destTitle: 'Machu Picchu',
    location: 'Peru',
    grade: 'CULTURAL RELAX',
    fees: '$600',
    description: 'Discover Machu Picchu, the ancient Incan citadel in the Andes, where history meets breathtaking views and timeless stone structures. '
  },
  {
    id:3,
    imgSrc: img3,
    destTitle: 'Great Barrier Reef',
    location: 'Australia',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'Experience the Great Barrier Reef, a vibrant underwater world filled with colorful coral and diverse marine life. Explore crystal-clear waters. '
  },
  {
    id:4,
    imgSrc: img4,
    destTitle: 'Cappadocia',
    location: 'Turkey',
    grade: 'CULTURAL RELAX',
    fees: '$800',
    description: 'Discover Cappadocia and its unique landscapes, where ancient cave dwellings meet surreal rock formations. Float above it all in a hot air balloon for an unforgettable view of this otherworldly region. '
  },
  {
    id:5,
    imgSrc: img5,
    destTitle: 'Guanajuato',
    location: 'Mexico',
    grade: 'CULTURAL RELAX',
    fees: '$1100',
    description: 'Wander through Guanajuato vibrant streets, lined with colorful colonial buildings and rich history. Explore its underground tunnels and lively plazas in this charming Mexican city. '
  },
  {
    id:6,
    imgSrc: img6,
    destTitle: 'Cinque Terre',
    location: 'Italy',
    grade: 'CULTURAL RELAX',
    fees: '$840',
    description: 'Explore the picturesque villages of Cinque Terre, where colorful homes cling to rugged cliffs overlooking the sea. Stroll along scenic trails and enjoy breathtaking views of Italy stunning coastline. '
  },
  {
    id:7,
    imgSrc: img7,
    destTitle: 'Angkor Wat',
    location: 'Cambodia',
    grade: 'CULTURAL RELAX',
    fees: '$790',
    description: 'Discover the awe-inspiring temples of Angkor Wat, a UNESCO World Heritage site surrounded by lush jungles. Explore the intricate stone carvings and ancient architecture of this majestic Cambodian landmark.'
  },
  {
    id:8,
    imgSrc: img8,
    destTitle: 'Taj Mahal',
    location: 'India',
    grade: 'CULTURAL RELAX',
    fees: '$900',
    description: 'Marvel at the Taj Mahal, an exquisite symbol of love set against lush gardens and reflecting pools. Admire the intricate marble details and timeless beauty of this iconic Indian masterpiece. '
  },
  {
    id:9,
    imgSrc: img9,
    destTitle: 'Bali Island',
    location: 'Indonesia',
    grade: 'CULTURAL RELAX',
    fees: '$500',
    description: 'Experience the beauty of Bali Island, where stunning beaches meet lush rice terraces and vibrant culture. Discover serene temples, bustling markets, and breathtaking landscapes in this tropical paradise.'
  },
]

const Main = () => {

  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])

  return (
    <section className="main container section">
        <div className="secTitle">
          <h3 data-aos="fade-right" className="title">
            Most visited destinations
          </h3>
        </div>

        <div className="secContent grid">
            {
              Data.map(({id,imgSrc,destTitle,location,grade,fees,description})=>{
                  return(
                    <div key={id} data-aos="fade-up" className="singleDestination">
                        <div className="imageDiv">
                          <img src={imgSrc} alt={destTitle} />
                        </div>
                        <div className="cardInfo">
                          <h4 className="destTitle">
                            {destTitle}
                          </h4>
                          <span className="continent flex">
                          <CiLocationOn className='icon' style={{"width":"20px"}}/>
                          <span className="name">{location}</span>
                          </span>
                          <div className="fees flex">
                            <div className="grade">
                              <span>{grade}<small>+1</small></span>
                            </div>
                            <div className="price">
                              <h5>{fees}</h5>
                            </div>
                          </div>
                          <div className="desc">
                            <p>{description}</p>
                          </div>
                          <button className="btn flex">
                            DETAILS <LuClipboardCheck className='icon'/>
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
