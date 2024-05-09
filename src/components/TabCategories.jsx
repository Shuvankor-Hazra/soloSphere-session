import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import JobCard from './JobCard';

const TabCategories = () => {
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
                <h2><JobCard/></h2>
            </TabPanel>
            <TabPanel>
                <h2>Graphics Design</h2>
            </TabPanel>
            <TabPanel>
                <h2>Digital Marketing</h2>
            </TabPanel>
        </Tabs>
    );
};

export default TabCategories;