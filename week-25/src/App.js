import PieChart from './components/GoogleChart/Chart';

import SuperheroCard from './components/SuperHeroCard/SuperHeroCard';
import { superheroes } from './components/SuperHeroCard/superherosData';

import TariffCard from './components/TariffCard/TariffCard';
import { tariffDatas } from './components/TariffCard/TariffCardData';
import { useState } from 'react';

import './style/App.css';


function App() {

  const [tariffCardsStates, setTariffCardsStates] = useState([false, false, false, false])
  const [testState, setTestState] = useState(false);
  console.log(tariffCardsStates);
  function setActiveTariffCard(tariffCardId) {
    const copyData = tariffCardsStates.map((item, index) => index === tariffCardId);
    /* {
      if (index === tariffCardId) {
        return !item;
      }
      return item;
    } */
    setTariffCardsStates(copyData);
  }

  return (
    <>
      <button onClick={() => setTestState(!testState)} >toggle test</button>
      <div>{'' + testState}</div>
      <PieChart />;
      <div className='App'>
        {
          superheroes.map((superheroe) =>
            <SuperheroCard
              name={superheroe.name}
              universe={superheroe.universe}
              occupation={superheroe.occupation}
              superPower={superheroe.superPower}
              url={superheroe.url}
              detailedDescription={superheroe.detailedDescription}
            />
          )
        }
      </div>
      <div className='container_tariff-cards'>
        {
          tariffDatas.map((tariffData, index) =>
            <TariffCard
              tariff={tariffData.tariff}
              monthlyPrice={tariffData.monthlyPrice}
              internetSpeed={tariffData.internetSpeed}
              text={tariffData.text}
              // cardSize={tariffData.cardSize}
              colorBlue={tariffData.colorBlue}
              colorGreen={tariffData.colorGreen}
              colorRed={tariffData.colorRed}
              colorBlack={tariffData.colorBlack}
              id={tariffData.id}
              toggleState={() => setActiveTariffCard(tariffData.id)}
              // onClick={() => { console.log('clicked'); setActiveTariffCard(tariffData.id) }}
              isActive={tariffCardsStates[tariffData.id]}
            />
          )
        }
      </div>
    </>
  );
}

export default App;
