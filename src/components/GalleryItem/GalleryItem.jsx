import { useState } from "react";
// import monthItems from "../../../server/modules/calendar.data";

// useState hook is the way to hold the var
// import {useState} from ‘react’;
// const [var, setVar] = useState(intialValue);


function galleryItem({ image, onClick, likeCounter }) {


    // monthItems.map(function(month) {
    //     return (
    //         <li data-testid="monthItem">
    //             {month.name}
    //         </li>
    //     )
    // })
   
    

    return (<>
        {/* <p>{JSON.stringify(selectedImage)}</p> */}
        <li data-testid="galleryItem">
            {/* <p>Test, imageItem works</p> */}
            <button onClick={()=> {onClick(image)}}><img src={image.url}></img></button>
            <br></br>
            <button data-testid="like" onClick={(image)=> {likeCounter()}}>Like</button>
        </li></>
    )
};

export default galleryItem;
