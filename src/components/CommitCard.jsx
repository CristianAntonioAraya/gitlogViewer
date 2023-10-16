import moment from 'moment/moment.js';
import FooterCard from './FooterCard.jsx';

const CommitCard = ({
    committerName,
    commitDate,
    commitMessage,
    sha,
    committerAvatar,
}) => {
    const newDate = moment(commitDate).format('MMMM Do');
    const shaSliced = sha.slice(0, 7);

    return (
        <div className="w-100 my-5 text-zinc-300">
            <span>Committed on {newDate}</span>
            <div className="flex justify-between  p-5 rounded-md bg-zinc-900 ">
                <div>
                    <p className="text-xl">{commitMessage}</p>
                    <FooterCard
                        committerAvatar={committerAvatar}
                        committerName={committerName}
                        commitDate={commitDate}
                    />
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
