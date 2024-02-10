import React,{useState} from 'react'
import ContentWrapper from '../../../Components/contentwrapper/ContentWrapper'
import Switchtabs from '../../../Components/switchtabs/Switchtabs'
import UseFetch from '../../../hooks/UseFetch.jsx'
import '../../home/style.scss'
import Carousel from '../../../Components/carousel/Carousel.jsx'

const TopRated = () => {
  const [endpoint,setEndPoint] = useState("movie");
  const {data,loading} = UseFetch(`/${endpoint}/top_rated`)


  const onTabChange = (tab) => {
    setEndPoint(tab === "Movies" ? "movie" : "tv");
  }


  return <div className="carouselsection">
    <ContentWrapper>
       <span className="carouselTitle">Top Rated</span>
       <Switchtabs data={["Movies","TV shows"]} onTabChange={onTabChange}/>
    </ContentWrapper>
    <Carousel 
     data ={data?.results} 
     loading={loading}
     endpoint={endpoint}
    />
  </div>
}
export default TopRated