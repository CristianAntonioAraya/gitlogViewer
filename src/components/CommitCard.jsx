import ActionsButton from './ActionsButton.jsx';
import FooterCard from './FooterCard.jsx';

const CommitCard = ({
    committerName,
    commitDate,
    commitMessage,
    sha,
    committerAvatar,
    authorUrl,
    commitUrl,
}) => {
    const shaSliced = sha.slice(0, 7);

    return (
        <div className="my-5">
            <div className="flex justify-between border border-zinc-500 p-5 rounded-md bg-zinc-900 ">
                <div>
                    <p className="sm:text-lg pb-5 text-xl">{commitMessage}</p>
                    <FooterCard
                        committerAvatar={committerAvatar}
                        committerName={committerName}
                        commitDate={commitDate}
                        authorUrl={authorUrl}
                    />
                </div>
                <div>
                    <ActionsButton
                        shaSliced={shaSliced}
                        commitUrl={commitUrl}
                    />
                </div>
            </div>
        </div>
    );
};

export default CommitCard;
