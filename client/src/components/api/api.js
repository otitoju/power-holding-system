import axios from 'axios'

//get all days
export async function getAllDays() {
    try {
      const info = await axios.get('/level') 
      return info.data 
    } catch (error) {
        return error.message
    }
}

//get single day
export async function getSingleDay(id){
    try {
        const info = await axios.get(`/day/${id}`)
        return info.data
    } catch (error) {
       return error.message 
    }
}

//get single course
export async function getSingleCourse(id){
    try {
        const info = await axios.get(`/courses/${id}`)
        return info.data
    } catch (error) {
        return error.message
    }
}