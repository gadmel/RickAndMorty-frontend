
import { CharacterProps } from '../components/Character/Character';
import React, {useEffect, useState} from "react";

function useRickAndMortyApi() {
	const [loading, setLoading] = useState<boolean>(true);
	const [characters, setCharacters] = useState<CharacterProps[]>([]);
	const [nextPage, setNextPage] = useState<string>("https://rickandmortyapi.com/api/character");

	useEffect(() => {
		if (nextPage === null) {
			console.log("All characters have been fetched successfully.")
			setLoading(false)
			return;
		}
		fetch(nextPage)
			.then(response => response.json())
			.then(data => {
				setCharacters([...characters, ...data.results]);
				setNextPage(data.info.next);
			});
		return () => {console.log("20 more characters have been fetched.");}
	}, [nextPage, loading]);

	const [search, setSearch] = React.useState("");
	const [filterByStatus, setFilterByStatus] = React.useState("");

	function filterCharactersByStatus(characters: CharacterProps[], status: string) {
		return status !== ""
			? characters.filter(character => character.status === status)
			: characters;
	}

	const filterBySearchQuery = (characters: CharacterProps[], searchQuery: String) => {
		return characters.filter((character) => character.name.toLowerCase().includes(searchQuery.toLowerCase()));
	}

	const filteredCharacters = filterBySearchQuery(filterCharactersByStatus(characters, filterByStatus), search)

	return {
		filteredCharacters,
		search,
		setSearch,
		setFilterByStatus,
		loading
	};
}

export default useRickAndMortyApi;