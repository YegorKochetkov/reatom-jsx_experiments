import { action, atom } from "@reatom/core";

export const counterAtom = atom(0, "counterAtom");
const increaseCounter = action(
    ctx => ctx.get(counterAtom) < 10 && counterAtom(ctx, counter => counter + 1),
    "increaseCounter"
);
const decreaseCounter = action(
    ctx => ctx.get(counterAtom) > 0 && counterAtom(ctx, counter => counter - 1),
    "decreaseCounter"
);

export const CounterControlPanel = () => (
    <div
        css={`
            display: flex;
            gap: 1rem;
            justify-content: center;
        `}
    >
        <button type="button" on:click={decreaseCounter}>
            Decrease
        </button>
        <button type="button" on:click={increaseCounter}>
            Increase
        </button>
    </div>
);
