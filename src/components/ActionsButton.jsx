import CopyToClipboard from 'react-copy-to-clipboard';
import CopySvg from '../svg components/copySvg.jsx';
import { useAlert } from 'react-alert';

const ActionsButton = ({ shaSliced, commitUrl }) => {
    const alert = useAlert();

    return (
        <div className="h-full flex flex-col justify-between">
            <div className="flex justify-between border-2 border-zinc-500 rounded-md ">
                <div className="flex items-center p-2 border-r-2 border-zinc-500">
                    <CopyToClipboard text={shaSliced}>
                        <CopySvg
                            onClick={() => alert.show('Copy on Clipboard')}
                            className="cursor-pointer stroke-zinc-500 hover:stroke-zinc-300 hover:ease-linear hover:duration-100	"
                        />
                    </CopyToClipboard>
                </div>

                <p className="select-none place-self-center text-sm p-1 text-zinc-400">
                    {shaSliced}
                </p>
            </div>

            <button className="border-2 border-zinc-500 rounded-md">
                <a
                    href={commitUrl}
                    target="_blank"
                    className="text-sm text-zinc-300"
                    rel="noreferrer"
                >
                    See Commit
                </a>
            </button>
        </div>
    );
};

export default ActionsButton;
