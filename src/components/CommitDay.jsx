import CommitCard from './CommitCard.jsx';

const CommitDay = ({ date, commits }) => {
    return (
        <div className="text-white">
            <div className="flex items-center gap-5">
                <h1 className="w-32">{date}</h1>
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
                    />
                ))}
            </div>
        </div>
    );
};

export default CommitDay;
