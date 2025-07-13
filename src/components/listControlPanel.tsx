import { action, atom } from "@reatom/core";

export const listAtom = atom<number[]>(
    Array.from({ length: 10000 }, (_, i) => i + 1),
    "listAtom"
);

export const swapRandomRows = action(ctx => {
    const list = ctx.get(listAtom);
    const indices = [
        Math.floor(Math.random() * list.length),
        Math.floor(Math.random() * list.length),
    ];
    const [a, b] = indices;
    if (a === b) return false;

    const newList = [...list];
    [newList[a], newList[b]] = [newList[b], newList[a]];
    listAtom(ctx, newList);
    return true;
}, "swapRandomRows");

export const removeEverySecond = action(ctx => {
    const list = ctx.get(listAtom);
    const newList = list.filter((_, index) => index % 2 === 0);
    listAtom(ctx, newList);
    return true;
}, "removeEverySecond");

export const ListControlPanel = () => (
    <div
        css={`
            display: flex;
            flex-direction: column;
            gap: 1rem;
            justify-content: center;
            margin-bottom: 1rem;
        `}
    >
        <button type="button" on:click={swapRandomRows}>
            Swap Random Rows
        </button>
        <button type="button" on:click={removeEverySecond}>
            Remove Every Second
        </button>
        <ListViewAtom />
    </div>
);

const ListViewAtom = () => (
    <div>
        {atom(
            ctx => (
                <ul
                    css={`
                        display: flex;
                        flex-direction: column;
                        gap: 0.5rem;
                        width: 400px;
                        list-style: none;
                        padding: 0;
                    `}
                >
                    {ctx.spy(listAtom).map(item => (
                        <li
                            css={`
                                padding: 0.5rem;
                                background-color: ${item % 2 === 0
                                    ? `light-dark(#242424, #6d6d6d)`
                                    : ""};
                                color: ${item % 2 === 0
                                    ? ` light-dark(#ffffff, #000000);`
                                    : ""};

                                border-radius: 0.5rem;
                                border: 1px solid #686868;
                            `}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            ),
            "ListViewAtom"
        )}
    </div>
);
