import styles from './Button.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
function Button({ props, iconLeft, iconRight }) {
    return (
        <div className={cx('wrapper')}>
            <button className={cx('button')}>
                {iconLeft && <span className={cx('icon')}>{iconLeft}</span>}
                {props}
                {iconRight && <span className={cx('icon')}>{iconRight}</span>}
            </button>
        </div>
    );
}

export default Button;
