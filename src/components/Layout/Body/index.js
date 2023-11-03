import styles from './Body.module.scss';
import classNames from 'classnames/bind';
import Button from '../../Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faSortDown } from '@fortawesome/free-solid-svg-icons';
import TableUser from '../../TableUser/TableUser';

const cx = classNames.bind(styles);
function Body() {
    return (
        <div className={cx('container')}>
            <span className={cx('text-search')}>Tìm kiếm theo số BP</span>
            <div className={cx('aciton')}>
                <div className={cx('search')}>
                    <input placeholder="Nhập ID" id="searchId" className={cx('searchId')}></input>
                    <Button props={'Tìm kiếm'} iconLeft={<FontAwesomeIcon icon={faMagnifyingGlass} />} />
                </div>
                <div className={cx('option')}>
                    <Button props={'Nhóm dữ liệu'} />
                    <Button props={'Verify dữ liệu'} />
                    <Button props={'Import dữ liệu'} />
                    <Button
                        props={'Export dữ liệu'}
                        iconRight={<FontAwesomeIcon className={cx('icon-sortdown')} icon={faSortDown} />}
                    />
                </div>
            </div>
            <div className={cx('tableUser')}>
                <TableUser />
            </div>
        </div>
    );
}

export default Body;
