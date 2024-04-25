export default async function addPremiumTransaction(premiumtransaction: PremiumTransaction, token: string) {
    const response = await fetch(`http://localhost:5000/api/premiumtransactions/`, {
        method: 'POST',
        headers: {
            "authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            user: premiumtransaction.user,
            membership: premiumtransaction.membership,
            cost: premiumtransaction.cost,
            bank: premiumtransaction.bank,
            studentcard:premiumtransaction.studentcard,
            slip: premiumtransaction.slip
        })
    })

    const json = await response.json()

    if (!response.ok) throw new Error(json.message)

    return json
}