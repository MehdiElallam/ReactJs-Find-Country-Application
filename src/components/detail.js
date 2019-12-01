import React, { useState, useEffect } from "react";
import { async } from "async";

function Detail({ match }) {
  useEffect(() => {
    fetchDetails();
  }, []);

  const [country, setCountry] = useState({
    currencies: [{}],
    timezones: [],
    languages: [{}]
  });

  const fetchDetails = async () => {
    const fetchDetails = await fetch(
      `https://restcountries.eu/rest/v2/name/${match.params.code}`
    );
    const country = await fetchDetails.json();
    setCountry(country[0]);
    console.log(country[0]);
  };

  return (
    <div className="detail">
      <h1>{country.name}</h1>
      <img src={country.flag} />
      <div className="infos">
        <div className="section left-section">
          <span>
            <b>Capital : </b> {country.capital}
          </span>
          <span>
            <b>Region : </b> {country.region}
          </span>
          <span>
            <b>Code : </b> {country.alpha2Code}
          </span>
          <span>
            <b>Language : </b> {country.languages[0].name}
          </span>
        </div>
        <div className="section left-section">
          <span>
            <b>Population : </b> {country.population}
          </span>
          <span>
            <b>Native Name : </b> {country.region}
          </span>
          <span>
            <b>Currency : </b> {country.currencies[0].name}
          </span>
          <span>
            <b>TimeZones : </b> {country.timezones[0]}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Detail;
