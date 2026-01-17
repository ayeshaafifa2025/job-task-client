import LoginForm from "@/components/form/LoginForm";

export default function LoginPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#020202] px-4 relative overflow-hidden">
            
            
            <div className="absolute top-[-10%] right-[-10%] w-[400px] h-[400px] bg-amber-600/10 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-amber-900/10 rounded-full blur-[100px]"></div>

            <div className="w-full max-w-md bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-10 relative z-10">
                <div className="mb-8 text-center">
                    <h2 className="text-3xl font-serif font-bold text-white mb-2">Aura Dining</h2>
                    <p className="text-gray-500 text-sm">Please sign in to access the menu</p>
                </div>
                
            
                <LoginForm />

                <div className="mt-8 text-center border-t border-white/5 pt-6">
                    <p className="text-[10px] text-gray-600 uppercase tracking-widest font-medium">
                        Secure Authentication System
                    </p>
                </div>
            </div>
        </div>
    );
}