import { useState } from 'react';
import { fetchRepositories } from '../services/shared';

function Search({ setMessage, setRepos }) {
	const [username, setUsername] = useState('');

	function handleSearch(e) {
		e.preventDefault();
		fetchRepositories(username)
			.then((data) => {
				if (!data.length) setMessage('No Data Found');
				setRepos(data.map(({ id, name, url }) => ({ id, name, url })));
			})
			.catch((error) => {
				console.error(error);
				setMessage(error.message);
			});
	}

	return (
		<div className='search-container'>
			<input
				type='text'
				className='search-input'
				placeholder='Enter Github Username...'
				value={username}
				onChange={(e) => setUsername(e.target.value)}
				onKeyDown={(e) => {
					if (e.key === 'Enter') handleSearch(e);
				}}
			/>
			<button className='search-button' onClick={handleSearch}>
				Search
			</button>
		</div>
	);
}

export default Search;
