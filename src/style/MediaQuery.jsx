
const breakpoints = {
        sm: 575.98,
        md: 767.98,
        lg: 991.98,
        xlg:1199.98
}

export const mq = (width) => {
    return(
        style => `@media (max-width: ${breakpoints[width]}px) { ${style} }`
    );
}

