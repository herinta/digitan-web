// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import Register from './Screens/Register';
// import RegisterPetani from './Screens/RegisterPetani';
// import LoginPetani from './Screens/LoginPetani';
// import Login from './Screens/Login';
// import Pembiayaanpetani from './Screens/PembiayaanPetani';
// import PembiayaanDesc from './Screens/PembiayaanDesc';
// import Penjualan from './Screens/Penjualan';
// import PenjualanDesc from './Screens/Penjualan';
// import { BrowserRouter, Switch, Route } from 'react-router-dom';

// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import firebase from '../firebase'
// import Pembiayaan from './Components/Pembiayaan';


// export default function App() {

// 	const [firebaseInitialized, setFirebaseInitialized] = useState(false)

// 	useEffect(() => {
// 		firebase.isInitialized().then(val => {
// 			setFirebaseInitialized(val)
// 		})
// 	})


// 	return firebaseInitialized !== false ? (	
    
//         <Router>
//             <Switch>
//                 <Route exact path="/" component={App} />
//                 <Route exact path="/profile" component={profile} />
//                 <Route exact path='/home' component={Home} />
//                 <Route exact path='/login-investor'  component={Login}/>
//                 <Route exact path='/login-petani'  component={LoginPetani} />
//                 <Route exact path='/register'  component={Register}/>
//                 <Route exact path='/register-petani'  component={RegisterPetani}/>
//                 <Route exact path='/pembiayaan' component={Pembiayaan}/>
//                 <Route exact path='/deskripsi-pembiayaan' component={PembiayaanDesc} />
//                 <Route exact path='/penjualan' component={Penjualan} />
//                 <Route exact path='/deskripsi-penjualan'  component={PenjualanDesc}/>
//             </Switch>
//         </Router>
	
// 	) 
// }