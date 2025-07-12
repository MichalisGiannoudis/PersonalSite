import { useState } from "react";
import emailjs from '@emailjs/browser';

export const ContactForm = () => {

    const [emailError, setEmailError] = useState<string | null>(null);
    const [emailSent, setEmailSent] = useState(false);
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

        try {
            const result = await emailjs.send(
                process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID!, {   
                    name: `${firstName} ${lastName}`,
                    email: email,
                    message: message,
                }, {
                    publicKey: process.env.NEXT_PUBLIC_EMAIL_KEY!
                }
            );
            form.reset();
        } catch (error) {
            setEmailError(error as string);
            setEmailSent(false);
        } finally {
            setEmailSent(true);
            setIsSubmitting(false);
        }
    }

    return (
        <div className="w-[100%] bg-gray-900/20 rounded-xl p-6 border border-gray-700/50 hover:shadow-lg transition-shadow duration-300">
            <form onSubmit={onEmailSend} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="firstName" className="block text-sm font-medium mb-1">First Name</label>
                        <input type="text" id="firstName" name="firstName" required className="w-full p-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-purple-800" />
                    </div>
                    <div>
                        <label htmlFor="lastName" className="block text-sm font-medium mb-1">Last Name</label>
                        <input type="text" id="lastName" name="lastName" required className="w-full p-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-purple-800" />
                    </div>
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                    <input type="email" id="email" name="email" required className="w-full p-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-purple-800" />
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                    <textarea id="message" name="message" required rows={4} className="w-full p-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-purple-800"></textarea>
                </div>
                <button disabled={isSubmitting || emailSent} type="submit" className="w-full bg-purple-800/50 hover:bg-amber-600/70 text-white font-bold py-2 px-4 rounded transition-colors">
                { isSubmitting ? 'Sending message...' : 'Send Message' }    
                </button>
            </form>
            { emailSent && <div className="flex justify-center mt-4 bg-backdrop-blur-4xl">
                {!emailError && <p className="text-red-500 text-sm">Something went wrong, try again later!</p>}
                {emailSent && !emailError && <p className="text-green-500 text-sm">Email sent successfully!</p>}
            </div>}
        </div>
    );
}