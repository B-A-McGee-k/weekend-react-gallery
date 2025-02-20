import { useEffect, useState } from 'react';
import Axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';
import GalleryItem from '../GalleryItem/GalleryItem';
// import { response } from 'express';

function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    Axios.get('/api/gallery')
    .then(response => {
      setImages(response.data)
    })
    .catch(error => {
      console.error('Error, could not GET from fetch', error)
    })
  }, []);
    return (
      <div>
        <header>
          <h1>React Gallery</h1>
        </header>

        <p>The gallery goes here!</p>
        <GalleryList />
        <img src="images/goat_small.jpg"/>
        <img src="images/goat_stache.png"/>
      </div>
    );
}

export default App;

//The following is previous code