const PRIMARY_COLOR = "#ff8d28";
const DARK_TEXT_COLOR = "#111827";
const NA_COLOR = "#dc2626";

const getFieldValue = (value: string | undefined): string => {
  if (value && value.trim().length > 0) {
    return value;
  }
  return `<span style="color: ${NA_COLOR}; font-weight: 600;">N/A</span>`;
};

export const generateContactEmailPayload = (
  data: ContactFormPayload
): EmailPayload => {
  const recipientEmail =
    process.env.RECEPIENT_EMAIL || " info@alfatradingco.com";

  const optionalFields = [
    { label: "Company", value: data.company, icon: "🏢" },
    { label: "Phone", value: data.phone, icon: "📞" },
    { label: "Sector", value: data.sector, icon: "🏭" },
  ];

  const infoRows = [
    { label: "Name", value: data.name, icon: "👤" },
    { label: "Email", value: data.email, icon: "📧" },
    ...optionalFields,
  ]
    .map(
      (item) => `
    <tr>
      <td style="padding: 16px 24px; border-bottom: 1px solid #f3f4f6; font-weight: 600; color: #6b7280; width: 35%; vertical-align: middle; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">
        <span style="margin-right: 8px;">${item.icon}</span>${item.label}
      </td>
      <td style="padding: 16px 24px; border-bottom: 1px solid #f3f4f6; color: ${DARK_TEXT_COLOR}; width: 65%; vertical-align: middle; word-break: break-word; font-size: 15px; font-weight: 500;">
        ${
          item.label === "Name" || item.label === "Email"
            ? item.value
            : getFieldValue(item.value)
        }
      </td>
    </tr>
  `
    )
    .join("");

  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Form Submission</title>
        <style>
            body { margin: 0; padding: 0; background-color: #f3f4f6; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; }
            table { border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%; }
            a { text-decoration: none; color: ${PRIMARY_COLOR}; }

            .container {
                max-width: 600px;
                margin: 0 auto;
                background-color: #ffffff;
                border-radius: 16px;
                box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
            }
            
            .gradient-header {
                background: linear-gradient(135deg, ${PRIMARY_COLOR} 0%, #ff6b6b 100%);
                border-radius: 16px 16px 0 0;
            }
            
            .badge {
                display: inline-block;
                background-color: rgba(255, 255, 255, 0.2);
                color: #ffffff;
                padding: 6px 16px;
                border-radius: 20px;
                font-size: 12px;
                font-weight: 600;
                text-transform: uppercase;
                letter-spacing: 1px;
                margin-bottom: 12px;
            }
            
            @media only screen and (max-width: 600px) {
                .container {
                    width: 100% !important;
                    border-radius: 0;
                    margin: 0 !important;
                }
                .gradient-header {
                    border-radius: 0 !important;
                }
                .content-table td {
                    display: block;
                    width: 100% !important;
                    text-align: left !important;
                    padding: 12px 20px !important;
                }
                .header-text h1 {
                    font-size: 24px !important;
                }
            }
        </style>
    </head>
    <body style="margin: 0; padding: 0; background-color: #f3f4f6;">

        <center style="width: 100%; table-layout: fixed; padding: 40px 20px;">
            <div class="container" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);">

                <table role="presentation" class="gradient-header" style="background: linear-gradient(135deg, ${PRIMARY_COLOR} 0%, #ff6b6b 100%); width: 100%; border-radius: 16px 16px 0 0;">
                    <tr>
                        <td align="center" class="header-text" style="padding: 50px 30px;">
                            <div class="badge" style="display: inline-block; background-color: rgba(255, 255, 255, 0.2); color: #ffffff; padding: 6px 16px; border-radius: 20px; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 12px;">
                                🔔 New Lead Alert
                            </div>
                            <h1 style="margin: 0; font-size: 32px; color: #ffffff; font-weight: 700; line-height: 1.2;">
                                New Contact Submission
                            </h1>
                            <p style="margin: 12px 0 0 0; font-size: 16px; color: rgba(255, 255, 255, 0.95); font-weight: 400;">
                                Someone just reached out through your website
                            </p>
                        </td>
                    </tr>
                </table>

                <table role="presentation" style="width: 100%; padding: 40px 0 0 0;">
                    <tr>
                        <td style="padding: 20px 30px 20px 30px;">
                            <div style="display: inline-block; background: linear-gradient(135deg, ${PRIMARY_COLOR}15 0%, #ff6b6b15 100%); padding: 8px 16px; border-radius: 8px; margin-bottom: 16px;">
                                <h2 style="margin: 0; font-size: 18px; color: ${PRIMARY_COLOR}; font-weight: 700; letter-spacing: 0.5px;">
                                    📋 CONTACT DETAILS
                                </h2>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 0 30px 30px 30px;">
                            <table role="presentation" class="content-table" style="width: 100%; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);">
                                ${infoRows}
                            </table>
                        </td>
                    </tr>
                </table>

                <table role="presentation" style="width: 100%; padding: 0 0 50px 0;">
                    <tr>
                        <td style="padding: 0 30px 20px 30px;">
                            <div style="display: inline-block; background: linear-gradient(135deg, ${PRIMARY_COLOR}15 0%, #ff6b6b15 100%); padding: 8px 16px; border-radius: 8px; margin-bottom: 16px;">
                                <h2 style="margin: 0; font-size: 18px; color: ${PRIMARY_COLOR}; font-weight: 700; letter-spacing: 0.5px;">
                                    💬 MESSAGE
                                </h2>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 0 30px 0 30px;">
                            <div style="background: linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%); padding: 24px; border-radius: 12px; border-left: 4px solid ${PRIMARY_COLOR}; box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);">
                                <p style="margin: 0; font-size: 15px; line-height: 1.7; color: ${DARK_TEXT_COLOR}; white-space: pre-wrap; word-break: break-word;">
                                    ${data.message}
                                </p>
                            </div>
                        </td>
                    </tr>
                </table>

                <table role="presentation" style="background-color: ${DARK_TEXT_COLOR}; width: 100%;">
                    <tr>
                        <td align="center" style="padding: 30px 20px;">
                            <p style="margin: 0 0 8px 0; font-size: 13px; color: #d1d5db; font-weight: 500;">
                                Alfa Trading Co. • Contact Form Notification
                            </p>
                            <p style="margin: 0; font-size: 12px; color: #9ca3af;">
                                This is an automated message from your website's contact form
                            </p>
                        </td>
                    </tr>
                </table>
            </div>
        </center>
    </body>
    </html>
  `;

  return {
    email: recipientEmail,
    subject: `New Lead from ${data.name}`,
    html: htmlContent,
  };
};
