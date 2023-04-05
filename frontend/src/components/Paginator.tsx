import useParam from "../hooks/useQueryParam";

const Paginator = () => {
  const { param, setParam } = useParam();

  return (
    <div className="paginator-container">
      <div>
        <button
          onClick={() => setParam({ page: param.page - 1 })}
          disabled={param.page === 0}
        >
          Prev
        </button>
        <button>{param.page + 1}</button>
        <button onClick={() => setParam({ page: param.page + 1 })}>Next</button>
        <select
          className="pageSize-selector"
          onChange={(e) => setParam({ pageSize: parseInt(e.target.value) })}
        >
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
        </select>
      </div>
    </div>
  );
};

export default Paginator;
