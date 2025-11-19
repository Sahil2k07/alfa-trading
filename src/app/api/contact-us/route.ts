import { type NextRequest, NextResponse } from "next/server";
import { generateContactEmailPayload } from "@/mails/contactUs";
import nodemailerService from "@/services/nodemailerService";

export async function POST(req: NextRequest) {
  try {
    const body: ContactFormPayload = await req.json();

    const email = generateContactEmailPayload(body);

    try {
      await nodemailerService.sendEmail(email);
    } catch (error) {
      console.error(error);
      return NextResponse.json(
        {
          success: false,
          message: "Form submission failed",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Form submitted successfully",
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
