<div class="container">
	<!-- <img loading="eager" src="/loading.gif" alt="loading" /> -->
	<div class="jelly" />
	<svg width="0" height="0" class="jelly-maker">
		<defs>
			<filter id="uib-jelly-ooze">
				<feGaussianBlur in="SourceGraphic" stdDeviation="6.25" result="blur" />
				<feColorMatrix
					in="blur"
					mode="matrix"
					values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
					result="ooze"
				/>
				<feBlend in="SourceGraphic" in2="ooze" />
			</filter>
		</defs>
	</svg>
</div>

<style>
	.container {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		min-height: 300px;
	}
	/* From uiverse.io by @AqFox */
	/* From uiverse.io by @G4b413l */
	.jelly {
		--uib-size: 40px;
		--uib-speed: 0.8s;
		--uib-color: var(--primary-color);
		position: relative;
		height: calc(var(--uib-size) / 2);
		width: var(--uib-size);
		filter: url('#uib-jelly-ooze');
		animation: rotate72317 calc(var(--uib-speed) * 2) linear infinite;
	}

	.jelly::before,
	.jelly::after {
		content: '';
		position: absolute;
		top: 0%;
		left: 25%;
		width: 50%;
		height: 100%;
		background: var(--uib-color);
		border-radius: 100%;
	}

	.jelly::before {
		animation: shift-left var(--uib-speed) ease infinite;
	}

	.jelly::after {
		animation: shift-right var(--uib-speed) ease infinite;
	}

	.jelly-maker {
		width: 0;
		height: 0;
		position: absolute;
	}

	@keyframes rotate72317 {
		0%,
		49.999%,
		100% {
			transform: none;
		}

		50%,
		99.999% {
			transform: rotate(90deg);
		}
	}

	@keyframes shift-left {
		0%,
		100% {
			transform: translateX(0%);
		}

		50% {
			transform: scale(0.65) translateX(-75%);
		}
	}

	@keyframes shift-right {
		0%,
		100% {
			transform: translateX(0%);
		}

		50% {
			transform: scale(0.65) translateX(75%);
		}
	}

	/* img {
		width: 80px;
		height: 80px;
	} */
</style>
