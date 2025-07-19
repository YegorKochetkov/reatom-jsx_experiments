import type { Action } from "@reatom/framework";
import type { JSX } from "@reatom/jsx/jsx-runtime";
import type { Data } from "./bench";

export const Button = ({ id, text, fn }: { id: string; text: string; fn: Action<[], Data[] | void> } & JSX.ButtonHTMLAttributes) => (
    <button
        id={id}
        type="button"
        on:click={fn}
        css={`
            width: fit-content;
        `}
    >
        {text}
    </button>
);
