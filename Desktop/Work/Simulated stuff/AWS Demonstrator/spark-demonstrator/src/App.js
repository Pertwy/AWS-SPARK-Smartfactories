import './App.css';
import React, {useState, useEffect} from 'react'
import { API, graphqlOperation } from 'aws-amplify';
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';

import DisplayMachine from "./AndrewsComponents/DisplayMachine";
import ModifyMachine from "./AndrewsComponents/ModifyMachine";
import GrafanaEmbed from "./AndrewsComponents/GrafanaEmbed";
import GrafanaElementWrapper from './AndrewsComponents/GrafanaElementWrapper';
import ListMachines from "./AndrewsComponents/ListMachines";

import NavTop from './components/NavTop';

import AssignRolesPage from './pages/AssignRoles/AssignRolesPage';
import AllDefectsPage from './pages/AllDefects/AllDefectsPage';
import WidgetsPage from './pages/Widgets/WidgetsPage';
import AllMachinesPage from './pages/AllMachines/AllMachinesPage';
import TasksPage from './pages/Tasks/TasksPage';

import * as queries from "./graphql/queries"
import * as mutations from "./graphql/mutations"
import * as subscriptions from "./graphql/subscriptions"

Amplify.configure(aws_exports);
// const client = new AWSAppSyncClient({
//     url: awsconfig.aws_appsync_graphqlEndpoint,
//     region: awsconfig.aws_appsync_region,
//     auth: {
//         type: AUTH_TYPE.API_KEY,
//         apiKey: awsconfig.aws_appsync_apiKey,
//     },
// });
//
// Amplify.configure({
//     API: {
//
//     },
// });


function App() {

  const [selectedTab, setSelectedTab] = useState("Widgets")
  
    const [selectedMachine, setSelectedMachine] = useState(null)
    const [widgets, setWidgets] = useState([])
    const [subWidget, setSubWidget] = useState({})

    useEffect(() => {
        getMachines()
        setupCreateMachineSubscription()
        setupUpdateMachineSubscription()

        // return () => {
        //   subscriptionOnCreateMachine.unsubscribe()
        //   subscriptionOnUpdateMachine.unsubscribe()
        // }
    }, [subWidget])


    let subscriptionOnCreateMachine
    function setupCreateMachineSubscription(){
        subscriptionOnCreateMachine = API.graphql(
        graphqlOperation(subscriptions.onCreateMachine)
        ).subscribe({
        next:(data) => {
            setSubWidget(data.value.data.onCreateMachine)
        },
        })
    }

    let subscriptionOnUpdateMachine
    function setupUpdateMachineSubscription(){
        subscriptionOnUpdateMachine = API.graphql(
        graphqlOperation(subscriptions.onUpdateMachine)
        ).subscribe({
        next:(data) => {
            setSubWidget(data.value.data.onUpdateMachine)
        },
        })
    }

    async function getMachines(){
        const machineList = await API.graphql({
            query: queries.listMachines,
        });
        setWidgets(machineList['data']["listMachines"]["items"])
    }





  return (
    <div>

      <NavTop selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>

      {/* Widgets selectedTab /////////////////////////////////////////////////////////////////////////////////////////*/}
      {selectedTab==="Widgets" && (
        <section >
          <WidgetsPage/>
        </section>
      )}


      {/* All Machines selectedTab ////////////////////////////////////////////////////////////////////////////////////*/}
      {selectedTab==="All Machines" && (
        <section>
          <AllMachinesPage />
        </section>
      )}


      {/* All Defects selectedTab /////////////////////////////////////////////////////////////////////////////////////*/}
      {selectedTab==="All Defects" && (
        <section>
          <AllDefectsPage />
        </section>
      )}


      {/* Diversions Tab //////////////////////////////////////////////////////////////////////////////////////////////*/}
      {selectedTab==="Tasks" && (
        <section>
          <TasksPage/>
        </section>
      )}

      {selectedTab==="Diversions" && (
        <section>
          <TasksPage/>
        </section>
      )}


      {/* Widgets selectedTab /////////////////////////////////////////////////////////////////////////////////////////*/}
      {selectedTab==="Assign Roles" && (
        <section >
          <AssignRolesPage machines={widgets}/>
        </section>
      )}
      
    </div>
  );
}

{/* <GrafanaElementWrapper>
  <GrafanaEmbed source={"http://3.80.129.108/d-solo/KM1DvY57z/demo?orgId=1&from="} panelId={"2"} width={"500"} height={"390"} />
  <GrafanaEmbed source={"http://3.80.129.108/d-solo/KM1DvY57z/demo?orgId=1&from="} panelId={"4"} width={"500"} height={"130"} />
</GrafanaElementWrapper>

<ModifyMachine id={"2a49e40f-d7b2-4ae2-a6b1-afc80232bb8c"}/>

<ListMachines/> */}

export default App;
