import bookimage from "assets/Images/bookimage.jpg"
import Layout from "src/Layouts/Layout";
import { useEffect, useState } from "react";
import { BiUser } from 'react-icons/bi';
import { useSearchParams } from "react-router-dom";
import { useParams } from "react-router-dom";

import axios from "axios";
import axiosinstance from "src/Configs/axiosinstance";
export default function BookDescription() {

    const {id}=useParams();
    

    
    const [r,setr]=useState({});


    async function downloadbookdetails(id){

        const response=await axios.get(`http://localhost:3005/api/v1/books/${id}`);
         const a=response.data.data;
         console.log(a);
        setr({...a});

    }


    useEffect(()=>{

        downloadbookdetails(id);

    },[id]);

    console.log("r",r);
    // console.log(r.genres.length);

    





    return (
        <Layout>
            
               
                    <div className="my-5 flex items-start justify-center gap-5 flex-col md:flex-row">
                        <div className="basis-1/3">
                            <img className="w-full" src={bookimage}/>
                        </div>
                        <div className='flex flex-col items-center justify-center gap-10'>
                            <div className='text-white text-4xl'>
                                {/* {} //title */}
                                {r.title}
                            </div>
                            <div className='text-white text-xl w-3/4'>
                                {/* {} //des */}
                                {r.description}
                            </div>
                            <div className=' flex justify-start gap-5 items-center text-2xl text-yellow-400'>
                                <div>
                                    <BiUser />
                                </div>
                                <div>
                                    {/* {} //author */}
                                    {r.author}
                                </div>
                            </div> 
                            <div className='tabs tabs-boxed flex justify-start items-start flex-wrap gap-3'>
                                {/* {r.genres.length>0 && r.genres.map((genre) => {
                                    return <div key={genre._id} className="tab tab-active text-xl px-2 py-1">{genre.name}</div>; 
                                })} */}
                            </div>
                            <div className='text-xl'>
                                Pages: <span className='text-yellow-400'>{r.pages}</span>
                            </div>
                            <div className='text-xl'>
                                Publish Date: <span className='text-yellow-400'>{r.publishDate}</span>
                            </div>
                        </div>  
                    </div>
                
            
        </Layout>
    );
}