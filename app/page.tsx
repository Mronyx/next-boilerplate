"use client"

import { useContext, useEffect, useState } from 'react';
import { IoMdClose } from "react-icons/io";
import { AppContext } from './context/UserContext';
import { WalletType } from '@/types';


const Home: React.FC = () => {
  const appContext = useContext(AppContext)
  const [showModal, setShowModal] = useState(false);


  const handleModal = () => {
    setShowModal(true)
  }

  const handleCloseModal = (event: any) => {
    event.stopPropagation()
    setShowModal(false);
    console.log("click");

  }



  const unisatWallet = async () => {
    try{
      const address = await (window as any).unisat.requestAccounts();
      const pubkey = await (window as any).unisat.getPublicKey();
      const userAddresses = await (window as any).unisat.getAccounts();
  
        // const usersNativeSegwitAddress = userAddresses.result.addresses.find(
        //   (address: { type: string }) => address.type === "p2wpkh"
        // );
        // console.log(usersNativeSegwitAddress);
        
        appContext?.updatePaymentAddress(address[0]);
        appContext?.updateOrdinalsAddress(address[0]);
        appContext?.updatePaymentPublickey(pubkey);
        appContext?.updateOrdinalsPublickey(pubkey);
        appContext?.updateWalletType(WalletType.Unisat);

    }catch(e){
        console.log("failed");
    }
   
  }


  return (
    <div className='flex w-full'>

      {/* wallet connect button */}
      <div className='flex justify-between w-full p-2'>
        <div></div>
        <div className='border-2 border-yellow-600 p-2 rounded-xl' onClick={handleModal}>
          <button>Wallet Connect</button>
          {showModal ? (
            <>
              <div className="fixed inset-0 flex items-center ">
                <div className="mx-auto border-2 border-gray-700 border-solid rounded-xl">
                  <div className='flex flex-col justify-center items-center bg-[#252B35]  gap-2 p-2 rounded-xl'>
                    <div className='flex flex-col gap-2'>
                      <div className='flex flex-row justify-between'>
                        <div></div>
                        <button onClick={(event) => handleCloseModal(event)}><IoMdClose color="white" /></button>
                      </div>
                      <div className='flex flex-row gap-2'>
                        <div><button className='p-2 text-white border-2 border-white rounded-xl' onClick={unisatWallet}>Unisat</button></div>
                        <div><button className='p-2 text-white border-2 border-white rounded-xl'>Xverse</button></div>
                        <div><button className='p-2 text-white border-2 border-white rounded-xl'>Leather</button></div>
                      </div>
                      <div className='flex flex-row gap-2'>
                        <div><button className='p-2 text-white border-2 border-white rounded-xl'>Okx</button></div>
                        <div><button className='p-2 text-white border-2 border-white rounded-xl'>Phantom</button></div>
                        <div><button className='p-2 text-white border-2 border-white rounded-xl'>Magic Eden</button></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : null}
        </div>
      </div>

    </div>
  );
}

export default Home;
