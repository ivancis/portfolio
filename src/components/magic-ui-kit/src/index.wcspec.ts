import Vue from 'vue';
import '../dist';

const div = {
    functional: true,
    render: (h: any, { data, children }: any) => h('div', data, children),
};

Vue.component('transition', div);
Vue.component('transition-group', div);
