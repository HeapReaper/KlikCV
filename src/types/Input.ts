export type InputType = {
  id?: string;
  placeholder?: string;
  label?: string
  value: string | number;
  onChange: (e: string) => void;
}

export type EditorType = {
  value: string;
  onChange: (e: string) => void;
}

export type InputCheckboxType = {
  id?: string;
  label?: string;
  checked: boolean;
  onChange: (e: string) => void;
}
