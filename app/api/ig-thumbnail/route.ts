import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const url = req.nextUrl.searchParams.get("url");
  if (!url) return NextResponse.json({ error: "missing url" }, { status: 400 });

  try {
    const oembedUrl = `https://graph.facebook.com/v19.0/instagram_oembed?url=${encodeURIComponent(url)}&fields=thumbnail_url&access_token=IGAAAA__placeholder__`;
    // Fallback: use public oembed endpoint (no token needed for basic thumbnail)
    const publicUrl = `https://www.instagram.com/oembed/?url=${encodeURIComponent(url)}&maxwidth=320`;
    const res = await fetch(publicUrl, {
      headers: { "User-Agent": "Mozilla/5.0" },
      next: { revalidate: 86400 }, // cache 24h
    });
    if (!res.ok) throw new Error("oembed failed");
    const data = await res.json();
    return NextResponse.json({ thumbnail: data.thumbnail_url });
  } catch {
    return NextResponse.json({ thumbnail: null });
  }
}
