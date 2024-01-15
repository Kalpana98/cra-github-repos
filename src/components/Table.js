function Table({ repos, search }) {
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
							onChange={(e) => search(e.target.value, 'name')}
						/>
					</th>
					<th>
						<input
							className='search-input'
							placeholder='Filter by URL'
							onChange={(e) => search(e.target.value, 'url')}
						/>
					</th>
				</tr>
			</thead>
			<tbody>
				{repos.map(({ id, name, url }) => (
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
