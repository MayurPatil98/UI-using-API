import react, { useEffect, useState } from "react";
import '../App.css';




let APIData = () => {
    

    const [data, setData] = useState([]);
    const getNewsData = async () => {
        const res = await fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=e452314a48d44668ad8173537b312624");
        const actualData = await res.json();
        console.log(actualData.articles);
        setData(actualData.articles);
    }
    useEffect(() => {
        getNewsData();
    }, []);
    
    return (
        <>
        <div className="container row">
        {
            data.map((curEle, ind) => {
                return (
                    <div className="col-md-4">
                        <div className="card row">
                            <img src={curEle.urlToImage} className="card-img-top" alt="Not Found" />
                            <div className="card-body   ">
                                <h5 className="card-title">{curEle.title ? curEle.title.slice(0, 60) : ""}...</h5>
                                <p className="card-text">{curEle.description ? curEle.description.slice(0, 130) : ""}...</p>
                                <a href={curEle.url} target="_blank" className="btn btn-primary">Read More</a>
                            </div>
                        </div>
                    </div>
                );
            })
        }
    </div>
    </>
    );
}



export default APIData;







