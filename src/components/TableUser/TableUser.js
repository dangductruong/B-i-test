import Table from 'react-bootstrap/Table';
import classNames from 'classnames/bind';
import styles from './TableUser.module.scss';
const cx = classNames.bind(styles);
function TableUser() {
    return (
        <>
            <Table className={cx('table')} striped bordered hover variant="light">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Ảnh</th>
                        <th>Thông tin</th>
                        <th>Chú thích</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </Table>
        </>
    );
}

export default TableUser;
