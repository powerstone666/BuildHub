import myself from './assets/web.jpeg';
function Bl(){
    const take=()=>{
        window.location.href=('www.linkedin.com/in/imranpasha636');
    }
    return(
        <div className="blog">
            <div className="logo" id="kkk">
                <div>
                    <center>
                        <p id="aaa"><b style={{display:"inline-block",borderBottom:"4px solid white"}}>OUR </b><b style={{color:"white",display:"inline-block",borderBottom:"4px solid orange"}}>PARTNERS</b></p>
                        <div className="logoo" style={{cursor:"pointer"}}>
                            <img src="https://dezignlane.com/wp-content/uploads/2023/06/Dezign-Lane-1.png"></img>
                            <img src="https://dezignlane.com/wp-content/uploads/2023/06/Dezign-Lane-3.png"></img>
                            <img src="https://dezignlane.com/wp-content/uploads/2023/06/Dezign-Lane-2.png"></img>
                            <img src="https://dezignlane.com/wp-content/uploads/2023/06/Dezign-Lane-5.png"></img>
                            <img src="https://dezignlane.com/wp-content/uploads/2023/06/Dezign-Lane-6.png"></img>
                            <img src="https://dezignlane.com/wp-content/uploads/2023/06/Dezign-Lane-7.png"></img>
                            <img src="https://dezignlane.com/wp-content/uploads/2023/06/Dezign-Lane-8.png"></img>
                        </div>
                        </center>
                </div>
                <center>
                    <div id="ceo" style={{margin:"0px"}}>
                        <p id="ce"><b>CEO</b></p>
                        <p id="and"><b>&</b></p>
                        <p id="found"><b>CO-FOUNDER</b></p>
                    </div>
                <div className="profile">
                    <img src={myself}></img>
                     <div id="proin" >
                         <img src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png" onClick={take} style={{cursor:"pointer"}}></img>
                         <b>IMRAN PASHA</b>
                         <br></br>
                         <p id="hk">HKBK COLLEGE OF ENGINEERING</p>
                     </div>
                </div>
                    </center>
            </div>
        </div>
    );
}
export default Bl;