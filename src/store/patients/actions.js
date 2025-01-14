import serviceMethod from '../../services/serviceMethod';
import { successSwal, errorSwal } from '../../commonMethods/commonMethod';

export const addDemographic = async ({commit}, data) => {
  await serviceMethod.common("post", "patient", null, data).then((response) => {
    commit('addDemographic', response.data.data);
    commit('status', true)
    successSwal(response.data.message)
  }).catch((error) => {
    if (error.response.status === 422) {
      commit('errorMsg', error.response.data)
    } else if (error.response.status === 500) {
      errorSwal(error.response.data.message)
    } else if (error.response.status === 401) {
      commit('errorMsg', error.response.data.message)
    }
  })
}

export const updateDemographic = async ({commit}, data) => {
  await serviceMethod.common("put", `patient/${data.id}/familyMember/${data.familyMemberId}/emergency/${data.id}`, null, data).then((response) => {
    commit('updateDemographic', response.data.data);
    successSwal(response.data.message)
  }).catch((error) => {
    if (error.response.status === 422) {
      commit('errorMsg', error.response.data)
    } else if (error.response.status === 500) {
      errorSwal(error.response.data.message)
    } else if (error.response.status === 401) {
      commit('errorMsg', error.response.data.message)
    }
  })
}



export const patients = async ({
  commit
}) => {
  commit('loadingStatus', true)
  await serviceMethod.common("get", `patient`, null, null).then((response) => {
    commit('patients', response.data.data);
    commit('loadingStatus', false)
  }).catch((error) => {
    commit('errorMsg', error);
    commit('loadingStatus', false)
  })

}


export const conditions = async ({
  commit
}, data) => {
  await serviceMethod.common("post", `patient/${data.id}/condition`, null, data.data).then((response) => {
    commit('conditions', response.data.data);
  }).catch((error) => {
    commit('failure', error.response.data);
    // alert(error.response.data.message)  
  })
}
export const patientReferals = async ({
  commit
}, data) => {
  await serviceMethod.common("post", `patient/${data.id}/referals`, null, data.data).then((response) => {
    commit('patientReferals', response.data.data);
  }).catch((error) => {
    commit('errorMsg', error.response.data);
    // alert(error.response.data.message) 
  })

}
export const patientPhysician = async ({
  commit
}, data) => {
  await serviceMethod.common("post", `patient/${data.id}/physician`, null, data.data).then((response) => {
    commit('patientPhysician', response.data.data);
    commit('counterPlus')
    successSwal(response.data.message)
  }).catch((error) => {
    commit('errorMsg', error.response.data);
    // alert(error.response.data.message) 
  })

}


export const programList = async ({
  commit
}, data) => {
  commit('loadingStatus', true)
  await serviceMethod.common("get", `program`, null, data).then((response) => {
    commit('programList', response.data.data);
    commit('loadingStatus', false)
  }).catch((error) => {
    commit('failure', error);
    commit('loadingStatus', false)
  })
}


export const addProgram = async ({
  commit
}, data) => {
  await serviceMethod.common("post", `patient/${data.id}/program`, null, data.data).then((response) => {
    commit('addProgram', response.data.data);
    commit('counterPlus')
    successSwal(response.data.message)
  }).catch((error) => {
    commit('failure', error.response.data);
    alert(error.response.data.message)
  })

}




export const program = async ({
  commit
}, id) => {
  commit('loadingStatus', true)
  await serviceMethod.common("get", `patient/${id}/program`, null, null).then((response) => {
    commit('program', response.data.data);
    commit('loadingStatus', false)
    commit('counterPlus')
  }).catch((error) => {
    commit('failure', error.response.data);
    commit('loadingStatus', false)
  })

}

export const addDevice = async ({
  commit
}, data) => {
  await serviceMethod.common("post", `patient/${data.id}/inventory`, null, data.data).then((response) => {
    commit('addDevice', response.data.data);
    commit('counterPlus')
    successSwal(response.data.message)
  }).catch((error) => {
    commit('failure', error.response.data);
    alert(error.response.data.message)
  })

}

export const devices = async ({
  commit
}, id) => {
  commit('loadingStatus', true)
  await serviceMethod.common("get", `patient/${id}/inventory`, null, null).then((response) => {
    commit('devices', response.data.data);
    commit('loadingStatus', false)
  }).catch((error) => {
    commit('failure', error.response.data);
    commit('loadingStatus', false)
  })

}



let temp = []
export const parameterFields = async ({
  commit
}, id) => {
  await serviceMethod.common("get", `field/${id}`, null, null).then((response) => {

    temp[id] = response.data.data ? response.data.data :
      commit('parameterFields', temp)
  }).catch((error) => {
    commit('failure', error.response.data)
    alert(error.response.data.message)
  })
  //  commit('fields',temp )
}


export const parameter = async ({
  commit
}, data) => {
  await serviceMethod.common("post", `patient/${data.id}/vital`, null, { vital: data.vital }).then((response) => {
    commit('parameter', response.data.data);
    successSwal(response.data.message)
  }).catch((error) => {
    commit('failure', error.response.data);
    alert(error.response)
  })

}


export const clinicalHistory = async ({
  commit
}, data) => {
  await serviceMethod.common("post", `patient/${data.id}/medicalHistory`, null, data.data).then((response) => {
    commit('clinicalHistory', response.data.data);
    successSwal(response.data.message)
  }).catch((error) => {
    commit('failure', error.response.data);
    alert(error.response.data.message)
  })

}

export const clinicalHistoryList = async ({
  commit
}, id) => {
  commit('loadingStatus', true)
  await serviceMethod.common("get", `patient/${id}/medicalHistory`, null, null).then((response) => {
    commit('clinicalHistoryList', response.data.data);
    commit('loadingStatus', false)
  }).catch((error) => {
    commit('failure', error.response.data);
    commit('loadingStatus', false)
  })

}



export const clinicalMedicat = async ({
  commit
}, data) => {
  await serviceMethod.common("post", `patient/${data.id}/medicalRoutine`, null, data.data).then((response) => {
    commit('clinicalMedicat', response.data.data);
    successSwal(response.data.message)
  }).catch((error) => {
    commit('failure', error.response.data);
    alert(error.response.data.message)
  })
}

export const clinicalMedicatList = async ({
  commit
}, id) => {
  commit('loadingStatus', true)
  await serviceMethod.common("get", `patient/${id}/medicalRoutine`, null, null).then((response) => {
    commit('clinicalMedicatList', response.data.data);
    commit('loadingStatus', false)
  }).catch((error) => {
    commit('failure', error.response.data);
    commit('loadingStatus', false)
  })
}




export const insuranceForm = async ({ commit }, data) => {
  let insurance = [];
  let insuranceData = data.data.insurance[0];
  insurance = insuranceData.insuranceNumber.map((item, i) => {
    let finalInsurance = { "expirationDate": "", "insuranceName": "", "insuranceNumber": "", "insuranceType": "", };
    if (insuranceData.insuranceName[i] != undefined) {
      finalInsurance.expirationDate = insuranceData.expirationDate[i];
      finalInsurance.insuranceName = insuranceData.insuranceName[i];
      finalInsurance.insuranceNumber = insuranceData.insuranceNumber[i];
      finalInsurance.insuranceType = insuranceData.insuranceType[i];
      return finalInsurance;
    }
  })
  await serviceMethod.common("post", `patient/${data.id}/insurance`, null, { insurance: insurance }).then((response) => {
    commit('insuranceForm', response.data.data);
    successSwal(response.data.message)
  }).catch((error) => {
    commit('failure', error.response.data);
    alert(error.response.data.message)
  })
}



export const documentForm = async ({
  commit
}, data) => {
  await serviceMethod.common("post", `patient/${data.id}/document`, null, data.data).then((response) => {
    commit('documentForm', response.data.data);
    successSwal(response.data.message)
  }).catch((error) => {
    commit('failure', error.response.data);
    alert(error.response.data.message)
  })
}



export const documents = async ({
  commit
}, id) => {
  commit('loadingStatus', true)
  await serviceMethod.common("get", `patient/${id}/document`, null, null).then((response) => {
    commit('documents', response.data.data);
    commit('loadingStatus', false)
  }).catch((error) => {
    commit('failure', error.response.data);
    commit('loadingStatus', false)
  })
}



export const uploadFile = async ({
  commit
}, data) => {
  await serviceMethod.common("post", `file`, null, data).then((response) => {
    commit('uploadFile', response.data.data.path);
  }).catch((error) => {
    commit('failure', error.response.data);
  })
}