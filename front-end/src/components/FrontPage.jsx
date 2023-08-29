import React, { useState, useEffect } from 'react'
const getEthereumObject = () => window.ethereum;

const findMetamaskAccount = async () => {
  try {
    const ethereum = getEthereumObject()

    if (!ethereum) {
      console.log("Make sure you have metamask!");
      return null
    }
    console.log("We have the ethereum object", ethereum);
    const accounts = await ethereum.request({ method: "eth_accounts"})
    if (accounts.length !== 0) {
      const account = accounts[0];
      console.log("Found an authorized account:", account);
      return account;
    } else {
      console.error("No authorized account found");
      return null;
    }
  } catch(error) {
    console.log(error);
    return null
  }
  
}

const FrontPage = () => {
  const [currentAccount, setCurrentAccount] = useState("");
  const connectWallet = async () => {
    try {
      const ethereum = getEthereumObject();
      if (!ethereum) {
        alert("Get MetaMask!");
        return;
      }

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      console.log("Connected", accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    findMetamaskAccount().then((account) => {
      if (account !== null) {
        setCurrentAccount(account);
      }
    });
  }, [])
  console.log(currentAccount)
  return (
    <div className='fp-bg bg bg-dark p-5 pt-24 pl-10 pr-10'>
        <div className='bg-transparent md:w-[520px] md:pl-12'>
            <h1 className='bg-inherit font-bold text-5xl'>
                Lorem ipsum dolor sit amet consectetur.
            </h1>
            <p className='bg-inherit mt-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet qui nulla iusto debitis tenetur necessitatibus?</p>
            {!currentAccount && (
              <button className='btn-primary mt-6 hover:bg-blue-300' onClick={connectWallet}>
                Open Application
              </button>
            )}
            
        </div>
    </div>
  )
}

export default FrontPage