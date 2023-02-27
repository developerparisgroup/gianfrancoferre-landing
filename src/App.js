
import 'semantic-ui-css/semantic.min.css';
import "@fontsource/poppins";
import "@fontsource/baskervville";
import './App.css';
import { Image, Segment } from 'semantic-ui-react';

import Counter from "./components/Counter";
import Welcome from './components/Welcome';

import bgImage from './assets/images/bg.svg';
import logoImage from './assets/images/logo.svg';
import facebookLogo from './assets/images/facebook.svg';
import instagramLogo from './assets/images/instagram.svg';


const App = () => {
  const { container, logo, counter, content, footer } = styles;

  return (
    <Segment basic style={container}>

      <div style={logo}>
        <Image size='small' centered src={logoImage} />
      </div>

      <div style={counter}>
        <Counter />
      </div>

      <div style={content}>
        <Welcome />
      </div>

      <div style={footer}>
        <Image style={{ width: 20, height: 20 }} src={facebookLogo} />
        <Image style={{ width: 20, height: 20 }} src={instagramLogo} />
      </div>

    </Segment>
  );
};

const styles = {
  container: {
    height: '100vh',
    background: `url(${bgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    flexDirection: 'column',
    margin: 0,
    padding: 0
  },

  logo: {
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  counter: {
    position: 'absolute',
    top: "20vh",
    left: 0,
    right: 0,
    bottom: 0
  },

  content: {
    display: 'flex',
    alignItems: 'flex-end',
    flexGrow: 3,
    marginLeft:'5vw'
  },

  footer: {
    display: 'flex',
    flexGrow: .5,
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1vw'
  }


};


export default App;