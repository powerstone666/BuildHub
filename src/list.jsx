import { useState } from "react";

function Li() {
    const [next, setNext] = useState(0);
    const [url, setUrl] = useState("https://images8.alphacoders.com/647/647571.jpg");

    const gallery = () => {
        if (next === 0) {
            setUrl("https://images5.alphacoders.com/348/348785.jpg");
        } else if (next === 1) {
            setUrl("https://wallpaperaccess.com/full/5090055.jpg");
        } else if (next === 2) {
            setUrl("https://th.bing.com/th/id/R.ccc17ef2e07f52949494f2c2f64cd5a9?rik=NbyU5X3Nyc68fw&riu=http%3a%2f%2fwww.baltana.com%2ffiles%2fwallpapers-20%2f4K-Christmas-House-HD-Desktop-Wallpaper-47561.jpg&ehk=ArkZQu%2bFu5GwIW78y1%2fRV4oEyeJ85x6eANLbL0mNWaY%3d&risl=&pid=ImgRaw&r=0");
        } else if (next === 3) {
            setUrl("https://wallpaperaccess.com/full/5544136.jpg");
        } else if (next === 4) {
            setUrl("https://images8.alphacoders.com/647/647571.jpg");
        } else if (next === 5) {
            setUrl("https://images8.alphacoders.com/109/thumb-1920-1099107.jpg");
        }
    };

    const incr = () => {
        if ( next <= 5) {
            setNext((prevNext) => {
                const updatedNext = prevNext + 1;
                console.log(updatedNext);
                return updatedNext;
            });
            gallery();
        }
    };

    const decr = () => {
        if (next >= 0 ) {
            setNext((prevNext) => {
                const updatedNext = prevNext - 1;
                console.log(updatedNext);
                return updatedNext;
                     });
            gallery();
        }
    };


    return (
        <div className="list">
            <center>
                <p style={{position:"relative",left:"-10px"}}>
                    <b>OUR PROJECT</b>
                </p>
                <h1>RECENT PROJECT LIST</h1>
            </center>
            <div className="listt">
                <img id="left" style={{cursor:"pointer"}} src="https://cdn-icons-png.flaticon.com/128/1634/1634157.png" onClick={decr} alt="left-arrow" />
                <div className="album">
                    <img src={url} style={{cursor:"pointer"}} alt="project-image" />
                </div>
                <img id="right"style={{cursor:"pointer"}} src="https://cdn-icons-png.flaticon.com/128/1634/1634158.png" onClick={incr} alt="right-arrow" />
            </div>
        </div>
    );
}

export default Li;
