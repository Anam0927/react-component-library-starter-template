import styles from './button.module.scss';

export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  return <button className={styles.button}>{props.label}</button>;
};

export default Button;
