import vid from './assets/villa.mp4'
function Vd(){
    return(
        <div className="video"><div>
            <video controls autoPlay loop muted><source src={vid} style={{cursor:"pointer"}} ></source></video>
        </div></div>
    );
}
export default Vd;