import { useState } from "react";
import emailjs from '@emailjs/browser';

export const ContactForm = () => {

    const [isSubmitting, setIsSubmitting] = useState(false);

    const onEmailSend = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
    
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);
        const firstName = formData.get("firstName") as string;
        const lastName = formData.get("lastName") as string;
        const email = formData.get("email") as string;
        const message = formData.get("message") as string;
        const name = `${firstName} ${lastName}`;

        try {
            const result = await emailjs.send(
                process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID!,
                {
                    from_name: name,
                    from_email: email,
                    message: message,
                },
            process.env.NEXT_PUBLIC_EMAIL_KEY
        );
            console.log('Email sent successfully:', result.text);
            alert('Message sent successfully!');
            form.reset();
        } catch (error) {
            console.error('Failed to send email:', error);
            alert('Failed to send message. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <div className="w-[100%] bg-gray-900/20 rounded-xl p-6 border border-gray-700/50 hover:shadow-lg transition-shadow duration-300">
            <form onSubmit={onEmailSend} className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                    <input type="text" id="name" className="w-full p-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-purple-800" required />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                    <input type="email" id="email" className="w-full p-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-purple-800" required />
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                    <textarea id="message" rows={4} className="w-full p-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-purple-800" required></textarea>
                </div>
                <button disabled={isSubmitting} type="submit" className="w-full bg-purple-800/50 hover:bg-amber-600/70 text-white font-bold py-2 px-4 rounded transition-colors">
                { isSubmitting ? 'Sending message...' : 'Send Message' }    
                </button>
            </form>
        </div>
    );
}