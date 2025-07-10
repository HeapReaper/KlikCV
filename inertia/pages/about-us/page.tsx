import { Head } from "@inertiajs/react";
import DefaultLayout from "~/components/DefaultLayout";

export default function AboutUsPage({ html }: { html: any }) {
  return (
    <>
      <Head title="Over ons" />
      <DefaultLayout>
        <div className="pt-4 flex flex-col mt-8 p-3">
          <div
            className="prose prose-neutral text-black max-w-none marker:text-black"
            dangerouslySetInnerHTML={{ __html: html.html }}
          />
        </div>
      </DefaultLayout>
    </>
  );
}
