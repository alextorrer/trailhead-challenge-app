import './styles/styles.css';
import getData from './utils/getData';

const res = getData();
res.then((data) => console.log(data));