'use client';
import styles from './ui.module.css';

export interface UiProps {}

export function Ui(props: UiProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Ui!</h1>
      <button onClick={() => console.log('clicked')}>Click me</button>
    </div>
  );
}

export default Ui;
