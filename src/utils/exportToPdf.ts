import html2canvas from 'html2canvas-pro';
import jsPDF from 'jspdf';

export const exportToPdf = async (elementId: string) => {
  const input = document.getElementById(elementId);
  if (!input) {
    return console.error('Input element not found.');
  }

  const canvas = await html2canvas(input, {
    scale: 2, // To improve resolution
    useCORS: true,
  });

  const imgData = canvas.toDataURL('image/jpeg', 1.0);
  const pdf = new jsPDF('p', 'mm', 'a4');

  const a4Width = pdf.internal.pageSize.getWidth();
  const a4Height = pdf.internal.pageSize.getHeight();

  const pxPerMm = canvas.width / a4Width;
  const imgWidth = a4Width;
  const imgHeight = canvas.height / pxPerMm;

  let position = 0;
  let heightLeft = imgHeight;

  pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);
  heightLeft -= a4Height;

  while (heightLeft > 0) {
    position -= a4Height;
    pdf.addPage();
    pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);
    heightLeft -= a4Height;
  }

  pdf.save('cv.pdf');
};
