import React, { useEffect, useState } from "react";

const FlagDisplay = () => {
  const [flags, setFlags] = useState([]);

  useEffect(() => {
    fetchFlags();
  }, []);

  const fetchFlags = () => {
    fetch("https://restcountries.com/v2/all")
      .then((response) => response.json())
      .then((data) => {
        setFlags(data);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="flag-container">
      {flags.map((country) => (
        <div key={country.name} className="card">
          <img src={country.flags.svg} alt={country.name} />
          <h2>{country.name}</h2>
          <p>Capital: {country.capital}</p>
          <p>Population: {country.population}</p>
          <p>Region: {country.region}</p>
        </div>
      ))}
    </div>
  );
};

export default FlagDisplay;
