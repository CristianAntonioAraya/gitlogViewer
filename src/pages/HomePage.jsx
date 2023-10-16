import { useEffect, useState } from 'react';
import { getRepositoryData } from '../utils/getRepositoryData.js';
import CommitCard from '../components/CommitCard.jsx';

const HomePage = () => {
    const [data, setdata] = useState();

    useEffect(() => {
        getRepositoryData().then((data) => setdata(data));
    }, []);
    console.log(data);
    return (
        <div className="w-100 h-screen flex flex-col items-center overflow-x-hidden">
            <div className="w-[40rem]">
                <h1 className="text-5xl my-10 text-center text-gray-200">
                    GitLogViewer
                </h1>
                <div>
                    {data?.map((item) => (
                        <CommitCard
                            committerAvatar={item.committerAvatar}
                            commitMessage={item.commitMessage}
                            key={item.sha}
                            sha={item.sha}
                            committerName={item.committerName}
                            commitDate={item.commitDate || ''}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HomePage;
