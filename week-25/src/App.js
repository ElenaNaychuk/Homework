import PieChart from './components/GoogleChart/Chart';

import SuperheroCard from './components/SuperHeroCard/SuperHeroCard';
import { superheroes } from './components/SuperHeroCard/superherosData';

import TariffCard from './components/TariffCard/TariffCard';
import { tariffDatas } from './components/TariffCard/TariffCardData';
import { useState } from 'react';
import Chat from './components/Chat/Chat';

import './style/App.css';


function App() {

  const [activeTariffCardId, setActiveTariffCardId] = useState(undefined)

  return (
    <>
      <Chat />
      <PieChart />;
      <div className='App'>
        {
          superheroes.map((superheroe, index) =>
            <SuperheroCard
              name={superheroe.name}
              universe={superheroe.universe}
              occupation={superheroe.occupation}
              superPower={superheroe.superPower}
              url={superheroe.url}
              detailedDescription={superheroe.detailedDescription}
              key={index}
            />
          )
        }
      </div>
      <div className='container_tariff-cards'>
        {
          tariffDatas.map((tariffData) =>
            <TariffCard
              id={tariffData.id}
              toggleState={() => setActiveTariffCardId(tariffData.id)}
              isActive={activeTariffCardId === tariffData.id}

              tariff={tariffData.tariff}
              monthlyPrice={tariffData.monthlyPrice}
              internetSpeed={tariffData.internetSpeed}
              text={tariffData.text}
              colorBlue={tariffData.colorBlue}
              colorGreen={tariffData.colorGreen}
              colorRed={tariffData.colorRed}
              colorBlack={tariffData.colorBlack}
              key={tariffData.id}
            />
          )
        }
      </div>
    </>
  );
}

export default App;
