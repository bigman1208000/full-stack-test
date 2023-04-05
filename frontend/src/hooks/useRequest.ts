import { DocumentNode, useQuery } from "@apollo/react-hooks";
import { QueryParam } from "./useQueryParam";

export function useTrackQuery(gqlQuery: DocumentNode, datas: QueryParam) {
  const { loading, error, data } = useQuery(gqlQuery, {
    variables: datas,
  });
  return { loading, error, data };
}
