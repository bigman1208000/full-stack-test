import useParam from "../hooks/useQueryParam";
import { useTrackQuery } from "../hooks/useRequest";
import { GET_TRACK } from "../graphql";

const Table = () => {
  const { param } = useParam();
  const { data } = useTrackQuery(GET_TRACK, param);

  return (
    <table>
      <thead>
        <tr>
          <td>ID</td>
          <td>NAME</td>
          <td>PRICE</td>
          <td>DURATION</td>
          <td>GENRE</td>
        </tr>
      </thead>
      <tbody>
        {data?.getTracks?.map((value: any, index: number) => (
          <tr key={index}>
            <td>{value.id}</td>
            <td>{value.name}</td>
            <td>${value.price}</td>
            <td>{value.duration}s</td>
            <td>{value.genre}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
