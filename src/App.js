import "./App.css";
import Web3 from "web3";
import { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import Typography from '@material-ui/core/Typography'
function App() {
  const url = "https://mainnet.infura.io/v3/e31d6b31abd249718714f1244b8628e7 ";
  const web3 = new Web3(url);
  let address = "0x00000000219ab540356cBB839Cbe05303d7705Fa";
  const [balance, setBalance] = useState(0);
  const howMuch = () => {
    web3.eth.getBalance(address, (err, bal) => {
      setBalance(web3.utils.fromWei(bal, 'ether'));
      
    });
  };
  useEffect(() => {
    console.log(typeof(balance));
    
  }, [balance]);
  return (
    <div>
      <Typography variant="h1" color="initial">{`${balance}`}</Typography> 
      <Button onClick={howMuch}>rich?</Button>
    </div>
  );
} 
export default App;
 