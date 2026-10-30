// svg filter referenced by the .grain class to give gradients a grainy blur
const GrainFilter = () => (
    <svg width="0" height="0" aria-hidden="true" style={{ position: "absolute" }}>
        <filter
            id="grainy-blur"
            x="-150%"
            y="-150%"
            width="400%"
            height="400%"
        >
            <feGaussianBlur stdDeviation="39" result="blur"></feGaussianBlur>
            <feTurbulence type="fractalNoise" baseFrequency=".537"></feTurbulence>
            <feComposite in="blur"></feComposite>
            <feComposite in="blur" operator="in"></feComposite>
        </filter>
    </svg>
);

export default GrainFilter;
