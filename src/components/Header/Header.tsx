import React, {Dispatch, SetStateAction} from "react";

interface HeaderProps {
	search: string;
	setSearch: Dispatch<SetStateAction<string>>
	setFilterByStatus: (status: string) => void;
}

function Header(props: HeaderProps) {
	function handleSetFilterByStatus(status: string) { props.setFilterByStatus(status); }
	function handleSearchInputChange(event: React.ChangeEvent<HTMLInputElement>) {
		props.setSearch(event.target.value);
	}

	const filterModes = [
		{status: "", label: "Any"},
		{status: "Alive", label: "Alive"},
		{status: "Dead", label: "Dead"},
		{status: "unknown", label: "unknown"}
	];

	return (
		<header className="controls" id="app-controls">
			<h1 className="controls__title">Rick and Morty</h1>
			<div className="controls__search">
				<input className="controls__search--input"
						 value={props.search}
						 onChange={handleSearchInputChange}
						 type="text"
						 placeholder="Search by name"/>
			</div>
			<div className="controls__buttons">
				<span className="controls__buttons--legend">Filter by status:</span>
				{filterModes.map((mode) => {
					return (
						<button className="controls__buttons--button" key={mode.label} onClick={() => handleSetFilterByStatus(mode.status)}>
							{mode.label}
						</button>
					)
				})}
			</div>
		</header>
	);
}

export default Header;