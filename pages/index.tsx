import { useEffect, useState } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';

const alankey = '7dbed153bd692acea653ba6e59cde0582e956eca572e1d8b807a3e2338fdd0dc/stage'

const Home = () => {
  const [newsarticles , setNewsArticles] = useState([]);

  useEffect(() => {
    if (alanBtn) {
      alanBtn({
        key: alankey,
        onCommand: ({ command, articles }) => {
          if (command === 'newHeadlines') { 
            setNewsArticles(articles);
          }
        },
      });
    }
  }, []);
  return ( 
    <div>
    home
  </div> );
}

 
export default Home;

