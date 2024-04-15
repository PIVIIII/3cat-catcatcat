import View from "@/components/View";
import authOptions from "@/libs/auth/authOptions";
import getReservation from "@/libs/getReservation";
import { getServerSession } from "next-auth";

export default async function ViewPage({params} : {params: {id: string}}){

    const session = await getServerSession(authOptions)

    if (!session) return null

    const reservation = await getReservation(session.user.token, params.id)

    return (
        <main>
            <View reservation={reservation.data}></View>
        </main>
    )
}