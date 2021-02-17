import React, { Component } from 'react'


//CREATING CONTEXT
const UserContext = React.createContext()

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer


export {UserProvider,UserConsumer}
