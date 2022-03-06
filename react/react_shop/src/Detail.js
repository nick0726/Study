/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';

// CSS를 미리 입혀놓는 컴포넌트
let 박스 = styled.div`
  padding: 20px;
`;

let 제목 = styled.div`
  font-size: 25px;
`;

function Detail(props) {
  useEffect(() => {
    let 타이머 = setTimeout(() => {
      alert변경(false);
    }, 2000);
    console.log('안녕');
    return () => {
      clearTimeout(타이머);
    };
  }, []);

  let [alert, alert변경] = useState(true);
  let [inputData, inputData변경] = useState('');

  let history = useHistory();
  let { id } = useParams();
  let 찾은상품 = props.shoes.find(function (상품) {
    return 상품.id == id;
  });

  return (
    <>
      <박스>
        <제목>Detial</제목>
      </박스>

      {inputData}
      <input
        onChange={(e) => {
          inputData변경(e.target.value);
        }}
      />

      {alert === true ? (
        <div className="my-alert2">
          <p>재고 얼마 안남음</p>
        </div>
      ) : null}

      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img
              src="https://codingapple1.github.io/shop/shoes1.jpg"
              width="100%"
            />
          </div>
          <div className="col-md-6 mt-4">
            <h4 className="pt-5">{찾은상품.title}</h4>
            <p>{찾은상품.content}</p>
            <p>{찾은상품.price}원</p>
            <Info 재고={props.재고}></Info>
            <button
              className="btn btn-danger"
              onClick={() => {
                props.재고변경();
              }}
            >
              주문하기
            </button>
            <button
              className="btn btn-danger"
              onClick={() => {
                history.goBack();
              }}
            >
              뒤로가기
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

function Info(props) {
  return (
    <>
      <p>재고: {props.재고[0]}</p>
    </>
  );
}

export default Detail;
