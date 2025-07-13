import { Counter } from "./components/counter";
import { CounterControlPanel } from "./components/counterControlPanel";
import { ListControlPanel } from "./components/listControlPanel";
import { ReatomPromo } from "./components/reatomPromo";

export const App = () => (
    <main
        css={`
            display: flex;
            flex-direction: column;
            gap: 2rem;
        `}
    >
        <h1
            css={`
                margin: 0;
            `}
        >
            Reatom JSX
        </h1>
        <Counter />
        <ReatomPromo />
        <CounterControlPanel />
        <ListControlPanel />
    </main>
);
