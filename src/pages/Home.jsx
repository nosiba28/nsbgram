import { useState, useEffect } from "react";

const Home = () => {
    const [image,setImage] = useState("");
    const [allImage, setAllImage]=useState([]);
    const convertToBase64 = (e) =>{
          console.log(e);
          const reader = new FileReader();
          reader.readAsDataURL(e.target.files[0]);
          reader.onload = () =>{
            console.log(reader.result);
            setImage(reader.result);
          };
          reader.onerror = error => {
            console.log('Error', error);
          };
    }
    useEffect(()=>{
        getImage();
    },[])
    const handelAddPosts = () => {
        event.preventDefault();
        const form = event.target;
        const about = form.about.value;
        // const uploadedFile = form.image;
        const posts = { about, image };
        console.log(posts);

        fetch('https://nsbgram-server.vercel.app/posts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(posts)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            form.reset();
        })
    }
    const getImage =()=>{
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
        <div className="bg-yellow-100">
            {/* first section */}
            <form onSubmit={handelAddPosts} action="/profile" method="post" encType="multipart/form-data">
                <div className="space-y-12 ">
                    <div className="border-b border-gray-900/10 pb-12">

                        <div className="p-2 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="col-span-full text-center">
                                <label htmlFor="about" className="block text-xl font-bold leading-6 text-gray-900">
                                    Whats on your mind?
                                </label>
                                <div className="mt-2 p-2">
                                    <textarea
                                        id="about"
                                        name="about"
                                        rows={3}
                                        className="bg-white block w-full rounded-3xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        placeholder="please write something...."
                                        defaultValue={''}
                                    />
                                </div>

                            </div>

                            <div className="col-span-full text-center">

                                <div className="mb-3 w-full">
                                    <label
                                        htmlFor="formFile"
                                        className="mb-2 inline-block text-xl font-bold text-neutral-700 dark:text-neutral-200"
                                    >
                                        Share your photos...
                                    </label>
                                    <input
                                        className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
                                        type="file"
                                        name="uploadFile"
                                        id="formFile"
                                        onChange={convertToBase64}
                                    />
                                    {image==""||image==null?"":<img width={100} height={100} src={image}></img>}
                                </div>

                            </div>
                            <div className=""> <input className="btn btn-block btn-neutral" type="submit" value="Add a Post" /></div>
                        </div>
                    </div>
                </div>

            </form>

            <div className="grid grid-cols-3 gap-2">
                 {
                    allImage?.map(data=>{
                        return(
                            <img width={300} height={300} key={data._id} src={data.image}></img>
                        )
                    })
                 }
            </div>
        </div>
    );
};

export default Home;