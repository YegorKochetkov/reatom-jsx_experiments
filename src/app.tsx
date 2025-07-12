import { Counter } from "./components/counter";
import { CounterControlPanel } from "./components/counterControlPanel";
import { ReatomPromo } from "./components/reatomPromo";

export const App = () => (
    <main>
        <h1>Reatom JSX</h1>
        <Counter />
        <ReatomPromo />
        <CounterControlPanel />
    </main>
);
