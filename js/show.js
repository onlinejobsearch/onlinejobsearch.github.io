window.onload = () => {
	let tbody = document.getElementById('tbody');
	let temps_string = localStorage.getItem('findjobs')
	let temps; 

	if (temps_string == null) {
		alert('No data was entered!')
	} else {
		usersinput = JSON.parse(temps_string)
	} 	

	for (temp of usersinput || []) {
		let body_content = `
			<tr>
				<td>${temp.title}</td>
				<td>${temp.location}</td>
				<td>${temp.distance}</td>
				<td>${temp.minSalary}</td>
				<td>${temp.maxSalary}</td>
				<td>${temp.type}</td>
				<td>${temp.time}</td>
			</tr>
		`
		tbody.innerHTML += body_content
	}
}