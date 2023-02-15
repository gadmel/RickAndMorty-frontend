import React from "react";

type Origin = {
    name: string;
    url: string;
}

export type CharacterProps = {
    id: number;
    name: string;
    species: string;
    type: string;
    status: string;
    gender: string;
    origin: Origin,
    image: string;
    episode: string[];
    url: string;
    created: string;
}

function Character(props: CharacterProps) {

    return (
        <article className="card">
            <h1 className="card__title">{props.name}</h1>
            <section className="card__summary">
                <div className="card__summary--fact">{props.species}</div>
                <div className="card__summary--fact">{props.gender}</div>
                <div className={"card__summary--fact" + (props.status === "Alive" ? " alive" : props.status === "unknown" ? " unknown" : "")}>{props.status}</div>
            </section>
                <CharacterImage src={props.image} alt={props.name}/>
            <section className="card__details">
                <div className="card__details--fact">Origin: <a href={props.origin.url}>{props.origin.name}</a></div>
                {!!props.type
                    ? <div className="card__details--fact">Fun fact: <span>{props.type}</span></div>
                    : null}
            </section>
        </article>
    );
}

function CharacterImage(props: { src: string; alt: string; }) {
    return <img className="card__image" src={props.src} alt={props.alt}/>;
}

export { Character };