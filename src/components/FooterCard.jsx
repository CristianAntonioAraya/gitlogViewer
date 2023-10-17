import moment from 'moment/moment.js';

const FooterCard = ({
    committerAvatar,
    committerName,
    commitDate,
    authorUrl,
}) => {
    const newDate2 = moment(commitDate).fromNow();

    return (
        <div className="my-2 flex items-center gap-4">
            <a
                className="flex items-center gap-2 cursor-pointer"
                href={authorUrl}
                target="_blank"
                rel="noreferrer"
            >
                <img
                    className="w-6 h-6 rounded-full"
                    src={committerAvatar}
                    alt="Committer avatar"
                />
                <p className="text-lg">{committerName}</p>
            </a>
            <p className="text-lg text-zinc-500 text-end">
                Committed {newDate2}
            </p>
        </div>
    );
};

export default FooterCard;
