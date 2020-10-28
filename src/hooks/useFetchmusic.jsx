import { useState, useEffect } from 'react';


export function useFetchmusic (url) {


  // ------- PARA USAR EL CUSTOM HOOK Y CONSUMIR DE LA API
  const [music, setMusic] = useState([]);


  async function fetchMusic (url) {
    const response = await fetch(url);
    const data = await response.json();
    setMusic(data)
  }

  useEffect (() => {
    fetchMusic(url);
  }, [])


  return [music]
}

