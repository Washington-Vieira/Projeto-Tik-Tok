import React, { useEffect, useState } from "react";
import "./App.css";
import Video from "./pages/Video";
import db from "./config/firebase";
import { collection, getDocs } from "firebase/firestore/lite";

function App() {

  let maxHeight;
  if(window.innerHeight <= 800){
    maxHeight = window.innerHeight
  }


  const [videos, setVideos] = useState([]);

  async function getVideos() {
    const videosCollection = collection(db, "videos");
    const videosSnapshot = await getDocs(videosCollection);
    const videosList = videosSnapshot.docs.map(doc =>doc.data());
    setVideos(videosList);
  }

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className="App" style={{maxHeight: maxHeight + "px"}}>
      <div className="app__videos">
        {/*PROPERTY: PROPRIEDADES, COMO RECEBE E UTILIZA CADA PROPRIEDADE NAVEGANDO ENTRE ABAS E LEVANDOA INFORMAÇÃO ATRÁVES DE VARIAVEIS E DANDO A ELAS SIGNIFICADO LEVANDO A INFORMAÇÃO, (LINKS VINCULADOS AO BANCO DE DADOS FIREBASE E FUNCIONANDO, BUSCANDO DENTRO DO BANCO DE DADOS, RETORNANDO A RENDERIZAÇÃO*/}
        {videos.map((item) => {
          return (
            <Video
              likes={item.likes}
              messages={item.messages}
              shares={item.shares}
              name={item.name}
              description={item.description}
              music={item.music}
              url={item.url}
            />
          );
        })}

        {/* <Video
         likes={444}
         messages={555}
         shares={333}
         name="washington"
         description="Bird olhando para a camera"
         music="Clap your hands"
         url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/bird.mp4?t=2023-05-22T19%3A40%3A47.052Z"
        /> */}
      </div>
      <header className="App-header"></header>
    </div>
  );
}

export default App;
