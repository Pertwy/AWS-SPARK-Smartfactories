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
import DiversionsPage from './pages/Diversions/DiversionsPage';

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
    const [isOpenTask, setIsOpenTask] = useState(true)

    const [machines, setMachines] = useState([])
    const [subMachine, setSubMachine] = useState({})

    const [defects, setDefects] = useState([])
    const [subDefect, setSubDefect] = useState({})

    const [tasks, setTasks] = useState([])
    const [subTask, setSubTask] = useState({})

    const [diversions, setDiversions] = useState([])

    //Unsubscrive needs to be used properly!!!
    useEffect(() => {
        getMachines()
        setupCreateMachineSubscription()
        setupUpdateMachineSubscription()

        // return () => {
        //   subscriptionOnCreateMachine.unsubscribe()
        //   subscriptionOnUpdateMachine.unsubscribe()
        // }
    }, [subMachine])

    useEffect(() => {
        getDefects()
        setupUpdateDefectSubscription()
        setupCreateDefectSubscription()
    }, [subDefect])

    useEffect(() => {
        getTasks()
        setupUpdateTaskSubscription()
        setupCreateTaskSubscription()
    }, [subTask])

    useEffect(() => {
        getDiversions()
    }, [])


    let subscriptionOnCreateMachine
    function setupCreateMachineSubscription(){
        subscriptionOnCreateMachine = API.graphql(
        graphqlOperation(subscriptions.onCreateMachine)
        ).subscribe({
        next:(data) => {
            setSubMachine(data.value.data.onCreateMachine)
        },
        })
    }

    let subscriptionOnUpdateMachine
    function setupUpdateMachineSubscription(){
        subscriptionOnUpdateMachine = API.graphql(
        graphqlOperation(subscriptions.onUpdateMachine)
        ).subscribe({
        next:(data) => {
            setSubMachine(data.value.data.onUpdateMachine)
        },
        })
    }

    async function getMachines(){
        const machineList = await API.graphql({
            query: queries.listMachines,
        });
        setMachines(machineList['data']["listMachines"]["items"])
    }




    let subscriptionOnUpdateDefect
    function setupUpdateDefectSubscription(){
        subscriptionOnUpdateDefect = API.graphql(
            graphqlOperation(subscriptions.onUpdateDefect)
            ).subscribe({
            next:(data) => {
                setSubDefect(data.value.data.onUpdateDefect)
            }
        })
    }

    let subscriptionOnCreateDefect
    function setupCreateDefectSubscription(){
        subscriptionOnCreateDefect = API.graphql(
            graphqlOperation(subscriptions.onCreateDefect)
            ).subscribe({
            next:(data) => {
                setSubDefect(data.value.data.onCreateDefect)
            }
        })
    }

    async function getDefects(){
        const defectList = await API.graphql({
            query: queries.listDefects,
        });
        setDefects(defectList['data']["listDefects"]["items"])
    }


    let subscriptionOnCreateTasks
    function setupCreateTaskSubscription(){
        subscriptionOnCreateTasks = API.graphql(
        graphqlOperation(subscriptions.onCreateTasks)
        ).subscribe({
        next:(data) => {
            setSubTask(data.value.data.onCreateTasks)
        },
        })
    }

    let subscriptionOnUpdateTasks
    function setupUpdateTaskSubscription(){
        subscriptionOnUpdateTasks = API.graphql(
        graphqlOperation(subscriptions.onUpdateTasks)
        ).subscribe({
        next:(data) => {
            setSubTask(data.value.data.onUpdateTasks)
        },
        })
    }

    async function getTasks(){
        const taskList = await API.graphql({
            query: queries.listTasks,
        });
        settingTasks(taskList)
    }

    //As well as saving the tasks that have been pulled down from the DB
    //This function checks if all of the tasks are complete. This is what causes
    //the tab to turn red (or not)
    function settingTasks(taskList){
      setTasks(taskList['data']["listTasks"]["items"])
      let completeTasksTemp =[]
      taskList['data']["listTasks"]["items"].forEach(task => {if(!task.isComplete) completeTasksTemp.push({"id":task.id , "complete":task.isComplete})})
      if(completeTasksTemp.length === 0) {
        setIsOpenTask(false)
      } else setIsOpenTask(true)
    }

    async function getDiversions(){
        const diversionList = await API.graphql({
            query: queries.listDiversions,
        });
        setDiversions(diversionList['data']["listDiversions"]["items"])
    }


  return (
    <div>

      <NavTop selectedTab={selectedTab} setSelectedTab={setSelectedTab} isRed={isOpenTask}/>

      {/* Widgets selectedTab /////////////////////////////////////////////////////////////////////////////////////////*/}
      {selectedTab==="Widgets" && (
        <section >
          <WidgetsPage machines={machines}/>
        </section>
      )}


      {/* All Machines selectedTab ////////////////////////////////////////////////////////////////////////////////////*/}
      {selectedTab==="All Machines" && (
        <section>
          <AllMachinesPage machines={machines}/>
        </section>
      )}


      {/* All Defects selectedTab /////////////////////////////////////////////////////////////////////////////////////*/}
      {selectedTab==="All Defects" && (
        <section>
          <AllDefectsPage defects={defects}/>
        </section>
      )}


      {/* Diversions Tab //////////////////////////////////////////////////////////////////////////////////////////////*/}
      {selectedTab==="Tasks" && (
        <section>
          <TasksPage tasks={tasks}/>
        </section>
      )}

      {selectedTab==="Diversions" && (
        <section>
          <DiversionsPage diversions={diversions}/>
        </section>
      )}


      {/* Widgets selectedTab /////////////////////////////////////////////////////////////////////////////////////////*/}
      {selectedTab==="Assign Roles" && (
        <section >
          <AssignRolesPage machines={machines}/>
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
