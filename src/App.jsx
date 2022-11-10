import { useState, useEffect, useMemo } from 'react';
import { useRecoilValue } from 'recoil';
import Header from './Header';
import PropertyCard from './PropertyCard';
import { searchPhraseState } from './globalState'

function App() {
  const [properties, setProperties] = useState([]);

  // use this state to keep track of the user's saved/bookmarked properties
  const [savedProperties, setSavedProperties] = useState([]);

  const searchPhrase = useRecoilValue(searchPhraseState);

  useEffect(() => {
    const fetchPropertyData = async () => {
      const response = await fetch('/property-data.json');
      const json = await response.json();

      setProperties(json.result.properties.elements);
    };

    fetchPropertyData();
  }, []);

  const fitleredProperties = useMemo(
    () => searchPhrase
      ? properties.filter(item => item.short_description.includes(searchPhrase))
      : properties,
    [properties, searchPhrase],
  )

  return (
    <div className="container mx-auto my-5">
      <Header />

      <div className="grid grid-cols-1 gap-4 mt-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {!!fitleredProperties && fitleredProperties.map((property) => <PropertyCard key={property.property_id} property={property} />)}
      </div>
    </div>
  );
}

export default App;
