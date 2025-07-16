import { Benchmark } from "./components/bench";
import { Counter } from "./components/counter";
import { CounterControlPanel } from "./components/counterControlPanel";
import { ReatomPromo } from "./components/reatomPromo";

export const App = () => {
    return (
        <main
            css={`
                display: flex;
                gap: 3rem;
                justify-content: space-between;
            `}
        >
            <section
                css={`
                    display: flex;
                    flex-direction: column;
                    gap: 2rem;
                    width: 35%;
                `}
            >
                <h1>Reatom JSX</h1>
                <Counter />
                <ReatomPromo />
                <CounterControlPanel />
            </section>
            <aside
                css={`
                    width: 50%;
                    margin-block-start: 2.5rem;
                `}
            >
                <Benchmark />
            </aside>
        </main>
    );
};
