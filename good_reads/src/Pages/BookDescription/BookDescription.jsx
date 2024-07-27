import bookimage from "assets/Images/bookimage.jpg";
import Layout from "src/Layouts/Layout";
import { useEffect, useState } from "react";
import { BiUser } from 'react-icons/bi';
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getAllBookShelves } from "src/Redux/ShelfSlice";
import { addBookToShelf } from "src/Redux/ShelfSlice";

export default function BookDescription() {

    const dispatch=useDispatch();
    const { id } = useParams();
    const [r, setR] = useState({});
    const shelfState = useSelector((state) => state.shelf);

    async function downloadBookDetails(id) {
        const response = await axios.get(`http://localhost:3005/api/v1/books/${id}`);
        const a = response.data.data;
        console.log(a);
        setR({ ...a });
    }

    useEffect(() => {
        downloadBookDetails(id);
    }, [id]);
    useEffect(() => {
        dispatch(getAllBookShelves());
    }, []);


    console.log("r", r);

    return (
        <Layout>
            <div className="my-5 flex items-start justify-center gap-5 flex-col md:flex-row">
                <div className="basis-1/3">
                    <img className="w-full" src={bookimage} alt="Book" />
                </div>
                <div className='flex flex-col items-center justify-center gap-10'>
                    <div className='text-white text-4xl'>
                        {r.title}
                    </div>
                    <div className='text-white text-xl w-3/4'>
                        {r.description}
                    </div>
                    <div className=' flex justify-start gap-5 items-center text-2xl text-yellow-400'>
                        <div>
                            <BiUser />
                        </div>
                        <div>
                            {r.author && r.author.name} {/* Ensure r.author is defined */}
                        </div>
                    </div>
                    <div className='tabs tabs-boxed flex justify-start items-start flex-wrap gap-3'>
                        {r.genres && r.genres.length > 0 && r.genres.map((genre) => (
                            <div key={genre._id} className="tab tab-active text-xl px-2 py-1">{genre.name}</div>
                        ))}
                    </div>
                    <div className='text-xl'>
                        Pages: <span className='text-yellow-400'>{r.pages}</span>
                    </div>
                    <div className='text-xl'>
                        Publish Date: <span className='text-yellow-400'>{r.publishDate}</span>
                    </div>
                    <details className="dropdown mb-32">
                                <summary className="m-1 btn">Add to Shelf</summary>
                                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                                    {shelfState.shelfList.length > 0 && shelfState.shelfList.map((shelf) => {
                                        return <li onClick={async () => {
                                            await dispatch(addBookToShelf({shelfName: shelf.name, bookId: id}));
                                            await dispatch(getAllBookShelves());
                                        }} className='text-white' key={shelf._id}><a>{shelf.name}</a></li>;
                                    })}
                                </ul>
                    </details>
                </div>
            </div>
        </Layout>
    );
}
