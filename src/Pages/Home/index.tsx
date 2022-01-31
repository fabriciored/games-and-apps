import './style.scss';

import spaceGameIcon from '../../assets/SpaceGame.png';

import { GitHub } from 'react-feather';

function Home() {
  return (
    <div className="main">
        <section className='title'>
            <h1>fabriciored's</h1>
            <h1>Games&Apps</h1>
        </section>

        <section className='github'>
            <p>A collection of apps i made using javascript for web</p>
            <p>pay me a visit on my github :)</p>
            <a href='https://github.com/fabriciored' target={'_blank'} rel='noreferrer'>
             <h1><GitHub/> fabriciored</h1></a>
        </section>      

        <section className='items'>
            <div>
                <a href='https://react-space-game.vercel.app/' target={'_blank'} rel='noreferrer'>
                <h2>React Space Game</h2>
                <img src={spaceGameIcon} width={'200rem'} alt="" />
                </a>
                <h5>
                https://react-space-game.vercel.app/ <br></br>
                https://github.com/fabriciored/react-space-game
                </h5>
                
                <p>
                
                    <h3>Use W A S D keys to move around.</h3>
                    
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
