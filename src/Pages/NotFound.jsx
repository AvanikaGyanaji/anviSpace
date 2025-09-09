import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <section className="not-found text-white mt-[100px] min-h-[calc(100vh-100px)] flex flex-col justify-center align-middle items-center gap-3">
            <h1 className="text-2xl">404 - Page Not Found</h1>
            <p className="font-[inter] text-gray-400">The page you are looking for does not exist.</p>
            <Link to="/" className="explore-btn figma-btn mt-3">Back to Home</Link>
        </section>
    )
}

export default NotFound;