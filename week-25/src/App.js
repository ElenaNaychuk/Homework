import PieChart from './components/GoogleChart/Chart';
import SuperheroCard from './components/SuperHeroCard/SuperHeroCard';
import { superheroes } from './components/SuperHeroCard/superherosData';

import './style/App.css';


function App() {
  return (
    <>
      <PieChart />;
      <div className='App'>
        {
          superheroes.map((superheroe) =>
            <SuperheroCard name={superheroe.name} universe={superheroe.universe} occupation={superheroe.occupation} superPower={superheroe.superPower} url={superheroe.url} detailedDescription={superheroe.detailedDescription} />
          )
        }
      </div>
    </>
  );
}

export default App;
