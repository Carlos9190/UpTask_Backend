import { transporter } from "../config/nodemailer";

interface IEmail {
  email: string;
  name: string;
  token: string;
}

const BASE_URL = process.env.FRONTEND_URL;

export class AuthEmail {
  static sendConfirmationEmail = async (user: IEmail) => {
    const confirmUrl = `${BASE_URL}/auth/confirm-account`;

    await transporter.sendMail({
      from: "UpTask <admin@carlos-fullstack.com>",
      to: user.email,
      subject: "UpTask - Confirm your account",
      text: `Hello ${user.name}, confirm your UpTask account using this code: ${user.token}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #eaeaea; padding: 20px; border-radius: 8px;">
          <h2 style="text-align: center; color: #8b5cf6;">UpTask</h2>
          <p>Hello <strong>${user.name}</strong>,</p>
          <p>You've just created a new account on <strong>UpTask</strong>. To complete your registration, please confirm your account by entering the following code:</p>

          <div style="background-color: #f9f9f9; padding: 15px; text-align: center; font-size: 24px; font-weight: bold; border-radius: 6px; border: 1px solid #e2e2e2;">
            ${user.token}
          </div>

          <p style="margin-top: 20px;">You can enter this code on the confirmation page below:</p>
          <div style="text-align: center; margin: 25px 0;">
            <a href="${confirmUrl}" target="_blank" style="background-color: #8b5cf6; color: white; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: bold;">
              Go to Confirmation Page
            </a>
          </div>

          <p>This code expires in 10 minutes.</p>
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #e2e2e2;" />
          <p>Sincerely,</p>
          <p style="font-weight: bold; margin: 0;">The UpTask Team</p>
        </div>
      `,
    });
  };

  static sendPasswordResetToken = async (user: IEmail) => {
    const resetUrl = `${BASE_URL}/auth/new-password`;

    await transporter.sendMail({
      from: "UpTask <admin@carlos-fullstack.com>",
      to: user.email,
      subject: "UpTask - Reset your password",
      text: `Hello ${user.name}, reset your UpTask password using this code: ${user.token}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #eaeaea; padding: 20px; border-radius: 8px;">
          <h2 style="text-align: center; color: #8b5cf6;">UpTask</h2>
          <p>Hello <strong>${user.name}</strong>,</p>
          <p>We received a request to reset your password. Please enter the following code on the password reset page:</p>

          <div style="background-color: #f9f9f9; padding: 15px; text-align: center; font-size: 24px; font-weight: bold; border-radius: 6px; border: 1px solid #e2e2e2;">
            ${user.token}
          </div>

          <p style="margin-top: 20px;">You can go to the reset page using the link below:</p>
          <div style="text-align: center; margin: 25px 0;">
            <a href="${resetUrl}" target="_blank" style="background-color: #8b5cf6; color: white; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: bold;">
              Go to Reset Page
            </a>
          </div>

          <p>This code expires in 10 minutes.</p>
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #e2e2e2;" />
          <p>Sincerely,</p>
          <p style="font-weight: bold; margin: 0;">The UpTask Team</p>
        </div>
      `,
    });
  };
}
