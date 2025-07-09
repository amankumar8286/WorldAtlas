import React from 'react'
import countryFacts from "../api/countryData.json";

export default function CountryFacts() {
    return (
        <div className="gradient-cards">
            {countryFacts.map((country) => {

                const { id, country_name, capital, population, interesting_fact } = country;

                return (


                    <div className="card" key={id}>

                        <div className="container-card bg-blue-box">
                            <p className="card-title">{country_name}</p>
                            <p>
                                <span className="card-description">Capital :-</span>{capital}</p>

                            <p className="card-title"></p>
                            <p>
                                <span className="card-description">Population :-</span>{population}</p>

                            <p className="card-title"></p>
                            <p><span className="card-description">Intresting Facts :-</span>{interesting_fact}
                            </p>

                        </div>


                    </div>
                )

            })
            }


        </div>
    )
}
