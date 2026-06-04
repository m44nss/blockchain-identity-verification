# 🔐 Blockchain-Based Identity Verification System

![Solidity](https://img.shields.io/badge/Solidity-0.8.x-blue)
![React](https://img.shields.io/badge/React-Frontend-61DAFB)
![Ethereum](https://img.shields.io/badge/Ethereum-Sepolia-purple)
![Hardhat](https://img.shields.io/badge/Hardhat-Development-yellow)
![License](https://img.shields.io/badge/License-MIT-green)

## 🌟 Overview

The **Blockchain-Based Identity Verification System** is a decentralized application (DApp) developed using **Solidity, React.js, Hardhat, Ethers.js, and MetaMask**. The system enables users to securely register and verify digital identities on the Ethereum blockchain without relying on centralized authorities.

Traditional identity management systems are vulnerable to data breaches, tampering, and unauthorized access. This project addresses these challenges by leveraging blockchain technology to provide transparency, immutability, and decentralized verification.

---

## 🚀 Features

✅ Connect MetaMask Wallet

✅ Register Digital Identity on Blockchain

✅ Verify Identity Records

✅ Public Smart Contract Deployment

✅ Decentralized Data Storage

✅ Secure Blockchain Transactions

✅ Ethereum Sepolia Network Support

✅ Responsive User Interface

---

## 🏗️ System Architecture

```text
┌─────────────────┐
│     User        │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ React Frontend  │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Ethers.js API  │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│   MetaMask      │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Smart Contract  │
│   (Solidity)    │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Ethereum Sepolia│
│    Blockchain   │
└─────────────────┘
```

---

## 🛠️ Technology Stack

### Frontend

* React.js
* JavaScript
* HTML5
* CSS3
* Tailwind CSS

### Blockchain

* Solidity
* Ethereum Sepolia
* MetaMask

### Development Tools

* Hardhat
* Ethers.js
* Node.js
* Git & GitHub

---

## 📂 Project Structure

```text
identity-app/
│
├── contracts/
│   └── Identity.sol
│
├── scripts/
│   └── deploy.js
│
├── client/
│   ├── src/
│   │   ├── App.js
│   │   ├── IdentityABI.json
│   │   └── index.js
│   │
│   └── public/
│
├── hardhat.config.js
├── package.json
└── README.md
```

---

## 📜 Smart Contract Functions

### Register Identity

```solidity
function registerIdentity(string memory _hash) public
```

Stores a user's identity data on the blockchain.

### Verify Identity

```solidity
function verifyIdentity(
    address user,
    string memory _hash
) public view returns (bool)
```

Checks whether the supplied identity matches the blockchain record.

---

## 🌐 Smart Contract Deployment

### Network

Ethereum Sepolia Testnet

### Contract Address

```text
0x29EfDc621e7df6a363571879C52684d6C177bFcA
```

---

## ⚙️ Installation Guide

### Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/identity-app.git
cd identity-app
```

### Install Backend Dependencies

```bash
npm install
```

### Install Frontend Dependencies

```bash
cd client
npm install
```

### Start React Application

```bash
npm start
```

Application runs at:

```text
http://localhost:3000
```

---

## 🔗 Deploy Smart Contract

Compile:

```bash
npx hardhat compile
```

Deploy:

```bash
npx hardhat run scripts/deploy.js --network sepolia
```

---

## 📊 Project Workflow

1. User connects MetaMask wallet.
2. Wallet authentication is completed.
3. User enters identity information.
4. Smart contract stores identity hash on blockchain.
5. Identity data becomes immutable.
6. Verification requests compare submitted data with blockchain records.
7. Verification result is returned instantly.

---

## 🔒 Security Advantages

* Decentralized Architecture
* Tamper-Resistant Records
* Cryptographic Security
* Transparent Verification
* Reduced Risk of Data Breaches
* User-Controlled Identity Management

---

## 📈 Future Enhancements

* IPFS Integration
* Aadhaar/Passport Verification
* Zero-Knowledge Proofs (ZKP)
* NFT-Based Identity Credentials
* Multi-Factor Authentication
* Mobile Application Support
* Multi-Chain Deployment
* Biometric Verification

---

## 📚 Research Contribution

This project demonstrates the practical implementation of blockchain technology for identity verification. The proposed system eliminates dependency on centralized authorities and provides a secure, transparent, and decentralized framework for managing digital identities.

---

## 👨‍💻 Author

**Manas Tripathi**

B.Tech Computer Science Engineering

Blockchain | Cybersecurity | Full Stack Development | Web3

---

## ⭐ Support

If you found this project useful:

⭐ Star the repository

🍴 Fork the project

🛠️ Contribute to improvements

📢 Share it with the developer community

---

### "Building Trust Through Decentralized Identity Verification 🚀"
