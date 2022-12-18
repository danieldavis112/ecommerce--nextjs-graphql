import Footer from "./footer"
import Navbar from "./navbar"
import{ApolloClient,InMemoryCache,ApolloProvider} from "@apollo/client";
const Layout = ({children}) => {
    const client = new ApolloClient({
        uri:"http://localhost:3001/graphql",
        cache:new InMemoryCache(),
       });
    return(
        <>
          <ApolloProvider client={client}>
        <Navbar/>
        {children}
        <Footer/>  
        </ApolloProvider>
        </>
    )
}

export default Layout