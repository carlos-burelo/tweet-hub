<script lang="ts">
	export let time = new Date().toISOString()
	const TIMES = {
		second: 1000, // 1 second
		minute: 60 * 1000, // 1 minute
		hour: 60 * 60 * 1000, // 1 hour
		day: 24 * 60 * 60 * 1000, // 1 day
		week: 7 * 24 * 60 * 60 * 1000, // 1 week
		month: 30 * 24 * 60 * 60 * 1000, // 1 month
		year: 365 * 24 * 60 * 60 * 1000 // 1 year
	}

	function gramar(time: number) {
		return time === 1 ? '' : 's'
	}
	function setTimeAgo(time: number) {
		if (time < TIMES.minute) {
			return 'hace unos segundos'
		} else if (time < TIMES.hour) {
			const minutes = Math.floor(time / TIMES.minute)
			return `hace ${minutes} minuto${gramar(minutes)}`
		} else if (time < TIMES.day) {
			const hours = Math.floor(time / TIMES.hour)
			return `hace ${hours} hora${gramar(hours)}`
		} else if (time < TIMES.week) {
			const days = Math.floor(time / TIMES.day)
			return `hace ${days} dia${gramar(days)}`
		} else if (time < TIMES.month) {
			const weeks = Math.floor(time / TIMES.week)
			return `hace ${weeks} semana${gramar(weeks)}`
		} else if (time < TIMES.year) {
			const months = Math.floor(time / TIMES.month)
			return `hace ${months} mes${gramar(months)}`
		} else {
			const years = Math.floor(time / TIMES.year)
			return `hace ${years} año${gramar(years)}`
		}
	}
	let diff = new Date().getTime() - new Date(time).getTime()
	let timeAgo = setTimeAgo(diff)
	$: {
		// cada 30 segundos se actualiza el timeAgo
		setInterval(() => {
			diff = new Date().getTime() - new Date(time).getTime()
			timeAgo = setTimeAgo(diff)
		}, 30000)
	}
</script>

<p>{timeAgo}</p>

<style>
	p {
		font-size: 1em;
	}
</style>
