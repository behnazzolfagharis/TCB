import http from "../http-common";

const upLoad = (file, uploadProgress) => {
    let formData = new FormData();

    formData.append("file", file);
    return http.post('/upload', formData), {
        headers={
            "Content-Type": "multipart/form-data",
        },
        uploadProgress

    }


}
const getFilers = () => {
    return http.get('/files')

}

export default {
    upLoad,
    getFilers
}