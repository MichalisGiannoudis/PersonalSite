export const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer className="bg-black text-white py-8">
            <div className="container mx-auto text-center">
                <p className="text-defalut mb-2 cursor-default">© {currentYear} Mike's Space. All rights reserved.</p>
                <p className="text-center text-default font-semibold text-amber-500 cursor-default">May the code be with you</p>
            </div>
        </footer>
    );
}