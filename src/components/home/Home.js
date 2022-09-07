import ContactSide from "../contact/ContactSide";
import Intro from "./Intro";

import Circle from "../objects/Circle";
import { useEffect } from "react";

const Home = () =>{

    // const rand_val = () =>
    //     Math.random()

    // const random = () => {
    //     const a=[];
        
    //     const window_x = window.innerWidth;
    //     const window_y = window.innerHeight;
        
    //     return(
    //         [window_x*rand_val(), window_y*rand_val()]
    //     )
    // }

    // useEffect(() => {
    //     const obj_num = 12 * rand_val();
    //     let i;
    //     for(i=0;i<obj_num;i++){
    //         random
    //     }
    // })

    return(
        <div>
            <Intro />
            <ContactSide />
        </div>
    )
}

export default Home;