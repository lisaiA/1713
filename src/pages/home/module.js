import axios from 'axios'
import { SET_HOME_DATA, GET_HOME_DATA } from './types.js'

export default {
	state: {
		swiperInfo: [],
		spotInfo: []
	},
	mutations: {
		[SET_HOME_DATA](state, payload) {
			state.swiperInfo = payload.swiperInfo;
			state.spotInfo = payload.spotInfo;
		}
	},
	actions: {
		[GET_HOME_DATA](context) {
            axios.get('/static/index.json?city=北京')
                .then((res) => {
                	context.commit(SET_HOME_DATA, res.data.data)
                })
                .catch((err) => {
                	console.log(err);
                });
        }
	},
	getters: {
		getSpotInfo(state) {
            const result = [];
            state.spotInfo.forEach((value, index) => {
                let page = Math.floor(index / 8);
                if(!result[page]) {
                    result[page] = [];
                }
                result[page].push(value);
            })
            return result;
        }
	}
}