

export function logFormData(formData) {
    formData.forEach((value, key) => {
        console.log(key, " => ", value)
    })
}