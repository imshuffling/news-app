import { categories } from '../constants';
import fetchNews from '../lib/fetchNews';
import NewsList from './NewsList';
import MOCK_DATA from '../response.json';

async function Homepage() {
  // const news: NewsResponse =
  //   MOCK_DATA || (await fetchNews(categories.join(',')));

  console.log('categories', categories.join(','));

  const news: NewsResponse = await fetchNews(categories.join(','));

  return (
    <div>
      <NewsList news={news} />
    </div>
  );
}

export default Homepage;
