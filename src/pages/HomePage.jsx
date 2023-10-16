import { useEffect, useState } from 'react';
import { getRepositoryData } from '../utils/getRepositoryData.js';

const HomePage = () => {
    const [data, setdata] = useState();

    useEffect(() => {
        getRepositoryData().then((data) => setdata(data));
    }, []);

    return (
        <div>
            <div>
                <h2>GitLog-Viewer</h2>
                {
                    <p>
                        {data?.map((item) => (
                            <div key={item.sha}>
                                <p>{item.authorName}</p>
                                <p>{item.commitDate}</p>
                                <p>{item.commitMessage}</p>
                            </div>
                        ))}
                    </p>
                }
            </div>
        </div>
    );
};

export default HomePage;
