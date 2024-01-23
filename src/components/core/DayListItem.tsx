import { Link } from 'expo-router'
import { Pressable, StyleSheet, Text, View } from 'react-native'

interface DayListItemProps {
	day: number
}

export function DayListItem({ day }: DayListItemProps) {
	return (
		<Link href={`/day${day}`} asChild>
			<Pressable style={styles.box}>
				<Text style={styles.text}>{day}</Text>
			</Pressable>
		</Link>
	)
}

const styles = StyleSheet.create({
	box: {
		flex: 1,
		aspectRatio: 1,
		backgroundColor: '#f9ede3',
		justifyContent: 'center',
		alignItems: 'center',
		borderWidth: StyleSheet.hairlineWidth,
		borderColor: '#9b4521',
		borderRadius: 20,
	},
	text: {
		color: '#9b4521',
		fontSize: 70,
		fontFamily: 'AmaticBold',
	},
})
