import { useLoaderData, useNavigate } from "react-router-dom";


const THpi = () => {
    const data= useLoaderData();
    const navigaet= useNavigate()
    const handelgo = ()=> {
       navigaet(-1)

    }
    return (
        <div>
            <h3>This is Post Detail Component</h3>
            <h4>Name : {data.name}</h4>
            <h5>E-mail: {data.email}</h5>
            <button onClick={handelgo}>Go Back</button>

        </div>
    );
};

export default THpi;