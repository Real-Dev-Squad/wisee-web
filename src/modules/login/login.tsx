import { useRouter } from "next/router"

import { Button } from "@/components"

export const Login = () => {
    const { push } = useRouter()

    return (
        <main className="flex flex-col items-center justify-center h-screen">
            <div className="space-y-4">
                <h1 className="text-2xl font-bold">Login</h1>

                <Button className="rounded-lg" onClick={() => push("http://localhost:8080/v1/auth/google/login")}>
                    Sign in with Google
                </Button>
            </div>
        </main>
    )
}
