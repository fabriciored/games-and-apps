import './style.scss';

import spaceGameIcon from '../../assets/SpaceGame.png';

function Home() {
  return (
    <div className="main">
        <section className='title'>
            <h1>fabriciored's</h1>
            <h1>Games&Apps</h1>
        </section>

        <section>
            <p>pay me a visit me on github: fabriciored</p>
      
        </section>      

        <section className='items'>
            <div>
                <h2>React Space Game</h2>
                <img src={spaceGameIcon} width={'200rem'} alt="" />
                https://react-space-game.vercel.app/
                <p>
                
                    <h3>Use W A S D keys to move around :)</h3>
                    
                    <ul>
                        <li>Simple use of React components and properties</li>
                        <li>Simple use of React hooks (character movement by changing grid state)</li>
                        <li>Typescript</li>
                        <p>In progress: </p>
                        <li>Savegame mechanics with context API</li>
                    </ul>
                </p>
            </div>
        </section>

    </div>
  );
}

export default Home;
