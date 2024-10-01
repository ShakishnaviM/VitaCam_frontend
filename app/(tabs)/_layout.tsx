import { Tabs } from 'expo-router'
import React from 'react'

export default function TabLayout() {
  return (
    <div>
      <Tabs>
        <Tabs.Screen name='explore'/>
        <Tabs.Screen name='landing'/>

      </Tabs>
    </div>
  )
}
