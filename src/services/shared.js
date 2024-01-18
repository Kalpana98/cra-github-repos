export async function fetchRepositories(username) {
	if (!username) return [];
	const response = await fetch(`https://api.github.com/users/${username}/repos`);
	if (response.status === 404) throw Error('No User Found');
	if (response.status === 403) throw Error('Try after some time');
	return await response.json();
}
