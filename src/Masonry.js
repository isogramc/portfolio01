import "./masonry.css"

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

function Masonry(){
    return(
        <div className="container3">
            <figure>
                <img src={baby} alt="a baby"/>
                <figcaption><a href="#">Child outside</a></figcaption>
            </figure>
            <figure>
                <img src={baby2} alt="another baby"/>
                <figcaption><a href="#">Child inside</a></figcaption>
            </figure>
            <figure>
                <img src={lali}
                     alt="Rijkjavik city"/>
                <figcaption><a href="#">Walking tour</a></figcaption>
            </figure>
            <figure>
                <img src={mother} alt="At the beach"/>
                <figcaption><a href="#">At the beach</a></figcaption>
            </figure>
            <figure className="landscape1">
                <img src={silhoette} alt="Sunown at the beach"/>
                <figcaption><a href="#">Sundown at the beach</a></figcaption>
            </figure>
            <figure className="landscape1">
                <img src={beach} alt="Children playing"/>
                <figcaption><a href="#">Children playing</a></figcaption>
            </figure>
            <figure>
                <img src={cake} alt="High tea"/>
                <figcaption><a href="#">High tea</a></figcaption>
            </figure>
            <figure className="landscape">
                <img src={conversation} alt="progress"/>
                <figcaption><a href="#">Pottery class</a></figcaption>
            </figure>
            <figure>
                <img src={dress}
                     alt="A new dress"/>
                <figcaption><a href="#">Amongst flowers</a></figcaption>
            </figure>
            <figure>
                <img src={cute} alt="Eris the cat"/>
                <figcaption><a href="#">Playful</a></figcaption>
            </figure>
            <figure>
                <img src={nature} alt="The wind whispers"/>
                <figcaption><a href="#">Trees</a></figcaption>
            </figure>
            <figure>
                <img src={paris} alt="reflections"/>
                <figcaption><a href="#">Secrets of Paris</a></figcaption>
            </figure>
            <figure>
                <img src={perspective}
                     alt="three hot air balloons in a blue sky"/>
                <figcaption><a href="#">Sky Gardens</a></figcaption>
            </figure>
            <figure className="landscape1">
                <img src={klaarbar} alt="Piano lounge"/>
                <figcaption><a href="#">An evening out</a></figcaption>
            </figure>
            <figure>
                <img src={hat} alt="soft light"/>
                <figcaption><a href="#">Sailed</a></figcaption>
            </figure>
            <figure className="landscape1">
                <img src={greececolour} alt="Greece"/>
                <figcaption><a href="#">Delphi</a></figcaption>
            </figure>
            <figure className="landscape">
                <img src={pose} alt="Art day"/>
                <figcaption><a href="#">Arts and Crafts Day</a></figcaption>
            </figure>
            <figure>
                <img src={sabre} alt="tigre"/>
                <figcaption><a href="#">I made this</a></figcaption>
            </figure>
            <figure>
                <img src={spain} alt="spain"/>
                <figcaption><a href="#">Spain</a></figcaption>
            </figure>
            <figure>
                <img src={singled_out} alt="smile"/>
                <figcaption><a href="#">Luna</a></figcaption>
            </figure>
            <figure className="landscape1">
                <img src={usi} alt="the girls"/>
                <figcaption><a href="#">Single Ladies</a></figcaption>
            </figure>

            <figure className="landscape1">
                <img src={greecebw} alt="greecebw"/>
                <figcaption><a href="#">Delphi</a></figcaption>
            </figure>
        </div>
    );
}

export default Masonry;
