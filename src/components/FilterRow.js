function FilterRow({ filterName, filterUrl, handleFilterInput }) {
	return (
		<tr>
			<th>
				<input
					className='search-input'
					placeholder='Filter by Name'
					value={filterName}
					onChange={(e) => {
						handleFilterInput(e.target.value, 'name');
					}}
				/>
			</th>
			<th>
				<input
					className='search-input'
					placeholder='Filter by URL'
					value={filterUrl}
					onChange={(e) => {
						handleFilterInput(e.target.value, 'url');
					}}
				/>
			</th>
		</tr>
	);
}

export default FilterRow;
