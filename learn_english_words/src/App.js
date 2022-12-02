import WordCard from './components/WordCard/WordCard.jsx';
import Header from './components/Header/Header.jsx';
import MainPage from './components/MainPage/MainPage.jsx';
import Footer from './components/Footer/Footer.jsx';
import './style/App.scss';
import WordsList from './components/WordList/WordList.jsx';
import { words } from './components/WordList/wodsListData.js';

function App() {
  return (
    <div className='wrapper'>
      <Header />
      <MainPage />
      <div className='container_words_list'>
        {
          words.map((word, index) =>
            <WordsList
              english={word.english}
              transcription={word.transcription}
              russian={word.russian}
              tag={word.tags}
              id={word.id}
            />
          )
        }
      </div>
      <WordCard
        english={words[0].english}
        transcription={words[0].transcription}
        id={words[0].id}
        russian={words[0].russian}
      />
      <Footer />
    </div>
  );
}

export default App;
