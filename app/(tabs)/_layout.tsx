import { Ionicons } from '@expo/vector-icons'
import { Tabs } from 'expo-router'
import React from 'react'

export default function TabLayout() {
  return (
    <div>
      

      <Tabs screenOptions={{
        headerShown:false
      }}>
        <Tabs.Screen name='explore'
          options={{
            tabBarLabel:'',
            tabBarIcon :()=><Ionicons name="home"
            size={24} color='#0E4385'/>
          }}
        />

      <Tabs.Screen name ='camera'
        options={{
          tabBarLabel:'',
          tabBarIcon: ()=><Ionicons name="camera"
          size={24} color='#0E4385'/>
        }}/>


        <Tabs.Screen name='home'
        options={{
          tabBarLabel:'',
          tabBarIcon: ()=><Ionicons name="medical"
          size={24} color='#0E4385'/>}}

        />
        
        
      </Tabs>
    </div>
  )
}
