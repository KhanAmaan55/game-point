import { Head, Link } from '@inertiajs/react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TournamentEdit from '../../scenes/tournamentEdit'
import TeamsView from '../../scenes/teamsView'
import TabDetail from '../../scenes/tabDetail'
import PointsTable from '../../scenes/pointsTable'
import './view.scss'
import { useState } from 'react';

const view = (props: any) => {
  const [value, setValue] = useState(0); // Defaulting to Detail tab
  const { tournament } = props // Destructuring props.tournament into a variable

  const handleChange = (event: any, newValue:any) => {
    setValue(newValue);
  };

  const renderComponent = (index:any) => {
    switch (index) {
      case 0:
        return <TabDetail detail={tournament}/>;
      case 1:
        return <PointsTable/>;
      case 2:
        return <TeamsView />;
      case 3:
        return <TournamentEdit detail={tournament[0]} />;
      default:
        return null;
    }
  };

  return (
    <>
      <Head title={tournament[0].name} />
      <div>
      <Tabs value={value} onChange={handleChange}>
        <Tab label="Detail" />
        <Tab label="Points Table" />
        <Tab label="Teams" />
        <Tab label="Settings" />
      </Tabs>
      {
        renderComponent(value)
      }
    </div>
    </>
  )
}

export default view
