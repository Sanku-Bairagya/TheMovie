import React from "react";
import Carousel from "../../../Components/carousel/Carousel";
import UseFetch from "../../../hooks/UseFetch.jsx";


const Similar = ({mediaType , id}) => {
    
    const {data,loading,error} = UseFetch(`/${mediaType}/${id}/similar`)

    const title = mediaType === "tv" ? "Similar TV Shows" : "Similar Movies";



    return (
        <Carousel
         title={title}
         data={data?.results}
         loading={loading}
         endpoint = {mediaType}          
        />
    )
}
export default Similar