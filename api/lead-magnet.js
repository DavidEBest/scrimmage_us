// Vercel API route for handling lead magnet form submissions
export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email, firstName, company, appStatus } = req.body;

    // Basic validation
    if (!email || !firstName) {
      return res.status(400).json({ 
        error: 'Missing required fields: email and firstName are required' 
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email address' });
    }

    // Prepare welcome email with PDF download link
    const htmlContent = `
      <div style="max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif;">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 40px 20px; text-align: center;">
          <h1 style="margin: 0; font-size: 28px; font-weight: bold;">Welcome to the Scrimmage Community!</h1>
          <p style="margin: 10px 0 0 0; font-size: 18px; opacity: 0.9;">Your "From Static to Sticky" guide is ready</p>
        </div>
        
        <div style="padding: 40px 20px; background: white;">
          <p style="font-size: 16px; line-height: 1.6; color: #333;">Hi ${firstName},</p>
          
          <p style="font-size: 16px; line-height: 1.6; color: #333;">
            Thanks for downloading the <strong>"From Static to Sticky"</strong> companion app engagement guide! 
            I'm excited to share these strategies that have helped transform static apps into engaging experiences.
          </p>
          
          <div style="text-align: center; margin: 30px 0;">
            <a href="${process.env.GUIDE_DOWNLOAD_URL || 'https://your-site.com/static-to-sticky-guide.pdf'}" 
               style="background: #f59e0b; color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px; display: inline-block;">
              📱 Download Your Guide
            </a>
          </div>
          
          <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 30px 0;">
            <h3 style="margin: 0 0 15px 0; color: #374151;">What's Inside:</h3>
            <ul style="margin: 0; padding-left: 20px; color: #374151;">
              <li style="margin-bottom: 8px;">Curation strategies to let users personalize their experience</li>
              <li style="margin-bottom: 8px;">User-generated content approaches that transform consumers into creators</li>
              <li style="margin-bottom: 8px;">Gamification techniques that actually increase engagement</li>
              <li style="margin-bottom: 8px;">AI integration ideas for truly adaptive experiences</li>
            </ul>
          </div>
          
          <p style="font-size: 16px; line-height: 1.6; color: #333;">
            Over the next couple weeks, I'll be sending you deeper insights into each strategy, 
            including real examples from apps like <strong>How Not To Say</strong> and <strong>Fearless Change</strong>.
          </p>
          
          <p style="font-size: 16px; line-height: 1.6; color: #333;">
            Questions about implementing these strategies in your app? Just reply to this email - 
            I read and respond to every message personally.
          </p>
          
          <p style="font-size: 16px; line-height: 1.6; color: #333;">
            Best,<br>
            <strong>Dave Best</strong><br>
            <em>Founder, Scrimmage</em>
          </p>
          
          <div style="border-top: 1px solid #e5e7eb; margin-top: 40px; padding-top: 20px;">
            <p style="font-size: 14px; color: #6b7280; text-align: center;">
              Want to discuss your specific app challenge? 
              <a href="https://cal.com/scrimmage-us/30min" style="color: #3b82f6;">Schedule a free 30-minute consultation</a>
            </p>
          </div>
        </div>
        
        <div style="background: #f9fafb; padding: 20px; text-align: center; font-size: 12px; color: #6b7280;">
          <p style="margin: 0;">
            You're receiving this because you downloaded our companion app guide.<br>
            <a href="#" style="color: #6b7280;">Unsubscribe</a> | 
            <a href="https://scrimmage.us" style="color: #6b7280;">Visit our website</a>
          </p>
        </div>
      </div>
    `;

    // Prepare Mailtrap API payload
    const mailData = {
      from: {
        email: process.env.MAILTRAP_FROM_EMAIL || 'noreply@scrimmage.us',
        name: 'Dave from Scrimmage'
      },
      to: [
        {
          email: email,
          name: firstName
        }
      ],
      subject: `Your "From Static to Sticky" Guide is Ready! 📱`,
      html: htmlContent,
      category: 'Lead Magnet'
    };

    // Send welcome email via Mailtrap API
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
      console.log('Lead magnet email sent successfully:', result);

    } catch (emailError) {
      console.error('Failed to send welcome email:', emailError);
      // Continue with success response even if email fails
    }

    // Log lead submission for tracking
    console.log('Lead magnet submission:', {
      email,
      firstName,
      company,
      appStatus,
      timestamp: new Date().toISOString(),
      source: 'lead-magnet-page'
    });

    return res.status(200).json({ 
      success: true, 
      message: 'Thanks! Check your email for the download link. The guide should arrive within a few minutes.' 
    });

  } catch (error) {
    console.error('Lead magnet form error:', error);
    return res.status(500).json({ 
      error: 'Internal server error. Please try again later.' 
    });
  }
}