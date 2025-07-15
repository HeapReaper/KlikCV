import {ReactElement} from "react";
import Solaris from "../templates/Solaris";
import { CvBuilderFormProps } from "../../../types/CvBuilderFormData";


// @ts-ignore TODO: fix
export default function CvBuilderPreview({ formdata, template }: CvBuilderFormProps): ReactElement | null {
  switch (template) {
    case "Solaris":
      return <Solaris formData={formdata} />;
    default:
      return null;
  }
}
