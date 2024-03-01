import { ApolloProvider } from "@apollo/react-hooks"
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { Header, Posts }  from "./components";

const client = new ApolloClient({
  uri: "http://meu-wp.local/graphql",
  cache: new InMemoryCache() 
})

function App() {
  return (
    <div>
      <Header />
      <ApolloProvider client={client}>
        <Posts />
      </ApolloProvider>
    </div>
  );
}

export default App;
