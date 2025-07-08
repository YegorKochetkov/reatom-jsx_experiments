import reatomLogo from "/reatom.png";
import { Counter } from "./counter";
import { CounterControlPanel } from "./counterControlPanel";

export const App = () => (
	<main>
		<h1>Reatom JSX</h1>
		<Counter />
		<a
			class="link"
			href="https://v1000.reatom.dev/"
			target="_blank"
			rel="noopener"
		>
			<img src={reatomLogo} class="logo" alt="Reatom logo" />
			<span>Visit Reatom's Website</span>
		</a>
		<CounterControlPanel />
	</main>
);
