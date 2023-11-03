import { useEffect, useState } from "react";

const About = () => {
    const [allInfo, setAllInfo] = useState(null);
    useEffect(()=>{
        getInfo();
    },[])

    const getInfo =()=>{
        fetch('https://nsbgram-server.vercel.app/about-me', {
            method: 'GET',
           
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setAllInfo(data);
        })
    }
    const handelMyInfo = event =>{
        event.preventDefault();
        const form = event.target;
        const Name = form.name.value;
        const Email = form.email.value;
        const University = form.university.value;
        const Address = form.address.value;
        const updatedInfo = {Name, Email, University, Address};
        console.log(updatedInfo);

        fetch(`https://nsbgram-server.vercel.app/about-me/6544d6f8dc369093b78e5930`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedInfo)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount>0){
                  form.reset();
            }
        })
    }
    return (
        <div className="bg-yellow-100">
             <div className="text-right">
           <button className="btn btn-warning m-2" onClick={() => document.getElementById('my_modal_1').showModal()}>Edit Info</button>
           </div>
            <div className="text-center">
                   <h1 className="text-4xl font-bold m-6">ABOUT ME</h1>
                   <div className="">
                   {
                     allInfo?.map(data=>{
                        return(
                            
                            <div key={data._id} className="text-black text-xl pb-24">
                                <h2><span className="font-bold text-yellow-950">Name:</span> {data.Name}</h2>
                                <h2><span className="font-bold text-yellow-950">Email:</span> {data.Email}</h2>
                                <h2><span className="font-bold text-yellow-950">University:</span> {data.University}</h2>
                                <h2><span className="font-bold text-yellow-950">Address:</span> {data.Address}</h2>

                            </div>
                        )
                    })
                   }
                   </div>
                
            </div>
            {/* modal */}
          <div>
                {/* Open the modal using document.getElementById('ID').showModal() method */}
          
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                <div className="bg-yellow-600 p-24">
            <h2 className="text-3xl font-extrabold text-center mb-4 text-white">Update</h2>
            <form onSubmit={handelMyInfo}>
                
                {/* third row */}
                <div className="mb-8">
                    <div className="form-control md:w-full">
                        <label className="label">
                            <span className="label-text text-white">Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Name" className="input input-bordered w-full"/>
                        </label>
                    </div>
                  
                </div>
                {/* forth row */}
                <div className="mb-8">
                <div className="form-control md:w-full">
                        <label className="label">
                            <span className="label-text text-white">Email</span>
                        </label>
                        <label className="input-group">
                            <input type="email" name="email" placeholder="Email" className="input input-bordered md:w-full" />
                        </label>
                    </div>
                </div>
                {/* fifth row */}
                <div className="mb-8">
                <div className="form-control md:w-full">
                        <label className="label">
                            <span className="label-text text-white">University</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="university" placeholder="University" className="input input-bordered w-full" />
                        </label>
                    </div> 
                </div>
                <div className="mb-8">
                <div className="form-control md:w-full">
                        <label className="label">
                            <span className="label-text text-white">Address</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="address" placeholder="Address" className="input input-bordered w-full" />
                        </label>
                    </div> 
                </div>
    
                <input className="btn btn-block btn-neutral text-white" type="submit" value="Update the Info" />
            </form>
        </div>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
          </div>
        </div>
    );
};

export default About;