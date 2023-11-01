
const Home = () => {
    return (
        <div className="bg-yellow-500">
            {/* first section */}
            <form>
                <div className="space-y-12">
                    <div className="border-b border-gray-900/10 pb-12">

                        <div className="m-24 p-2 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="col-span-full text-center">
                                <label htmlFor="about" className="block text-xl font-bold leading-6 text-gray-900">
                                    Whats on your mind?
                                </label>
                                <div className="mt-2 p-2">
                                    <textarea
                                        id="about"
                                        name="about"
                                        rows={3}
                                        className="bg-yellow-100 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        placeholder="please write something...."
                                        defaultValue={''}
                                    />
                                </div>

                            </div>



                            <div className="col-span-full text-center">
                                <label htmlFor="cover-photo" className="block text-xl font-bold leading-6 text-gray-900">
                                    Upload photo
                                </label>
                                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10 bg-yellow-100 m-10">
                                    <div className="text-center">
                                        {/* <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" /> */}
                                        <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                            <label
                                                htmlFor="file-upload"
                                                className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                            >
                                                <span>Upload a file</span>
                                                <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                            </label>
                                            <p className="pl-1">or drag and drop</p>
                                        </div>
                                        <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </form>
        </div>
    );
};

export default Home;