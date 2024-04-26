'use client'
export default function SpecialPrivileges() {
    return (
        <div>

            <div className="flex justify-center">
                <div className="bg-white border-2 border-yellow-500 rounded-lg shadow-lg px-20 py-8 my-8">
                    <div className="text-2xl text-yellow-600 font-sans font-bold pb-5">Special Privileges</div>
                    <div>
                        <div className="text-l text-black font-sans pb-2">● Premium User can reserve 5 reservation</div>
                        <div className="text-l text-black font-sans pb-2">● Discount 10% on every reservevation</div>
                        <div className="text-l text-black font-sans pb-2">● ยืมเครื่องปริ้นท์ดั้ย (ช่ยแก้จากไทยเป็นอังกฤษด้วย)</div>
                        <div className="text-l text-black font-sans pb-2">● มีขนมและน้ำแจกทุกครั้งที่มา (ช่ยแก้จากไทยเป็นอังกฤษด้วย)</div>
                    </div>
                </div>
            </div>

            <div className="text-center text-3xl text-yellow-600 font-bold pt-10 pb-5">Pick a membership that fits you</div>

            <div className="px-5">
                <div className="flex mx">
                    <div className="w-1/3 px-10 relative">
                        <div className="shadow-[-10px_10px_0px_0px_rgba(233,179,111)] text-center bg-white border-2 rounded-lg border-yellow-500 px-5 py-5 my-5">
                            <div className="text-xl text-black font-sans font-bold pb-2">Student</div>
                            <div className="flex justify-center">
                                <hr className="border border-yellow-500 w-[90%]"></hr>
                            </div>
                            <div className="text-l text-black font-sans font-bold py-5">฿129/month</div>
                            <button className="mt-4 px-4 py-2 hover:bg-yellow-600 text-white font-bold rounded-lg shadow-2xl bg-yellow-500" onClick={() => { }}>
                                Register
                            </button>
                        </div>
                    </div>
                    <div className="w-1/3 px-10">
                        <div className="shadow-[-10px_10px_0px_0px_rgba(233,179,111)] text-center bg-white border-2 rounded-lg border-yellow-500 shadow-lg px-5 py-5 my-5">
                            <div className="text-xl text-black font-sans font-bold pb-2">Individual</div>
                            <div className="flex justify-center">
                                <hr className="border border-yellow-500 w-[90%]"></hr>
                            </div>
                            <div className="text-l text-black font-sans font-bold py-5">฿199/month</div>
                            <button className="mt-4 px-4 py-2 hover:bg-yellow-600 text-white font-bold rounded-lg shadow-2xl bg-yellow-500" onClick={() => { }}>
                                Register
                            </button>
                        </div>
                    </div>
                    <div className="w-1/3 px-10">
                        <div className="shadow-[-10px_10px_0px_0px_rgba(233,179,111)] text-center bg-white border-2 rounded-lg border-yellow-500 shadow-lg px-5 py-5 my-5">
                            <div className="text-xl text-black font-sans font-bold pb-2">Individual</div>
                            <div className="flex justify-center">
                                <hr className="border border-yellow-500 w-[90%]"></hr>
                            </div>
                            <div className="text-l text-black font-sans font-bold py-5">฿1990/year</div>
                            <button className="mt-4 px-4 py-2 hover:bg-yellow-600 text-white font-bold rounded-lg shadow-2xl bg-yellow-500" onClick={() => { }}>
                                Register
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-10 pb-10"></div>

            <img src="/img/premium_2.png" alt="cute cat" className="inset-x-0 bottom-0" />





        </div>
    )
}
