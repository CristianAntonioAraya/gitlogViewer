import CommitCard from './CommitCard.jsx';

const CommitDay = ({ date, commits }) => {
    return (
        <div className="text-white">
            <div className="w-98 flex items-center gap-5">
                <span className="whitespace-nowrap w-fit">Commits on {date}</span>
                <div className="h-[1px] w-full bg-zinc-500" />
            </div>
            <div>
                {commits?.map((item) => (
                    <CommitCard
                        key={item.sha}
                        committerName={item.committerName}
                        commitDate={item.commitDate}
                        commitMessage={item.commitMessage}
                        sha={item.sha}
                        committerAvatar={item.committerAvatar}
                        authorUrl={item.authorUrl}
                        commitUrl={item.commitUrl}
                    />
                ))}
            </div>
        </div>
    );
};

export default CommitDay;
