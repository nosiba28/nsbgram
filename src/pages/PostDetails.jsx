import { useLoaderData } from "react-router-dom";


const PostDetails = () => {
    const postDetail = useLoaderData();
    const { _id, about, image } = postDetail;
    return (
        <div className="hero min-h-screen bg-yellow-100 text-black font-sans text-lg">
            <div className="hero-content flex-col lg:flex-row gap-10">
                <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                  
                    <p>{about}</p>
                    
                </div>
            </div>
        </div>
    );
};

export default PostDetails;