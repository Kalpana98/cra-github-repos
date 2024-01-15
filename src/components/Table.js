function Table({ repos }) {
	return (
		<table>
			<thead>
				<tr>
					<th>Name</th>
					<th>URL</th>
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
