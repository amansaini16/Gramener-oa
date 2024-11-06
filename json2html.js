// json2html.js
export default function json2html(data) {
    // Define the specific headers needed
    const headers = ["Name", "Age", "Gender"];

    // Start building the HTML table
    let html = `<table data-user="amansaini1601@gmail.com">`;
    html += "<thead><tr>";

    // Add table headers
    headers.forEach(header => {
        html += `<th>${header}</th>`;
    });
    html += "</tr></thead><tbody>";

    // Add table rows
    data.forEach(row => {
        html += "<tr>";
        headers.forEach(header => {
            html += `<td>${row[header] !== undefined ? row[header] : ""}</td>`;
        });
        html += "</tr>";
    });

    html += "</tbody></table>";
    return html;
}

