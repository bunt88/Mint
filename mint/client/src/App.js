import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import './App.css';


import Home from './pages/Home'
// import Success from './pages/Success'
import OrderHistory from './pages/OrderHistory'
import LoginSignup from './pages/LoginSignup'
import Navigation from './components/Navbar'
import Categories from './pages/Categories'

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Navigation />
      <Router>
        <div>
            <Routes>
              <Route 
                path="/" 
                element={<Home />} 
              />
              <Route 
              path="orderHistory"
              element={<OrderHistory/>}
              />
              <Route 
              path="login"
              element={<LoginSignup/>}
              />
              <Route 
              path="categories"
              element={<Categories/>}
              />
              {/* <Route 
                path="/login" 
                element={<Login />} 
              />
              <Route 
                path="/signup" 
                element={<Signup />} 
              />
              <Route 
                path="/success" 
                element={<Success />} 
              />
              <Route 
                path="/orderHistory" 
                element={<OrderHistory />} 
              />
              <Route 
                path="/products/:id" 
                element={<Detail />} 
              />
              <Route 
                path="*" 
                element={<NoMatch />} 
              /> */}
            </Routes>
         
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
