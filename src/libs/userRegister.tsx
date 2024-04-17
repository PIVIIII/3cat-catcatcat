export default async function userRegister(user: User) {
    const response = await fetch(`http://localhost:5000/api/auth/register`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: user.name,
            email: user.email,
            tel: user.tel,
            password: user.password,
            role: user.role
        }) 
    })

    if (!response.ok) throw new Error('Cannot register new user')

    return await response.json()
}