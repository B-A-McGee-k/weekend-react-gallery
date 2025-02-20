import { useState } from "react";
// import monthItems from "../../../server/modules/calendar.data";
import GalleryItem from "../GalleryItem/GalleryItem";
// import Header from "../Header/Header";

function GalleryList({images}) {
    // monthItem.map(functon())

    // const [selectedMonth, setSelectedMonth] = useState('Select a month')

    const clicked = (image) => {
        console.log("in clicked function");
        
        // setSelectedMonth(month)
        
        alert(`You selected ${image.name}`)
    }

    const [counter, setLikeCounter] = useState(0);
    const likeCounter = () => {
        console.log("Liked the image!");
        setLikeCounter(counter + 1)
    }
    // <button onClick={() => setCounter(counter + 1)}>Increase</button>
    // const Selected = 2
    //Make the alert, take in specific details
    // const popUp = () => {
    // };

    // const selected = () => {
    //     console.log('Selected Function running');
        
    //     setSelectedMonth(month.name)

    //     // console.log("Selected month is: ", {selectedMonth});
        
    //     // return(
    //     //     <h1>{String(SelectedMonth)}</h1>
    //     // )
    // }

    return (
        <>
            {/* <Header selectedMonth={selectedMonth}/> */}
            {/* {JSON.stringify(months)} */}
            {/* {JSON.stringify(selectedMonth) } */}
            <ul data-testid="GalleryList">
                {/* Test, MonthList works */}
                {images.map((image, index) => (
                    <GalleryItem onClick={clicked} key={index} image={image} />

                ))}
            </ul>
        </>
    )
}


export default GalleryList;
