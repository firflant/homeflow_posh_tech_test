import { FaSearch } from 'react-icons/fa';
import { useRecoilState } from 'recoil';
import { searchPhraseState } from './globalState'

function SearchBox() {
  const [searchPhrase, setSearchPhrase] = useRecoilState(searchPhraseState);

  return (
    <div className="mt-5 relative">
      <input
        placeholder="Enter a search term"
        className="px-5 py-3 border-gray-400 border rounded w-full"
        value={searchPhrase}
        onChange={e => setSearchPhrase(e.target.value)}
      />

      <FaSearch className="absolute top-3.5 right-3.5 text-gray-400" size={20} />
    </div>
  );
};

export default SearchBox;
