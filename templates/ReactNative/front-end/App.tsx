/*
path: App.tsx
completePath: front-end/App.tsx
unique_id: Ue5mTTDJ
*/
import React from 'react'
import 'react-native-gesture-handler'
import { Provider as StateProvider } from 'react-redux'
import { NativeRouter, Route, Routes, Link } from "react-router-native";

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import store from './store/store'

{% for page in application.pages | plain('type','page')  %}
  {% if page.filename %}
    import {{ page.name | friendly }} from './Pages/{{ page.filename | removeExtension }}'
  {% endif %}
{% endfor %}

const Stack = createStackNavigator()

export default function App() {
  return (
    <StateProvider store={store}>
      <NativeRouter>
        <Routes>
          {% for page in application.pages | plain('type','page') %}
            {% if page.filename %}
              <Route path='{{ page.path }}' element={<{{ page.name | friendly }} />} />
            {% endif %}
          {% endfor %}
        </Routes>
      </NativeRouter>
    </StateProvider>
  )
}
