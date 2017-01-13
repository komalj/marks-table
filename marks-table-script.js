
  var myData = [
    { "Name": "Komal Jain",
      "Math": 98,
      "Science": 95,
      "Social": 96,
      "English": 90,
      "Hindi": 91
    },

    {
      "Name": "Karan Vyas",
      "Math": 99,
      "Science": 96,
      "Social": 97,
      "English": 91,
      "Hindi": 92
    },

    {
      "Name": "Darshan Parsana",
      "Math": 97,
      "Science": 94,
      "Social": 95,
      "English": 90,
      "Hindi": 90
    },

    {
      "Name": "Gaurav Soni",
      "Math": 99,
      "Science": 94,
      "Social": 97,
      "English": 90,
      "Hindi": 92
    },

    {
      "Name": "Sahil Jain",
      "Math": 97,
      "Science": 96,
      "Social": 95,
      "English": 91,
      "Hindi": 90
    }
  ]

  function createTable() {

    var table = document.getElementsByTagName('table')[0];

    var r = myData.length; //no. of rows = no. of students + 1

    for (var i=0; i<=r; i++) {

        var tr = document.createElement('tr');

        /* fill the headings */
        if(i==0){
            Object.keys(myData[0]).forEach(function(key) {
              var td = document.createElement('td');
              td.innerHTML = key.bold();
              tr.appendChild(td);
            });
        }

        /* fill rest of the data */
        else{
            var o = myData[i-1];
            Object.keys(o).forEach(function(key) {
              var td = document.createElement('td');
              td.innerHTML = o[key];
              tr.appendChild(td);
            });
        }

        table.appendChild(tr);
    }

  }

  function findTotal() {

      /* create the new heading */
      var rows = document.getElementsByTagName("tr");
      var x = rows[0].insertCell(6);
		  x.innerHTML = "Total".bold();

      /* append the total for each respective row */
      for(var i=1; i<rows.length; i++){
			     var x = rows[i].insertCell(6);
           var tot = 0;
           var cols = rows[i].getElementsByTagName("td");
           for(var j=1; j<cols.length-1; j++){
            	tot+=Number(cols[j].innerHTML);
            }
			x.innerHTML = tot;

      }

      /* enable the percentage button, and disable the total button */
		  document.getElementById('b2').disabled=false;
    	document.getElementById('b1').disabled=true;

    }

  function findPercentage() {

      /* create the new heading */
    	var rows = document.getElementsByTagName("tr");
		  var x = rows[0].insertCell(7);
		  x.innerHTML = "Percentage".bold();

      /* append the percentage for each respective row */
      for(var i=1; i<=5; i++){
			     var x = rows[i].insertCell(7);
           var tot = rows[i].getElementsByTagName("td")[6].innerHTML;
           var str = "";
           str+= (tot/5)+"%";
           x.innerHTML = str;
      }

      /* disable the percentage button */
		  document.getElementById('b2').disabled=true;
    }

  createTable();
