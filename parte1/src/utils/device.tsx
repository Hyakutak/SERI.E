const size = {
    mobile: '520px',
    mobileL: '768px',
    tablet: '1024px',
}

export const device = {
    mobile: ` @media (max-width: ${size.mobile})`,
    mobileL: ` @media (max-width: ${size.mobileL})`,
    tablet: ` @media (max-width: ${size.tablet})`,
};