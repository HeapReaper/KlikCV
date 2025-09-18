export async function exportToPdf() {
  console.log("Generating PDF...");

  const element = document.getElementById("pdf");

  if (!element) return;

  const content = element.outerHTML;

  const html = `
    <html>
      <head>
        <meta charset="utf-8" />
        <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
      </head>
      <body class="pe-5">
        ${content}
      </body>
    </html>
  `;

  const res = await fetch("/api/generate-pdf", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ html }),
  });

  const blob = await res.blob();
  const url = window.URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = "download.pdf";
  link.click();

  window.URL.revokeObjectURL(url);
}
