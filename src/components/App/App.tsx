import React, {Suspense} from 'react';
import useRickAndMortyApi from "../../hooks/useRickAndMortyApi";
import Header from "../Header/Header";
import {Character} from '../Character/Character';

function App() {
	const { filteredCharacters, search, setSearch, setFilterByStatus, loading } = useRickAndMortyApi();

	return (
		 <Suspense fallback={<div className="suspense">Loading...</div>}>
			 <div id="app">
				 <Header search={search} setSearch={setSearch} setFilterByStatus={setFilterByStatus} />
				 {loading
					 ? <div className="suspense">Loading...</div>
					 : <main className="gallery" id="app-gallery">
						 {!!filteredCharacters
							 ? filteredCharacters.map((character) => <Character
								 key={"character_id_" + character.id} {...character}/>)
							 : null}
						 {filteredCharacters.length < 1
							 ? <div className="gallery__message">No character found</div>
							 : null}
					 </main>}
			 </div>
		 </Suspense>
	);
}

export default App;
