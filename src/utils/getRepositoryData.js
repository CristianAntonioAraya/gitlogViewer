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
    return commits;
};

export { getRepositoryData };
