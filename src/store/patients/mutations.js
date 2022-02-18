
import { meridiemFormatFromTimestamp,dateOnlyFormat } from '../../commonMethods/commonMethod';

export const addDemographic = (state, data) => {
    state.addDemographic = data
 }
 export const status = (state, data) => {
    state.status = data
 }
 

 export const patients = (state, data) => {
    // state.patientList = data;
    state.patientList=data
    .map(element => {
            element.flags=element.patientFlags.data[0]?element.patientFlags.data[0].flags.data.color:'',
            element.lastName=element.lastName?element.lastName :'',
            element.firstName=element.name?element.name :'',
            element.lastReadingDate=element.lastReadingDate?element.lastReadingDate:'',
            element.weight=element.weight?element.weight:'',
            element.bp = element.patientVitals.data.map(vitalData=>{ if(vitalData.vitalField=='Systolic'){return JSON.parse(vitalData.value)}if(vitalData.vitalField=='Diastolic'){return '/'+JSON.parse(vitalData.value)}}),
            element.spo2 = element.patientVitals.data.map(vitalData=>{ if(vitalData.vitalField=='SPO2'){return JSON.parse(vitalData.value)}}),
            element.glucose = element.patientVitals.data.map(vitalData=>{ if(vitalData.vitalField=='Random Blood Sugar'){return JSON.parse(vitalData.value)}}),
            element.dob = Math.floor((new Date() - new Date(element.dob).getTime()) / 3.15576e+10)>0?Math.floor((new Date() - new Date(element.dob).getTime()) / 3.15576e+10):1
            return element
     })
    state.column= [{
        title: "Flags",
        dataIndex: "flags",
        slots: {
            customRender: "flags",
        },
    },
    {
        title: "Last Name",
        dataIndex: "lastName",
        slots: {
            customRender: "lastName",
        },
        sorter: {
            compare: (a, b) => a.reading - b.reading,
            multiple: 1,
        },
    },
    {
      title: "First Name",
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
        title: "Date of Readings ",
        dataIndex: "lastReadingDate",
        sorter: {
            compare: (a, b) => a.reading - b.reading,
            multiple: 1,
        },
    },
   
    {
        title: "Readings ",
        dataIndex: "patientVitals",
        sorter: {
            compare: (a, b) => a.readingvalues - b.readingvalues,
            multiple: 1,
        },
        slots: {
            customRender: "patientVitals",
        },
        children: [{
                title: "BP(mmHg)",
                dataIndex: "bp",
                key: "bp",
            },
            {
                title: "Spo2(%)",
                dataIndex: "spo2",
                key: "spo2",
            },
            {
                title: "Glucose(mg/dL)",
                dataIndex: "glucose",
                key: "glucose",
            },
            {
                title: "Weight(LBS)",
                dataIndex: "weight",
                key: "weight",
            },
        ],
    },
    // {
    //     title: "Non Compliant",
    //     dataIndex: "compliance",
    //     sorter: {
    //         compare: (a, b) => a.reading - b.reading,
    //         multiple: 1,
    //     },
    //     filters: [{
    //             text: "Flag",
    //             value: "flag",
    //         },
    //         {
    //             text: "Name",
    //             value: "name",
    //         },
    //         {
    //             text: "Last Reading Date",
    //             value: "readdate",
    //         },
    //         {
    //             text: "Last Reading Value",
    //             value: "readvalue",
    //         },
    //         {
    //             text: "Non Compliance ",
    //             value: "noncompliance",
    //         },
    //         {
    //             text: "Last Message Seen",
    //             value: "messagseen",
    //         },
    //     ],
    //     onFilter: (value, record) => record.name.indexOf(value) === 0,
    // },
    {
        title: "Non Compliant",
        dataIndex: "nonCompliance",
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
        dataIndex: "lastMessageSent",
        sorter: {
            compare: (a, b) => a.message - b.message,
            multiple: 1,
        },
        // filters: [{
        //         text: "Flag",
        //         value: "flag",
        //     },
        //     {
        //         text: "Name",
        //         value: "name",
        //     },
        //     {
        //         text: "Last Reading Date",
        //         value: "readdate",
        //     },
        //     {
        //         text: "Last Reading Value",
        //         value: "readvalue",
        //     },
        //     {
        //         text: "Non Compliance ",
        //         value: "noncompliance",
        //     },
        //     {
        //         text: "Last Message Seen",
        //         value: "messagseen",
        //     },
        // ],
        onFilter: (value, record) => record.name.indexOf(value) === 0,
    },
    {
    title: "Age ",
    dataIndex: "dob",
    sorter: {
        compare: (a, b) => a.reading - b.reading,
        multiple: 1,
    },
  },
    {
      title: "Sex ",
      dataIndex: "gender",
      sorter: {
          compare: (a, b) => a.reading - b.reading,
          multiple: 1,
      },
}
];
 }
 
 export const addCondition = (state, data) => {
     state.addCondition = data
  }
  export const updateDemographic = (state, data) => {
    state.updateDemographic = data
 }
  
  export const updateCondition = (state, data) => {
    state.updateCondition = data
 }
  
  export const addPatientReferals = (state, data) => {
     state.addPatientReferals = data
  }

  export const updatePatientReferals = (state, data) => {
    state.updatePatientReferals = data
 }

  
  export const addPatientPhysician = (state, data) => {
     state.addPatientPhysician = data
  }

  export const updatePatientPhysician = (state, data) => {
    state.updatePatientPhysician = data
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

  export const resetCounter = (state) => {
    state.counter = 0
  }

  export const addProgram = (state, data) => {
    state.addProgram = data
 }


 export const program = (state, data) => {
    state.program = data.map(element => {
      element.onboardingScheduleDate = dateOnlyFormat(element.onboardingScheduleDate),
      element.dischargeDate = dateOnlyFormat(element.dischargeDate)
      return element;
    })
    state.columns = [
        {
          title: "Program Name",
          dataIndex: "program",
        },
        {
          title: "Onboarding scheduled date",
          dataIndex: "onboardingScheduleDate",
        },
        // {
        //   title: "Start Date",
        //   dataIndex: "start",
        // },
        // {
        //   title: "End Date",
        //   dataIndex: "end",
        // },
        {
          title: "Discharge Date",
          dataIndex: "dischargeDate",
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

 export const inventoryList = (state, data) => {
  state.inventoryList = data
}
 

 

 export const devices = (state, data) => {

    state.devices = data.map(element => {
      element.status = element.status == 1 ? true : false
      return element;
    })

    state.devicesColumns =[
        {
          title: "Device Type",
          dataIndex: "deviceType",
        },
        {
          title: "Model No",
          dataIndex: "modelNumber",
        },
        {
          title: "Serial No",
          dataIndex: "serialNumber",
        },
        {
          title: "MAC Address",
          dataIndex: "macAddress",
        },
        
        {
          title: "Active/Inactive",
          dataIndex: "active",
          slots: {
            customRender: "active",
          },
        },
        {
          title: "Action",
          dataIndex: "action",
          slots: {
            customRender: "action",
          },
        },
      ];
      
 }


 export const parameterFields = (state, data) => {
    state.parameterFields = data.map((item)=>{if(item!=null) return item})
 }


 
 
 export const addClinicalHistory = (state, data) => {
    state.addClinicalHistory = data
 }

 export const clinicalHistoryList = (state, data) => {
    state.clinicalHistoryList = data
    state.clinicalHistoryListColumns =  [
        {
          title: "History",
          dataIndex: "history",
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

 
 export const addClinicalMedicat = (state, data) => {
    state.addClinicalMedicat = data
 }

 

 export const clinicalMedicatList = (state, data) => {
    state.clinicalMedicatList = data.map(element => {
      element.startDate = dateOnlyFormat(element.startDate),
      element.endDate = dateOnlyFormat(element.endDate)
      return element;
    })
    state.clinicalMedicatListColumns=[
        {
          title: "Medication List",
          dataIndex: "medicine",
        },
        {
            title: "Frequency",
            dataIndex: "frequency",
          },
        {
          title: "Start Date",
          dataIndex: "startDate",
        },
        {
          title: "End Date",
          dataIndex: "endDate",
        },
        // {
        //   title: "Status",
        //   dataIndex: "status",
        // },
        {
          title: "Actions",
          dataIndex: "actions",
          slots: {
            customRender: "action",
          },
        },
      ];
 }

 
 export const addInsurance = (state, data) => {
    state.addInsurance = data
 }

 export const updateInsurance = (state, data) => {
  state.updateInsurance = data
}
 


 export const addDocument = (state, data) => {
    state.addDocument = data
 }

 export const documents = (state, data) => {
    state.documents = data
    state.documentColumns=[
        {
          title: "Name",
          dataIndex: "name",
        },
        {
          title: "Document",
          dataIndex: "document",
          slots: {
            customRender: "document",
          },
        },
        {
          title: "	Type",
          dataIndex: "type",
        },
        {
          title: "	Tags",
          dataIndex: "tags",
          slots: {
            customRender: "tags",
          },
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
 
 export const uploadFile = (state, data) => {
    state.uploadFile = data
 }

export const patientDetailsSuccess = (state, patient) => {
  patient.emergencyFullName = patient.emergencyContact.data.fullName;
  patient.emergencyEmail = patient.emergencyContact.data.email;
  patient.emergencyPhoneNumber = patient.emergencyContact.data.phoneNumber;
  patient.emergencyContactType = patient.emergencyContact.data.contactType ? JSON.parse(patient.emergencyContact.data.contactType) : [];
  patient.emergencyContactTime = patient.emergencyContact.data.contactTimeId ? JSON.parse(patient.emergencyContact.data.contactTimeId) : null;
  patient.emergencyGender = patient.emergencyContact.data.genderId;
  
  patient.fullName = patient.patientFamilyMember.data.fullName;
  patient.familyEmail = patient.patientFamilyMember.data.email;
  patient.familyPhoneNumber = patient.patientFamilyMember.data.phoneNumber;
  patient.familyContactType = patient.patientFamilyMember.data.contactType ? JSON.parse(patient.patientFamilyMember.data.contactType) : [];
  patient.familyContactTime = patient.patientFamilyMember.data.contactTimeId ? JSON.parse(patient.patientFamilyMember.data.contactTimeId) : null;
  patient.familyGender = patient.patientFamilyMember.data.genderId;
  
  patient.isPrimary = patient.patientFamilyMember.data.fullName == patient.emergencyContact.data.fullName ? true : false;
  
  patient.relation = patient.patientFamilyMember.data.relationId;
  patient.country = patient.countryId;
  patient.state = patient.stateId;
  patient.language = patient.languageId;
  patient.gender = patient.genderId;
  patient.contactTime = patient.contactTimeId;
  patient.contactType = patient.contactType ? JSON.parse(patient.contactType) : null;
  patient.otherLanguage = patient.otherLanguage ? JSON.parse(patient.otherLanguage) : null;

  console.log('patient', patient)

  state.patientDetails = patient
}

export const patientTimelineSuccess = (state, timeline) => {
  state.patientTimeline = timeline.map(data => {
    data.createdAt = meridiemFormatFromTimestamp(data.createdAt);
    return data;
  })
}

export const patientDocumentsSuccess = (state, documents) => {
  state.patientDocuments = documents.map(data => {
    data.createdAt = meridiemFormatFromTimestamp(data.createdAt);
    return data;
  })
}

  export const deleteDocument = (state, data) => {
    state.deleteDocument = data
 }

  export const latestDocumentSuccess = (state, data) => {
    state.latestDocument = data
 }

  export const latestDeviceSuccess = (state, data) => {
    state.latestDevice = data
 }

  export const errorMsg = (state, data) => {
    state.errorMsg = data
 }


 export const patientsPermissions = (state, auth) => {
  if (auth == 1) {

    state.patientsPermissions = [{
        id: 1,
        name: "Add New Patients"
    },

    {
        id: 2,
        name: "Counter Card"
    },
    {
        id: 3,
        name: "Export to Excel"
    },
    {
        id: 4,
        name: "List Table"
    }]
}else if(auth == 2){
    state.patientsPermissions = [
 {
     id: 2,
     name: "Counter Card"
 },
 
 {
     id: 4,
     name: "List Table"
 }]
}

}

