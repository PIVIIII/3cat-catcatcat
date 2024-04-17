export default async function getCwSpaces() {
    const response = await fetch(`http://localhost:5000/api/coworkingspaces`, {next:{tags:['cwSpaces']}});
    
    if (!response.ok) {
        throw new Error('Failed to fetch coworking spaces');
    }

    return await response.json();
}