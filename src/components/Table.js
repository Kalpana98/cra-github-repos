import { useState } from 'react';
import FilterRow from './FilterRow';

function Table({ repos }) {
	const [filterName, setFilterName] = useState('');
	const [filterUrl, setFilterUrl] = useState('');

	const filtered = repos.filter(
		(item) =>
			item.name.trim().toLowerCase().includes(filterName.trim().toLowerCase()) &&
			item.url.trim().toLowerCase().includes(filterUrl.trim().toLowerCase())
	);

	const handleFilterInput = (input, filterType) => {
		if (filterType === 'name') return setFilterName(input);
		setFilterUrl(input);
	};

	return (
		<table>
			<thead>
				<tr>
					<th>Name</th>
					<th>URL</th>
				</tr>
				<FilterRow
					filterName={filterName}
					filterUrl={filterUrl}
					handleFilterInput={handleFilterInput}
				/>
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
