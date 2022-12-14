import { FaBookmark } from 'react-icons/fa';

function PropertyCard({ property, isSaved, onSave }) {
  return (
    <div className="border-2 bg-gray-50">
      <div className="relative">
        <img
          src={property.photos[0]
            ? `https://mr0.homeflow.co.uk/${property.photos[0]}`
            : 'https://via.placeholder.com/700x450?text=Property'
          }
          alt={property.display_address}
        />

        <button
          className="absolute top-0 right-2"
          title={isSaved
            ? "Click to bookmark this property"
            : "Click to unbookmark this property"
          }
        >
          <FaBookmark
            className={isSaved ? "text-red-400" : "text-yellow-400"}
            size="40"
            onClick={onSave}
          />
        </button>

        <p className="absolute bottom-0 right-0 px-2 py-1 border-t border-l bg-gray-50">{property.price}</p>
      </div>

      <div className="px-3 py-2">
        <p>{property.display_address}</p>
      </div>
    </div>
  );
};

export default PropertyCard;
