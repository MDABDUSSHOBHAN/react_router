import { Link } from 'react-router-dom';
import './friend1.css'

const Friend1 = ({friend}) => {
    console.log(friend);
    const {email,id,name} = friend;
    return (
        <div className='friends'>
            <h3>This is my friends </h3>
            <small><p>{id}</p></small>
            <p>username: {name}</p>
            <p>Email: {email}</p>
          <Link to={`/friend/${id}`}>Show Details</Link>
        </div>
    );
};

export default Friend1;