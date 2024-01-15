import { useEffect, useState } from 'react';
import './App.css';
import Table from './components/Table';

const App = () => {
	const [repos, setRepos] = useState();
	const [username, setUsername] = useState();
	const [input, setInput] = useState();
	const [message, setMessage] = useState();
	const [filtered, setFiltered] = useState();

	useEffect(() => {
		if (!username || username === '') return setMessage('No Username Entered');
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
				setFiltered(
					data.map(({ id, name, url }) => {
						return { id, name, url };
					})
				);
			})
			.catch((error) => {
				console.log(error);
				setMessage(error.message);
			});
	}, [username]);

	function handleClick(e) {
		e.preventDefault();
		setUsername(input);
		setInput('');
		setRepos([]);
	}

	function handleSearch(searchText, searchItem) {
		setFiltered(repos.filter((item) => item[searchItem].includes(searchText)));
	}

	return (
		<div className='container'>
			<div className='search-container'>
				<input
					type='text'
					className='search-input'
					placeholder='Enter Github Username...'
					onChange={(e) => setInput(e.target.value)}
					onKeyDown={(e) => {
						if (e.key === 'Enter') handleClick(e);
					}}
				/>
				<button className='search-button' onClick={handleClick}>
					Search
				</button>
			</div>
			{repos && repos.length ? <Table repos={filtered} search={handleSearch} /> : message}
		</div>
	);
};

export default App;
