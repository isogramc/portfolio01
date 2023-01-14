import "./thumbnails.scss"
import baby from "./images/baby.png"
import baby2 from "./images/baby2.png"
import beach from "./images/beach.png"
import cake from "./images/cake.png"
import conversation from "./images/conversation.png"
import cute from "./images/cute.png"
import dress from "./images/dress.png"
import hat from "./images/hat.png"
import klaarbar from "./images/klaarbar.png"
import lali from "./images/lali.png"
import mother from "./images/mother_and_daughter.png"
import nature from "./images/nature.png"
import paris from "./images/paris.png"
import perspective from "./images/perspective.png"
import santa from "./images/santa-xmasparty.png"
import silhoette from "./images/silhoette.png"
import singled_out from "./images/singled_out.png"
import pose from "./images/so_not_posing.png"
import sabre from "./images/so_proud_of_sabre.png"
import spain from "./images/spain.png"
import greecebw from "./images/tour-greece-bw.png"
import greececolour from "./images/tour_greece-colour.png"
import usi from "./images/usi.png"
import water from "./images/water.png"
import {useState} from "react";
import {useRef} from "react"

function Thumbnails(){

    const registerOffClick = useRef(null)
    const imgArr2 = [baby, baby2, beach, cake, conversation, cute, dress, hat, klaarbar, lali, mother, nature, paris, perspective, santa, silhoette, singled_out, pose, sabre, spain, greecebw, greececolour, usi, water];
    const [show, setShow] = useState(false)
    const [vizKey, setVizKey] = useState(0);
    document.addEventListener('mousedown',closeOpenImage)

    function closeOpenImage(e) {
        if(registerOffClick.current && show && !registerOffClick.current.contains(e.target)){
            setShow(false)
        }
    }

    function imageRef(key) {
        setVizKey(key);
        setShow(true);
    }

    return  (
        <div className="container1">
            <div ref={registerOffClick} className="contains-enlarged">
                {show?<img className="enlarged" src={imgArr2[vizKey]} alt="baby"/>:null}
            </div>
            <div className="containsImg">
                {imgArr2.map((image, i) => (
                    <div key={i} onClick={()=>imageRef(i)}><img className="thumbnail" src={image?image:null} alt={image}/></div>
                ))}
            </div>
        </div>
    );
}
export default Thumbnails;
