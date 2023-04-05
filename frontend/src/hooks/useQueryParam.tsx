import React, { useContext, useState } from "react";

export interface QueryParam {
  artistName: string;
  genreName: string;
  minPrice: number;
  maxPrice: number;
  page: number;
  pageSize: number;
}

interface ContextProp {
  param: QueryParam;
  setParam: (data: Object) => void;
}

export const defaultData = {
  artistName: "",
  genreName: "",
  minPrice: 0,
  maxPrice: 100,
  page: 0,
  pageSize: 10,
};

const ParamContext = React.createContext<ContextProp>({
  param: defaultData,
  setParam: ({}) => {},
});

export const ParamProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [param, setParam] = useState<QueryParam>(defaultData);

  return (
    <ParamContext.Provider
      value={{
        param,
        setParam: (data: Object) =>
          setParam((prev) => {
            const merge = { ...prev, ...data };
            return merge;
          }),
      }}
    >
      {children}
    </ParamContext.Provider>
  );
};

export default () => useContext(ParamContext);
