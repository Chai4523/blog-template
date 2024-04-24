import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate()
    const handleBack = () => {
        navigate("/")
    }
    return ( 
        <div className="not-found">
            <h2>Oops</h2>
            <p>The page you are looking for cannot be found.</p>
            <button onClick={handleBack}>Home</button>
        </div>
     );
}
 
export default NotFound;