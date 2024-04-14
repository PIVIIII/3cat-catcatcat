'use client'

import { useRouter } from "next/navigation"
import Link from "next/link"
import dayjs from "dayjs"

export default function PaymentReservation({reservations}:{reservations: Reservations}) { 
    
    const router = useRouter()

    const handleUpdateReservation = (reservationId: string) => {
        router.push(`/update/${reservationId}`);
    };
  //เดะค่อยแก้เป็น username

    return (
         <div>
             {reservations.data && reservations.data.map((item: Reservation) => (
                <div className="text-xl text-black font-bold place-content-center">
                    Total cost : {item.cost}
                </div>
                ))}

        <div className="w-4/5 sm:w-3/4 md:w-7/12 xl:w-1/2 space-y-5 bg-white border border-sky-300 p-10 flex flex-col shadow-lg shadow-indigo-200 rounded-lg">
            {
                reservations.data.length !== 0?
                reservations.data.map((item: Reservation) => (
                    <div className="bg-white border rounded border-sky-900 shadow-lg px-5 mx-5 py-2 my-5 w-[80%]">
                        <div className="text-xl text-black font-bold pb-2">{item.coworkingspace.name}</div>
                        
                        <div className="text-sm text-gray-700">User Name: {item.user}</div> : null
                        
                        <div className="text-sm text-gray-700">Start time: {dayjs(item.reserveStartTime).subtract(7, 'hour').format('DD/MM/YYYY HH:mm')}</div>
                        <div className="text-sm text-gray-700">End time: {dayjs(item.reserveEndTime).subtract(7, 'hour').format('DD/MM/YYYY HH:mm')}</div>
                    </div>
                ))
                : <div className="flex justify-center items-center text-center text-lg md:text-xl lg:text-2xl font-bold mt-[80px] mx-[50px]">You don't have any reservations</div>
            }
        </div>
        <div className="text-sm text-gray-700">ส่งสลิป</div>
        <div>
            <form action="/upload" method="post" encType="multipart/form-data">
                <input type="file" name="image" />
                <button type="submit">Upload</button>
            </form>
        </div>
        </div>
    )
}