import moment from 'moment';
export const timelineSuccess = (state, count) => {

  state.timeLineButton = count;
}
export const todayAppointmentSuccess = (state, count) => {
  state.todayAppointmentState = count.map(el => { 
     var day = moment.unix(new Date(el.date));
el.date = String(day.format('MMM DD, yyyy, hh:mm A'));
return el
  })

}
export const failure = (state, error) => {
  state.errorMsg = error;
}
export const callStatusSuccess = (state, count) => {

  state.callStatus = {
    calloption: {
      annotations: {
        points: [
          {
            x: "In",
            seriesIndex: 0,
            label: {
              borderColor: "#775DD0",
              offsetY: 0,
              style: {
                color: "#fff",
                background: "#775DD0",
              },
            },
          },
        ],
      },
      chart: {
        type: "bar",
      },
      plotOptions: {
        bar: {
          borderRadius: 10,
          columnWidth: "20%",
          barHeight: "100%",
          distributed: true,
          horizontal: false,
          dataLabels: {
            position: "bottom",
          },
        },
      },
      dataLabels: {
        enabled: false,
      },
      colors: ["#121258", "#218421", "#ffb526"],
      stroke: {
        width: 1,
        colors: ["#fff"],
      },

      grid: {
        row: {
          colors: ["#fff", "#f2f2f2"],
        },
      },

      xaxis: {
        labels: {
          rotate: -45,
        },
        categories: count.map((item) => { return item.text }),
      },
      yaxis: {
        title: {
          text: "Number of Count",
        },
      },
    },
    callseries: [
      {
        name: "Value",
        data: count.map((item) => { return item.count }),
      },
    ],
  };
}

// export const patientsStatsSuccess = (state, count) => {

//     state.patientsCondition ={
//       option1: {
//         annotations: {
//           points: [
//             {
//               x: "In",
//               seriesIndex: 0,
//               label: {
//                 borderColor: "#775DD0",
//                 offsetY: 0,
//                 style: {
//                   color: "#fff",
//                   background: "#775DD0",
//                 },
//               },
//             },
//           ],
//         },
//         chart: {
//           type: "bar",
//         },
//         plotOptions: {
//           bar: {
//             borderRadius: 10,
//             columnWidth: "20%",
//             barHeight: "100%",
//             distributed: true,
//             horizontal: false,
//             dataLabels: {
//               position: "bottom",
//             },
//           },
//         },
//         dataLabels: {
//           enabled: false,
//         },
//         colors: count.map((item) => { return item.text=="Normal" || item.text=="High" || item.text=="Critical"  ? item.color :'' }),
//         stroke: {
//           width: 1,
//           colors: ["#fff"],
//         },

//         grid: {
//           row: {
//             colors: ["#fff", "#f2f2f2"],
//           },
//         },
//         xaxis: {
//           labels: {
//             rotate: -45,
//           },
//           categories: count.map((item) => { return item.text=="Normal" || item.text=="High" || item.text=="Critical" ? item.text :'' }),
//         },
//         yaxis: {
//           title: {
//             text: "Patients",
//           },
//         },
//       },
//       series1: [
//         {
//           name: "Patients",
//           data: count.map((item) => { return item.text=="Normal" || item.text=="High" || item.text=="Critical" ? item.total :'' }),
//         },
//       ],

//     };
// }

export const specializationSuccess = (state, count) => {
  state.specialization = {
    wellness: {
      annotations: {
        points: [
          {
            x: "Wellness",
            seriesIndex: 0,
            label: {
              borderColor: "#ff0000",
              offsetY: 0,
              style: {
                color: "#fff",
                background: "#ff0000",
              },
              // text: "Bananas are good",
            },
          },
        ],
      },
      chart: {
        type: "bar",
      },
      plotOptions: {
        bar: {
          borderRadius: 10,
          columnWidth: "20%",
          barHeight: "100%",
          distributed: true,
          horizontal: false,
          dataLabels: {
            position: "bottom",
          },
        },
      },
      colors: ["#8e60ff", "#ffa800"],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 1,
        colors: ["#fff"],
      },

      grid: {
        row: {
          colors: ["#fff", "#f2f2f2"],
        },
      },
      xaxis: {
        labels: {
          rotate: -45,
        },
        categories: count.map((item) => { return item.text }),
      },
      yaxis: {
        title: {
          text: "Specialization",
        },
      },
    },
    behavior: [
      {
        name: "Specialization",
        data: count.map((item) => { return item.total }),
      },
    ],
  };
}


export const networkSuccess = (state, count) => {
  state.network = {
    In: {
      annotations: {
        points: [
          {
            x: "In",
            seriesIndex: 0,
            label: {
              borderColor: "#775DD0",
              offsetY: 0,
              style: {
                color: "#fff",
                background: "#775DD0",
              },
              // text: "Bananas are good",
            },
          },
        ],
      },

      plotOptions: {
        bar: {
          borderRadius: 10,
          columnWidth: "20%",
          barHeight: "100%",
          distributed: true,
          horizontal: false,
          dataLabels: {
            position: "bottom",
          },
        },
      },
      dataLabels: {
        enabled: false,
      },
      colors: ["#267dff", "#0fb5c2"],
      stroke: {
        width: 1,
        colors: ["#fff"],
      },

      grid: {
        row: {
          colors: ["#fff", "#f2f2f2"],
        },
      },
      xaxis: {
        labels: {
          rotate: -45,
        },
        categories: count.map((item) => { return item.text }),
      },
      yaxis: {
        title: {
          text: "Network",
        },
      },
    },
    Out: [
      {
        name: "Network",
        data: count.map((item) => { return item.total }),
      },
    ],
  };
}

export const cptCodeSuccess = (state) => {
  state.cptCodeValue = {
    code: {
      annotations: {
        points: [
          {
            x: "In",
            seriesIndex: 0,
            label: {
              borderColor: "#775DD0",
              offsetY: 0,
              style: {
                color: "#fff",
                background: "#775DD0",
              },
            },
          },
        ],
      },
      chart: {

        type: "bar",
      },
      plotOptions: {
        bar: {
          borderRadius: 10,
          columnWidth: "20%",
          barHeight: "100%",
          distributed: true,
          horizontal: false,
          dataLabels: {
            position: "bottom",
          },
        },
      },
      dataLabels: {
        enabled: false,
      },
      colors: ["#3b72c5", "#ffb526", "#419541", "#343470"],
      stroke: {
        width: 1,
        colors: ["#fff"],
      },

      grid: {
        row: {
          colors: ["#fff", "#f2f2f2"],
        },
      },
      xaxis: {
        labels: {
          rotate: -45,
        },
        categories: ["99453", "99454", "99457", "99458 "],
      },
      yaxis: {
        title: {
          text: "Minutes",
        },
      },
    },
    value: [
      {
        name: "Minutes",
        data: [120, 80, 90, 30],
      },

    ],
  };
}
export const financialSuccess = (state) => {
  state.financialValue = {
    due: [4567, 1000],
    billed: {
      chart: {
        type: "pie",
      },
      labels: ["Billed", "Due"],
      colors: ["#267dff", "#E30D2A"],
      responsive: [
        {
          breakpoint: 480,
          options: {

            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  };
}
export const totalPatientsChartSuccess = (state, count) => {

  let categories = ''
  let format = ''
  let data = ''
  let type = ''
  if (state.timeLineButton == 122) {
    type = "time"
    categories = count.map((item) => {
      return item.time
    })

    format = "hh"
    data = count.map((item) => {
      return item.total
    })

  } else if (state.timeLineButton == 123) {
    type = "day"
    categories = count.map((item) => {
      return item.week
    })

    format = "dddd"
    data = count.map((item) => {
      return item.total
    })
  } else if (state.timeLineButton == 124) {
    type = "day"
    categories =
      count.map((item) => {
        return item.day
      })

    format = "dd"
    data = count.map((item) => {
      return item.total
    })
  } else {
    type = "datetime"
    categories = count.map((item) => {
      return item.month
    })
    format = "MM,yyyy"
    data = count.map((item) => {
      return item.total
    })
  }

  // const check =count.map((item) => { 
  //   return item.data.map((data) =>{ return data.month})})
  //   const month=['January','February','March','April','May','June','July','August','September','October','November','December']

  state.totalPatientsChartValue = {
    chartOptions: {
      chart: {

        type: "area",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        type: type,
        categories: categories
      },
      tooltip: {
        x: {
          format: format,
        },
      },
    },
    series: [
      {
        name: "Patients",
        data: data,
      },
    ],
  };
  // console.log("check",state.totalPatientsChartValue)
}

export const appointmentChartSuccess = (state, count) => {
   

  let categories = ''
  let format = ''
  let data = ''
  let type = ''
  if (state.timeLineButton == 122) {
    type = "time"
    categories = count.map((item) => {
      return item.time
    })

    format = "hh"
    data = count.map((item) => {
      return item.total
    })

  } else if (state.timeLineButton == 123) {
    type = "day"
//     let days = [];
//     let dates = []
//     let today = moment();
//     today.subtract(7, 'days')
// for (var i = 0; i < 7; i++){
    
//    var day = today.add(1, 'days');
   
//    dates.push(day.format('YYYY-MM-DD'));
//    days[day.format('dddd')]=i
// }
// let tmp = [];
// count.forEach(function(key) {
  
//   let value = days[key.week];
//   let index = days[key.week];

//   tmp[index] = {
//     week: key.week,
//     total: value
//   };
  
// });
// let orderedData = {};
// tmp.forEach(function(obj) {
//   console.log("dfdf",obj);
//   orderedData[obj.key] = obj.value;
// });

// console.log("dfdf",orderedData);
    categories = count.map((item) => {
      return item.week
    })

    format = "dddd"
    data = count.map((item) => {
      return item.total
    })
  } else if (state.timeLineButton == 124) {
    type = "day"
    categories =
      count.map((item) => {
        return item.day
      })

    format = "dd"
    data = count.map((item) => {
      return item.total
    })
  } else {
    type = "datetime"
    categories = count.map((item) => {
      return item.month
    })
    format = "MM,yyyy"
    data = count.map((item) => {
      return item.total
    })
  }
  state.appointmentChartValue = {
    chartOptions: {
      chart: {

        type: "area",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        type: type,
        categories: categories,
      },
      tooltip: {
        x: {
          format: format,
        },
      },
    },
    series: [
      {
        name: "Appointment",
        data: data,
      },
    ],
  };
}
