/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createMachine = /* GraphQL */ `
  mutation CreateMachine(
    $input: CreateMachineInput!
    $condition: ModelMachineConditionInput
  ) {
    createMachine(input: $input, condition: $condition) {
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
export const updateMachine = /* GraphQL */ `
  mutation UpdateMachine(
    $input: UpdateMachineInput!
    $condition: ModelMachineConditionInput
  ) {
    updateMachine(input: $input, condition: $condition) {
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
export const deleteMachine = /* GraphQL */ `
  mutation DeleteMachine(
    $input: DeleteMachineInput!
    $condition: ModelMachineConditionInput
  ) {
    deleteMachine(input: $input, condition: $condition) {
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
export const createDiversion = /* GraphQL */ `
  mutation CreateDiversion(
    $input: CreateDiversionInput!
    $condition: ModelDiversionConditionInput
  ) {
    createDiversion(input: $input, condition: $condition) {
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
export const updateDiversion = /* GraphQL */ `
  mutation UpdateDiversion(
    $input: UpdateDiversionInput!
    $condition: ModelDiversionConditionInput
  ) {
    updateDiversion(input: $input, condition: $condition) {
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
export const deleteDiversion = /* GraphQL */ `
  mutation DeleteDiversion(
    $input: DeleteDiversionInput!
    $condition: ModelDiversionConditionInput
  ) {
    deleteDiversion(input: $input, condition: $condition) {
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
export const createDefect = /* GraphQL */ `
  mutation CreateDefect(
    $input: CreateDefectInput!
    $condition: ModelDefectConditionInput
  ) {
    createDefect(input: $input, condition: $condition) {
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
export const updateDefect = /* GraphQL */ `
  mutation UpdateDefect(
    $input: UpdateDefectInput!
    $condition: ModelDefectConditionInput
  ) {
    updateDefect(input: $input, condition: $condition) {
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
export const deleteDefect = /* GraphQL */ `
  mutation DeleteDefect(
    $input: DeleteDefectInput!
    $condition: ModelDefectConditionInput
  ) {
    deleteDefect(input: $input, condition: $condition) {
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
export const createSchedule = /* GraphQL */ `
  mutation CreateSchedule(
    $input: CreateScheduleInput!
    $condition: ModelScheduleConditionInput
  ) {
    createSchedule(input: $input, condition: $condition) {
      id
      operator
      timeStart
      timeEnd
      createdAt
      updatedAt
    }
  }
`;
export const updateSchedule = /* GraphQL */ `
  mutation UpdateSchedule(
    $input: UpdateScheduleInput!
    $condition: ModelScheduleConditionInput
  ) {
    updateSchedule(input: $input, condition: $condition) {
      id
      operator
      timeStart
      timeEnd
      createdAt
      updatedAt
    }
  }
`;
export const deleteSchedule = /* GraphQL */ `
  mutation DeleteSchedule(
    $input: DeleteScheduleInput!
    $condition: ModelScheduleConditionInput
  ) {
    deleteSchedule(input: $input, condition: $condition) {
      id
      operator
      timeStart
      timeEnd
      createdAt
      updatedAt
    }
  }
`;
export const createTasks = /* GraphQL */ `
  mutation CreateTasks(
    $input: CreateTasksInput!
    $condition: ModelTasksConditionInput
  ) {
    createTasks(input: $input, condition: $condition) {
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
export const updateTasks = /* GraphQL */ `
  mutation UpdateTasks(
    $input: UpdateTasksInput!
    $condition: ModelTasksConditionInput
  ) {
    updateTasks(input: $input, condition: $condition) {
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
export const deleteTasks = /* GraphQL */ `
  mutation DeleteTasks(
    $input: DeleteTasksInput!
    $condition: ModelTasksConditionInput
  ) {
    deleteTasks(input: $input, condition: $condition) {
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
