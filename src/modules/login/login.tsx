import Head from "next/head"
import { useRouter } from "next/router"

import { Button } from "@/components"
import { GoogleLogoIcon } from "@/icons/logos"

export const LoginPage = () => {
    const { push } = useRouter()

    const handleLogin = () => {
        push(`${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/auth/google/login`)
    }

    return (
        <>
            <Head>
                <title>Login - {process.env.NEXT_PUBLIC_APP_NAME}</title>
            </Head>

            <header>
                <div className="px-4 h-16 lg:px-8 flex items-center max-w-7xl mx-auto">
                    <h1 className="text-xl font-semibold text-stone-900">{process.env.NEXT_PUBLIC_APP_NAME}</h1>
                </div>
            </header>

            <main>
                <section className="px-6 py-20 lg:p-8 space-y-6 max-w-sm lg:py-32 lg:space-y-10 mx-auto">
                    <h2 className="text-4xl font-bold text-center lg:text-5xl text-stone-900">Log in</h2>

                    <div>
                        <Button
                            variant="ghost"
                            onClick={handleLogin}
                            className="bg-stone-100 w-full hover:bg-stone-200 border border-stone-200"
                        >
                            <GoogleLogoIcon className="w-5 h-5" />
                            <p className="text-medium text-stone-800">Login with Google</p>
                        </Button>
                    </div>
                </section>
            </main>
        </>
    )
}
