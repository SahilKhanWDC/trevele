import React, {useEffect} from 'react'
import './footer.css'
import video2 from '../../assets/video2.mp4'
import { FiSend } from "react-icons/fi";
import { MdTravelExplore } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaTripadvisor } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import Aos from 'aos';
import 'aos/dist/aos.css'

const Footer = () => {

    useEffect(() => {
      Aos.init({duration: 2000})
    }, [])

  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video2} loop autoPlay muted type="video/mp4"></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
            <div data-aos="fade-up" className="text">
              <small>KEEP IN TOUCH</small>
              <h2>Travel with us</h2>
            </div>

            <div className="inputDiv flex">
              <input  data-aos="fade-up" type="text" placeholder='Enter Email here..'/>
              <button data-aos="fade-up" className="btn flex" type='submit'>
              SEND <FiSend className='icon'/>
              </button>
            </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className='logo flex'><MdTravelExplore className='icon'/>Travel.</a>
            </div>

            <div data-aos="fade-up" className="footerParagraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus deserunt autem, libero eos illum voluptas perferendis tempora nostrum quae a quos qui non!
            </div>

            <div data-aos="fade-up" className="footerSocials flex">
            <FaXTwitter className='icon'/>
            <FaYoutube className='icon'/>
            <RiInstagramFill className='icon'/>
            <FaTripadvisor className='icon'/>
            </div>
          </div>
          <div className="footerLinks grid">
              {/* links gruops */}
              <div data-aos="fade-up" data-aos-duration="5000" className="linkGroup">
                <span className="groupTitle">
                  OUR AGENCY
                </span>
                <li className="footerList flex">
                <IoIosArrowForward className='icon'/>
                Services
                </li>
                <li className="footerList flex">
                <IoIosArrowForward className='icon'/>
                Insurance
                </li>
                <li className="footerList flex">
                <IoIosArrowForward className='icon'/>
                Agency
                </li>
                <li className="footerList flex">
                <IoIosArrowForward className='icon'/>
                Tourism
                </li>
                <li className="footerList flex">
                <IoIosArrowForward className='icon'/>
                Payment
                </li>
              </div>
              <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
                <span className="groupTitle">
                  PARTNERS
                </span>
                <li className="footerList flex">
                <IoIosArrowForward className='icon'/>
                Bookings
                </li>
                <li className="footerList flex">
                <IoIosArrowForward className='icon'/>
                Rent-Cars
                </li>
                <li className="footerList flex">
                <IoIosArrowForward className='icon'/>
                Hostel World
                </li>
                <li className="footerList flex">
                <IoIosArrowForward className='icon'/>
                Trivago
                </li>
                <li className="footerList flex">
                <IoIosArrowForward className='icon'/>
                TripAdvisor
                </li>
              </div>
              <div data-aos="fade-up" data-aos-duration="3000" className="linkGroup">
                <span className="groupTitle">
                  LAST MINUTE
                </span>
                <li className="footerList flex">
                <IoIosArrowForward className='icon'/>
                London
                </li>
                <li className="footerList flex">
                <IoIosArrowForward className='icon'/>
                California
                </li>
                <li className="footerList flex">
                <IoIosArrowForward className='icon'/>
                Indonesia
                </li>
                <li className="footerList flex">
                <IoIosArrowForward className='icon'/>
                Europe
                </li>
                <li className="footerList flex">
                <IoIosArrowForward className='icon'/>
                Oceania
                </li>
              </div>
          </div>

          <div className="footerDiv flex">
              <small>BEST TIME TO TRAVEL</small>
              <small>Copyright &copy; All rights reserved</small>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
