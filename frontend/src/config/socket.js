import socket from 'socket.io-client';


let socketInstance = null;


export const initializeSocket = (projectId) => {

    socketInstance = socket("https://neurocodeai-aubec4d6a7dtc0av.centralindia-01.azurewebsites.net", {
        auth: {
            token: localStorage.getItem('token')
        },
        query: {
            projectId
        }
    });

    return socketInstance;

}

export const receiveMessage = (eventName, cb) => {
    socketInstance.on(eventName, cb);
}

export const sendMessage = (eventName, data) => {
    socketInstance.emit(eventName, data);
}
