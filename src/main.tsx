import "./style.css";
import { connectLogger } from "@reatom/framework";
import { ctx, mount } from "@reatom/jsx/jsx-runtime";
import { App } from "./app";

if (import.meta.env.MODE === "development") {
	connectLogger(ctx);
}

// biome-ignore lint/style/noNonNullAssertion: element is definitely not null
mount(document.getElementById("app")!, <App />);
