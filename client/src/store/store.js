import Vue from 'vue';
import Vuex from 'vuex';
import { mutations } from "./mutations";
import { actions } from "./actions";
import constants from "../assets/data/constants";

Vue.use(Vuex);

/**
 * Vue의 상태관리를 담당한다.
 * 컴포넌트 간의 통신이나 데이터 전달을 좀 더 유기적으로 관리할 필요성
 * 모든 데이터 통신 (state)을 한 곳에서 중앙 집중식으로 관리한다.
 *
 * @type {Vuex.Store}
 */
export const store = new Vuex.Store({
    /**
     * 컴포넌트 간 공유될 data
     */
    state: {
        CONSTANTS: constants,
        value: 0
    },
    /**
     * 변경된 state 값을 받아오기 위한 Getters
     *
     * 코드의 가독성을 높이고 성능에도 이점이 생긴다.
     * (단순히 state 값을 반환하는 것이 아니라, getters 에 선언된 속성에서 filter(), reverse() 등의 추가적인 계산 로직이 들어갈 때 장점이 발휘된다.)
     */
    getters: {
        CONSTANTS: state => {
            return state.CONSTANTS;
        },
        getConstantDefault: state => {
            return state.CONSTANTS.CONSTANT_DEFAULT;
        },
        getValue: state => {
            return state.value;
        },
    },
    /**
     * state 값을 변경하기 위한 mutations
     */
    mutations: mutations,
    /**
     * 비동기 mutations 로직을 위한 actions
     */
    actions: actions
});
