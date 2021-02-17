import React,{useContext} from 'react'
import UseContext4 from './UseContext4'
import {UserContext,ChannelContext} from '../App'

function UseContext3 () {
   
    const user= useContext(UserContext)
    const channel=useContext(ChannelContext)


        return (
            <div>
              Hell0 {user} - {channel}
            </div>
        )
   
}

export default UseContext3