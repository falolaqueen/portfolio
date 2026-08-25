import { Resend } from "resend"
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
     try {
          const body = await request.json();
          const { name, email, subject, message } = body;

          if (!name || !email || !message) {
               return Response.json(
                    {
                         success: false,
                         message: "Please fill all required fields."
                    },
                    { status: 400 }
               );
          }
          const { data, error } = await resend.emails.send({
               from: "Queen <onboarding@resend.dev>",
               to: [process.env.CONTACT_EMAIL],
               replyTo: email,
               subject: subject || `New portfolio message from ${name}`,
               html: `
               <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto;">
               <h1 style="color: #ff2d75;">
               New Portfolio Message</h1>

               <p><strong>Name:</strong> ${name}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Subject:</strong> ${subject || "No subject"}</p>

               <hr />

               <h3>Message</h3>
               <p style="white-space: pre-line;">${message}</p>
               </div>
               `,
          });
          if (error) {
               console.error(error);

               return Response.json(
                    {
                         success: false,
                         message: "Failed to send message",
                    },
                    {status: 500}
               );
          }

          return Response.json({
               success:true,
               message: "Message sent successfully!",
               data,
          });
     } catch (error) {
          console.error(error);

          return Response.json(
               {
                    success: false,
                    message: "Something went wrong",
               },
               { status: 500 }
          );
     }
}