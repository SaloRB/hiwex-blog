import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Text,
	TextInput,
	TouchableOpacity,
} from 'react-native';
import axios from 'axios';

class CreateUser extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: null,
			password: null,
			phone: null,
		};
	}

	componentDidMount() {
		const _path = 'https://pokemon-go1.p.rapidapi.com/pokemon_stats.json';
		const _pathInst = 'https://pokemon-go1.p.rapidapi.com/';
		const _headers = {
			'x-rapidapi-host': 'pokemon-go1.p.rapidapi.com',
			'x-rapidapi-key':
				'fda088c685msh21b013bf36b34efp1ff469jsn169c31050850',
			useQueryString: true,
		};

		axios
			.get(_path, {
				headers: _headers,
			})
			.then(res1 => console.log({ res1 }));

		axios({
			method: 'get',
			headers: _headers,
			url: _path,
		}).then(res2 => console.log({ res2 }));

		const instAxios = axios.create({
			baseURL: _pathInst,
			headers: _headers,
		});

		instAxios({
			method: 'get',
			url: 'pokemon_stats.json',
		}).then(res3 => console.log({ res3 }));
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
					onPress={() => console.log({ email, password, phone })}>
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
