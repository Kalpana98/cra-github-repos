import { useEffect, useState } from 'react';

function Table({ repos }) {
	const [filterName, setFilterName] = useState('');
	const [filterUrl, setFilterUrl] = useState('');

	const filtered = repos.filter(
		(item) => item.name.includes(filterName) && item.url.includes(filterUrl)
	);

	// eslint-disable-next-line
	useEffect(() => {}, [filterName, filterUrl, JSON.stringify(repos)]);

	return (
		<table>
			<thead>
				<tr>
					<th>Name</th>
					<th>URL</th>
				</tr>
				<tr>
					<th>
						<input
							className='search-input'
							placeholder='Filter by Name'
							value={filterName}
							onChange={(e) => {
								setFilterName(e.target.value);
							}}
						/>
					</th>
					<th>
						<input
							className='search-input'
							placeholder='Filter by URL'
							value={filterUrl}
							onChange={(e) => {
								setFilterUrl(e.target.value);
							}}
						/>
					</th>
				</tr>
			</thead>
			<tbody>
				{filtered.map(({ id, name, url }) => (
					<tr key={id}>
						<td>{name}</td>
						<td>{url}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}

export default Table;
