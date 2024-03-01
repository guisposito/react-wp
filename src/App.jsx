import { ApolloProvider } from "@apollo/react-hooks"
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { Head, Header, Footer, Posts }  from "./components";

const client = new ApolloClient({
  uri: "http://meu-wp.local/graphql",
  cache: new InMemoryCache() 
})


function App() {
  return (
    <div>
      <ApolloProvider client={client}>
      <Head />
      <Header />
      <Posts />
      </ApolloProvider>
      <Footer/>
    </div>
  );
}

export default App;
