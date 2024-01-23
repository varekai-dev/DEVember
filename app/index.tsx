import { StatusBar } from 'expo-status-bar'
import { FlatList, StyleSheet, View } from 'react-native'

import {
	useFonts,
	AmaticSC_400Regular,
	AmaticSC_700Bold,
} from '@expo-google-fonts/amatic-sc'
import * as SplashScreen from 'expo-splash-screen'
import { useEffect } from 'react'
import { DayListItem } from '../src/components/core/DayListItem'

SplashScreen.preventAutoHideAsync()

export default function Home() {
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
		<View style={styles.container}>
			<FlatList
				contentContainerStyle={styles.content}
				numColumns={2}
				columnWrapperStyle={styles.column}
				data={Array.from({ length: 24 }, (_, i) => i + 1)}
				renderItem={({ item }) => <DayListItem day={item} />}
			></FlatList>
			<StatusBar style="auto" />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	content: {
		gap: 10,
		padding: 10,
	},
	column: {
		gap: 10,
	},
})
