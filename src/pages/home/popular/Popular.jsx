import React,{useState} from 'react'
import Switchtabs from '../../../Components/switchtabs/Switchtabs.jsx'
import UseFetch from '../../../hooks/UseFetch.jsx'
import '../../home/style.scss'
import Carousel from '../../../Components/carousel/Carousel.jsx'
import ContentWrapper from '../../../Components/contentwrapper/ContentWrapper.jsx'

const Popular = () => {
  const [endpoint,setEndPoint] = useState("movie");
  const {data,loading} = UseFetch(`/${endpoint}/popular`)


  const onTabChange = (tab) => {
    setEndPoint(tab === "Movies" ? "movie" : "tv");
  }


  return <div className="carouselsection">
    <ContentWrapper>
       <span className="carouselTitle">Popular items</span>
       <Switchtabs data={["Movies","TV shows"]} onTabChange={onTabChange}/>
    </ContentWrapper>
    <Carousel 
     data ={data?.results} 
     loading={loading}
     endpoint={endpoint}
    />
  </div>
}
export default Popular