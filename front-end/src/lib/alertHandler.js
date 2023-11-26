import Swal from "sweetalert2"

export async function showError(errors, title) {
    try {
        if (errors) {
            await Swal.fire({
                title: title ? title : "Somthing Wrong!",
                html: errors.map(err => { return `<span>${err}</span> <br/>` }),
                icon: "error"
            })
        }
    }
    catch (e) { }


}



export async function showSuccess(response, title) {
    try {
        if (response?.status === 200) {
            await Swal.fire({
                title: title ? title : "Success!",
                text: response.data,
                icon: "success"
            })
        }
    }
    catch (e) { }


}

