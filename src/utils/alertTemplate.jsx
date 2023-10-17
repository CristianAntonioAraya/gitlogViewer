export const AlertTemplate = ({ style, options, message }) => (
    <div
        className="bg-zinc-900 p-2 text-zinc-200 rounded-md border border-zinc-500"
        style={style}
    >
        {options.type === 'success'}
        {message}
    </div>
);
