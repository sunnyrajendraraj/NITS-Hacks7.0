// this is the license of our contract
// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;        // Shows the version of solidity we are using

contract Upload {           // Smart contract created
  
  struct Access{                        // A structure created to store the address of the account and the status of the permission. 
     address user;                      // It is also acting as a datatype.
     bool access; //true or false
    }
  mapping(address=>string[]) value;                         // An array of string used to store hashvalue(URL) of the files to be stored.
  mapping(address=>mapping(address=>bool)) ownership;       // A 2D array storing the permission status between the pair of accounts. 
  mapping(address=>Access[]) accessList;             // An array of Access datatype storing the address and permission status of different account
  mapping(address=>mapping(address=>bool)) previousData;   // To store past transaction inside our blockchain becz we are totally dependent on blockchain

  function add(address _user,string memory url) external {     // To store the hashvalue(URL) in our value(mapping) of a particular user's file    
      value[_user].push(url);
  }
  function allow(address user) external {                 // This function is used to push the Struct in our accessList
      ownership[msg.sender][user]=true;                   
      if(previousData[msg.sender][user]){                       // This is used to check whether the given address is already stored or not.
         for(uint i=0;i<accessList[msg.sender].length;i++){     // If it is already there then it's status will be updated.
             if(accessList[msg.sender][i].user==user){
                  accessList[msg.sender][i].access=true; 
             }
         }
      }else{                                                    // Else a new struct will be added.
          accessList[msg.sender].push(Access(user,true));  
          previousData[msg.sender][user]=true;  
      }
    
  }
  function disallow(address user) public{                   // A function to revoke the access to a particular account 
      ownership[msg.sender][user]=false;                    // This is updating the status of the account
      for(uint i=0;i<accessList[msg.sender].length;i++){    // This loop is used to search the address and update it.
          if(accessList[msg.sender][i].user==user){ 
              accessList[msg.sender][i].access=false;  
          }
      }
  }

  function display(address _user) external view returns(string[] memory){               // This function is showing the images stored in the account's vault
      require(_user==msg.sender || ownership[_user][msg.sender],"You don't have access"); //if it doesn't have the access it will pop a message
      return value[_user];
  }

  function shareAccess() public view returns(Access[] memory){          // This is used to give access to the account
      return accessList[msg.sender];
  }
}