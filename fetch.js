fetch('http://127.0.0.1:5500/products.json')
  .then(response => response.json())
  .then(data => document.getElementById("resultArea").innerHTML = (JSON.stringify(data)))
