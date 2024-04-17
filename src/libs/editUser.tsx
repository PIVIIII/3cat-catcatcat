export default async function editUser(user: Object, token: string) {
    const response = await fetch(`http://localhost:5000/api/users`, {
        method: 'PUT',
        headers: {
            'authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })

    const json = await response.json()

    if (!response.ok) throw new Error(json.message)

    return json
}