import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Text,
	TextInput,
	TouchableOpacity,
} from 'react-native';

import createUser from '../../api/user';

class CreateUser extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: null,
			password: null,
			phone: null,
		};
	}

	render() {
		const { email, password, phone } = this.state;

		return (
			<View style={styles.container}>
				<Text style={styles.title}>Email:</Text>
				<TextInput
					style={styles.text}
					value={email}
					onChangeText={val => this.setState({ email: val })}
				/>

				<Text style={styles.title}>Password:</Text>
				<TextInput
					secureTextEntry
					style={styles.text}
					value={password}
					onChangeText={val => this.setState({ password: val })}
				/>

				<Text style={styles.title}>Phone:</Text>
				<TextInput
					style={styles.text}
					value={phone}
					onChangeText={val => this.setState({ phone: val })}
				/>

				<TouchableOpacity
					style={styles.btn}
					onPress={() => {
						console.log({ email, password, phone });
						const usr = {
							email: email,
							phoneNumber: phone,
							password: password,
							displayName: 'Person X',
						};
						createUser
							.post(usr)
							.then(rows => console.log({ rows }));
					}}>
					<Text style={styles.title}>Save</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#34495e',
		paddingVertical: 20,
		paddingHorizontal: 30,
	},
	title: {
		color: '#fff',
		fontSize: 16,
		fontWeight: 'bold',
		marginVertical: 10,
	},
	text: {
		borderWidth: 1,
		borderColor: '#fff',
		height: 45,
		width: '100%',
		paddingHorizontal: 10,
		color: '#fff',
	},
	btn: {
		borderWidth: 1,
		borderColor: '#fff',
		height: 45,
		width: '100%',
		marginTop: 100,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default CreateUser;
