/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMachine = /* GraphQL */ `
  query GetMachine($id: ID!) {
    getMachine(id: $id) {
      id
      name
      description
      diversions {
        id
        machineID
        machineName
        code
        reason
        timeStart
        timeEnd
        createdAt
        updatedAt
      }
      ragOuter
      ragInner
      mcdown
      currentdowntime
      cumulativedowntime
      currentOperator
      schedule {
        id
        operator
        timeStart
        timeEnd
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listMachines = /* GraphQL */ `
  query ListMachines(
    $filter: ModelMachineFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMachines(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        diversions {
          id
          machineID
          machineName
          code
          reason
          timeStart
          timeEnd
          createdAt
          updatedAt
        }
        ragOuter
        ragInner
        mcdown
        currentdowntime
        cumulativedowntime
        currentOperator
        schedule {
          id
          operator
          timeStart
          timeEnd
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getDiversion = /* GraphQL */ `
  query GetDiversion($id: ID!) {
    getDiversion(id: $id) {
      id
      machineID
      machineName
      code
      reason
      timeStart
      timeEnd
      createdAt
      updatedAt
    }
  }
`;
export const listDiversions = /* GraphQL */ `
  query ListDiversions(
    $filter: ModelDiversionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDiversions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        machineID
        machineName
        code
        reason
        timeStart
        timeEnd
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getDefect = /* GraphQL */ `
  query GetDefect($id: ID!) {
    getDefect(id: $id) {
      id
      timeStart
      image
      resolved
      operatorAllocated
      operatorAttended
      bad
      action
      item
      subitem
      location
      createdAt
      updatedAt
    }
  }
`;
export const listDefects = /* GraphQL */ `
  query ListDefects(
    $filter: ModelDefectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDefects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        timeStart
        image
        resolved
        operatorAllocated
        operatorAttended
        bad
        action
        item
        subitem
        location
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSchedule = /* GraphQL */ `
  query GetSchedule($id: ID!) {
    getSchedule(id: $id) {
      id
      operator
      timeStart
      timeEnd
      createdAt
      updatedAt
    }
  }
`;
export const listSchedules = /* GraphQL */ `
  query ListSchedules(
    $filter: ModelScheduleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSchedules(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        operator
        timeStart
        timeEnd
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTasks = /* GraphQL */ `
  query GetTasks($id: ID!) {
    getTasks(id: $id) {
      id
      machineName
      operator
      workflowState
      created
      nextUpdateDue
      isComplete
      createdAt
      updatedAt
    }
  }
`;
export const listTasks = /* GraphQL */ `
  query ListTasks(
    $filter: ModelTasksFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTasks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        machineName
        operator
        workflowState
        created
        nextUpdateDue
        isComplete
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
