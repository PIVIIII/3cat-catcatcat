'use client'

import deleteReservation from "@/libs/deleteReservation"
import { useRouter } from "next/navigation"
import Link from "next/link"
import dayjs from "dayjs"

export default function MyReservation({reservations, user} : {reservations: Reservations, user: UserSession}) {

    const router = useRouter()

    const sortedReservations = [...reservations.data].sort((a: Reservation, b: Reservation) => {
        if (a.status === 'pending') return -1;
        if (a.status === 'failed' && b.status !== 'pending') return -1;
        if (a.status === 'success' && b.status !== 'pending' && b.status !== 'failed') return -1;
        return 1;
    });

    return (
        <div>
            {
                sortedReservations.length !== 0?
                sortedReservations.map((item: Reservation) => (
                    <div className="bg-white border rounded border-sky-900 shadow-lg px-5 mx-5 py-2 my-5 w-[80%]" key={item._id}>
                        <div className="text-xl text-black font-bold pb-2 py-2">{item.coworkingspace.name}</div>
                        {
                            user.role==='admin'? <div className="text-sm text-gray-700">User ID: {item.user}</div> : null
                        }
                        <div className="text-sm text-gray-700">Start time: {dayjs(item.reserveStartTime).subtract(7, 'hour').format('DD/MM/YYYY HH:mm')}</div>
                        <div className="text-sm text-gray-700">End time: {dayjs(item.reserveEndTime).subtract(7, 'hour').format('DD/MM/YYYY HH:mm')}</div>
                        <div className="text-sm text-gray-700">Cost: {item.totalcost} Baht</div>
                        <div className="my-2 flex flex-col justify-between text-center sm:flex-row">
                            <div className="flex flex-col justify-start text-center sm:flex-row space-x-0 space-y-1 sm:space-x-4 sm:space-y-0">
                                <Link href={`/update?id=${item._id}&startTime=${item.reserveStartTime}&endTime=${item.reserveEndTime}`}
                                    className="text-sm text-white bg-cyan-450 py-2 rounded-lg w-[180px] hover:bg-cyan-700">Update Reservation</Link>
                                <button className="text-sm text-white bg-rose-red py-2 rounded-lg w-[180px] hover:bg-rose-700"
                                    onClick={() => deleteReservation(item._id, user.token).then(() => {router.refresh()})}>Remove Reservation</button>
                                
                                {
                                    user.role==='admin'? 
                                    <Link href={`/myreservation/view/${item._id}`}>
                                        <button className="text-sm text-white bg-[#2DD397] py-2 rounded-lg w-[180px] hover:bg-[#0E9C69]">View</button>
                                    </Link>: null
                                }
                            </div>

                            {
                                item.status==='pending'? <div className="text-sm text-white bg-[#E39D48] py-2 rounded-lg w-[180px]">Pending</div> : null
                            }
                            {
                                item.status==='success'? <div className="text-sm text-white bg-teal-500 py-2 rounded-lg w-[180px]">Success</div> : null
                            }
                            {
                                item.status==='failed'? <div className="text-sm text-white bg-red-400 py-2 rounded-lg w-[180px]">Failed</div> : null
                            }
                        </div>
                    </div>
                ))
                : <div className="flex justify-center items-center text-center text-lg md:text-xl lg:text-2xl font-bold mt-[80px] mx-[50px]">You don't have any reservations</div>
            }
        </div>
    )
}
