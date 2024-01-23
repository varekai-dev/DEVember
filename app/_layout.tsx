import {
	AmaticSC_400Regular,
	AmaticSC_700Bold,
} from '@expo-google-fonts/amatic-sc'
import { useFonts } from 'expo-font'
import { SplashScreen, Stack } from 'expo-router'
import { useEffect } from 'react'

SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
	const [fontsLoaded, fontError] = useFonts({
		Amatic: AmaticSC_400Regular,
		AmaticBold: AmaticSC_700Bold,
	})

	useEffect(() => {
		if (fontsLoaded || fontError) {
			SplashScreen.hideAsync()
		}
	}, [fontsLoaded, fontError])

	if (!fontsLoaded && !fontError) {
		return null
	}
	return (
		<Stack>
			<Stack.Screen
				name="index"
				options={{
					title: 'DEVember',
				}}
			/>
		</Stack>
	)
}
