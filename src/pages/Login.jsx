import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="hero min-h-screen bg-yellow-500 rounded-lg">
            <div className="hero-content w-1/2">
            
                <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl text-center font-bold">Login</h1>
                        <form>
                       
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
                        <p className='m-4 text-center'>New to nsbApp?<Link className='text-orange-600 font-bold' to="/register">Register</Link></p>
                        <div>
                            <div className="divider">OR</div>
                            <div className="text-center">
                                <button className="btn btn-circle btn-outline btn-secondary">
                                    G
                                </button>
                            </div>
                        </div>
                        {/* <p className='text-orange-600 font-bold'>{error}</p> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;