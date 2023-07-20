import styles from './Navigation.module.scss';

const Navigation = () => {
  return (
    <div className={styles.nav}>
      <a href="/">Главная</a>
      <a href="/">Тех. поддерждка</a>
      <a href="/">Почта</a>
      <a href="/cloud">Передача файлов</a>
      <a href="/phones">Телефонный справочник</a>
      <a href="/documents">Справочные материалы</a>
      <a href="/">Слайды</a>
    </div>
  );
};
export default Navigation;
