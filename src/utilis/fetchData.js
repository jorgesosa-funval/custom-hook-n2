export async function fetchData(url) {
    try {
        const base = `https://www.thecocktaildb.com/api/json/v1/1/${url}`
        const rs = await fetch(base)
        const json = await rs.json()
        return json
    } catch (error) {
        throw error 
    }

}