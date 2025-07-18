import {ReactElement} from "react";
import Solaris from "../templates/Solaris";
import { CvBuilderFormProps } from "../../../types/CvBuilderFormData";


// @ts-ignore TODO: fix
export default function CvBuilderPreview({ formData, template }: CvBuilderFormProps): ReactElement | null {
  switch (template) {
    case "Solaris":
      // @ts-ignore
      return <Solaris formData={formData} />;
    default:
      return null;
  }
}
