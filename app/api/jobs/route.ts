import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q");
  const location = searchParams.get("location") || "";
  const start = searchParams.get("start") || "0";

  if (!query) {
    return NextResponse.json({ error: "Query parameter 'q' is required" }, { status: 400 });
  }

  const apiKey = process.env.SERP_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "SERP_API_KEY not configured" }, { status: 500 });
  }

  const params = new URLSearchParams({
    engine: "google_jobs",
    q: query,
    api_key: apiKey,
    start,
  });

  if (location) {
    params.set("location", location);
  }

  try {
    const response = await fetch(
      `https://serpapi.com/search.json?${params.toString()}`,
      { next: { revalidate: 300 } } // cache for 5 minutes
    );

    if (!response.ok) {
      const error = await response.text();
      return NextResponse.json({ error: `SerpAPI error: ${error}` }, { status: response.status });
    }

    const data = await response.json();

    return NextResponse.json({
      jobs: data.jobs_results ?? [],
      total: data.jobs_results?.length ?? 0,
      chips: data.chips ?? [],
      searchMetadata: data.search_metadata ?? {},
    });
  } catch (err) {
    console.error("Job search error:", err);
    return NextResponse.json({ error: "Failed to fetch jobs" }, { status: 500 });
  }
}
