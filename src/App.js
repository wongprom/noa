import { useEffect, useState } from 'react';
import axios from 'axios';

import Button from './components/buttons/Button';
import { githubRepos } from './data/data';
import GitHubStatsCard from './components/cards/GitHubStatsCard';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);
  const [dataGitHubRepo, setDataGitHubRepo] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabledDecrement, setisDisabledDecrement] = useState(false);
  const [isDisabledIncrement, setisDisabledIncrement] = useState(false);

  useEffect(() => {
    getGitHubRepo();
    counter < 1 ? setisDisabledDecrement(true) : setisDisabledDecrement(false);
    counter >= githubRepos.length - 1
      ? setisDisabledIncrement(true)
      : setisDisabledIncrement(false);
  }, [counter]);

  const getGitHubRepo = async () => {
    setIsLoading(true);
    const URL = `https://api.github.com/repos/${githubRepos[counter]}`;
    try {
      const response = await axios.get(URL);
      const tmpDataGitHubRepo = {
        fullName: response.data.full_name,
        description: response.data.description,
        amountOfStars: response.data.stargazers_count,
      };
      setTimeout(() => {
        console.log('This will run after 1 second!');
        setError(null);
        setDataGitHubRepo(tmpDataGitHubRepo);
        setIsLoading(false);
      }, 1300);
    } catch (error) {
      setTimeout(() => {
        setDataGitHubRepo(null);
        setError(error.response);
        console.error('error.response) => ', error.response);
        setIsLoading(false);
      }, 1300);
    }
  };

  const handlerDecrement = () => {
    setCounter(counter - 1);
  };

  const handlerIncrement = () => {
    setCounter(counter + 1);
  };
  // ! move to /components folder
  const ErrorCard = ({ error = {} }) => {
    console.log('error', error);
    console.log('🚀 ~ file: App.js ~ line 65 ~ ErrorCard ~ error', error);
    return (
      <div className="errorCard">
        <div className="errorCard__textBox">
          <h2>Error</h2>
          <h3>Error Status: {error?.status}</h3>
          <h3>Error Message: {error?.data.message}</h3>
        </div>
      </div>
    );
  };

  return (
    <div className="app">
      <section className="app__step1">
        <div className="app__buttonsWrapper">
          <Button
            disabled={isDisabledDecrement}
            onClick={handlerDecrement}
            text=" - DECREMENT"
            normal
            stateCounter={counter}
          />
          <h2>Counter: {counter}</h2>
          <Button
            disabled={isDisabledIncrement}
            onClick={handlerIncrement}
            text=" + INCREMENT"
            primary
            stateCounter={counter}
          />
        </div>
      </section>
      <section className="app__step3">
        {isLoading && <div>Loading...</div>}
        {dataGitHubRepo && !error && !isLoading ? (
          <GitHubStatsCard dataGitHubRepo={dataGitHubRepo} />
        ) : (
          !isLoading && <ErrorCard error={error} />
        )}
      </section>
    </div>
  );
}

export default App;
