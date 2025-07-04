export const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto text-center">
                <p className="text-sm">© {currentYear} Mike's Space. All rights reserved.</p>
            </div>
        </footer>
    );
}