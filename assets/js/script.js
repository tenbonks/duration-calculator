function parseDuration(duration) {
	const regex = /(\d+)\s*h\s*|\s*(\d+)\s*m/g;
	let hours = 0, minutes = 0;
	let match;
	while ((match = regex.exec(duration)) !== null) {
		if (match[1]) hours += parseInt(match[1], 10);
		if (match[2]) minutes += parseInt(match[2], 10);
	}
	return { hours, minutes };
}

function calculateTotal() {
	const input = document.getElementById('durationInput').value;
	const lines = input.split('\n').filter(Boolean);
	let totalHours = 0, totalMinutes = 0;

	lines.forEach(line => {
		const { hours, minutes } = parseDuration(line);
		totalHours += hours;
		totalMinutes += minutes;
	});

	// Convert excess minutes to hours
	totalHours += Math.floor(totalMinutes / 60);
	totalMinutes %= 60;

	document.getElementById('result').textContent =
		`Total: ${totalHours} hours ${totalMinutes} minutes`;
}

document.getElementById('csvInput').addEventListener('change', function(event) {
	const file = event.target.files[0];
	if (file) {
		const reader = new FileReader();
		reader.onload = function(e) {
			const csvContent = e.target.result;
			document.getElementById('durationInput').value = csvContent;
		};
		reader.readAsText(file);
	}
});
