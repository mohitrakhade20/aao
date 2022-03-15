pragma solidity ^0.8.8;

// Creating a AAO Smart Contract
contract AaoContract{

// Structure of user
struct User{
	
	// State variables
	int id;
	string email;
	string aadhar;
	string dob;
	string addr;
	string phone;

}

User []users;

// Function to add
// user details
function addUser(
	int id, string memory email,
	string memory aadhar,
	string memory dob,
	string memory addr,
	string memory phone


) public{
	User memory e
		=User(id,
				email,
				aadhar,
				dob,
				addr,
				phone);
	users.push(e);
}

// Function to get
// details of user
function getUser(
	int id
) public view returns(
	string memory,
	string memory,
	string memory,
	string memory,
	string memory
	
	){
	uint i;
	for(i=0;i<users.length;i++)
	{
		User memory e
			=users[i];
		
		// Looks for a matching
		// user id
		if(e.id==id)
		{
				return(e.email,
					e.aadhar,
					e.dob,
					e.addr,
					e.phone);
		}
	}
	
	// If provided user
	// id is not present
	// it returns Not
	// Found
	return("Not Found",
			"Not Found",
			"Not Found",
			"Not Found",
			"Not Found");
}
}
