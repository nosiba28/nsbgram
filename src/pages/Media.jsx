import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Media = () => {
    const [allImage, setAllImage] = useState([]);
    useEffect(() => {
        getImage();
    }, [])
    const getImage = () => {
        fetch('https://nsbgram-server.vercel.app/posts', {
            method: 'GET',

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setAllImage(data);
            })
    }
    return (
        <div>



            <div className="grid grid-cols-3 bg-yellow-500">


                {
                    allImage?.map(data => {
                        return (
                            <div key={data._id} className="card w-96 m-2 bg-yellow-200 shadow-xl">
                                <div className="card-body">
                                    <h2 className="card-title">{data.about}</h2>
                                   

                                </div>
                                <figure className="w-full h-72"> <img width={150} height={150} src={data.image}></img></figure>

                                <div className="card-actions w-full flex justify-center">
                                <Link to={`/postDetails/${data._id}`}><button className="btn btn-warning btn-lg m-2" >Details</button></Link>
                                <Link><button className="btn btn-error btn-lg m-2 text-white" >Love</button></Link>
                                    
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    );
};

export default Media;