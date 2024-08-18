const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

router.get('/', (req, res) => {
    const visitorsFile = path.join(__dirname, '../data/visitors.json');
    
    fs.readFile(visitorsFile, (err, data) => {
        if (err) {
            console.error('Error reading visitors file:', err);
            return res.status(500).send('Server Error');
        }

        const visitors = data ? JSON.parse(data) : [];
        let tableRows = visitors.map(visitor => 
            `<tr>
                <td>${visitor.ip}</td>
                <td>${new Date(visitor.timestamp).toLocaleDateString()}</td>
                <td>${new Date(visitor.timestamp).toLocaleTimeString()}</td>
            </tr>`
        ).join('');

        res.send(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Admin</title>
                <style>
                    body {
                        background-color: #121212;
                        color: #ffffff;
                        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 100vh;
                        margin: 0;
                        padding: 20px;
                    }

                    .container {
                        width: 100%;
                        max-width: 1200px;
                        background-color: #1e1e1e;
                        padding: 20px;
                        border-radius: 12px;
                        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                        overflow-x: auto;
                    }

                    h1 {
                        margin-bottom: 20px;
                        color: #ffffff;
                    }

                    table {
                        width: 100%;
                        border-collapse: collapse;
                    }

                    th, td {
                        padding: 12px;
                        text-align: left;
                        border-bottom: 1px solid #333;
                        white-space: nowrap;
                    }

                    th {
                        background-color: #1DB954;
                        color: white;
                        position: sticky;
                        top: 0;
                        z-index: 1;
                    }

                    tr:nth-child(even) {
                        background-color: #2a2a2a;
                    }

                    tr:hover {
                        background-color: #333;
                    }

                    .table-wrapper {
                        max-height: 400px;
                        overflow-y: auto;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <h1>Visitor IPs</h1>
                    <div class="table-wrapper">
                        <table>
                            <thead>
                                <tr>
                                    <th>IP Address</th>
                                    <th>Date</th>
                                    <th>Time</th>
                                </tr>
                            </thead>
                            <tbody>${tableRows}</tbody>
                        </table>
                    </div>
                </div>
            </body>
            </html>
        `);
    });
});

module.exports = router;
