import React, { useContext } from 'react';
import userContext,{UserConsumer} from './UserContext';

const ComponentC = () => {
    const usersData = useContext(userContext);
    return (
        <div>
            <p>Component C</p>
            <h1>{usersData.title}</h1>
            <button onClick={usersData.toggle}>Click me</button>
        </div>
    )
}

export default ComponentC;

// export default class ComponentC extends Component {
//     render() {

//         return (
//             <div>
//                 <h1>Component C</h1>
//                 <UserConsumer>
//                     {
//                         (data) => {
//                             return (
//                                 <div>
//                                     <h1>{data.title} {data.message} </h1>
//                                     <h1>{data.message}</h1>
//                                 </div>
//                             )
//                         }
//                     }
//                 </UserConsumer>
//             </div>
//         )
//     }
// }


