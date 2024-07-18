import Navbar from "src/Components/Navbar";
import Footer from "src/Components/Footer";

export default function Layout({children}) {
    return (
        <>
            <Navbar />
            <div className="h-[90vh] flex items-start justify-center">
                <div className="w-9/12">
                    {children}
                </div>
            </div>
            <Footer />
        </>
    );
}