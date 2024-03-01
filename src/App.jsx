import { ApolloProvider } from "@apollo/react-hooks"
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { SEO, Header, Footer, Posts , AuthorCard}  from "./components";
import { HelmetProvider } from 'react-helmet-async';



const client = new ApolloClient({
  uri: "http://meu-wp.local/graphql",
  cache: new InMemoryCache() 
})


function App() {
  const helmetContext = {};

  return (
    <div>
      <ApolloProvider client={client}>
        <HelmetProvider context={helmetContext}>
          <SEO />
          <Header />
          <AuthorCard  />
          <Posts />
        </HelmetProvider>
      </ApolloProvider>
      
      <Footer/>
    </div>
  );
}

export default App;
