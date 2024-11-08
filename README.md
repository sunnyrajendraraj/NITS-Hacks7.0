


# Developing a Blockchain-Based eVault for Legal Records

## Motivation:
The motivation behind developing a blockchain-based eVault system
for legal records is rooted in revolutionizing conventional legal data
management. Focused on security, transparency, and accessibility, this
innovative system aims to resolve prevalent challenges like data
breaches, complex record-keeping, and limited access in current
systems

## Objectives:
The primary objective of this work is to develop a blockchain-based eVault
system for legal records that can ensure security, transparency, and accessibility
for all stakeholders. The proposed system should be able to store, manage, and
share legal records securely and efficiently, with the potential to integrate with
existing legal databases and case management systems.

## Introduction:
This work introduces a Graphical User Interface (GUI) based eVault system
within the blockchain ecosystem. Its primary goal is to establish a secure and
transparent platform for storing, uploading, retrieving, and tracking document
changes, promoting efficient information sharing. Notably, the system is
designed to offer an intuitive interface for legal professionals, including
lawyers, judges, clients, and other stakeholders.


To enhance security, an appropriate encryption scheme is implemented for legal
records before their upload onto the blockchain. This ensures a higher level of
security for the stored documents. Additionally, a robust authentication
mechanism is employed to uphold the privacy and confidentiality of these legal
records.


Moreover, the system is integrated with existing legal databases and case
management systems to ensure interoperability and user-friendly interaction,
enhancing its overall usability within the legal framework.

## Methodology:
This system adopts a decentralized approach by leveraging the InterPlanetary
File System (IPFS) network to store uploaded files. The decentralization aspect
of the eVault is primarily achieved through the utilization of IPFS, a distributed
and peer-to-peer hypermedia protocol. When a user uploads a file, it's not stored
on a centralized server but instead on a network of nodes via IPFS, ensuring
greater resilience and availability.


In the context of the user interface, several key elements streamline user
interaction. The integration with MetaMask enables account connectivity,
offering secure access to the eVault. This account selection process via
MetaMask ensures cryptographic security and user control.


The "Upload File" button serves as a trigger for file submission. Once the
connected account selects a file for upload, this action initiates a transaction
that, upon confirmation, prompts MetaMask to manage and record the
transaction details. This transaction data is crucial for maintaining transparency
and security in the decentralized environment.


Upon successful upload, the system confirms the transaction, and the file
becomes stored within the eVault, retrievable through the "Get data" button.
This interaction triggers the display of the stored image on the interface,
enabling the user to access the content directly. Each image's address
corresponds to its unique IPFS address, underscoring the decentralized storage
model.


Sharing access to stored images involves a process facilitated by a "Share"
button. This function prompts the user to input the recipient's address,
culminating in a MetaMask transaction confirmation. The recipient's address,
upon confirmation, grants them access, displaying their address in the dialog
box.


For a secondary account seeking to access shared content, the "Enter Address"
element facilitates access. Upon inputting the authorized address, clicking "Get
data" triggers a validation process. If the access authorization matches, the
shared data flashes on the interface; otherwise, a "No permission" message
appears, ensuring data security and controlled access.


In essence, the eVault employs decentralized storage via IPFS, integrates with
MetaMask for account management, and offers controlled access mechanisms
for shared content, ensuring security and transparency within a distributed
ecosystem.

## PROJECT ARCHITECTURE
In this project, we are incorporating several advanced technologies. Specifically,
we are utilizing ReactJS for the frontend to develop a user interface and Solidity
programming for the backend. The integration of these technologies will
enable seamless interaction and functionality within the project.


To store the images in the eVault, we're employing Pinata and the
InterPlanetary File System (IPFS). Pinata is a service that provides an interface
and tools for effectively interacting with IPFS, while IPFS is a decentralized
protocol used for storing and sharing hypermedia content.


IPFS is a peer-to-peer distributed system designed to store and retrieve
content. It breaks down files into smaller chunks, storing them across a
network of nodes, making content retrieval faster and more resilient compared
to traditional centralized storage systems. Pinata acts as an interface for IPFS,
offering simplified management and enhanced capabilities for working with
IPFS.


The decision to utilize Pinata and IPFS is strategic. By storing images through
these systems and linking their hash values (URLs) in the smart contract, we're
minimizing complexity and overhead costs. Directly storing images within the
smart contract could result in increased complexity and higher expenses due to
the heavier computational load associated with the blockchain network.


When a user uploads an image, the file is stored on the IPFS network via Pinata,
generating a unique hash value (URL). This hash value, representing the
image's location within IPFS, is then stored in our smart contract. This approach
ensures that the actual image data is kept off-chain while enabling efficient
access through the stored hash references on the blockchain for increased
transparency.


Key prerequisites for this project include proficiency in ReactJS for the
frontend, Ether.js for Ethereum blockchain interaction, Hardhat for
development and testing purposes, Solidity for smart contract programming,
and a fundamental understanding of IPFS for decentralized file storage and
retrieval. These components collectively facilitate the successful
implementation of the eVault system.

## WORKING & ADVANTAGES

Utilizing ReactJS, it is established as a sophisticated graphical user interface
(GUI) for the website, enhancing user interaction and accessibility to the
platform.

Upon selecting a file, our automated system captures a snapshot or generates a
PDF for sharing with stakeholders. The system then initiates encryption
procedures for the file.

The encrypted file is subsequently uploaded to the eVault, granting the
stakeholder access for retrieval through an access link.

Employing the Ethereum blockchain as our backend infrastructure ensures a
secure and decentralized foundation for our platform's operations.
Furthermore, this design prioritizes interoperability and user convenience by
enabling seamless integration with existing legal databases and case
management systems, facilitating a harmonious connection with established
frameworks in the legal domain.

The web-based platform is engineered to accommodate a multilingual
interface supporting up to 32 different languages, ensuring users can access
the system in their preferred language, thus enhancing accessibility and
usability.

Its primary function is to securely store, manage, and facilitate the exchange of
legal records, thereby significantly reducing the volume of paperwork and
mitigating data mismanagement issues.

The platform operates as a secure and transparent repository for storing and
distributing legal records, promoting a high degree of security and
transparency in legal data management.

Its implementation can lead to expedited and more efficient court proceedings,
optimizing the legal process for swift decision-making and reduced procedural
delays.

Moreover, the system's efficiency leads to cost reduction, democratizing access
to a more effective judicial system, thereby ensuring a broader reach for
improved justice mechanisms.

The platform streamlines accessibility for clients to retrieve their records while
enabling lawyers to efficiently access pertinent case details, thereby optimizing
the legal workflow and enhancing client service.

By employing robust security measures, data stored in this Vault is fortified
against unauthorized alterations, ensuring the integrity and authenticity of the
information within the system.

