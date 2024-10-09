import { Montserrat } from 'next/font/google';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local'
import { extendTheme } from '@chakra-ui/react';

const inter = Inter({ subsets: ['latin'] });

export const montserrat = Montserrat({
  subsets: ['latin'],
  weight: [
    '300',  //Light
    '400',  //Regular
    '500',  //Medium
    '600',  //Semi Bold
    '700',  //Bold
    '800',  //Extra Bold
    '900'   //Black
  ],
});

// export const montserrat = localFont({
//   src: [
//     {
//       path: '../../public/fonts/Montserrat/Montserrat-Light.ttf',
//       weight: '300'
//     },
//     {
//       path: '../../public/fonts/Montserrat/Montserrat-Regular.ttf',
//       weight: '400'  // Book (often considered Regular)
//     },
//     {
//       path: '../../public/fonts/Montserrat-Medium.ttf',
//       weight: '500'
//     },
//     {
//       path: '../../public/fonts/Montserrat/Montserrat-SemiBold.ttf',
//       weight: '600'
//     },
//     {
//       path: '../../public/fonts/Montserrat/Montserrat-Bold.ttf',
//       weight: '700'  // Heavy (commonly Bold or Semi Bold)
//     },
//     {
//       path: '../../public/fonts/Montserrat/Montserrat-ExtraBold.ttf',
//       weight: '800'  // Book (often considered Regular)
//     },
//     {
//       path: '../../public/fonts/Montserrat/Montserrat-Black.ttf',
//       weight: '900'
//     },
//   ],
//   variable: '--montserrat'
// });

export const avenir = localFont({
  src: [
    {
      path: '../../public/fonts/Avenir/Avenir-Light.ttf',
      weight: '300'
    },
    {
      path: '../../public/fonts/Avenir/Avenir-Book.ttf',
      weight: '400'  // Book (often considered Regular)
    },
    {
      path: '../../public/fonts/Avenir/Avenir-Medium.ttf',
      weight: '500'
    },
    {
      path: '../../public/fonts/Avenir/Avenir-Heavy.ttf',
      weight: '700'  // Heavy (commonly Bold or Semi Bold)
    },
    {
      path: '../../public/fonts/Avenir/Avenir-Black.ttf',
      weight: '900'
    }
  ],
  variable: '--avenir'
});

export const helvetica = localFont({
  src: [
    {
      path: '../../public/fonts/Helvetica/HelveticaNeue-Thin.otf',
      weight: '100'
    },
    {
      path: '../../public/fonts/Helvetica/HelveticaNeue-Light.otf',
      weight: '300'
    },
    {
      path: '../../public/fonts/Helvetica/HelveticaNeue-Regular.otf',
      weight: '400'
    },
    {
      path: '../../public/fonts/Helvetica/HelveticaNeue-Medium.otf',
      weight: '500'
    },
    {
      path: '../../public/fonts/Helvetica/HelveticaNeue-Bold.otf',
      weight: '700'
    }
  ],
  variable: '--helvetica'
});

export const fonts = {
  inter: inter.style.fontFamily,
  montserrat: montserrat.style.fontFamily,
  avenir: avenir.style.fontFamily,
  helvetica: helvetica.style.fontFamily,
  body: inter.style.fontFamily,
  heading: inter.style.fontFamily,
}

export const styles = {
  global: {
    html: {
      scrollBehavior: 'smooth',
      scrollPadding: '80px'
    }
  }
}

// export const theme = extendTheme({fonts,styles})


