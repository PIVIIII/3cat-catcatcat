export default function View(){
    return (
        <div className="text-center m-5">
            <div className="text-3xl m-2 text-black font-bold">Booking ID: </div>
            <div className="text-xl text-black">User ID: </div>

            <div className="flex flex-col items-center">
                <div className="block bg-white border border-2 border-[#85C2EE] shadow-xl mx-5 my-10 w-[40vw] h-[50vh] rounded-lg">
                    <div>ดึงการ์ดมา ทำไง???</div>
                    <div>Slip: </div>
                </div>
            </div>
            <button className="text-lg text-white bg-cyan-450 py-2 rounded-lg w-[180px] hover:bg-cyan-700">Confirm</button>
        </div>
    )
}