import html2canvas from 'html2canvas-pro';
import jsPDF from 'jspdf';

export const exportToPdf = async (elementId: string) => {
  const input = document.getElementById(elementId);
  if (!input) {
    return console.error('Input element not found.');
  }

  const scale = 2;

  const canvas = await html2canvas(input, {
    scale: scale,
    useCORS: true,
  });

  const imgData = canvas.toDataURL('image/jpeg', 1.0);
  const pdf = new jsPDF('p', 'mm', 'a4');

  const a4Width = pdf.internal.pageSize.getWidth();
  const a4Height = pdf.internal.pageSize.getHeight();

  const imgProps = pdf.getImageProperties(imgData);
  const contentHeight = (imgProps.height * a4Width) / imgProps.width;

  let heightLeft = contentHeight;
  let position = 0;

  pdf.addImage(imgData, 'JPEG', 0, position, a4Width, contentHeight);
  heightLeft -= a4Height;

  while (heightLeft > 0) {
    position = heightLeft - contentHeight;
    pdf.addPage();
    pdf.addImage(imgData, 'JPEG', 0, position, a4Width, contentHeight);
    heightLeft -= a4Height;
  }

  pdf.save('cv.pdf');
};
