export const AlertTemplate = ({ style, options, message }) => (
    <div className="bg-zinc-900 p-2 text-zinc-200 rounded-md" style={style}>
        {options.type === 'success'}
        {message}
    </div>
);
