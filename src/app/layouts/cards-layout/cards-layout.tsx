import styles from './cards-layout.module.scss';

type Props = {
  children: React.ReactNode;
  emptyText?: string;
  isEmpty?: boolean;
};

export const CardsLayout = ({ children, emptyText, isEmpty }: Props) => {
  if (isEmpty) {
    return <p className={styles.empty}>{emptyText}</p>;
  }

  return (
    <section className={styles.container}>
      <div className={styles.grid}>{children}</div>
    </section>
  );
};
