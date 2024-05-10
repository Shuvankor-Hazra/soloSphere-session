/* eslint-disable react/prop-types */
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import JobCard from './JobCard';
import { useEffect, useState } from 'react';
import axios from 'axios';

const TabCategories = () => {
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        const getData = async () => {
            const { data } = await axios(`${import.meta.env.VITE_API_URL}/jobs`);
            setJobs(data);
        }
        getData();
    }, [])
    return (
        <Tabs className='mb-12'>
            <div className='text-center py-6 space-y-2'>
                <h1 className='text-xl lg:text-3xl font-semibold capitalize'>Browse jobs by categories</h1>
                <p className='max-w-2xl mx-auto'>Objectively expedite holistic value before progressive supply chains. Quickly enable optimal ROI after future-proof best.</p>
            </div>
            <TabList>
                <div className='text-center mt-5'>
                    <Tab>Web Development</Tab>
                    <Tab>Graphics Design</Tab>
                    <Tab>Digital Marketing</Tab>
                </div>
            </TabList>

            <TabPanel>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 '>
                    {
                        jobs
                            .filter(j => j.category === 'Web Development')
                            .map(job => <JobCard key={job._id} job={job} />)
                    }
                </div>
            </TabPanel>
            <TabPanel>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 '>
                    {
                        jobs
                            .filter(j => j.category === 'Graphics Design')
                            .map(job => <JobCard key={job._id} job={job} />)
                    }
                </div>
            </TabPanel>
            <TabPanel>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 '>
                    {
                        jobs
                            .filter(j => j.category === 'Digital Marketing')
                            .map(job => <JobCard key={job._id} job={job} />)
                    }
                </div>
            </TabPanel>
        </Tabs>
    );
};

export default TabCategories;