import React from "react";

export default function FilmsPresentation({ films }) {
    //console.log(players);
    return (
        <div className="container">
            {films.map((film) => (
                <div className="column" key={film.id}>
                    <div className="card">
                        <img src={film.image} alt="" />
                        <h3>{film.title}</h3>
                        <p className="title">{film.nation}</p>
                        <p>{film.year}</p>
                        <p>
                            <button>Detail</button>
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}
