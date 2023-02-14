// import logo from './logo.svg';
import './App.css';
import { CardDesign } from './Component/CardDesign';
// import Cards from './Component/Cards';
// import Sample from './Component/Sample';
// import Practcards from './Component/Practcards';
// import Collegelisting from './Component/Collegelisting';
// import Cardshover from './Component/Cardshover';
// import Carousel from './Component/Carousel';
import Cardcomp from './Component/Cardcomp';

// -----------------------------------------------
import { Paper, Switch } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';




function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  const theme = createTheme({
    typography: {
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    },
    palette: {
      mode: darkTheme ? 'dark' : 'light'
    }
  })
  return (


    <>
      <ThemeProvider theme={theme}  >
        <CssBaseline />
        <Paper>
          <Switch checked={darkTheme} onChange={() => { setDarkTheme(!darkTheme) }} sx={{ position:"fixed"  , zIndex:5 }} />
          <CardDesign theme={darkTheme} />
          {/* <main >Hello </main> */}
          {/* avtImage,cardImage,clgname,clgdistrict,clgstate,course */}
          {/* <Cardcomp clgname="anna university" avtImage="https://www.thenewsminute.com/sites/default/files/Anna_university_Wikicommons_Sivahari_1200-compressed.jpg"   /> */}
          
        </Paper>
      </ThemeProvider>
    </>

  );
}

export default App;
