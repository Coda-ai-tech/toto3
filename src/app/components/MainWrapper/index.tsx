import styles from './MainWrapper.module.scss';

const MainWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className={`${styles.mainWrapper}`}>
      <div
        id='mainContent'
        className={`${styles.fakeAnchor}`}
        role='button'
        tabIndex={0}
        aria-label='Main Content Start Point'
      />
      {children}
    </main>
  );
};

export default MainWrapper;
