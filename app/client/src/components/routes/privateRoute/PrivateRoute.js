import React, {useState, useEffect} from 'react';
import { useHistory, Route, Redirect } from 'react-router-dom';
import { account } from '../../../../../controller/accountController';



export const PrivateRoute = ({ component: Component, ...rest }) => {
  
  const [auth, setAuth] = useState(null)
	let history = useHistory();

	const authenticate = async () => {
		setAuth(await account.authorised());
	}

	useEffect(()=>{
		authenticate()
	}, [])

	function login() {
		history.push({
			pathname: "/signin",
			state: {  // location state
				backto: "/", 
			},
		})
	}

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
		if(auth === null){
			return "loading..."
		}else if(auth === true){
			return continueto()
		}else if(auth === false){
      return gobackto()
		}else{
			console.log(auth);
			return <p>error</p>;
		}
	}
	return load()


};










