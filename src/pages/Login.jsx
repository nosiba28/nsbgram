import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const Login = () => {
    // useEffect(()=>{
    //     document.title = 'TinyCarsParadise | Login';
    // }, [])
    const {signIn, signInWithGoogle} = useContext(AuthContext);
    const [error, setError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;
        if (password.length < 6) {
            setError('The password is at least six characters!');
            return;
        }
        // console.log(email, password)

        signIn(email, password)
        .then(res => {
            const user = res.user;
            console.log(user);
            navigate(from, {replace: true})

        })
        .then(error => console.log(error))
    }
    const handleGoogleSignIn = () =>{
        signInWithGoogle()
        .then(result => {
            console.log(result);
            navigate(from, {replace: true})
        })
        .catch(error => console.log(error))
    }
    return (
        <div className="hero min-h-screen bg-yellow-100 rounded-lg">
            <div className="hero-content w-1/2">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl text-center font-bold">Login</h1>
                        <form onSubmit={handleLogin}>
                       
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
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">

                                <input className="btn btn-neutral" type="submit" value="Login" />
                            </div>
                        </form>
                        <p className='m-4 text-center'>Are you new to nsbgram?<Link className='text-orange-600 font-bold' to="/register">Register</Link></p>
                        <div>
                            <div className="divider">OR</div>
                            <div className="text-center">
                                <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline btn-neutral">
                                    G
                                </button>
                            </div>
                        </div>
                        <p className='text-orange-600 font-bold'>{error}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;