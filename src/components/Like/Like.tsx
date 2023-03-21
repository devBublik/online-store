import {FC} from 'react';
import { IProduct } from '../../helpers/types';

type LikeProps = {
    product: IProduct
}

const Like: FC<LikeProps> = ({product}) => {
    return (
        <div className="product__like">
            <svg width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M7.36656 1C3.47849 1 0.392496 4.56658 1.10209 9.68573C1.71793 14.1286 12.3223 23 13.5 23C14.6777 23 25.2821 14.1286 25.8979 9.68573C26.6075 4.56647 23.5215 1 19.6334 1C17.0414 1 15.0222 2.0898 13.5 4.26939C11.9778 2.0898 9.9586 1 7.36656 1Z" stroke="black" strokeOpacity="0.3" strokeWidth="2"/>
            </svg>
        </div>
    );
};

export default Like;