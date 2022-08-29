import React from 'react';

export const mapRecursive: (children: any, callback: any) => Array<Exclude<any, boolean | null | undefined>> = (
    children,
    callback
) =>
    React.Children.map(children, (child) =>
        child.props.children ? [callback(child), mapRecursive(child.props.children, callback)] : callback(child)
    );
