import CopyToClipboard from 'react-copy-to-clipboard';
import CopySvg from '../svg components/copySvg.jsx';
import { useAlert } from 'react-alert';

const ActionsButton = ({ shaSliced }) => {
    const alert = useAlert();

    return (
        <div>
            <div>
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
            </div>
        </div>
    );
};

export default ActionsButton;
