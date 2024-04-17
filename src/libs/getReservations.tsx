export default async function getReservations(token: string) {
    const response = await fetch(`http://localhost:5000/api/reservations`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${token}`
        }
    })

    if (!response.ok) throw new Error('Cannot get reservations')

    return await response.json()
}