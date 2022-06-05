import home from './assets/home.svg';
import rss from './assets/rss.svg';
import user from './assets/user.svg';
import settings from './assets/settings.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [active, setActive] = useState(0);

  return (
    <div className="App">
      <div>
        <h1>
          {(["Home", "Feed", "User", "Settings"])[active]}
        </h1>
      </div>
      <nav className="navbar">
        <div 
          className={active === 0 ? "active" : ""}
          onClick={()=>setActive(0)}
        >
          <img src={home} />
        </div>
        <div 
          className={active === 1 ? "active" : ""}
          onClick={()=>setActive(1)}
        >
          <img src={rss} />
        </div>
        <div 
          className={active === 2 ? "active" : ""}
          onClick={()=>setActive(2)}
        >
          <img src={user} />
        </div>
        <div 
          className={active === 3 ? "active" : ""}
          onClick={()=>setActive(3)}
        >
          <img src={settings} />
        </div>
      </nav>
    </div>
  );
}

export default App;
