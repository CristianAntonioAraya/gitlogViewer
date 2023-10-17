import moment from 'moment';

// You can test with any other public repository, indicating the username and repository name in the environment variables

const user = import.meta.env.VITE_USER || 'CristianAntonioAraya';
export const repoName = import.meta.env.VITE_REPOSITORY || 'gitlogViewer';

const URL = `https://api.github.com/repos/${user}/${repoName}/commits`;

// https://api.github.com/repos/CristianAntonioAraya/gitlogViewer/commits

/**
 *
 * @returns Returns an array of commits
 */
const getRepositoryData = async () => {
    const res = await fetch(URL);
    const data = await res.json();
    const commits = [];

    // The json obtained is refactored to make it easier to manipulate

    data.map((item) => {
        const commit = {
            sha: item.sha,
            authorName: item.author?.login,
            authorAvatar: item.author?.avatar_url,
            authorUrl: `https://github.com/${item.author?.login}`,
            committerName: item.committer?.login,
            committerAvatar: item.committer?.avatar_url,
            commitMessage: item.commit?.message,
            commitTree: item.commit?.tree,
            commitUrl: item.commit?.url,
            commitFormatDate: moment(item.commit?.committer?.date).format(
                'MMMM Do'
            ),
            commitDate: item.commit?.committer?.date,
        };
        commits.push(commit);
    });
    return groupByDate(commits);
};

/**
 * groupByDate
 * @param {commits Array} commitsData
 * @returns returns commits grouped by creation day
 */
const groupByDate = (commitsData) => {
    const commitGroups = {};

    commitsData.forEach((commit) => {
        const commitFormatDate = commit.commitFormatDate;
        if (commitGroups[commitFormatDate]) {
            commitGroups[commitFormatDate].push(commit);
        } else {
            commitGroups[commitFormatDate] = [commit];
        }
    });
    return commitGroups;
};

export { getRepositoryData };
