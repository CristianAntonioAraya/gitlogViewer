import moment from 'moment/moment.js';

const CommitCard = ({
    committerName,
    commitDate,
    commitMessage,
    sha,
    committerAvatar,
}) => {
    const newDate = moment(commitDate).format('MMMM Do');
    const newDate2 = moment(commitDate).fromNow();
    const shaSliced = sha.slice(0, 7);

    return (
        <div className="w-100 my-5 text-zinc-300">
            <span>Committed on {newDate}</span>
            <div className="flex justify-between  p-5 rounded-md bg-zinc-900 ">
                <div>
                    <p className="text-xl">{commitMessage}</p>
                    <div className="flex items-center">
                        <img
                            className="w-8 h-8 rounded-full"
                            src={committerAvatar}
                            alt="Committer avatar"
                        />
                        <p className="text-xl">{committerName}</p>
                        <p className="text-lg text-zinc-500 text-end">
                            {newDate2}
                        </p>
                    </div>
                </div>
                <div>
                    <div className=" bg-zinc-900 p-1 border">
                        <div className="flex justify-between">
                            <p className="text-lg text-zinc-500">{shaSliced}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CommitCard;
