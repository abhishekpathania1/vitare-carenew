
export const demographics = (state, data) => {
    state.demographics = data
 }

 export const patients = (state, data) => {
    // state.patientList = data;
     data.forEach(element => {
         state.patientList.push({
             flags:element.patientFlags.data[0]?element.patientFlags.data[0].flags.data[0].color:'',
             firstName:element.firstName?element.firstName:'',
             lastReadingDate:element.lastReadingDate?element.lastReadingDate:'',
             weight:element.weight?element.weight:'',
             reading: "",
             compliance: "",
             message: "",
             readingvalues: "",
             sp02: "",
             bp: "",
             glucose: "",
             active:'',
            })
     });
    
    state.column= [{
        title: "Flags",
        dataIndex: "flags",
        slots: {
            customRender: "flags",
        },
    },
    {
        title: "Name",
        dataIndex: "firstName",
        slots: {
            customRender: "firstName",
        },
        sorter: {
            compare: (a, b) => a.reading - b.reading,
            multiple: 1,
        },
    },
    
    {
        title: "Last Reading Date",
        dataIndex: "lastReadingDate",
        sorter: {
            compare: (a, b) => a.reading - b.reading,
            multiple: 1,
        },
    },
   
    {
        title: "Last Reading Values",
        dataIndex: "readingvalues",
        sorter: {
            compare: (a, b) => a.readingvalues - b.readingvalues,
            multiple: 1,
        },
        slots: {
            customRender: "lastReadingValues",
        },
        children: [{
                title: "BP",
                dataIndex: "bp",
                key: "bp",
            },
            {
                title: "Sp02",
                dataIndex: "sp02",
                key: "sp02",
            },
            {
                title: "Glucose",
                dataIndex: "glucose",
                key: "glucose",
            },
            {
                title: "Weight",
                dataIndex: "weight",
                key: "weight",
            },
        ],
    },
    {
        title: "Non Compliance",
        dataIndex: "compliance",
        sorter: {
            compare: (a, b) => a.reading - b.reading,
            multiple: 1,
        },
        filters: [{
                text: "Flag",
                value: "flag",
            },
            {
                text: "Name",
                value: "name",
            },
            {
                text: "Last Reading Date",
                value: "readdate",
            },
            {
                text: "Last Reading Value",
                value: "readvalue",
            },
            {
                text: "Non Compliance ",
                value: "noncompliance",
            },
            {
                text: "Last Message Seen",
                value: "messagseen",
            },
        ],
        onFilter: (value, record) => record.name.indexOf(value) === 0,
    },
    {
        title: "Non Compliance",
        dataIndex: "compliance",
        sorter: {
            compare: (a, b) => a.compliance - b.compliance,
            multiple: 1,
        },
        slots: {
            customRender: "compliance",
        },
    },
    {
        title: "Last Message Sent",
        dataIndex: "message",
        sorter: {
            compare: (a, b) => a.message - b.message,
            multiple: 1,
        },
        filters: [{
                text: "Flag",
                value: "flag",
            },
            {
                text: "Name",
                value: "name",
            },
            {
                text: "Last Reading Date",
                value: "readdate",
            },
            {
                text: "Last Reading Value",
                value: "readvalue",
            },
            {
                text: "Non Compliance ",
                value: "noncompliance",
            },
            {
                text: "Last Message Seen",
                value: "messagseen",
            },
        ],
        onFilter: (value, record) => record.name.indexOf(value) === 0,
    },
];
 }
 
 export const conditions = (state, data) => {
     state.conditions = data
  }
 
 
  export const patientReferals = (state, data) => {
     state.patientReferals = data
  }
  export const patientPhysician = (state, data) => {
     state.patientPhysician = data
  }

  export const programList = (state, data) => {
    state.programList = data
 }

 export const counterPlus = (state) => {
    state.counter++
  }
 
  export const counterMinus = (state) => {
    state.counter--
  }

  export const addProgram = (state, data) => {
    state.addProgram = data
    state.columns = [
        {
          title: "Program Name",
          dataIndex: "program",
        },
        {
          title: "Onboarding scheduled date",
          dataIndex: "Onboarding",
        },
        {
          title: "Start Date",
          dataIndex: "start",
        },
        {
          title: "End Date",
          dataIndex: "end",
        },
        {
          title: "Discharge Date",
          dataIndex: "discharge",
        },
        {
          title: "Status",
          dataIndex: "status",
        },
        {
          title: "Actions",
          dataIndex: "actions",
          slots: {
            customRender: "action",
          },
        },
      ];
 }


 export const program = (state, data) => {
    state.program = data
    state.columns = [
        {
          title: "Program Name",
          dataIndex: "program",
        },
        {
          title: "Onboarding scheduled date",
          dataIndex: "Onboarding",
        },
        {
          title: "Start Date",
          dataIndex: "start",
        },
        {
          title: "End Date",
          dataIndex: "end",
        },
        {
          title: "Discharge Date",
          dataIndex: "discharge",
        },
        {
          title: "Status",
          dataIndex: "status",
        },
        {
          title: "Actions",
          dataIndex: "actions",
          slots: {
            customRender: "action",
          },
        },
      ];
    
 }
 

 export const addDevice = (state, data) => {
    state.addDevice = data
 }

 

 export const successMsg = (state, data) => {
    state.successMsg = data
 }

 export const errorMsg = (state, data) => {
    state.errorMsg = data
 }
 

