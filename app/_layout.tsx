import { Suspense, useEffect } from "react";
import { Image, useColorScheme } from "react-native";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider
} from "@react-navigation/native";
import { Home, LayoutGrid, ShieldQuestion, User2 } from "@tamagui/lucide-icons";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { Tabs } from "expo-router/tabs";
import { TamaguiProvider, Text, Theme } from "tamagui";

import { MySafeAreaView } from "../components/MySafeAreaView";
import config from "../tamagui.config";

SplashScreen.preventAutoHideAsync();

// icon 公共的参数
const ICON_CONFIG = {
  tabBarActiveTintColor: "tomato",
  tabBarInactiveTintColor: "gray"
};

export default function Layout() {
  const colorScheme = useColorScheme();

  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf")
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) return null;

  return (
    <TamaguiProvider config={config}>
      <Suspense fallback={<Text>Loading...</Text>}>
        <Theme name={colorScheme}>
          <ThemeProvider
            value={colorScheme === "light" ? DefaultTheme : DarkTheme}
          >
            <MySafeAreaView>
              {/* <Stack
                screenOptions={{
                  headerShown: false
                }}
              /> */}
              <Tabs
                screenOptions={{
                  headerStyle: {
                    backgroundColor: "#f4511e",
                    height: 60
                  },
                  headerTintColor: "#fff",
                  headerTitleStyle: {
                    fontWeight: "bold"
                  }
                }}
              >
                <Tabs.Screen
                  name="home"
                  options={{
                    title: "首页",
                    href: "/home",
                    tabBarIcon: ({ focused }) => (
                      <Home color={focused ? "tomato" : "gray"} />
                    ),
                    ...ICON_CONFIG
                    // headerTitle: (props) => <LogoTitle {...props} />
                  }}
                />
                <Tabs.Screen
                  name="faqs"
                  options={{
                    title: "问答",
                    href: "/faqs",
                    tabBarIcon: ({ focused }) => (
                      <ShieldQuestion color={focused ? "tomato" : "gray"} />
                    ),
                    ...ICON_CONFIG
                  }}
                />
                <Tabs.Screen
                  name="course"
                  options={{
                    title: "课堂",
                    href: "/course",
                    tabBarIcon: ({ focused }) => (
                      <LayoutGrid color={focused ? "tomato" : "gray"} />
                    ),
                    ...ICON_CONFIG
                  }}
                />
                <Tabs.Screen
                  name="user/my"
                  options={{
                    title: "我的",
                    href: {
                      pathname: "/user/my",
                      params: {
                        user: "evanbacon"
                      }
                    },
                    tabBarIcon: ({ focused }) => (
                      <User2 color={focused ? "tomato" : "gray"} />
                    ),
                    ...ICON_CONFIG
                  }}
                />
                <Tabs.Screen
                  // Name of the route to hide.
                  name="index"
                  options={{
                    // This tab will no longer show up in the tab bar.
                    href: null
                  }}
                />
                <Tabs.Screen
                  // Name of the route to hide.
                  name="login"
                  options={{
                    // This tab will no longer show up in the tab bar.
                    href: null
                  }}
                />
                {/* <Tabs.Screen
                  // Name of the route to hide.
                  name="user"
                  options={{
                    // This tab will no longer show up in the tab bar.
                    href: null
                  }}
                /> */}
              </Tabs>
            </MySafeAreaView>
          </ThemeProvider>
        </Theme>
      </Suspense>
    </TamaguiProvider>
  );
}
