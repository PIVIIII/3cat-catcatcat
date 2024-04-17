export default async function getReservation(token: string, id: string) {
    const response = await fetch(`http://localhost:5000/api/reservations/${id}`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${token}`
        }
    })

    if (!response.ok) throw new Error('Cannot get reservation')

    return await response.json()
}