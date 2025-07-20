import { counterAtom } from "./counterControlPanel";

export const Counter = () => (
	<p
		css:size={counterAtom}
		css={`
			font-size: calc(1em + var(--size) * 0.1em);
			margin: 0;
		`}
	>
		Counter: {counterAtom}
	</p>
);
