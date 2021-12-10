/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateMachine = /* GraphQL */ `
  subscription OnCreateMachine {
    onCreateMachine {
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
      operators
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
export const onUpdateMachine = /* GraphQL */ `
  subscription OnUpdateMachine {
    onUpdateMachine {
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
      operators
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
export const onDeleteMachine = /* GraphQL */ `
  subscription OnDeleteMachine {
    onDeleteMachine {
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
      operators
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
export const onCreateDiversion = /* GraphQL */ `
  subscription OnCreateDiversion {
    onCreateDiversion {
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
export const onUpdateDiversion = /* GraphQL */ `
  subscription OnUpdateDiversion {
    onUpdateDiversion {
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
export const onDeleteDiversion = /* GraphQL */ `
  subscription OnDeleteDiversion {
    onDeleteDiversion {
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
export const onCreateDefect = /* GraphQL */ `
  subscription OnCreateDefect {
    onCreateDefect {
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
export const onUpdateDefect = /* GraphQL */ `
  subscription OnUpdateDefect {
    onUpdateDefect {
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
export const onDeleteDefect = /* GraphQL */ `
  subscription OnDeleteDefect {
    onDeleteDefect {
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
export const onCreateSchedule = /* GraphQL */ `
  subscription OnCreateSchedule {
    onCreateSchedule {
      id
      operator
      timeStart
      timeEnd
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateSchedule = /* GraphQL */ `
  subscription OnUpdateSchedule {
    onUpdateSchedule {
      id
      operator
      timeStart
      timeEnd
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteSchedule = /* GraphQL */ `
  subscription OnDeleteSchedule {
    onDeleteSchedule {
      id
      operator
      timeStart
      timeEnd
      createdAt
      updatedAt
    }
  }
`;
export const onCreateTasks = /* GraphQL */ `
  subscription OnCreateTasks {
    onCreateTasks {
      id
      machineID
      operator
      workflowState
      created
      nextUpdateDue
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTasks = /* GraphQL */ `
  subscription OnUpdateTasks {
    onUpdateTasks {
      id
      machineID
      operator
      workflowState
      created
      nextUpdateDue
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTasks = /* GraphQL */ `
  subscription OnDeleteTasks {
    onDeleteTasks {
      id
      machineID
      operator
      workflowState
      created
      nextUpdateDue
      createdAt
      updatedAt
    }
  }
`;
