import vid from './assets/a.mp4'
function Vd(){
    return(
        <div className="video"><div>
            <video controls  muted><source src={vid} style={{cursor:"pointer"}} ></source></video>
        </div></div>
    );
}
export default Vd;