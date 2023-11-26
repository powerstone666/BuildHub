import {animateScroll as scroll} from "react-scroll";


function Co() {
const send=()=>{
    window.location.href="https://mail.google.com/mail/u/0/#inbox?compose=new";
}
    const scrollTo = (elementId) => {
        scroll.scrollTo(document.getElementById(elementId).offsetTop - 50, {
            duration: 500,
            smooth: 'easeInOutQuad',
        });
    };

    return(
        <div className="Co" id="Co">
            <div className="bl">
                <div className= 'bl-logo'>
                    <img src="https://cdn-icons-png.flaticon.com/128/619/619153.png" style={{cursor:"pointer"}}></img>
                    <p><b>"Build Hub: Crafting Homes, Creating Dreams."</b></p>
                    <p>A company dedicated to expertly building and <br/>designing houses, Build Hub transforms visions </p>
                    <p>into reality with quality <br/>craftsmanship and innovative design.</p>
                </div>
            <div className="bl-in">
              <b>  Our Service</b>
                <p> – Architectural Design</p>
                <p>  – Design & Planning</p>
                <p> – Furniture & Decor</p>
                <p> – Construction Art Design</p>
                <p>  – Lighting Design</p>
            </div>
                <div className="bl-inn">
                    <b>CONTACT US</b>
                    <p align="center">Rashad Nagar Bangalore 560045</p>
                    <p >📞 +916361247856</p>
                    <p>📩 imranpasha8225@gmail.com</p>

                     <input  type={"email"} placeholder="email"></input>
                        <button style={{cursor:"pointer"}} onClick={send}>Send</button>
                </div>
            </div>
            <div className="footer"><h1><b>Copyright © poket all rights reserved.</b></h1>
                <p onClick={()=>{scrollTo("hhh")}} >HOME</p>
                <p onClick={()=>scrollTo("ab")}>ABOUT</p>
                <p onClick={() => scrollTo("kkk")}>PROFILE</p>
            </div>
        </div>
    );
}
export default Co;