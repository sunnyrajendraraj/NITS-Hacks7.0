import Upload from "./artifacts/contracts/Upload.sol/Upload.json";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import FileUpload from "./components/FileUpload";
import Display from "./components/Display";
import Modal from "./components/Modal";
import logo from './logo_ccexpress.png';
import icon from './shark_icon.png'
import "./App.css";

function App() {
  const [account, setAccount] = useState("");
  const [contract, setContract] = useState(null);
  const [provider, setProvider] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    const loadProvider = async () => {
      if (provider) {
        window.ethereum.on("chainChanged", () => {
          window.location.reload();
        });

        window.ethereum.on("accountsChanged", () => {
          window.location.reload();
        });
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        setAccount(address);
        let contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

        const contract = new ethers.Contract(
          contractAddress,
          Upload.abi,
          signer
        );
        //console.log(contract);
        setContract(contract);
        setProvider(provider);
      } else {
        console.error("Metamask is not installed");
      }
    };
    provider && loadProvider();
  }, []);
  return (

    

    <>

      

      {!modalOpen && (
        <button className="share" onClick={() => setModalOpen(true)}>
          Share
        </button>
        
      )}
      

      {modalOpen && (
        <Modal setModalOpen={setModalOpen} contract={contract}></Modal>
      )}
      {/* <a href="https://www.iiitbh.ac.in/" target="_blank" class="intro-logo-parent"><img class="intro-logo" src={logo} alt="iiitbh logo"/></a> */}
      <div className="App">
      {/* <button className="anu anu1">
          Lawyer
      </button>
      <button className="anu anu2">
          Judge
      </button>
      <button className="anu anu3">
          Client
      </button>
      <button className="anu anu4">
          Other
      </button> */}
        <h1 style={{ color: "yellow" }}>A Blockchain-Based </h1> 
        <h1 style={{ color: "pink" }}>Secure Watermarking System</h1>
        <div class="bg"></div>
        <div class="bg bg2"></div>
        <div class="bg bg3"></div>

        <p style={{ color: "white" } }>
          IPFS Address : {account ? account : "Not connected"}
        </p>
        <FileUpload
          account={account}
          provider={provider}
          contract={contract}
        ></FileUpload>
        <Display contract={contract} account={account}></Display>
        {/* <a class="icon_parent"><img class="icon" src={icon} alt="icon"/></a> */}
      </div>
      
    </>

  );
}

export default App;
