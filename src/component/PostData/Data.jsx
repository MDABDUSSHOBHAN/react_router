import { Link } from 'react-router-dom';
import './data.css'

const Data = ({data}) => {
    console.log(data);
    return (
        <div className='style'>
            <h4>This is post content</h4>
             <h6>UserID:_{data.userId}</h6>
            <p>{data.title}</p>
            <Link to={`/thpi/${data.userId}`}>Watch_Now</Link>
            <button>Show Details</button>
        </div>
    );
};

export default Data;