import React, { ReactNode, CSSProperties } from "react";

interface Props extends React.HTMLAttributes<HTMLElement> {
    children: ReactNode;
    block?: boolean;
    paragraph?: 'p' | 'span';
    size?: number | string;
    strong?: boolean;
    underline?: boolean;
    delete?: boolean;
    color?: string;
    mark?: boolean;
    code?: boolean;
    props?: CSSProperties;
}
const Text = ({
    children,
    block = false,
    paragraph = 'span',
    size,
    strong,
    underline,
    delete: del,
    color,
    mark,
    code,
    ...props }: Props) => {

    const Tag = block ? 'div' : paragraph ? 'p' : 'span';
    const fontStyle = {
        fontWeight: strong ? 'bold' : 'normal',
        fontSize: typeof size === 'number' ? size : undefined,
        textDecoration: underline ? 'underline' : undefined,
        color,
    }

    return (
    <Tag
    className={typeof size === 'string' ? `Text--size-${size}` : 'undefined'}
    style={{...props.style, ...fontStyle}}
    {...props}
    >
        {children}
    </Tag>
    );
}

export default Text;