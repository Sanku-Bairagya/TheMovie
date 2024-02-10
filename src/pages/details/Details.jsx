import React from 'react'
import { useParams } from 'react-router-dom';
import'./style.scss'
import UseFetch from "../../hooks/UseFetch.jsx"
import Detailsbanner from './detailsBanner/Detailsbanner';
import Cast from './cast/Cast';
import VideoSection from './videoeSection/VideoSection';
import Similar from "./carousels/Similar"
import Recommendation from "./carousels/Recommendation.jsx"

const Details = ({}) => {
  const {mediaType,id} = useParams();
  const {data,loading} = UseFetch(`/${mediaType}/${id}/videos`)
  const {data:credits,loading:creditsLoading} = UseFetch(`/${mediaType}/${id}/credits`)
  return (
   <div>
      <Detailsbanner video={data?.results?.[0]} crew={credits?.crew}/>
      <Cast data={credits?.cast} loading={creditsLoading}/>
      <VideoSection data={data} loading={loading}/>
      <Similar mediaType={mediaType} id={id}/>
      <Recommendation mediaType={mediaType} id={id}/>
   </div>
  )
};

export default Details