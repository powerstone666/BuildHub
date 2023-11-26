import { useEffect } from "react";
import { useState } from "react";

function Ab(){
  const [count, setCount] = useState(0);
  var inter; 
  useEffect(()=>{
    inter = setInterval(()=>{
      if(count<35){
        setCount((prevCount)=> prevCount+1)
      }else{
        clearInterval(inter)
      }
    }, 200)
    return()=>{
        clearInterval(inter)
    };
  }, [count])

 

  return(
    <div>
    <div id="ab">
        <br></br>  <br></br>  <br></br>
    <p id="one">OUR FEATURES</p>
    <p id="two">
    GET THE BEST IN <b style={{color:"orange"}}>ARCHITECTURE</b> AND<br></br>
    INTERIOR DESIGN</p>
    <img id="bed" src="https://wallpaperaccess.com/full/5089977.jpg"></img>
   

    <div className="cards">
      <div className="card" style={{cursor:"pointer"}}>
      <img src="https://cdn-icons-png.flaticon.com/128/2282/2282188.png"></img>
      <p align="center">DEVELOPMENT</p>
      </div>
      <div className="card" style={{cursor:"pointer"}}><img src="https://cdn-icons-png.flaticon.com/128/2400/2400629.png"></img>
      <p align="center">INTERIOR</p></div>
      <div className="card" style={{cursor:"pointer"}}><img src="https://cdn-icons-png.flaticon.com/128/1317/1317487.png"></img>
      <p align="center">ARCHITECTURE</p></div>
      <div className="card" style={{cursor:"pointer"}}><img src="https://cdn-icons-png.flaticon.com/128/8644/8644426.png"></img>
      <p align="center">MARKETING</p></div>
    </div>
    </div>
    <div className="sec">
        <section id="img-sec" style={{cursor:"pointer"}}>
         <img id="img1" src="https://i.pinimg.com/736x/66/77/f2/6677f2459288ffd87e0dd16f1226de15.jpg"></img>
         <img id="img2" src="https://i.pinimg.com/736x/66/f6/51/66f651920b9288d5c42664055943f960.jpg"></img>
         <div id="count"><p id="no"> {count} + </p>
         <p id="ex">YEARS EXPERIENCE</p></div>
         <img src="https://wallpaperaccess.com/full/5296127.jpg" id="img3"></img>
         <img src="https://th.bing.com/th/id/OIP.aQ7TCwTauWNsTc_LPMoiXAHaEo?pid=ImgDet&rs=1" id="img4"></img>
        </section>
        <section id="write-sec">
            <b>
           <p id="our">OUR ABOUT US</p>
           <p id="we">WE ELEVATE THE BEAUTY</p>
           <p id="we">OF YOUR HOME</p>
           <p id="wee" style={{fontSize:"20px"}}>Each color evokes different emotions for each individual. Your emotions still depend on your individual life experience. ipsum dolor sit amet, ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore gna aliqua quis nostrud consequat</p></b>
           <div id="fle">
            <ol>1. Quality Architect Designs</ol>
            <ol>2.100% Satisfaction Guarantee</ol>
            <ol>3.Highly Professional Members</ol>
            <ol>4.Deliver Always on Time</ol>
            <img id="left-a" src="https://th.bing.com/th/id/OIP.CbRIgXm5ZMyNimuPgt1wjAHaEo?w=274&h=180&c=7&r=0&o=5&pid=1.7" style={{cursor:"pointer"}}></img>
           </div>
        </section>
    </div>
    </div>
  );
}
export default Ab;