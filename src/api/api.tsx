import axios from "axios"
const baseUrl = 'https://ai-tool-express-api.vercel.app/api/ai_tool'

export const getAllTools = async ()=>{
    try {
        const response = await axios.get(baseUrl);
        return response.data;
    } catch (error) {
        console.log(error)
    }
}
export const postATool = async (data)=>{
    try {
        const response = await axios.post(baseUrl,data);
        return response.data;
    } catch (error) {
        console.log(error)
    }
}