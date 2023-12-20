import { useLoaderData } from "react-router-dom";


const FriendDetail = () => {

    const friend = useLoaderData()
    console.log(friend);
    return (
        <div>
           
            <h1>Everything About This Person is Here.</h1>
            <p>Name: {friend.name}</p>
            <p>E-mail : {friend.email}</p>
        </div>
    );
};

export default FriendDetail;