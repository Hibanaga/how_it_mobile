import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import Router from './src/pages/Router';

const App = () => {
  useEffect(() => {
    const init = async () => {};

    init().then(async () => {
      await SplashScreen.hide();
    });
  }, []);

  return <Router />;
};

export default App;
