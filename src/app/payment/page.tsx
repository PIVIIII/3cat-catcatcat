'use cilent'
import getReservations from "@/libs/getReservations"
import { getServerSession } from "next-auth"
import authOptions from '@/libs/auth/authOptions';
import PaymentReservation from "@/components/PaymentReservation"

export default async function UpdateReservationpage() {
    const session = await getServerSession(authOptions)

    if (!session) return null
    const reservations = await getReservations(session.user.token)
    return (
        <main>
            <PaymentReservation reservations={reservations}/>
        </main>
    )
}