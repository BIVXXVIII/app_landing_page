import { useCompareClasses } from 'helpers/hooks/style/useCompareClasses';
import React, { ComponentPropsWithoutRef } from 'react'

type Props = {}

export default function ComponentFish({ className, ...rest }: Props & ComponentPropsWithoutRef<'div'>) {
    // raw desktop style
    const desktopClasses = ``;
    // raw tablet style
    const tabletClasses = ``;
    // base style
    const mobileClasses = ``;

    // compare styles without props styles
    const componentClasses = useCompareClasses({ mobileClasses, tabletClasses, desktopClasses })

    // // compare styles with props styles
    // const componentClasses = `${mobileClasses} ${addStylePrefix(tabletClasses, 'md')} ${addStylePrefix(desktopClasses, 'lg')} ${className}`;
    return (
        <div className={componentClasses} {...rest}>ComponentFish</div>
    )
}