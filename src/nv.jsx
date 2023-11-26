import { useState } from "react";
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

function Nv(){
    const [see,setsee]=useState('invisible');
    const scrollTo = (elementId) => {
        scroll.scrollTo(document.getElementById(elementId).offsetTop - 50, {
            duration: 500,
            smooth: 'easeInOutQuad',
        });
    };
    const men =()=>{
         if(see=='invisible')
         {
            setsee('visible');
            document.getElementById('menu').style.display='block';
            document.getElementById('menu').style.zIndex=1002;
            
         }
         else{
            setsee('invisible');
            document.getElementById('menu').style.display='none';
         }
      
    }
    const men2 =()=>{
        if(see=='invisible')
        {
            setsee('visible');
            document.getElementById('menu2').style.display='block';
            document.getElementById('menu2').style.zIndex=1002;

        }
        else{
            setsee('invisible');
            document.getElementById('menu2').style.display='none';
        }

    }
    return ( 
       <div className="nav" >
         <div className="com">
         <img id="ic" src="https://cdn-icons-png.flaticon.com/128/619/619153.png" style={{cursor:"pointer"}}></img>
             <h1 id="aaa"><b style={{color:"orange"}}>BUILD</b>  HUB</h1>
             <h1 id="a" style={{ cursor: "pointer" }} onClick={() => scrollTo("ho")}>
                 HOME
             </h1>
             <h1 id="a" style={{ cursor: "pointer" }} onClick={() => scrollTo("ab")}>
                 ABOUT
             </h1>
             <h1 id="a" style={{ cursor: "pointer" }} onClick={() => scrollTo("oservice")}>
                 SERVICE
             </h1>
             <h1 id="a" style={{ cursor: "pointer" }} onClick={() => scrollTo("pp")}>
                 PAGES
             </h1>
             <h1 id="a" style={{ cursor: "pointer" }} onClick={() => scrollTo("kkk")}>
                 BLOG
             </h1>
             <h1 id="a" style={{ cursor: "pointer" }} onClick={() => scrollTo("Co")}>
                 CONTACT
             </h1>
         <img id="b" src="https://cdn-icons-png.flaticon.com/128/10550/10550106.png" onClick={men} style={{cursor:"pointer"}}></img>
             <img className="small" src="https://cdn-icons-png.flaticon.com/128/56/56763.png" onClick={men2}></img>
         </div>
         <div className="menu" id="menu" >
             <span id="co">COMPANY ADDRESS</span>
             <div  id="add">
             <p style={{fontSize:"22px"}} align="center">No 16,16th Cross Noor layout rashad Nagar Bangalore 560045</p>
             <br></br>
             <div id="tele">
             <img id="pin" src="https://cdn-icons-png.flaticon.com/128/159/159052.png"></img>
             <p id="te">+91 6361247856</p>
               </div>
               <p align="center">FOLLOW US</p>
               <div className="ico" >
                <img src="https://cdn-icons-png.flaticon.com/128/733/733547.png" style={{cursor:"pointer"}}></img>
                <img src="https://cdn-icons-png.flaticon.com/128/300/300221.png" style={{cursor:"pointer"}}></img>
                <img src="https://cdn-icons-png.flaticon.com/128/2504/2504957.png" style={{cursor:"pointer"}}></img>
                <img src="https://cdn-icons-png.flaticon.com/128/1409/1409946.png" style={{cursor:"pointer"}}></img>
                

               </div>
             </div>
         </div>
           <div className="menu2" id="menu2">

              <p onClick={() => scrollTo("bt")}> HOME</p>
               <p onClick={() => scrollTo("ab")}>ABOUT</p>
               <p onClick={() => scrollTo("oservice")}>  SERVICE</p>
               <p onClick={() => scrollTo("pp")}>   PAGES</p>
               <p onClick={() => scrollTo("kkk")}> BLOG</p>
               <p onClick={() => scrollTo("Co")}>  CONTACT</p>

           </div>
       </div>
    );
}
export default Nv;