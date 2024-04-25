export default async function deletePremiumTransaction(id: string, token: string) {
    const response = await fetch(`http://localhost:5000/api/premiumtransactions/${id}`, {
        method: 'DELETE',
        headers: {
            "authorization": `Bearer ${token}`
        }
    })

    if (!response.ok) throw new Error("Cannot delete Premium Transaction")

    return await response.json();
}