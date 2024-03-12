export const ROUTES = {
    home: "/",
    dashboard: {
        root: "/dashboard",
    },
    forms: {
        root: "/forms",
        create: "/create",
        edit: "/forms/:id/edit",
    },
} as const
