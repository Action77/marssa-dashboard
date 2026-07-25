import { NextResponse } from "next/server";

export async function GET() {
  const response = await fetch(
    "https://marssaudi-prod.winsfa.com/api/collect/collectCash/expOrderColletionList",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Expfiletype: ".xlsx",

        // أضف التوكن أو الكوكي هنا
        // Cookie: "..."
      },
      body: JSON.stringify({
        startDate: "2026-07-25",
        endDate: "2026-07-25",
        pageSize: 20,
      }),
    }
  );

  const fileBuffer = await response.arrayBuffer();

  return new NextResponse(fileBuffer, {
    headers: {
      "Content-Type":
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "Content-Disposition": 'attachment; filename="report.xlsx"',
    },
  });
}