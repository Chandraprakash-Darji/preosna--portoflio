import { menuOptions, NavItem } from "..";

interface Props {
    from: number;
    to: number;
    isLeft?: true;
}

const SmNav = ({ from, to, isLeft }: Props) => {
    return (
        <nav className="hidden sm:block">
            <ul className="flex flex-col gap-2">
                {menuOptions.slice(from, to).map(({ id, href, text }) => (
                    <NavItem key={id} href={href} isLeft={isLeft} text={text} />
                ))}
            </ul>
        </nav>
    );
};

export default SmNav;
