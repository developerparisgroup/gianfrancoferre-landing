import { Form, Header, Image } from 'semantic-ui-react';
import Counter from './components/Counter';
import logo from './assets/images/logo.svg';
import bgImage from './assets/images/bg.jpg';
import checkImage from './assets/images/check.svg';
import facebookLogo from './assets/images/facebook.svg';
import instagramLogo from './assets/images/insta.svg';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import phoneOptions from './assets/phoneCodes';

const App = () => {
  const { container, header, bg, title, heroItem, subTitle, footer } = styles;
  return (
    <div style={container}>
      <header style={header}>
        <Image src={logo} size="tiny" style={{ marginBottom: '1vh' }} />
        <hr />
      </header>


      <div className='main'>

        <div style={{ ...heroItem, backgroundColor: "#323232" }}>
          <h1 style={title}>we are coming soon.</h1>
          <div style={{ width: '80%', flexGrow: 1 }}>
            <Counter />
          </div>

          <div style={{ flexGrow: 1 }}>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
              <span><Image src={checkImage} style={{ widht: 30, height: 30 }} /></span>
              <span>
                <Header.Subheader style={subTitle}>Special  deals</Header.Subheader>
              </span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
              <span><Image src={checkImage} style={{ widht: 30, height: 30 }} /></span>
              <span>
                <Header.Subheader style={subTitle}>Exclusive referral program</Header.Subheader>
              </span>
            </div>
          </div>


          <div style={{ width: '70%', flexGrow: 1 }}>
            <Form size='huge'>
              <Form.Group widths='3'>
                <Form.Input fluid placeholder='Name' width={6} />
                <Form.Dropdown fluid placeholder='Code' defaultValue={'971'} selection pointing search width={4} options={phoneOptions.map(e => ({ text: e.code, value: e.code, flag: e.iso.toLowerCase() }))} />
                <Form.Input fluid placeholder='Phone' width={6} />
              </Form.Group>

              <Form.Group widths='2'>
                <Form.Input fluid placeholder='Email' width={13} type='email' />
                <Form.Button fluid size='huge' color='black'>NOTIFY ME</Form.Button>
              </Form.Group>
            </Form>
          </div>

          <div style={footer}>
            <a href='https://facebook.com/gianfrancoferreofficial' target="_blank" rel="noreferrer">
              <Image style={{ width: 20, height: 20 }} src={facebookLogo} />
            </a>
            <a href='https://www.instagram.com/gfrancoferreofficial/?hl=en' target="_blank" rel="noreferrer" >
              <Image style={{ width: 20, height: 20 }} src={instagramLogo} />
            </a>
          </div>
        </div>
        <div style={{ ...heroItem, ...bg, minHeight: '30vh' }} />
      </div>
    </div>
  );
};

const styles = {
  noSpaces: {
    padding: 0,
    margin: 0,
  },
  container: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column'
  },
  header: {
    padding: '.5em'
  },
  bg: {
    backgroundImage: `url(${bgImage})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  },
  heroItem: {
    flexBasis: '50%',
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    gap: '1vh',
    alignItems: 'center',
    paddingTop: '3vh',
    paddingBottom: '3vh'
  },
  title: {
    fontFamily: 'BentonSans',
    fontWeight: "400",
    fontSize: 36,
    color: 'white'
  },
  subTitle: {
    fontFamily: 'BentonSans',
    fontWeight: '400',
    fontSize: '2rem',
    padding: '0 2rem',
    letterSpacing: "0.1em",
    color: "white",
  },
  footer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1vw'
  }
};
export default App;