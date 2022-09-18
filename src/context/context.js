import React, { useState, useEffect } from 'react';
import mockUser from './mockData.js/mockUser';
import mockRepos from './mockData.js/mockRepos';
import mockFollowers from './mockData.js/mockFollowers';
import axios from 'axios';
import { useContext } from 'react';
import { mockComponent } from 'react-dom/test-utils';

const rootUrl = 'https://api.github.com';

const GithubContext = React.createContext();

// Provider, Consumer - GithubContext.Provider

const GithubProvider = ({ children }) => {
 const [githubUser, setGithubUser] = useState(mockUser);
 const [repos, setRepos] = useState(mockRepos);
 const [followers, setFollowers] = useState(mockFollowers);

 const value = { githubUser, repos, followers }

 return (
  <GithubContext.Provider value={value}>
   {children}
  </GithubContext.Provider>
 )
}

// export const useGlobalContext = () => {
//  return useContext(GithubContext)
// }

export { GithubProvider, GithubContext }