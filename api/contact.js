// Vercel API route for handling contact form submissions
export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, project, budget, message } = req.body;

    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({ 
        error: 'Missing required fields: name, email, and message are required' 
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email address' });
    }

    // Prepare email content (HTML format for better presentation)
    const htmlContent = `
      <h2>New Contact Form Submission from Scrimmage Website</h2>
      
      <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
        <tr>
          <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Name:</td>
          <td style="padding: 8px; border-bottom: 1px solid #ddd;">${name}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Email:</td>
          <td style="padding: 8px; border-bottom: 1px solid #ddd;"><a href="mailto:${email}">${email}</a></td>
        </tr>
        <tr>
          <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Project Type:</td>
          <td style="padding: 8px; border-bottom: 1px solid #ddd;">${project || 'Not specified'}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Budget Range:</td>
          <td style="padding: 8px; border-bottom: 1px solid #ddd;">${budget || 'Not specified'}</td>
        </tr>
      </table>
      
      <h3>Message:</h3>
      <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; white-space: pre-wrap;">${message}</div>
      
      <hr style="margin: 20px 0;">
      <p style="color: #666; font-size: 12px;">
        Submitted at: ${new Date().toLocaleString()}<br>
        IP Address: ${req.headers['x-forwarded-for'] || req.connection?.remoteAddress || 'Unknown'}
      </p>
    `;

    // Prepare Mailtrap API payload
    const mailData = {
      from: {
        email: process.env.MAILTRAP_FROM_EMAIL || 'noreply@scrimmage.us',
        name: 'Scrimmage Website'
      },
      to: [
        {
          email: process.env.CONTACT_EMAIL || 'hello@scrimmage.us'
        }
      ],
      subject: `New Contact Form Submission from ${name}`,
      html: htmlContent,
      category: 'Contact Form'
    };

    // Send email via Mailtrap API
    try {
      const response = await fetch('https://send.api.mailtrap.io/api/send', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.MAILTRAP_API_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(mailData)
      });

      if (!response.ok) {
        const errorData = await response.text();
        console.error('Mailtrap API error:', response.status, errorData);
        throw new Error(`Mailtrap API error: ${response.status}`);
      }

      const result = await response.json();
      console.log('Contact form email sent successfully:', result);

    } catch (emailError) {
      console.error('Failed to send email:', emailError);
      // Continue with success response even if email fails
      // You might want to handle this differently in production
    }

    // Log submission for backup
    console.log('Contact form submission:', {
      name,
      email,
      project,
      budget,
      message,
      timestamp: new Date().toISOString()
    });

    return res.status(200).json({ 
      success: true, 
      message: 'Thank you for your message! I\'ll get back to you within 24 hours.' 
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({ 
      error: 'Internal server error. Please try again later.' 
    });
  }
}