'use client'

export default function TopMenuPreium() {

    return (
        <div>
            <div className='relative flex items-center justify-center flex-col'>
                <img src="/img/premium_1.png" alt="cute cat" className="inset-x-0 bottom-0" />
                <div className="absolute text-center right-20">
                    <div className="text-yellow-600 text-2xl font-bold py-5">CATCATCAT Premium</div>

                    <button className="px-6 py-4 hover:bg-sky-800 text-white font-bold rounded-lg shadow-2xl bg-sky-950" onClick={() => { }}>
                        View all plan
                    </button>
                </div>
            </div>


            


        </div>



        
    );
}