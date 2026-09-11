import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, program, concept } = body;

    if (!name || !email || !program) {
      return NextResponse.json({ error: "Name, email, and program are required." }, { status: 400 });
    }

    const webhook = process.env.INQUIRY_WEBHOOK_URL;
    const payload = {
      ...body,
      submitted_at: new Date().toISOString(),
    };

    if (webhook) {
      await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } else {
      console.info("[rcc4kids inquiry]", JSON.stringify(payload));
    }

    return NextResponse.json({ ok: true, concept });
  } catch {
    return NextResponse.json({ error: "Unable to process inquiry." }, { status: 500 });
  }
}
