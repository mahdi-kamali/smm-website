export const isTokenExist = () => {
    const token = sessionStorage.getItem("token")

    if (token) return true
    return false
}