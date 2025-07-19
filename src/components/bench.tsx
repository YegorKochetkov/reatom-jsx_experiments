import { action, atom } from "@reatom/framework";
import { Button } from "./button";

let idCounter = 1;
const adjectives = ["pretty", "large", "big", "small", "tall", "short", "long", "handsome", "plain", "quaint", "clean", "elegant", "easy", "angry", "crazy", "helpful", "mushy", "odd", "unsightly", "adorable", "important", "inexpensive", "cheap", "expensive", "fancy"];
const colors = ["red", "yellow", "blue", "green", "pink", "brown", "purple", "brown", "white", "black", "orange"];
const nouns = ["table", "chair", "house", "bbq", "desk", "car", "pony", "cookie", "sandwich", "burger", "pizza", "mouse", "keyboard"];

function random(max: number) {
    return Math.round(Math.random() * 1000) % max;
}

export type Data = {
    id: number;
    label: string;
};

function buildData(count: number) {
    const data: Data[] = new Array(count);

    for (let i = 0; i < count; i++) {
        const adjective = adjectives[random(adjectives.length)];
        const color = colors[random(colors.length)];
        const noun = nouns[random(nouns.length)];
        const label = `${adjective} ${color} ${noun}`;

        data[i] = {
            id: idCounter++,
            label,
        };
    }

    return data;
}

const dataAtom = atom<Data[]>([], "dataAtom");
const selectedAtom = atom<number | null>(null, "selectedAtom");

const run = action(
    ctx =>
        dataAtom(ctx, () => {
            idCounter = 1;
            return buildData(1000);
        }),
    "run"
);
const runLots = action(
    ctx =>
        dataAtom(ctx, () => {
            idCounter = 1;
            return buildData(10000);
        }),
    "runLots"
);
const add = action(ctx => dataAtom(ctx, [...ctx.get(dataAtom), ...buildData(1000)]), "add");
const update = action(ctx => {
    const data = ctx.get(dataAtom).slice();
    for (let i = 0; i < data.length; i += 10) {
        data[i].label += " !!!";
    }
    dataAtom(ctx, data);
}, "update");
const swapRows = action(ctx => {
    const data = ctx.get(dataAtom).slice();
    if (data.length > 998) {
        const tmp = data[1];
        data[1] = data[998];
        data[998] = tmp;
        dataAtom(ctx, data);
    }
}, "swapRows");
const clear = action(ctx => dataAtom(ctx, []), "clear");
const remove = action((ctx, id) => {
    const newData = ctx.get(dataAtom).filter(row => row.id !== id);
    dataAtom(ctx, newData);
}, "remove");
const select = action((ctx, id: number) => {
    selectedAtom(ctx, id);
}, "select");

const dataViewTableAtom = atom(ctx => {
    return ctx.spy(dataAtom).map(row => (
        <tr
            css:bgColor={ctx.spy(selectedAtom) === row.id ? "maroon" : ""}
            css:color={ctx.spy(selectedAtom) === row.id ? "#dbd4d7" : ""}
            css={`
                background-color: var(--bgColor);
                color: var(--color);
            `}
        >
            <td>{row.id}</td>
            <td>
                <a on:click={() => select(ctx, row.id)}>{row.label}</a>
            </td>
            <td
                css={`
                    padding: 0 0.5rem;
                `}
            >
                <a on:click={() => remove(ctx, row.id)}>X</a>
            </td>
        </tr>
    ));
}, "dataViewTableAtom");

const DataTableAtom = () => {
    return (
        <table>
            {atom(
                ctx => (
                    <tbody>{ctx.spy(dataViewTableAtom)}</tbody>
                ),
                "DataTableAtom"
            )}
        </table>
    );
};

export const Benchmark = () => {
    return (
        <div>
            <div
                css={`
                    display: flex;
                    flex-wrap: wrap;
                    gap: 1rem 0.5rem;
                    margin-bottom: 3rem;
                `}
            >
                <Button type="button" id="run" text="Create 1,000 rows" fn={run} />
                <Button type="button" id="add" text="Append 1,000 rows" fn={add} />
                <Button type="button" id="runlots" text="Create 10,000 rows" fn={runLots} />
                <Button type="button" id="update" text="Update every 10th row" fn={update} />
                <Button type="button" id="swaprows" text="Swap Rows" fn={swapRows} />
                <Button type="button" id="clear" text="Clear" fn={clear} />
            </div>
            <DataTableAtom />
            <span aria-hidden="true" />
        </div>
    );
};
