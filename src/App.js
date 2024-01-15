import { useEffect, useRef, useState } from 'react';
import './App.css';
import Table from './components/Table';

const YourComponent = () => {
	const userRef = useRef();
	const [repos, setRepos] = useState();
	const [username, setUsername] = useState();
	const [message, setMessage] = useState();

	useEffect(() => {
		if (!username) return setMessage('');
		fetch(`https://api.github.com/users/${username}/repos`)
			.then((res) => {
				if (res.status === 404) throw Error('User Not Found');
				return res.json();
			})
			.then((data) => {
				if (!data.length) throw Error('No Repository Found');
				setRepos(
					data.map(({ id, name, url }) => {
						return { id, name, url };
					})
				);
			})
			.catch((error) => {
				setMessage(error.message);
			});
	}, [username]);

	function handleSubmit(e) {
		e.preventDefault();
		setUsername(userRef.current);
		// if (!userRef.current || userRef.current === '') setMessage('No Username Entered');
		userRef.current = '';
	}

	return (
		<div className='container'>
			<form className='search-container' onSubmit={(e) => handleSubmit(e)}>
				<input
					ref={userRef}
					type='text'
					className='search-input'
					placeholder='Enter Github Username...'
					onChange={(e) => (userRef.current = e.target.value)}
				/>
				<button className='search-button'>Search</button>
			</form>
			{repos && repos.length ? <Table repos={repos} /> : message}
		</div>
	);
};

export default YourComponent;
