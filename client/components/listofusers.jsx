
import { GET_ALL_USERS} from '../graphql/query';
import {useQuery} from '@apollo/client'

function listofusers(){
    const{data}=useQuery(GET_ALL_USERS);
    
    return (<div>
       {data && data.getallusers.map((user) => {
        return(
          <div>
            <table>
            <tr>
            <td>{user.name}</td>
            <td>{user.emailaddress}</td>
            </tr>
            </table>
            </div>
        );
       })}
    </div>)
}

export default listofusers;