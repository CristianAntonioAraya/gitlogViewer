import CopySvg from '../svg components/copySvg.jsx';

const ActionsButton = ({ shaSliced }) => {
    return (
        <div>
            <div>
                <div className="flex justify-between border-2 border-zinc-500 rounded-md ">
                    <div className="flex items-center p-2 border-r-2 border-zinc-500">
                        <CopySvg />
                    </div>

                    <p className="place-self-center text-sm p-1 text-zinc-400">
                        {shaSliced}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ActionsButton;
