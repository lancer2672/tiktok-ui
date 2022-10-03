import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                alt="name"
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/3b949573cfecee41d4573bb424394dc9~c5_100x100.jpeg?x-expires=1664967600&x-signature=YCUCk%2BKuNnv6muRTSja4Z2t4VHM%3D"
                className={cx('avatar')}
            ></img>
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>My Name</span>
                    <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle}></FontAwesomeIcon>
                </h4>
                <span className={cx('user-name')}>myname</span>
            </div>
        </div>
    );
}

export default AccountItem;
