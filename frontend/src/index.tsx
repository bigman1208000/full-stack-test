import React from "react";
import ReactDOM from "react-dom/client";
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import { ParamProvider } from "./hooks/useQueryParam";
import App from "./App";
import "./index.css";

export const link = createHttpLink({
  uri: "http://localhost:3000/graphql",
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <ParamProvider>
        <App />
      </ParamProvider>
    </React.StrictMode>
  </ApolloProvider>
);
