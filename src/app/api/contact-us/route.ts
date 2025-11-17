import { type NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    console.log({ body });

    return NextResponse.json({
      success: true,
      message: "API hit successfully",
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: (error as Error)?.message || "Something went wrong",
        error,
      },
      { status: 500 }
    );
  }
}
