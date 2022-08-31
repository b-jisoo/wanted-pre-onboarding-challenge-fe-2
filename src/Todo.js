/**
 * TODO 를 추가하는 함수이며, 내용, 카테고리가 필수값입니다.
 * @param {String} 내용 - TODO 의 내용
 * @param {String} 카테고리 - TODO 의 카테고리
 * @param {String[]} 태그 - TODO 의 태그
 */
const createTodo = ({ 내용, 카테고리, 태그 }) => {};

/**
 * TODO 상세보기 정보를 가져오는 함수이며, id가 없으면 전체 리스트를 조회합니다.
 * @param {Number} id - 조회하려는 TODO 의 id
 */
const getTodo = (id) => {};

/**
 * TODO 를 수정하는 함수이며, id가 필수값입니다.
 * @param {Number} id - 수정하려는 TODO 의 id
 * @param {String} 내용 - TODO 의 내용
 * @param {Boolean} 완료여부 - TODO 의 완료여부
 * @param {String} 카테고리 - TODO 의 카테고리
 * @param {String} 태그 - TODO 의 태그
 */
const updateTodo = ({ id, 내용, 완료여부, 카테고리, 태그 }) => {};

/**
 * TODO 를 삭제하는 함수이며, id가 필수값입니다.
 * @param {Number} id - 삭제하려는 TODO 의 id
 */
const deleteTodo = (id) => {};
