const CopySvg = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={17} height={17} {...props}>
        <g
            fill="none"
            stroke=""
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            transform="translate(-1 -1)"
        >
            <rect
                width={10}
                height={10}
                data-name="Rect\xE1ngulo 1"
                rx={2}
                transform="translate(7 7)"
            />
            <path
                d="M4.221 11.625h-.74A1.481 1.481 0 0 1 2 10.144V3.481A1.481 1.481 0 0 1 3.481 2h6.663a1.481 1.481 0 0 1 1.481 1.481v.74"
                data-name="Trazado 1"
            />
        </g>
    </svg>
);
export default CopySvg;
