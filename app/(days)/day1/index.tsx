import { Stack } from 'expo-router'
import { Text, View } from 'react-native'

const DayDetailsScreen = () => {
	return (
		<View>
			<Stack.Screen options={{ title: 'Day 1' }} />
			<Text>Day1</Text>
		</View>
	)
}

export default DayDetailsScreen
