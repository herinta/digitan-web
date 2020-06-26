import React, {useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Register from './Screens/Register';
import RegisterPetani from './Screens/RegisterPetani';
import LoginPetani from './Screens/LoginPetani';
import Login from './Screens/Login';
import Pembiayaanpetani from './Screens/PembiayaanPetani';
import PembiayaanDesc from './Screens/PembiayaanDesc';
import Penjualan from './Screens/Penjualan';
import PenjualanDesc from './Screens/Penjualan';
import Home from './Screens/Home';
import Profile from './Screens/Profile'
import DompetSaya from './Screens/DompetSaya';
import Permodalan from './Screens/Permodalan'
import InformasiProduk from './Screens/InformasiProduk'
import TambahProduct from './Screens/TambahProduct'
// import ProfileSaya from './Screens/ProfileSaya'
// import Transaksi from './Screens/RiwayatTransaksi'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import firebase from './Screens/firebase'
import Pembiayaan from './Components/Pembiayaan';

console.log(firebase)


export default function App() {

	const [firebaseInitialized, setFirebaseInitialized] = useState(false)

  useEffect(() => {
		firebase.isInitialized().then(val => {
			setFirebaseInitialized(val)
		})
	})

	return(	
    
        <Router>
            <Switch>
               
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/tambah-permodalan" component={InformasiProduk} />
                <Route exact path="/permodalan" component={Permodalan} />
                <Route exact path="/profile-dompet-saya" component={DompetSaya} />
                <Route exact path="/tambah-product" component={TambahProduct}/>
                {/* <Route exact path="/profile-riwayat-transaksi" component={Transaksi} />
                <Route exact path="/profile-saya" component={ProfileSaya} /> */}
                <Route exact path='/' component={Home} />
                <Route exact path='/login-investor'  component={Login}/>
                <Route exact path='/login-petani'  component={LoginPetani} />
                <Route exact path='/register'  component={Register}/>
                <Route exact path='/register-petani'  component={RegisterPetani}/>
                <Route exact path='/pembiayaan' component={Pembiayaanpetani}/>
                <Route exact path='/deskripsi-pembiayaan' component={PembiayaanDesc} />
                <Route exact path='/penjualan' component={Penjualan} />
                <Route exact path='/deskripsi-penjualan'  component={PenjualanDesc}/>
            </Switch>
        </Router>
	
	) 
}