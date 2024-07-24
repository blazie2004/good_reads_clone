// import BookImage from 'Assets/Images/book.jpg';
import book from 'assets/Images/bookimage.jpg';
import { BiUser } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
export default function BookCard({ title, author, description ,id}) {

    const nav=useNavigate();
    let str=description.substring(0,20);
    return (
        <div className="mt-5 card card-side bg-gray-800 shadow-xl h-60 w-12/12 shadow-md">
            <figure className='h-full'>
                <img src={book} alt="Movie" className='h-full'/>
            </figure>
            <div className="card-body">
            <h2 className="card-title text-white text-4xl">{title}</h2>
                <div className='mt-12 flex justify-between items-center gap-4'>
                    <div className='flex flex-col gap-3 text-white text-xl'>
                    <div className='flex justify-start gap-8 md:gap-5 items-center'>
                        <div>
                            <BiUser />
                        </div>
                        <div>
                            {author}
                        </div>
                    </div> 
                    <div>
                        {description}

                    </div>
                    </div>

                    <div className="card-actions justify-end">
                        <button          onClick={()=>{
                            nav(`/book/${id}`);
                        }}     className="btn btn-primary">More Details</button>
                    </div>
                </div>

            </div>
        </div>
    );
}
