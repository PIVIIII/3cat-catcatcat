export default async function getPremiumTransactions(token: string) {
    const response = await fetch(`http://localhost:5000/api/premiumtransactions`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${token}`
        }
    })

    if (!response.ok) throw new Error('Cannot get Premium Transactions')

    return await response.json()
}