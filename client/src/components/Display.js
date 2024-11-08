import { useState } from "react";
import "./Display.css";
import fileImage1 from "../file-solid.png"
const Display = ({ contract, account }) => {
  const [data, setData] = useState("");
  const getdata = async () => {
    let dataArray;
    const Otheraddress = document.querySelector(".address").value;
    try {
      if (Otheraddress) {
        dataArray = await contract.display(Otheraddress);
        console.log(dataArray);
      } else {
        dataArray = await contract.display(account);
      }
    } catch (e) {
      alert("You don't have access");
    }
    const isEmpty = Object.keys(dataArray).length === 0;

    if (!isEmpty) {
      const str = dataArray.toString();
      const str_array = str.split(",");

      const files = str_array.map((item, i) => {
        const url = `https://azure-fashionable-lark-246.mypinata.cloud/ipfs/${item.substring(6)}`;
        const fileExtension = item.split(".").pop().toLowerCase(); // Get the file extension

        // Display a preview for images, or a generic icon for other formats
        return (
          <div style={{display:"flex",flexDirection:"row"}}>
            <a href={item} key={i} target="_blank" rel="noopener noreferrer">
            {["jpg", "jpeg", "png", "gif"].includes(fileExtension) ? (<>
              <img src={url} alt="file preview" class="file-preview"></img>
              <p style={{color:"white"}}>File{i+1}</p>
              </>
            ) : (<>
            <img src={fileImage1} alt="file" style={{width: "100px", height:"100px"}}></img>
            <p style={{color:"white"}}>File{i+1}</p>
            </>
              
            )}
          </a>
          </div>
          
        );
      });

      setData(files);
    } else {
      alert("No files to display");
    }
  };
  return (
    <>
      <div className="file-list">{data}</div>
      <input
        type="text"
        className="address"
        placeholder="Enter User Address" style={{backgroundColor:'white', border:'none', paddingLeft:'5px', paddingRight:'5px', textAlign:'center', textDecoration:'none',display:'inline-block', fontSize:'16px',
  borderRadius: '10px',
  border: '2px solid black', display: 'block',
  margin: 'auto',
  height: '30px',
  width: '330px',
  textAlign: 'center',}}
        
      ></input>
      <button className="center button" onClick={getdata}>
        RETRIEVE
      </button>
    </>
  );
};
export default Display;
