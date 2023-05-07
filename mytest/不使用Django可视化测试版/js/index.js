
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
  'brand', 'model', 'n_run', 'n_app', 'time', 'is_active', 'category', 'location','group'
];
// prettier-ignore
const days = [
  'group', 'location', 'category','is_active', 'time', 'n_app', 'n_run', 'model','brand'
];
// prettier-ignore
const data = [[0, 0, 0.028], [0, 1, 0.0091], [0, 2, 0.019], [0, 3, 0.015], [0, 4, -0.022], [0, 5, -0.01],[0, 6, 0.05],[0,7,0.043],
            [1, 0, -0.032], [1, 1, 0.041], [1, 2, 0.24], [1, 3, 0.1], [1, 4, 0.027], [1, 5, -0.015], [1, 6,0.0021],
            [2, 0, -0.26], [2, 1, 0.23], [2, 2, 0.21], [2, 3, 0.26], [2, 4, 0.11],[2, 5, 0.7] ,
            [3, 0, -0.29], [3, 1, 0.17], [3, 2, 0.18], [3, 3, 0.18],[3, 4, 0.14], 
            [4, 0, -0.037], [4, 1, 0.022], [4, 2, 0.0069],[4, 3, 0.039], 
            [5, 0, -0.005], [5, 1, 0.18],[5, 2, 0.26],
            [6, 0, -0.08],[6, 1, 0.21],
            [7, 0, 0.052]]
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
    name: '',
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