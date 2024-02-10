import React,{useState} from 'react'
import ContentWrapper from '../../../Components/contentwrapper/ContentWrapper'
import Switchtabs from '../../../Components/switchtabs/Switchtabs'
import UseFetch from '../../../hooks/UseFetch.jsx'
import '../../home/style.scss'
import Carousel from '../../../Components/carousel/Carousel.jsx'

const Trending = () => {
  const [endpoint,setEndPoint] = useState("day");
  const {data,loading} = UseFetch(`/trending/all/${endpoint}`)


  const onTabChange = (tab) => {
    setEndPoint(tab === "Day" ? "day" : "week");
  }


  return <div className="carouselsection">
    <ContentWrapper>
       <span className="carouselTitle">Trending</span>
       <Switchtabs data={["Day","Week"]} onTabChange={onTabChange}/>
    </ContentWrapper>
    <Carousel data ={data?.results} loading={loading}/>
  </div>
}
export default Trending