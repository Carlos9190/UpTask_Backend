import { transporter } from "../config/nodemailer";

interface IEmail {
  email: string;
  name: string;
  token: string;
}

export class AuthEmail {
  static sendConfirmationEmail = async (user: IEmail) => {
    await transporter.sendMail({
      from: "UpTask <admin@carlos-fullstack.com>",
      to: user.email,
      subject: "UpTask - Confirm your account",
      text: "UpTask - Confirm your account",
      html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #eaeaea; padding: 20px; border-radius: 8px;">
                    <h2 style="text-align: center; color: #8b5cf6;">UpTask</h2>
                    <p>Hello <strong>${user.name}</strong>,</p>
                    <p>You've just created a new account on <strong>UpTask</strong>. You're almost done! Please confirm your account by clicking the link below and entering the following code:</p>

                    <div style="background-color: #f9f9f9; padding: 15px; text-align: center; font-size: 24px; font-weight: bold; border-radius: 6px; border: 1px solid #e2e2e2;">
                        ${user.token}
                    </div>
                    <p>This code expires in 10 minutes.</p>

                    <hr style="margin: 30px 0; border: none; border-top: 1px solid #e2e2e2;" />
                    <p>Sincerely,</p>
                    <p style="font-weight: bold; margin: 0;">The UpTask team</p>
                </div>
            `,
    });
  };

  static sendPasswordResetToken = async (user: IEmail) => {
    await transporter.sendMail({
      from: "UpTask <admin@carlos-fullstack.com>",
      to: user.email,
      subject: "UpTask - Reset your password",
      text: "UpTask - Reset your password",
      html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #eaeaea; padding: 20px; border-radius: 8px;">
                    <h2 style="text-align: center; color: #8b5cf6;">UpTask</h2>
                    <p>Hello <strong>${user.name}</strong>,</p>
                    <p>We've received a request to reset your password. Reset it by clicking the link below and entering the following code:</p>

                    <div style="background-color: #f9f9f9; padding: 15px; text-align: center; font-size: 24px; font-weight: bold; border-radius: 6px; border: 1px solid #e2e2e2;">
                        ${user.token}
                    </div>
                    <p>This code expires in 10 minutes.</p>

                    <hr style="margin: 30px 0; border: none; border-top: 1px solid #e2e2e2;" />
                    <p>Sincerely,</p>
                    <p style="font-weight: bold; margin: 0;">The UpTask team</p>
                </div>
            `,
    });
  };
}
