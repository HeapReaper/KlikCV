import html2canvas from 'html2canvas-pro';
import jsPDF from 'jspdf';

export const exportToPdf = async (elementId: string) => {
  const input = document.getElementById(elementId);
  if (!input) return console.error('Input element not found.');

  const canvas = await html2canvas(input, { scale: 2, useCORS: true });
  const imgData: string = canvas.toDataURL('image/jpeg', 1.0);
  const pdf = new jsPDF('p', 'mm', 'a4');

  const a4Width: number = pdf.internal.pageSize.getWidth();
  const a4Height: number = pdf.internal.pageSize.getHeight();

  const pxPerMm: number = canvas.width / a4Width;
  const imgWidth: number = a4Width;
  const imgHeight: number = canvas.height / pxPerMm;

  let totalPages: number = Math.ceil(imgHeight / a4Height);

  // Hacky workaround
  if (totalPages > 2) totalPages -= 1;

  for (let i: number = 0; i < totalPages; i++) {
    if (i > 0) pdf.addPage();

    const position: number = -i * a4Height;
    pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);
  }

  pdf.save('cv.pdf');
};
