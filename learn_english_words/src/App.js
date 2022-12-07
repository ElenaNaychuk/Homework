import WordCard from './components/WordCard/WordCard.jsx';
import Header from './components/Header/Header.jsx';
import MainPage from './components/MainPage/MainPage.jsx';
import Footer from './components/Footer/Footer.jsx';
import WordList from './components/WordList/WordList.jsx';
import './style/App.scss';
// import WordComponent from './components/WordComponent/WordComponent.jsx';
import { words } from './components/WordComponent/wordsData.js';
import CardGallery from './components/CardGallery/CardGallery.jsx';


function App() {
  return (
    <div className='wrapper'>
      <Header />
      <MainPage />
      <WordList words={words} />
      {/* <WordCard
        english={words[0].english}
        transcription={words[0].transcription}
        id={words[0].id}
        russian={words[0].russian}
      /> */}
      <CardGallery words={words} />
      <Footer />
    </div>
  );
}

export default App;
