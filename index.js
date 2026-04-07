const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>DevOps Dashboard</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background: #0f172a;
          color: white;
          margin: 0;
        }
        header {
          background: #1e293b;
          padding: 15px;
          text-align: center;
          font-size: 24px;
          font-weight: bold;
          color: #38bdf8;
        }
        .container {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-top: 50px;
        }
        .card {
          background: #1e293b;
          padding: 20px;
          border-radius: 12px;
          width: 250px;
          text-align: center;
          box-shadow: 0 8px 20px rgba(0,0,0,0.3);
        }
        .status {
          font-size: 20px;
          margin-top: 10px;
        }
        .success {
          color: #22c55e;
        }
        .btn {
          margin-top: 20px;
          padding: 10px;
          border: none;
          border-radius: 8px;
          background: #38bdf8;
          cursor: pointer;
          font-weight: bold;
        }
        .btn:hover {
          background: #0ea5e9;
        }
      </style>
    </head>
    <body>

      <header>🚀 DevOps CI/CD Dashboard</header>

      <div class="container">
        <div class="card">
          <h3>Build Status</h3>
          <div class="status success">✔ Success</div>
        </div>

        <div class="card">
          <h3>Docker Image</h3>
          <div class="status">Built & Tagged</div>
        </div>

        <div class="card">
          <h3>Deployment</h3>
          <div class="status success">✔ Running</div>
        </div>
      </div>

      <div style="text-align:center;">
        <button class="btn" onclick="trigger()">Trigger Pipeline</button>
      </div>

      <script>
        function trigger() {
          alert("CI/CD Pipeline Triggered 🚀");
        }
      </script>

    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});