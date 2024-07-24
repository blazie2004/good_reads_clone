import { useSelector, useDispatch } from "react-redux";
import Layout from "src/Layouts/Layout";
import BookCard from "src/Components/BookCard";
import { useEffect } from "react";
import { getallbooks } from "src/Redux/Bookslice";

function Dashboard() {
    console.log("entered dashboard");
    const bookstate = useSelector((state) => state.book);
    const dispatch = useDispatch();

    async function loadbooks() {
        if (bookstate.booklist.length === 0) {
            await dispatch(getallbooks());
        }
    }

    useEffect(() => {
        loadbooks();
    }, []);

    console.log(bookstate.booklist);

    return (
        <>
            <Layout>
                <div>
                {bookstate.booklist.map((eachbook) => {
                    return (
                        <BookCard
                            key={eachbook._id}
                            author={eachbook.author.name} // Accessing the name property of the author object
                            title={eachbook.title}
                            description={eachbook.description}
                            id={eachbook._id}
                        />
                    );
                })}
                </div>
            </Layout>
        </>
    );
}

export default Dashboard;
