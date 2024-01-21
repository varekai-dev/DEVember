import { StatusBar } from 'expo-status-bar'
import { FlatList, StyleSheet, View } from 'react-native'
import { DayListItem } from './src/components/core/DayListItem'

export default function App() {
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
