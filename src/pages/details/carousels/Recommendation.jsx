
import React from "react";
import './reco.scss'
import Carousel from "../../../Components/carousel/Carousel";
import UseFetch from "../../../hooks/UseFetch.jsx";


const Recommendation = ({ mediaType, id }) => {
    const { data, loading, error } = UseFetch(
        `/${mediaType}/${id}/recommendations`
    );

    return (
        
       
        <Carousel
         
            title="Recommendations"
            data={data?.results}
            loading={loading}
            endpoint={mediaType}
        />
       
    );
};

export default Recommendation;