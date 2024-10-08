'use-client'

export default function CookieConsentBanner() {

    return (
        <div className="fixed flex items-center justify-center gap-4 bottom-0 left-0 right-0 bg-slate-200  text-primary p-4 text-center z-[500] shadow-lg">
            <p className="text-sm mb-2">
                This website uses cookies to improve your experience. By continuing to use this site, you consent to our use of cookies.
            </p>
            <div className="flex justify-center space-x-4">
                <button
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
                   
                >
                    Accept
                </button>
                <button
                    className="bg-rose-600 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                    
                >
                    Decline
                </button>
            </div>
        </div>

    )

}
