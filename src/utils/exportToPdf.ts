import html2canvas from 'html2canvas-pro';
import jsPDF from 'jspdf';

export const exportToPdf = async (elementId: string) => {
  const input = document.getElementById(elementId);
  if (!input) {
    return console.error('Input element not found.');
  }

  const canvas = await html2canvas(input, {
    scale: 1,
    useCORS: true,
  });

  const imgData = canvas.toDataURL('image/jpeg', 1.0);
  const pdf = new jsPDF('p', 'mm', 'a4');

  const imgProps = pdf.getImageProperties(imgData);
  const pdfWidth = pdf.internal.pageSize.getWidth();
  const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

  let heightLeft = pdfHeight;
  let position = 0;

  pdf.addImage(imgData, 'JPEG', 0, position, pdfWidth, pdfHeight);
  heightLeft -= pdf.internal.pageSize.getHeight();

  while (heightLeft >= 0) {
    position = heightLeft - pdfHeight;
    pdf.addPage();
    pdf.addImage(imgData, 'JPEG', 0, position, pdfWidth, pdfHeight);
    heightLeft -= pdf.internal.pageSize.getHeight();
  }

  pdf.save('cv.pdf');
};
