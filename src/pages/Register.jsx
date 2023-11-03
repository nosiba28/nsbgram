import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Register = () => {
    // useEffect(()=>{
    //     document.title = 'TinyCarsParadise | Register';
    // }, [])
    const { createUser, profileUpdate } = useContext(AuthContext);
    const navigate = useNavigate();
    const [error, setError] = useState('')
    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, photo, email, password);

        // Password must be 6 characters

        if (password.length < 6) {
            setError('The password is at least six characters!');
            return;
        }


        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                profileUpdate(name, photo)
                    .then(() => {
                        form.reset();
                        navigate('/')
                    })
                    .catch(error => console.log(error));
                console.log(loggedUser);
                setError('');

            })
            .catch(error => {
                console.log(error.message)
            })
        }
    return (
        <div className="hero min-h-screen bg-yellow-100 rounded-lg">
            <div className="hero-content w-1/2">

                <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl text-center font-bold">Register</h1>
                        <form onSubmit={handleRegister}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name='photo' placeholder="photo url" className="input input-bordered" />
                           
                        </div>
                            <div className="form-control mt-6">

                                <input className="btn btn-neutral" type="submit" value="Register" />
                            </div>
                        </form>
                        <p className='m-4 text-center'>Have you already an account?<Link className='text-orange-600 font-bold' to="/login">Login</Link></p>
                       
                        {/* <p className='text-orange-600 font-bold'>{error}</p> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;