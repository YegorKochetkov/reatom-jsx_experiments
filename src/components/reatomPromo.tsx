import { css } from "@reatom/jsx";
import reatomLogo from "/reatom.png";

const styles = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-block-end: 2rem;

    img {
        width: 6em;
        aspect-ratio: 1;
        padding: 1.5em;
        will-change: filter;
        transition:
            filter 300ms,
            transform 300ms ease-in-out;
    }

    &:hover img {
        transform: rotate(42deg);
        filter: drop-shadow(0 0 2em #646cffaa);
    }
`;

export const ReatomPromo = () => (
    <a
        css={styles}
        href="https://v1000.reatom.dev/"
        target="_blank"
        rel="noopener noreferrer"
    >
        <img src={reatomLogo} alt="Reatom logo" />
        <span>Visit Reatom's Website</span>
    </a>
);
