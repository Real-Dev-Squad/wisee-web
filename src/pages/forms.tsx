import { useQuery } from "@tanstack/react-query";

import { FormBuilderApi } from "@/api/form-builder/form-builder.api";

const FormsPage = () => {
    const { data } = useQuery({
        queryKey: ['FormBuilderApi.getAllForms'],
        queryFn: FormBuilderApi.getAllForms,
    })

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold pb-4">All forms</h1>
            <pre>form data: {JSON.stringify(data, null, 2)}</pre>
        </div>
    )
}

export default FormsPage;
