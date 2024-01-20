const VerifyIcon = ({ width }: { width: string }) => {
    return (
        <svg width={width} height={width} viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="3" width="40" height="40" rx="20" fill="#D1FADF" />
            <g clipPath="url(#clip0_1079_13467)">
                <path d="M20.5003 22.9998L22.167 24.6665L25.917 20.9165M19.1118 16.1821C19.7817 16.1286 20.4176 15.8652 20.929 15.4294C22.1226 14.4122 23.8781 14.4122 25.0716 15.4294C25.5831 15.8652 26.219 16.1286 26.8889 16.1821C28.452 16.3068 29.6933 17.5481 29.8181 19.1113C29.8715 19.7812 30.1349 20.4171 30.5708 20.9286C31.5879 22.1221 31.5879 23.8776 30.5708 25.0711C30.1349 25.5826 29.8715 26.2185 29.8181 26.8884C29.6933 28.4516 28.452 29.6928 26.8889 29.8176C26.219 29.871 25.5831 30.1345 25.0716 30.5703C23.8781 31.5875 22.1226 31.5875 20.929 30.5703C20.4176 30.1345 19.7817 29.871 19.1118 29.8176C17.5486 29.6928 16.3073 28.4516 16.1826 26.8884C16.1291 26.2185 15.8657 25.5826 15.4298 25.0711C14.4127 23.8776 14.4127 22.1221 15.4298 20.9286C15.8657 20.4171 16.1291 19.7812 16.1826 19.1113C16.3073 17.5481 17.5486 16.3068 19.1118 16.1821Z" stroke="#039855" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
            </g>
            <rect x="3" y="3" width="40" height="40" rx="20" stroke="#ECFDF3" stroke-width="6" />
            <defs>
                <clipPath id="clip0_1079_13467">
                    <rect width="20" height="20" fill="white" transform="translate(13 13)" />
                </clipPath>
            </defs>
        </svg>
    );
};

const RejectedIcon = ({ width }: { width: string }) => {
    return (
        <svg width={width} height={width} viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="3" width="40" height="40" rx="20" fill="#FEE4E2" />
            <path d="M28 18L18 28M18 18L28 28" stroke="#D92D20" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
            <rect x="3" y="3" width="40" height="40" rx="20" stroke="#FEF3F2" stroke-width="6" />
        </svg>
    );
};

export { VerifyIcon, RejectedIcon };