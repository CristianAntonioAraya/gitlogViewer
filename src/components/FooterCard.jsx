import moment from 'moment/moment.js';

const FooterCard = ({ committerAvatar, committerName, commitDate }) => {
    const newDate2 = moment(commitDate).fromNow();

    return (
        <div className="flex items-center">
            <img
                className="w-8 h-8 rounded-full"
                src={committerAvatar}
                alt="Committer avatar"
            />
            <p className="text-xl">{committerName}</p>
            <p className="text-lg text-zinc-500 text-end">{newDate2}</p>
        </div>
    );
};

export default FooterCard;
