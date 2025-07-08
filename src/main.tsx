import "./style.css";
import { connectLogger } from "@reatom/framework";
import { ctx, mount } from "@reatom/jsx/jsx-runtime";
import viteLogo from "/vite.svg";
import { Counter } from "./counter";
import typescriptLogo from "./typescript.svg";

// biome-ignore lint/style/noNonNullAssertion: element is definitely not null
document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <div id="counter"></div>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`;

if (import.meta.env.MODE === "development") {
	connectLogger(ctx);
}

// biome-ignore lint/style/noNonNullAssertion: element is definitely not null
mount(document.getElementById("counter")!, <Counter />);
