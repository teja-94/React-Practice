import React from 'react'
import {UserContext,ChannelContext} from '../App'

function UseContext4 () {
   
        return (
            <div>
                <UserContext.Consumer>

                    {user => {
                        return (
                            <ChannelContext.Consumer>
                                {channel => {
                                    return (
                                        <div>
                                            User {user}, Channel {channel}
                                        </div>
                                    )
                                }}
                            </ChannelContext.Consumer>
                        )
                }}

                </UserContext.Consumer>
               
            </div>
        )
    }

export default UseContext4