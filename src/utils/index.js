/* eslint-disable no-useless-escape */

// 참고: https://emailregex.com/
export const emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

// 참고: https://regexr.com/3bfsi
export const passwordRegExp = /^(?=.*\d)(?=.*[a-z]).{6,20}$/i

/* 

RegEx       |	기술
----------- | -------------------------------------------
^           | 비밀번호 문자열 시작
(?=.*[a-z]) | 문자열은 최소 1개 이상 소문자 알파벳이 포함 되어야 합니다.
(?=.*[A-Z]) | 문자열은 최소 1개 이상 대문자 알파벳이 포함 되어야 합니다.
(?=.*[0-9]) | 문자열은 최소 1개 이상 숫자가 포함 되어야 합니다.
(?=.{6,20}) | 문자열은 최소 6자리 이상 20자리 이하여야 합니다. 

*/

export const isValidEmailFormat = (value) => emailRegExp.test(value)
export const isValidPasswordFormat = (value) => passwordRegExp.test(value)
