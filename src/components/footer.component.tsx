export const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer className="bg-black text-white py-8">
            <div className="container mx-auto text-center">
                <p className="text-defalut">© {currentYear} Mike's Space. All rights reserved.</p>
            </div>
        </footer>
    );
}