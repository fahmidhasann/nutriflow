import { NextRequest, NextResponse } from 'next/server';

const USDA_API_BASE = 'https://api.nal.usda.gov/fdc/v1';
const API_KEY = process.env.USDA_API_KEY || 'DEMO_KEY';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const action = searchParams.get('action');

  try {
    if (action === 'search') {
      const query = searchParams.get('query');
      const pageNumber = searchParams.get('pageNumber') || '1';
      const pageSize = searchParams.get('pageSize') || '10';

      if (!query) {
        return NextResponse.json(
          { error: 'Query parameter is required' },
          { status: 400 }
        );
      }

      const params = new URLSearchParams({
        query,
        pageNumber,
        pageSize,
        api_key: API_KEY,
      });

      // Add multiple dataType parameters
      const dataTypes = ['Survey (FNDDS)', 'Branded', 'Foundation', 'SR Legacy'];
      dataTypes.forEach(type => params.append('dataType', type));

      const response = await fetch(`${USDA_API_BASE}/foods/search?${params}`);

      if (!response.ok) {
        throw new Error(`USDA API error: ${response.status}`);
      }

      const data = await response.json();
      return NextResponse.json(data, {
        headers: {
          'Cache-Control': 'public, max-age=3600', // Cache for 1 hour
        },
      });
    }

    if (action === 'food') {
      const fdcId = searchParams.get('fdcId');

      if (!fdcId) {
        return NextResponse.json(
          { error: 'fdcId parameter is required' },
          { status: 400 }
        );
      }

      const response = await fetch(
        `${USDA_API_BASE}/food/${fdcId}?api_key=${API_KEY}`
      );

      if (!response.ok) {
        throw new Error(`USDA API error: ${response.status}`);
      }

      const data = await response.json();
      return NextResponse.json(data, {
        headers: {
          'Cache-Control': 'public, max-age=86400', // Cache for 24 hours
        },
      });
    }

    return NextResponse.json(
      { error: 'Invalid action. Use "search" or "food"' },
      { status: 400 }
    );
  } catch (error) {
    console.error('USDA API proxy error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch from USDA API' },
      { status: 500 }
    );
  }
}
