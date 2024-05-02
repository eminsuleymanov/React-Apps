import './App.css'
import Appbar from './components/Appbar'
import { getAll } from './API/services';
import { useEffect, useState } from 'react';
import Cards from './components/Cards/Cards';
function App() {
  const [artists, setArtists] = useState([]);
  async function getArtists() {
    const artists = await getAll()
    console.log(artists);
    setArtists(artists.data);
  }

  useEffect(() => {
    getArtists();

  },[])
  return (
    <>
    <Appbar/>
    <Cards data={artists}/>
    </>
  )
}

export default App
