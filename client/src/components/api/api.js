import axios from 'axios'

export async function getSingleWork(id){
    try {
        const info = await axios.get(`https://flawless-server.herokuapp.com/work/${id}`)
        return info.data
    } catch (error) {
        return error.message
    }
}

export async function getAllWork(){
    try {
        const info = await axios.get(`https://flawless-server.herokuapp.com/works`)
        return info.data
    } catch (error) {
        return error.message
    }
}