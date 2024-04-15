import dayjs from "dayjs"

export default function View({reservation} : {reservation:Reservation}){
    
    return (
        <div className="text-center m-10">
            <div className="text-3xl m-2 text-black font-bold">Booking ID: {reservation._id}</div>
            <div className="text-xl text-black">User ID: {reservation.user}</div>

            <div className="flex flex-col items-center">
                <div className="block bg-white border border-2 border-[#85C2EE] shadow-xl mx-5 my-10 w-[50vw] h-[50vh] rounded-lg">
                    <div className="block bg-white border border-2 border-[#000000] shadow-xl w-80% h-50% rounded-lg mx-8 mt-8 text-left">
                        <div className="text-lg font-bold ml-5 mt-3">{reservation.coworkingspace.name}</div>
                        <div className="text-base ml-5">User ID: {reservation.user}</div>
                        <div className="text-base ml-5">Start time: {dayjs(reservation.reserveStartTime).subtract(7, 'hour').format('DD/MM/YYYY HH:mm')}</div>
                        <div className="text-base ml-5 mb-3">End time: {dayjs(reservation.reserveEndTime).subtract(7, 'hour').format('DD/MM/YYYY HH:mm')}</div>
                    </div>
                    <div className="text-xl font-bold text-left ml-8 mt-5">ส่งสลิป: </div>
                </div>
            </div>
            <button className="text-lg text-white bg-cyan-450 py-2 rounded-lg w-[180px] hover:bg-cyan-700">Confirm</button>
        </div>
    )
}