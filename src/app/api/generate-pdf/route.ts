import { NextResponse } from "next/server";
import puppeteer from "puppeteer";

export async function POST(req: Request) {
  const { html } = await req.json();

  if (!html) {
    return NextResponse.json({ error: "Missing HTML" }, { status: 400 });
  }

  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();

  await page.setContent(html, { waitUntil: "networkidle0" });

  const pdfBuffer = await page.pdf({ format: "A4" });
  await browser.close();

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  return new NextResponse(pdfBuffer, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": "attachment; filename=download.pdf",
    },
  });
}
