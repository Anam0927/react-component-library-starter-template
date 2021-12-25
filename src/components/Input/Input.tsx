import styles from './input.module.scss';

export interface InputProps {
  label: string;
  placeholder?: string;
}

const Input = (props: InputProps) => {
  return (
    <div>
      <label htmlFor={props.label} className={styles.label}>
        {props.label}
      </label>
      <input type="text" name={props.label} id={props.label} placeholder={props.placeholder} />
    </div>
  );
};

export default Input;
