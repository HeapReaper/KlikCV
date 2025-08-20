export type ButtonType = {
  id?: string;
  label: string;
  type: 'button' | 'submit' | 'reset';
  onClick: () => void;
}
