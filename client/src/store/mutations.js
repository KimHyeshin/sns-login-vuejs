/**
 * Vuex의 데이터(state) 값을 변경하는 로직
 *
 * Getters 와 차이점
 * 1. 인자를 받아 Vuex에 넘겨줄 수 있다.
 * 2. computed가 아닌 method에 등록
 *
 * Actions 와의 차이점
 * 1. Matations 는 동기적 로직을 정의
 * 2. Actions 는 비동기적 로직을 정의
 *
 * 상태변화를 mutations을 통하여 명시적으로 수행하면 각 컴포넌트 반영여부를 추적하기 용이하다.
 */
export const mutations = {
    /**
     * 예제
     * addValue: function (state, payload) {
        return state.value = payload.value;
       }
     */
    addValue: function (state) {
        return state.value++;
    }
};
