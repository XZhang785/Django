
function revere(){
    document.querySelector(".right").style.opacity=1
}


function click1() {
  
    var myChart=echarts.init(document.querySelector(".chart"))
    var option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          crossStyle: {
            color: '#999'
          }
        }
      },
      toolbox: {
        feature: {
          dataView: { show: true, readOnly: false },
          magicType: { show: true, type: ['bar'] },
          restore: { show: true },
          saveAsImage: { show: true }
        }
      },
      legend: {
        data: ['轮廓系数', '调整兰德系数']
      },
      xAxis: [
        {
          type: 'category',
          data: ['Kmeans', 'GMM', 'DBSCAN'],
          axisPointer: {
            type: 'shadow'
          }
        }
      ],
      yAxis: [
        {
          type: 'value',
          
        
          axisLabel: {
            formatter: '{value} '
          }
        }
      ],
      series: [
        {
          name: '轮廓系数',
          type: 'bar',
          tooltip: {
            valueFormatter: function (value) {
              return value ;
            }
          },
          color:"#3399ff",
          data: [
          0.5358326117364504, -0.04018705175511514, 0.27082138097333064
          ]
        },
        {
          name: '调整兰德系数',
          type: 'bar',
          tooltip: {
            valueFormatter: function (value) {
              return value ;
            }
          },
          color:"#ffcc66",
          data: [
          0.0018809502685865438, 0.007122656486978267, 0.005119546187401416
          ]
        }
      ]
    };
    
    myChart.clear();
    myChart.setOption(option);
    window.addEventListener("resize", function() {
        myChart.resize();
    });
    var myChart1=echarts.init(document.querySelector(".chart1"))
    
    var option1 = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          crossStyle: {
            color: '#999'
          }
        }
      },
      toolbox: {
        feature: {
          dataView: { show: true, readOnly: false },
          magicType: { show: true, type: ['bar'] },
          restore: { show: true },
          saveAsImage: { show: true }
        }
      },
      legend: {
        data: ['运行时间']
      },
      xAxis: [
        {
          type: 'category',
          data: ['Kmeans', 'GMM', 'DBSCAN'],
          axisPointer: {
            type: 'shadow'
          }
        }
      ],
      yAxis: [
        {
          type: 'value',
          
        
          axisLabel: {
            formatter: '{value} s'
          }
        }
      ],
      series: [
        {
          name: '运行时间',
          type: 'bar',
          tooltip: {
            valueFormatter: function (value) {
              return value+ ' s' ;
            }
          },
          color:"#66cccc",
          // data: [
          // 902.5883979797363, 949.4175617694855, 888.6602
          // ]
        }
      ]
    };

    myChart1.clear();
    myChart1.setOption(option1);
    window.addEventListener("resize", function() {
        myChart1.resize();
    });
  
}
function click2() {
  
  var myChart=echarts.init(document.querySelector(".chart"))
  var option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        crossStyle: {
          color: '#999'
        }
      }
    },
    toolbox: {
      feature: {
        dataView: { show: true, readOnly: false },
        magicType: { show: true, type: ['bar'] },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    legend: {
      data: ['轮廓系数', '调整兰德系数']
    },
    xAxis: [
      {
        type: 'category',
        data: ['Kmeans', 'GMM', 'DBSCAN'],
        axisPointer: {
          type: 'shadow'
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        
      
        axisLabel: {
          formatter: '{value} '
        }
      }
    ],
    series: [
      {
        name: '轮廓系数',
        type: 'bar',
        tooltip: {
          valueFormatter: function (value) {
            return value ;
          }
        },
        color:"#3399ff",
        data: [
        0.5358326117364504, -0.04018705175511514, 0.27082138097333064
        ]
      },
      {
        name: '调整兰德系数',
        type: 'bar',
        tooltip: {
          valueFormatter: function (value) {
            return value ;
          }
        },
        color:"#ffcc66",
        data: [
        0.0018809502685865438, 0.007122656486978267, 0.005119546187401416
        ]
      }
    ]
  };
  
  myChart.clear();
  myChart.setOption(option);
  window.addEventListener("resize", function() {
      myChart.resize();
  });
  var myChart1=echarts.init(document.querySelector(".chart1"))
  
  var option1 = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        crossStyle: {
          color: '#999'
        }
      }
    },
    toolbox: {
      feature: {
        dataView: { show: true, readOnly: false },
        magicType: { show: true, type: ['bar'] },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    legend: {
      data: ['运行时间']
    },
    xAxis: [
      {
        type: 'category',
        data: ['Kmeans', 'GMM', 'DBSCAN'],
        axisPointer: {
          type: 'shadow'
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        
      
        axisLabel: {
          formatter: '{value} s'
        }
      }
    ],
    series: [
      {
        name: '运行时间',
        type: 'bar',
        tooltip: {
          valueFormatter: function (value) {
            return value+ ' s' ;
          }
        },
        color:"#66cccc",
        data: [
        902.5883979797363, 949.4175617694855, 888.6602
        ]
      }
    ]
  };

  myChart1.clear();
  myChart1.setOption(option1);
  window.addEventListener("resize", function() {
      myChart1.resize();
  });

}

function click3() {
  
  var myChart=echarts.init(document.querySelector(".left .top .top-right"))
  
  var option;

const hours = [
  'Unamede:0', '0', '1', '2', '3', '4', '5','6'
];
// prettier-ignore
const days = [
  '6', '5', '4','3', '2', '1', '0','Unam:0'
];
// prettier-ignore
const data = [[0, 0, -0.00051], [0, 1, -0.08], [0, 2, 0.25], [0, 3, -0.092], [0, 4, -0.066], [0, 5, 0.046], [0, 6, 49e-15],
            [1, 0, 0], [1, 1, -8.9e-15], [1, 2, 1.9e-17], [1, 3, -1e-15], [1, 4, 1e-16], [1, 5, -9.6e-14], 
            [2, 0, -0.008], [2, 1, -0.17], [2, 2, 0.093], [2, 3, -0.062], [2, 4, 0.13], 
            [3, 0, 0.0019], [3, 1, -0.019], [3, 2, 0.059], [3, 3, -0.039], 
            [4, 0, -0.0046], [4, 1, 0.0041], [4, 2, 0.25], 
            [5, 0, -0.013], [5, 1, 0.0025],
            [6, 0, -0.0056],]
            
            .map(function (item) {
  return [item[1], item[0], item[2] || '-'];
});
option = {
tooltip: {
  position: 'top'
},
grid: {
  height: '60%',
  top: '15%'
},
xAxis: {
  type: 'category',
  data: hours,
  splitArea: {
    show: true
  }
},
yAxis: {
  type: 'category',
  data: days,
  splitArea: {
    show: true
  }
},
visualMap: {
  min: -0.15,
  max: 0.25,
  calculable: true,
  orient: 'horizontal',
  left: 'center',
  bottom: '10%'
},
series: [
  {
    name: 'Punch Card',
    type: 'heatmap',
    data: data,
    label: {
      show: true
    },
    emphasis: {
      itemStyle: {
        shadowBlur: 10,
        shadowColor: 'rgba(0, 0, 0, 0.5)'
      }
    }
  }
]
};

 
  
  myChart.clear();
  myChart.setOption(option);
  window.addEventListener("resize", function() {
      myChart.resize();
  });
  

}

(function() {
    var myChart=echarts.init(document.querySelector(".chart"))
    var option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          crossStyle: {
            color: '#999'
          }
        }
      },
      toolbox: {
        feature: {
          dataView: { show: true, readOnly: false },
          magicType: { show: true, type: ['bar'] },
          restore: { show: true },
          saveAsImage: { show: true }
        }
      },
      legend: {
        data: ['轮廓系数', '调整兰德系数']
      },
      xAxis: [
        {
          type: 'category',
          data: ['Kmeans', 'GMM', 'DBSCAN'],
          axisPointer: {
            type: 'shadow'
          }
        }
      ],
      yAxis: [
        {
          type: 'value',
          
        
          axisLabel: {
            formatter: '{value} '
          }
        }
      ],
      series: [
        {
          name: '轮廓系数',
          type: 'bar',
          tooltip: {
            valueFormatter: function (value) {
              return value ;
            }
          },
          color:"#3399ff",
          // data: [
          // 0.5358326117364504, -0.04018705175511514, 0.27082138097333064
          // ]
        },
        {
          name: '调整兰德系数',
          type: 'bar',
          tooltip: {
            valueFormatter: function (value) {
              return value ;
            }
          },
          color:"#ffcc66",
          // data: [
          // 0.0018809502685865438, 0.007122656486978267, 0.005119546187401416
          // ]
        }
      ]
    };
    
    myChart.setOption(option);
    window.addEventListener("resize", function() {
        myChart.resize();
    });
    var myChart=echarts.init(document.querySelector(".chart1"))
    
    var option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          crossStyle: {
            color: '#999'
          }
        }
      },
      toolbox: {
        feature: {
          dataView: { show: true, readOnly: false },
          magicType: { show: true, type: ['bar'] },
          restore: { show: true },
          saveAsImage: { show: true }
        }
      },
      legend: {
        data: ['运行时间']
      },
      xAxis: [
        {
          type: 'category',
          data: ['Kmeans', 'GMM', 'DBSCAN'],
          axisPointer: {
            type: 'shadow'
          }
        }
      ],
      yAxis: [
        {
          type: 'value',
          
        
          axisLabel: {
            formatter: '{value} s'
          }
        }
      ],
      series: [
        {
          name: '运行时间',
          type: 'bar',
          tooltip: {
            valueFormatter: function (value) {
              return value+ ' s' ;
            }
          },
          color:"#66cccc",
          // data: [
          // 902.5883979797363, 949.4175617694855, 888.6602
          // ]
        }
      ]
    };

    myChart.setOption(option);
    window.addEventListener("resize", function() {
        myChart.resize();
    });
})();