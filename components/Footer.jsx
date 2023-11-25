import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Ionicons } from "@expo/vector-icons"
import Home from "./screens/Home"
import Stats from "./screens/Stats"
import History from "./screens/History"
import Settings from "./screens/Settings"
import AddMood from "./screens/AddMood"

export default function Footer() {
  const Tab = createBottomTabNavigator()

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName

            switch (route.name) {
              case "Home":
                iconName = focused ? "home" : "home-outline"
                break
              case "Stats":
                iconName = focused ? "stats-chart" : "stats-chart-outline"
                break
              case "Add mood":
                iconName = focused ? "add-circle" : "add-circle-outline"
                break
              case "History":
                iconName = focused ? "book" : "book-outline"
                break
              case "Setting":
                iconName = focused ? "settings" : "settings-outline"
                break

              default:
                break
            }

            return <Ionicons name={iconName} size={size} color={color} />
          },
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "grey",
        })}
      >
        <Tab.Screen
          options={{ headerShown: true, headerTitle: "BEBE" }}
          name='Home'
          component={Home}
        />
        <Tab.Screen
          options={{ headerShown: true, headerTitle: "BEBE" }}
          name='Stats'
          component={Stats}
        />
        <Tab.Screen
          options={{ headerShown: true, headerTitle: "BEBE" }}
          name='Add mood'
          component={AddMood}
        />
        <Tab.Screen
          options={{ headerShown: true, headerTitle: "BEBE" }}
          name='History'
          component={History}
        />
        <Tab.Screen
          options={{ headerShown: true, headerTitle: "BEBE" }}
          name='Setting'
          component={Settings}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})

// Корректная конструкция для отображения иконок

// if (route.name === "Home") {
//   iconName = focused ? "home" : "home-outline"
// } else if (route.name === "Stats") {
//   iconName = focused ? "stats-chart" : "stats-chart-outline"
// } else if ((route.name = "Add mood")) {
//   iconName = focused ? "add-circle" : "add-circle-outline"
// } else if ((route.name = "History")) {
//   iconName = focused ? "book" : "book-outline"
// } else if ((route.name = "Settings")) {
//   iconName = focused ? "settings" : "settings-outline"
// }

// Govno

// if (route.name === "Home") {
//   iconName = "home"
// } else {
//   iconName = "home-outline"
// }
// if (route.name === "Stats") {
//   iconName = "stats-chart"
// } else {
//   iconName = "stats-chart-outline"
// }
// if (route.name === "History") {
//   iconName = "book"
// } else {
//   iconName = "book-outline"
// }
// if (route.name === "Settings") {
//   iconName = "settings"
// } else {
//   iconName = "settings-outline"
// }
