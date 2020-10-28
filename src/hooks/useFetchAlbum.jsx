import { useState, useEffect } from 'react';


export function useFetchAlbum (url) {

  // ------- PARA USAR EL CUSTOM HOOK Y CONSUMIR DE LA API
  const [album, setAlbum] = useState([]);


  async function fetchAlbum (url) {
    const response = await fetch(url);
    const data = await response.json();
    setAlbum(data)
  }

  useEffect (() => {
    fetchAlbum(url);
  }, [])


  return [album]
}

