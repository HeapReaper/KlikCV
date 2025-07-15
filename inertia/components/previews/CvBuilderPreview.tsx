import {ReactElement} from "react";
import Solaris from "../templates/Solaris";

type CvBuilderPreviewProps = {
  formdata: {
    fullName: string;
    email: string;
  },
  template: string;
}

export default function CvBuilderPreview({ formdata, template }: CvBuilderPreviewProps): ReactElement | null {
  switch (template) {
    case "Solaris":
      return <Solaris formData={formdata} />;
    default:
      return null;
  }
}
