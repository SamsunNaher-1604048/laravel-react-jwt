import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Gaustpage from './Compoment/Gaustpage';
import Auth from './Compoment/Auth';

function App() {

  const token = JSON.parse(sessionStorage.getItem('token'));
  console.log(token);

  if(!token){
    return <Gaustpage/>
  }else{
    return <Auth />
  }
}
export default App;
