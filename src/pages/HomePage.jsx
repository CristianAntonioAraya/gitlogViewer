import { useEffect, useState } from 'react';
import { getRepositoryData, repoName } from '../utils/getRepositoryData.js';
import CommitDay from '../components/CommitDay.jsx';

const HomePage = () => {
    const [commitData, setCommitData] = useState({});

    useEffect(() => {
        getRepositoryData().then((commitData) => setCommitData(commitData));
    }, []);

    return (
        <div className="w-100 h-screen flex flex-col items-center overflow-x-hidden">
            <div className="md:w-[45rem]">
                <h1 className="text-3xl md:text-5xl my-5 md:my-10 text-center ">
                    {repoName}
                </h1>
                <div>
                    {Object.keys(commitData).map((date) => (
                        <CommitDay
                            key={date}
                            date={date}
                            commits={commitData[date]}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HomePage;
