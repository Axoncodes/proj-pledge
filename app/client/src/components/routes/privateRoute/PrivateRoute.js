import React, {useState, useEffect} from 'react';
import { useHistory, Route, Redirect } from 'react-router-dom';
import { account } from '../../../../../controller/accountController';



export const PrivateRoute = ({ component: Component, ...rest }) => {

  const [auth, setAuth] = useState(null)
  const [authCount, setAuthCount] = useState(1)
	let history = useHistory();

	const authenticate = async () => {
    // setAuthCount(authCount+1)
    setAuth(await account.authorised());
	}
  
	useEffect(()=>{
		authenticate()
	})


  function continueto() {
    
    return <Route 
      {...rest} 
      render={(props) => 
          <Component {...props} />
        }
    />

  }

  function gobackto() {

    return <Route 
      {...rest} 
      render={(props) => 
          <Redirect to="/signin" />
        }
    />

  }


  const load = () =>{
    // const auth = await account.authorised();
		if(auth === null){
			return "loading..."
		}else if(auth === true){
			return continueto()
		}else if(auth === false){
      return gobackto()
		}else{
			return <p>error</p>;
		}

    
	}
	return load()
    

};










