import { addStylePrefix } from 'helpers/hooks/style/addStylePrefix';
import React, { ComponentPropsWithoutRef } from 'react'

type Props = {}

export default function ComponentFish({ className, ...rest }: Props & ComponentPropsWithoutRef<'div'>) {
    const desktopClasses = ``;
    const tabletClasses = ``;
    const mobileClasses = ``;
    const componentClasses = `${mobileClasses} ${addStylePrefix(tabletClasses, 'md')} ${addStylePrefix(desktopClasses, 'lg')} ${className}`;
    return (
        <div className={componentClasses} {...rest}>ComponentFish</div>
    )
}