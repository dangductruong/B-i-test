import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faPeopleRoof, faSortDown, faUser } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function Header() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img
                    className={cx('logo')}
                    alt={'logo'}
                    src="https://www.mbageas.life/uploads/X-ak5M5lFNEvGXGUzSMkZ/1598613473300_original.png"
                ></img>
                <h1 className={cx('slogan')}>Customer Dedup</h1>
            </div>
            <div className={cx('actions')}>
                người quản trị
                <div className={cx('home')}>
                    <FontAwesomeIcon className={cx('logo-home')} icon={faHouse} />
                    <span className={cx('text-home')}>Trang chủ</span>
                </div>
                <div className={cx('admin')}>
                    <FontAwesomeIcon className={cx('logo-admin')} icon={faPeopleRoof} />
                    <span className={cx('text-admin')}>Quản trị</span>
                    <FontAwesomeIcon className={cx('sortDown')} icon={faSortDown} />
                </div>
                <div className={cx('userName')}>
                    <FontAwesomeIcon className={cx('logo-user')} icon={faUser} />
                    <span className={cx('text-user')}>Tài khoản</span>
                    <FontAwesomeIcon className={cx('sortDown')} icon={faSortDown} />
                </div>
            </div>
        </div>
    );
}

export default Header;
