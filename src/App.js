import { useState } from 'react';
import './App.css';
import Table from './components/Table';
import Search from './components/Search';

const App = () => {
	const [repos, setRepos] = useState();
	const [message, setMessage] = useState();

	return (
		<div className='container'>
			<Search setMessage={setMessage} setRepos={setRepos} />
			{repos && repos.length ? <Table repos={repos} /> : message}
		</div>
	);
};

export default App;
