import toast from 'react-hot-toast'


const typeMessage = {
    
        success: (message) => toast.success(message),
        error: (message) => toast.error(message),
    

}
export const notify = (type, message) => { 
    return typeMessage[type](message)
}


