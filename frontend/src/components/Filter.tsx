import useParam from "../hooks/useQueryParam";

const Filter = () => {
  const { setParam } = useParam();

  return (
    <div className="filter-container">
      <div className="filter-item">
        <label htmlFor="artistName">ArtistName: </label>
        <input
          type="text"
          name="artistName"
          id="artistName"
          onChange={(e) => setParam({ artistName: e.target.value })}
        />
      </div>
      <div className="filter-item">
        <label htmlFor="genreName">GenreName: </label>
        <input
          type="text"
          name="genreName"
          id="genreName"
          onChange={(e) => setParam({ genreName: e.target.value })}
        />
      </div>
      <div className="filter-item">
        <label htmlFor="minPrice">MinPrice: </label>
        <input
          type="number"
          name="minPrice"
          id="minPrice"
          value={0}
          onChange={(e) => setParam({ minPrice: parseInt(e.target.value) })}
        />
      </div>
      <div className="filter-item">
        <label htmlFor="maxPrice">MaxPrice: </label>
        <input
          type="number"
          name="maxPrice"
          id="maxPrice"
          value={100}
          onChange={(e) => setParam({ maxPrice: parseInt(e.target.value) })}
        />
      </div>
    </div>
  );
};

export default Filter;
