import React, { useCallback, useState } from 'react';
import {MdAdd} from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = ({onInsert}) => {
    const [value, setValue] = useState('');

    //컴포넌트 리렌더링마다 함수를 새로 만드는 것이 아니라 한 번 함수를 만들고 재사용할 수 있도록
    const onChange = useCallback(e => {
        setValue(e.target.value)
    }, []);

    const onSubmit = useCallback(
        e => {
            onInsert(value);
            setValue('');
            //브라우저 새로고침 방지하기 위해
            e.preventDefault();
            
        }, [onInsert, value]
    )

    return (
        <form className="TodoInsert" onSubmit={onSubmit}>
            <input placeholder = "할 일 입력" value={value} onChange={onChange}/>
                <button type="submit">
                    <MdAdd />
                </button>
        </form>
    )
}

export default TodoInsert;