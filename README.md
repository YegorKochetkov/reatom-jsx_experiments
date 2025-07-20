# Reatom JSX

Introduction to [Reatom JSX](https://v3.reatom.dev/package/jsx/) - a library for describing dynamic DOM user interfaces.
It is based on [Reatom](https://v3.reatom.dev/) - a library for creating reactive applications.

## Example

### Install

```bash
npm install @reatom/framework @reatom/jsx
```

### Usage

counter.tsx:

```tsx
import { action, atom } from "@reatom/core";

const counterAtom = atom(0, "counter");
const onClick = action(ctx => {
	counterAtom(ctx, counter => counter + 1);
}, "setCounter");

export const Counter = () => (
	<button
		type="button"
		on:click={onClick}
		css:size={counterAtom}
		css={`
			font-size: calc(1em + var(--size) * 0.1em);
		`}
	>
		Count: {counterAtom}
	</button>
);
```

```tsx
import { connectLogger } from "@reatom/framework";
import { ctx, mount } from "@reatom/jsx";
import { Counter } from "./counter";

if (import.meta.env.MODE === "development") {
	connectLogger(ctx);
}

mount(document.getElementById("app")!, <Counter />);
```
