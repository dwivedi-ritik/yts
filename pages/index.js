import Header from '../components/Header'
import Footer from '../components/Footer';
import Head from 'next/head';
import Top25Download from '../components/Top25Download';
import Top25Rated from "../components/Top25Rated"
import Landing from '../components/Landing';

function App() {
  return (
    <div className="App">
      <Head>
        <title>Free Hollywood Movies</title>
        <meta name="viewport" content="width=device-width"></meta>
        <meta charset="utf-8"></meta>
        <meta description="A movie site to download hollywood"></meta>
      </Head>
      <Header />
      <Top25Download />
      <div className="mt-10">
        <Top25Rated />
      </div>
      <Landing />
      <Footer />
    </div>
  );
}

export default App;
