import { useLoaderData } from "react-router-dom";
import Data from "../PostData/Data";


const Post = () => {
    const PostData =  useLoaderData();
    console.log(PostData);
    return (
        <div>
            <p>This is Post Concept</p>
              
            {
                PostData.map( datas => <Data
                key={datas.userId}
                data={datas}
                ></Data>)
            }
        

        </div>
    );
};

export default Post;