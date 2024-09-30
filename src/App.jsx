import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import 'ion-smile/style.css'
import ionSmile from 'ion-smile'

const HOST = import.meta.env.VITE_SMILE_HOST
const TOKEN = import.meta.env.VITE_SMILE_TOKEN


function App() {
  const [count, setCount] = useState(0)

  const config = {
            credential:{
                host    : HOST, 
                token   : TOKEN, 
                userkey : "user1", 
                session : "example-session"
            },
            dom:{
                moveable:true // default false
            }
        }


  useEffect(()=>{
        const smile = new ionSmile(config);
        smile.init();
  
        smile.on("ready",(e)=>{
            if(e.module="ai" && e.status){
                smile.start()
            }
        });
        smile.on("alert",(e)=>{
            console.log(e);
            
            if(e.status){ // status = true, if fraud detected
                // alert(e.description)
            }
        });
  },[])


  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
