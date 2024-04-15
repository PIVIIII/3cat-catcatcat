'use client'

import { useRouter } from "next/navigation"
import dayjs from "dayjs"

export default function PaymentReservation({reservation}:{reservation: Reservation}) { 
    
    const router = useRouter()

    const handleclick =()=>{
        try {
            router.push('/myreservation');
            router.refresh()
        } catch (error) {
            
        }
    }
    return (
        <div>
             <div className="text-3xl text-black font-bold text-center p-2 m-2">Total cost : {reservation.totalcost}</div>
             <div className="text-xl text-black font-bold text-center">ธนาคาร xxxxx</div>
             <div className="text-xl text-black font-bold text-center">เลขบัญชี xxxxx</div>
            <div className="flex flex-col items-center">
                <div className="block bg-white border border-2 border-[#85C2EE] shadow-xl mx-5 my-10 w-[50vw] h-[50vh] rounded-lg">
                    <div className="block bg-white border border-2 border-[#000000] shadow-xl w-80% h-50% rounded-lg mx-8 mt-8 text-left">
                        <div className="text-lg font-bold ml-5 mt-3">{reservation.coworkingspace.name}</div>
                        <div className="text-base ml-5">User ID: {reservation.user}</div>
                        <div className="text-base ml-5">Start time: {dayjs(reservation.reserveStartTime).subtract(7, 'hour').format('DD/MM/YYYY HH:mm')}</div>
                        <div className="text-base ml-5 mb-3">End time: {dayjs(reservation.reserveEndTime).subtract(7, 'hour').format('DD/MM/YYYY HH:mm')}</div>
                    </div>
                    <div className="text-xl font-bold text-left ml-8 mt-5">ส่งสลิป: </div>
                <div className="ml-10 m-5">
                <form action="/upload" method="post" encType="multipart/form-data">
                    <input type="file" name="image" />
                    <br></br><button type="submit" className="text-lg text-white bg-cyan-450 rounded-lg w-[120px] hover:bg-cyan-700 mt-2">Upload</button>
                </form>
                </div>
            </div>
                
            </div>
            <div className="flex flex-row space-x-4 justify-center">
                <button className="text-lg text-white bg-cyan-450 py-2 rounded-lg w-[180px] hover:bg-cyan-700" onClick={handleclick}>Confirm Payment</button>
            </div>
            
        </div>
    )
}