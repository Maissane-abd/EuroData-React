import React, { useState, useEffect } from "react";

function App() {
  // Déclaration de l'état pour stocker les données des pays
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    // Appel à l'API pour récupérer les données des pays européens au chargement du composant
    fetch("https://restcountries.com/v3.1/region/europe")
      .then((response) => response.json()) // Conversion de la réponse en format JSON
      .then((data) => {
        console.log(data)
        // Tri des données des pays par ordre alphabétique
        const sortedCountries = data.sort((a, b) => {
          if (a.name.common < b.name.common) {
            return -1;
          } else if (a.name.common > b.name.common) {
            return 1;
          } else {
            return 0;
          }
        });
        // Mise à jour de l'état avec les données triées des pays
        setCountries(sortedCountries);
      })
      .catch((error) => {
        console.error("Error fetching data:", error); // Gestion des erreurs en cas d'échec de la requête
      });
  }, []); // Déclenchement de l'effet uniquement au montage du composant

  return (
    <div className="min-h-screen bg-slate-800">
      <div className="max-w-7xl mx-auto py-20 px-4">
        <h1 className="text-gray-50 text-4xl">Europe Countries Data.</h1>
        <p className="text-gray-100 text-xl mb-8">
          Click on a card to reveal a country's information.
        </p>
      </div>
    </div>
  );
}

export default App;
