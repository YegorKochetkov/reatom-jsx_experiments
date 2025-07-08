import { action, atom } from "@reatom/core";

const counterAtom = atom(0, "counter");
const onClick = action((ctx) => {
	counterAtom(ctx, (counter) => counter + 1);
}, "setCounter");

export const Counter = () => (
	<button type="button" on:click={onClick}>
		Count: {counterAtom}
	</button>
);
