import './styles/styles.css';
import render from './utils/render';
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';

window.addEventListener('load', render);

if(typeof(module.hot) !== 'undefined'){
    module.hot.accept();
}

/* tippy('[data-tippy-content]', {
    trigger: 'click'
}); */