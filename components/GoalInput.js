import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Modal } from 'react-native';

const GoalInput = props => {
	const [enteredGoal, setEnteredGoal] = useState('');

	const goalInputHandler = enteredText => {
		setEnteredGoal(enteredText);
	};

	return (
		<Modal visible={props.visible} animationType='slide'>
			<View style={styles.inputContainer}>
				<TextInput
					placeholder='Course Goals'
					style={styles.input}
					onChangeText={goalInputHandler}
					value={enteredGoal}
				/>
				<Button title='ADD' onPress={props.addGoal.bind(this, enteredGoal)} />
			</View>
		</Modal>
	);
};

const styles = StyleSheet.create({
	inputContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	input: {
		borderBottomColor: 'black',
		borderWidth: 1,
		padding: 10,
		width: 200,
		marginBottom: 10
	}
});

export default GoalInput;
