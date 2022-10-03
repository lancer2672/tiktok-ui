import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';
// to: link nội bộ, href: link bên ngoài
const cx = classNames.bind(styles);
function Button({
    text,
    large,
    small = true,
    primary = false,
    hollow = false,
    to,
    href,
    onClick,
    children,
    disabled = false,
    ...passedProps
}) {
    let Component = 'button';
    let classes = cx('wrapper', {
        primary,
        hollow,
        small,
        large,
        text,
        disabled,
    });
    // if (disabled) {
    //     delete props.onClick;
    // }
    const props = {
        onClick,
        ...passedProps,
    };
    if (to) {
        props.to = to;
        Component = Link;
    } else if (href) {
        props.href = href;
        Component = 'a';
    }

    return (
        <Component {...props} className={classes}>
            <span>{children}</span>
        </Component>
    );
}
export default Button;
