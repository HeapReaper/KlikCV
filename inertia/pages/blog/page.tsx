import { Head } from "@inertiajs/react";
import DefaultLayout from "~/components/DefaultLayout";

export default function BlogPage() {
  return (
    <>
      <Head title="Blog" />

      <DefaultLayout>
        <div className="pt-4 flex flex-col mt-8 p-3">
          <h1 className="text-4xl font-bold text-black text-center">
            Blog
          </h1>
        </div>
      </DefaultLayout>
    </>
  )
}
