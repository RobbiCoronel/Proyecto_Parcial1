
const chart = Highcharts.chart('ad', {
  data: {


    table: 'datatable',
    switchRowsAndColumns: true

  },
  chart: {
    type: 'column'
  },
  title: {
    text: 'Gráfica'
  },
  exporting: {
    enabled: false,
    csv:{
      itemDelimiter: ';'
    }
  },
  yAxis: {
    allowDecimals: false,
    title: {
      text: 'Unidades'
    }
  },
 tooltip: {
    formatter: function () {
      return '<b>' + this.series.name + '</b><br/>' +
        this.point.y + ' ' + this.point.name.toLowerCase();
    }
  }
});

// the button handler
 document.getElementById('botonpdf').addEventListener('click', () => {
    chart.exportChart({
      type: 'application/pdf',
      filename: 'grafica'
      
    });

  });



  document.getElementById('botonpng').addEventListener('click', ()=> {
    chart.exportChart();
    console.log("sasdsa");
});

document.getElementById('botoncsv').addEventListener('click', ()=> {
  chart.downloadCSV();
  console.log("sasdsa");
});

//export2
document.getElementById('botonpdf2').addEventListener('click', () => {
  chart.exportChart({
    type: 'application/pdf',
    filename: 'grafica'
    
  });

});

document.getElementById('botonpng2').addEventListener('click', ()=> {
  chart.exportChart();
  console.log("sasdsa");
});

document.getElementById('botoncsv2').addEventListener('click', ()=> {
chart.downloadCSV();
console.log("sasdsa");
});

document.getElementById('plain').addEventListener('click', () => {
  chart.update({
      chart: {
          inverted: false,
          polar: false
      },
      subtitle: {
          text: 'Plain'
      }
  });
});

document.getElementById('inverted').addEventListener('click', () => {
  chart.update({
      chart: {
          inverted: true,
          polar: false
      },
      subtitle: {
          text: 'Inverted'
      }
  });
});

document.getElementById('polar').addEventListener('click', () => {
  chart.update({
      chart: {
          inverted: false,
          polar: true
      },
      subtitle: {
          text: 'Polar'
      }
  });
});

document.getElementById('plain2').addEventListener('click', () => {
  chart.update({
      chart: {
          inverted: false,
          polar: false
      },
      subtitle: {
          text: 'Plain'
      }
  });
});

document.getElementById('inverted2').addEventListener('click', () => {
  chart.update({
      chart: {
          inverted: true,
          polar: false
      },
      subtitle: {
          text: 'Inverted'
      }
  });
});

document.getElementById('polar2').addEventListener('click', () => {
  chart.update({
      chart: {
          inverted: false,
          polar: true
      },
      subtitle: {
          text: 'Polar'
      }
  });
});

document.getElementById('calendar').addEventListener('click', ()=> {
  chart.update({
     data: {
         switchRowsAndColumns: !chart.options.data.switchRowsAndColumns
 
     }
 });
 });