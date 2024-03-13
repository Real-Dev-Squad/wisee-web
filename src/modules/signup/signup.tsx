import Head from "next/head"
import { useRouter } from "next/router"

import { Button } from "@/components"
import { GoogleLogoIcon } from "@/icons/logos"

export const SignUpPage = () => {
    const { push } = useRouter()

    const handleSignUp = () => {
        push(`${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/auth/google/login`)
    }

    return (
        <>
            <Head>
                <title>SignUp - {process.env.NEXT_PUBLIC_APP_NAME}</title>
            </Head>

            <header>
                <div className="mx-auto flex h-16 max-w-7xl items-center px-4 lg:px-8">
                    <h1 className="text-xl font-semibold text-stone-900">{process.env.NEXT_PUBLIC_APP_NAME}</h1>
                </div>
            </header>

            <main>
                <section className="mx-auto max-w-sm space-y-6 px-6 py-20 lg:space-y-10 lg:p-8 lg:py-32">
                    <h2 className="text-center text-4xl font-bold text-stone-900 lg:text-5xl">Sign Up</h2>

                    <div>
                        <Button
                            variant="ghost"
                            onClick={handleSignUp}
                            className="w-full border border-stone-200 bg-stone-100 hover:bg-stone-200"
                        >
                            <GoogleLogoIcon className="h-5 w-5" />
                            <p className="text-medium text-stone-800">SignUp with Google</p>
                        </Button>
                    </div>
                </section>
            </main>
        </>
    )
}
