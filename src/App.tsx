import React, {useEffect,useState} from 'react';
import { ReportLayoutGallery } from '@sutech_jp/raas-react-client'
import './App.css';

function App() {
  const [session, setSession] = useState()


  useEffect( () => {
    fetch("http://localhost:8080/raas/session", {
      method: "POST",
      mode: "cors",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body : JSON.stringify({backUrl : window.location.href , subUrl:'/gallery/general/form'})
    })
    .then(response => response.json())
    .then( s => {
      setSession(s)
    })
  },[])

  return (
    <div className="App">
      <header className="App-header">
        {session ? <ReportLayoutGallery
            session={session}
        /> : 'loading....'}
      </header>
    </div>
  );
}

export default App;
