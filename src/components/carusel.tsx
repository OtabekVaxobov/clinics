"use client"

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Direktor from "../../public/direktor.jpg";
import Y1 from "../../public/slide1.jpg";
import Y2 from "../../public/slide2.jpg";
import Y3 from "../../public/slide3.jpg";
import Y4 from "../../public/slide4.jpg";
import Y5 from "../../public/slide5.jpg";
import { Component } from "react";
import Image from "next/image";


export default class NextJsCarousel extends Component { 
    render() { 
        return ( 
            <div className=""> 
              <Carousel infiniteLoop={true} autoPlay={true} showThumbs={false}> 
                  <div> 
                      <Image src={Y1} alt="image2" /> 
                     
                  </div> 
                  <div> 
                      <Image src={Y2} alt="image3"/> 
                    
  
                  </div> 
                  <div> 
                      <Image src={Y3} alt="image3"/> 
                   
  
                  </div> 
                 <div> 
                      <Image src={Y4} alt="image3"/> 
                    
  
                  </div> 
                  <div> 
                      <Image src={Y5} alt="image3"/> 
                     
  
                  </div> 
                  <div> 
                      <Image src={Y1} alt="image2" /> 
                     
                  </div> 
                  <div> 
                      <Image src={Y2} alt="image3"/> 
                    
  
                  </div> 
                  <div> 
                      <Image src={Y3} alt="image3"/> 
                   
  
                  </div> 
                 <div> 
                      <Image src={Y4} alt="image3"/> 
                    
  
                  </div> 
                  <div> 
                      <Image src={Y5} alt="image3"/> 
                     
  
                  </div> 
              </Carousel> 
            </div> 
        ); 
    } 
};