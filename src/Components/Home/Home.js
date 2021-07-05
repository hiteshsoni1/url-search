import { useState } from 'react'
import './style.css'
import UrlIframe from '../UrlIframe/UrlIframe'
import Header from '../Header/header'

const Home = ({ history }) => {
    const [urls, setUrls] = useState(new Array(2).fill([]));
    const handleUrls = (url, index) => {
        let _urls = [...urls];
        _urls[index] = url;
        setUrls(_urls);
    }
    return <>
        <Header userName='hitesh' handleUrls={handleUrls} history={history} />
        <div className="main">
            {
                urls.map((url, index) => <UrlIframe url={url} key={index} />)
            }
        </div>
    </>
}
export default Home;