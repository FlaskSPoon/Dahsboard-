'use client';
import MiniCalendar from 'components/calendar/MiniCalendar';
import {
  MdAutoAwesomeMotion,
  MdCalendarMonth,
  MdFileCopy,
  MdForum,
  MdNewspaper,
  MdPeopleAlt,
  MdVideoChat,
  MdWindow,
} from 'react-icons/md';

import Widget from 'components/widget/Widget';
import ComplexTable from 'components/admin/default/ComplexTable';
import TaskCard from 'components/admin/default/TaskCard';
import tableDataComplex from 'variables/data-tables/tableDataComplex';

const Dashboard = () => {
  return (
    <div>
      <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
        <Widget
          icon={<MdWindow className="h-7 w-7" />}
          title={'Services'}
          subtitle={'5'}
        />
        <Widget
          icon={<MdNewspaper className="h-7 w-7" />}
          title={'Newsletters'}
          subtitle={'45'}
        />
        <Widget
          icon={<MdPeopleAlt className="h-7 w-7" />}
          title={'Utilisateurs'}
          subtitle={'4'}
        />
        <Widget
          icon={<MdForum className="h-7 w-7" />}
          title={'Articles'}
          subtitle={'1000'}
        />
        <Widget
          icon={<MdCalendarMonth className="h-7 w-7" />}
          title={'Evènements'}
          subtitle={'145'}
        />
        <Widget
          icon={<MdVideoChat className="h-7 w-7" />}
          title={'Webinaires'}
          subtitle={'2433'}
        />
        <Widget
          icon={<MdAutoAwesomeMotion className="h-7 w-7" />}
          title={'Formations'}
          subtitle={'10'}
        />
        <Widget
          icon={<MdFileCopy className="h-7 w-7" />}
          title={'Certiciations'}
          subtitle={'15'}
        />
        <Widget
          icon={<MdPeopleAlt className="h-7 w-7" />}
          title={'Partenaires'}
          subtitle={'24'}
        />
      </div>

      {/* <div className="mt-10 grid grid-cols-1 gap-5 xl:grid-cols-2">
        <ComplexTable tableData={tableDataComplex} />

        <div className="grid grid-cols-1 gap-5 rounded-[20px] md:grid-cols-2">
          <TaskCard />
          <div className="grid grid-cols-1 rounded-[20px]">
            <MiniCalendar />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Dashboard;
