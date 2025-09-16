import { notifications } from "@mantine/notifications"
import { IconCheck, IconX } from "@tabler/icons-react"


const successNotification=(title:string,message:string)=>{
    notifications.show({
        title: title,
        message: message,
        withCloseButton:true,
        icon:<IconCheck style={{width:"90%",height:"90%"}}/>,
        color:"teal",
        withBorder:true,
        className:"!fixed top-10 left-[40%] z-[1007] transition duration-300 ease-in-out !border-green-500 !rounded-full"
      })
}
const errorNotification=(title:string,message:string)=>{
    notifications.show({
        title: title,
        message: message,
        withCloseButton:true,
        icon:<IconX style={{width:"90%",height:"90%"}}/>,
        color:"teal",
        withBorder:true,
        className:"!fixed top-10 left-[35%] z-[1007] transition duration-300 ease-in-out !border-red-500  !rounded-full"
      })
}
export {successNotification,errorNotification};