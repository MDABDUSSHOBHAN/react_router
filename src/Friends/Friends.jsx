
import { useLoaderData } from 'react-router-dom';
import './friends.css'
import Friend1 from '../component/friendnew/Friend1';
const Friends = () => {
    const data = useLoaderData();
    //data = useLoaderData();
    console.log(data);
    return (
        <div className=''>
         <h2>Total Number of My Friend is: {data.length}</h2>
         {
            data.map(friend=> <Friend1
            key={data.id}
            friend={friend}
            
            ></Friend1>)
         }
        </div>
    );
};

export default Friends;