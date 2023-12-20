import { useLoaderData } from "react-router-dom";


const First = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div className="fir">
            <h4>This is The Default First Page</h4>
            <small>
                <p>MD ABDUS SHOBHAN</p>
               
            </small>
        </div>
    );
};

export default First;