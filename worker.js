console.log('Service Worker')

self.addEventListener('push', e =>{
const data = e.data.json()
console.log(data)
//console.log('Notificacion Recibida!')
self.registration.showNotification(data.title, {
    icon:'./not.gif',
    body:data.message,
    badge: './nuevo.png',
})
})