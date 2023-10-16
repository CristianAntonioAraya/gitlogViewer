const getRepositoryData = async () => {
    const res = await fetch(
        'https://api.github.com/repos/CristianAntonioAraya/gitlogViewer/commits'
    );
    const data = await res.json();
    const commits = [];
    data.map((item) => {
        const commit = {
            sha: item.sha,
            authorName: item.author?.login,
            authorAvatar: item.author?.avatar_url,
            committerName: item.committer?.login,
            committerAvatar: item.committer?.avatar_url,
            commitMessage: item.commit?.message,
            commitTree: item.commit?.tree,
            commitUrl: item.commit?.url,
            commitDate: item.commit?.committer?.date,
        };
        commits.push(commit);
    });
    groupByDate(commits);
    return commits;
};

const groupByDate = (commitsData) => {
    const commitGroups = {};

    commitsData.forEach((commit) => {
        const commitDate = commit.commitDate.split('T')[0];
        if (commitGroups[commitDate]) {
            commitGroups[commitDate].push(commit);
        } else {
            commitGroups[commitDate] = [commit];
        }
    });
    console.log('Ordened commits', commitGroups);
};

export { getRepositoryData };
