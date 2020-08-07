import React, { useState } from 'react';
import './App.css';
import { TEXT_DISPLAY_CHARACTER_LIMIT } from './constants';
import { truncateTextWithEllipsis } from './utils';

function App() {
  const [state, setArticleState] = useState({articleTitle:"Madde 6 - Toplumsal cinsiyet konusunda hassasiyet gerektiren politikalar ",
  articleBody:`Taraflar bu Sözleşmenin uygulanmasına ve sözleşme hükümlerinin etkilerinin
  değerlendirilmesine bir toplumsal cinsiyet bakış açısı katacak ve kadınlarla erkekler
  arasında eşitliğe ve kadınların güçlendirilmesine ilişkin politikalarını yaygınlaştıracak ve
  etkili bir biçimde uygulayacaklardır.`, shouldDisplaySeeMoreButton: false,
  isFullNoteVisible: true});
  
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="app-header-title">
         {"#istanbulsozlemesiyasatir"}
        </h1>
      </header>
      <section className={"app-section"}>
        <h2 className="" title={state.articleTitle}>
          {state.articleTitle}
        </h2>
        <p className="app-section-body" title={state.articleBody}>
          {state.isFullNoteVisible ? state.articleBody : truncateTextWithEllipsis(state.articleBody, TEXT_DISPLAY_CHARACTER_LIMIT)}
        </p>
        {state.shouldDisplaySeeMoreButton && (
          <button
            id={"MnLongDescription.read-more-button"}
            className={"read-more-button"}
            onClick={handleReadMoreButtonClick}>
            {state.isFullNoteVisible ? "daha az göster" : "daha fazla oku"}
          </button>
        )}
      </section>
      <footer className="app-footer">
      <button className="next-button" onClick={onPrevButtonClick}>
          {"Önceki"}
        </button>
        <button className="next-button" onClick={onNextButtonClick}>
          {"Sonraki"}
        </button>
      </footer>
    </div>
  );

  function onNextButtonClick(event){
    // event.preventDefault();
    // event.stopPropogation();
    const articleBody = `Taraflar bu Sözleşme kapsamındaki her türlü şiddetin önlenmesi ve bu tür şiddet
    eylemleriyle mücadele edilmesine yönelik ilgili tüm tedbirleri içeren Devlet çapında etkili,
    kapsamlı ve birbiriyle koordineli politikaların benimsenip uygulanmasını mümkün kılacak,
    gerekli yasal ve diğer tedbirleri alacak ve kadına karşı şiddete karşı bütüncül bir
    mukabelede bulunulmasını temin edeceklerdir.`;

    setArticleState({articleTitle: "Madde 7 – Kapsamlı ve koordineli politikalar",
    articleBody, shouldDisplaySeeMoreButton: articleBody.toString().length > TEXT_DISPLAY_CHARACTER_LIMIT, isFullNoteVisible:!articleBody.toString().length > TEXT_DISPLAY_CHARACTER_LIMIT});
  }

  function onPrevButtonClick(){
    // event.preventDefault();
    // event.stopPropogation();
    setArticleState({articleTitle : `Madde 5 – Devletin yükümlülükleri ve titizlikle yapması gereken inceleme ve
araştırmalar`,
    articleBody : `Taraflar kadınlara karşı herhangi bir şiddet eylemine girişmekten imtina edecek ve devlet
    yetkililerinin, görevlilerinin, organlarının, kurumlarının ve Devlet adına hareket eden diğer
    aktörlerin bu yükümlülüğe uygun bir biçimde hareket etmelerini temin edeceklerdir. `});
  }

  function handleReadMoreButtonClick(){
    setArticleState({...state, isFullNoteVisible: !state.isFullNoteVisible});
  }
}

export default App;
